import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import mongoose from "mongoose";

// Define Schema
const waitlistSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const Waitlist = mongoose.models.Waitlist || mongoose.model("Waitlist", waitlistSchema);

export async function POST(req: Request) {
  await dbConnect();

  try {
    const { email } = await req.json();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const newEntry = await Waitlist.create({ email });
    return NextResponse.json({ message: "Email added successfully!", data: newEntry });
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json({ error: "Email already exists" }, { status: 409 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
