import mongoose from "mongoose";

/**
 * Singleton MongoDB connection helper for Next.js.
 *
 * Why the global cache: Next.js dev server hot-reloads route modules on
 * every change, which would otherwise create a new mongoose connection
 * each time and quickly exhaust Atlas's connection pool. Caching on
 * `globalThis` survives module reloads.
 */

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  // Throw lazily inside dbConnect() instead, so importing this file in
  // build steps (where env may be absent) doesn't crash the build.
}

let cached = globalThis._mongoose;
if (!cached) {
  cached = globalThis._mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) {
    throw new Error(
      "MONGODB_URI is not set. Add it to .env.local (see .env.example)."
    );
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
        serverSelectionTimeoutMS: 8000,
      })
      .then((m) => m);
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    throw err;
  }

  return cached.conn;
}
