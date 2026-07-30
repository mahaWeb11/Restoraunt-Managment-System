import React from "react";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CtaBanner from "@/components/home/CtaBanner";
import Footer from "@/components/home/Footer";

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar />
      <Hero />
      <Features />
      <CtaBanner />
      <Footer />
    </div>
  );
}
