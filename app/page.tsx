"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Zap } from "lucide-react";

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const launchDate = new Date("2025-04-08T00:00:00"); 
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ success: true, message: data.message });
        setEmail(""); // Reset email field
      } else {
        setStatus({ success: false, message: data.error });
      }
    } catch (err) {
      setStatus({ success: false, message: "Something went wrong. Please try again." });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F9] text-[#2D3748]">
      <main className="flex-1">
        <section className="w-full min-h-screen py-8 md:py-12 lg:py-16 bg-gradient-to-br from-[#6C63FF] via-[#8A84FF] to-[#FF6584] flex items-center">
          <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center">
            <Zap className="h-12 w-12 text-white" />
            <span className="ml-3 text-3xl font-bold text-white">Quasara</span>
          </div>

          <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div className="space-y-6 text-left text-white">
              <h2 className="text-2xl md:text-3xl uppercase font-medium">We're almost there</h2>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Coming <br />
                Soon
              </h1>
              <p className="max-w-md text-lg md:text-xl text-gray-200">
                Manage, optimize, and grow your content creation business with our all-in-one platform. Connect with brands, access AI-powered insights, and scale your operations.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
                <Button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-400 text-black font-medium transition-all"
                >
                  Join the Waitlist
                </Button>
              </form>
              {status && (
                <p className={`mt-4 ${status.success ? "text-green-500" : "text-red-500"}`}>
                  {status.message}
                </p>
              )}
            </div>

            <div className="text-center text-white space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold">Time Until Launch</h3>
              <div className="grid grid-cols-4 gap-8 text-4xl md:text-5xl font-bold">
                <div className="flex flex-col items-center">
                  <div>{timeLeft.days}</div>
                  <span className="block text-lg font-medium mt-2">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <div>{timeLeft.hours}</div>
                  <span className="block text-lg font-medium mt-2">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <div>{timeLeft.minutes}</div>
                  <span className="block text-lg font-medium mt-2">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                  <div>{timeLeft.seconds}</div>
                  <span className="block text-lg font-medium mt-2">Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
