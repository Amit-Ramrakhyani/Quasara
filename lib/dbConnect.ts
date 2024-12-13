import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI; // Ensure this is set in .env.local

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable in .env.local");
}

// Check if global.mongoose exists or not
let cached = global.mongoose;

// Ensure that cached is always defined
if (!cached || !cached.conn) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  // Check if cached.conn exists
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, { bufferCommands: false }).then((mongoose) => mongoose);
  }

  // Ensure cached.conn is set after promise resolves
  cached.conn = await cached.promise;

  return cached.conn;
}

export default dbConnect;
