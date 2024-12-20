import mongoose from "mongoose";

if (!process.env.MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

// Assert that MONGO_URI is a string
const MONGO_URI: string = process.env.MONGO_URI as string;

type MongooseCache = {
  conn: mongoose.Connection | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  var mongoose: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URI, opts);
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;