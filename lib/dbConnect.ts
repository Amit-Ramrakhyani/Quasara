import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI; // Ensure this is set in .env.local

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable in .env.local");
}

// Define a global interface for mongoose cache
interface MongooseCache {
  conn: mongoose.Connection | null;
  promise: Promise<typeof mongoose> | null;
}

// Ensure global.mongoose is correctly typed
declare global {
  var mongoose: MongooseCache | undefined;
}

// Initialize the cache if it doesn't exist
let cached: MongooseCache = global.mongoose || { conn: null, promise: null };
global.mongoose = cached;

async function dbConnect() {
  // Use the cached connection if it exists
  if (cached.conn) {
    return cached.conn;
  }

  // If no promise exists, create a new connection promise
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, { bufferCommands: false }).then((mongoose) => mongoose);
  }

  // Wait for the promise to resolve and store the connection
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
