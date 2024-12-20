import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI; // Ensure this is set in .env.local

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable in .env.local");
}

// Ensure global.mongoose is correctly typed and initialized.
declare global {
  var mongoose: { conn: mongoose.Connection | null; promise: Promise<typeof mongoose> | null } | undefined;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached && cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, { bufferCommands: false }).then((mongoose) => mongoose);
  }

  if (!cached) {
    throw new Error("Global mongoose cache not initialized");
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
