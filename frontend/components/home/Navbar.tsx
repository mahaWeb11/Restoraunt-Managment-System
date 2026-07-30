import React from "react";
import { UtensilsCrossed } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl text-slate-900">
          <div className="bg-amber-500 p-2 rounded-xl text-white">
            <UtensilsCrossed className="w-6 h-6" />
          </div>
          <span>
            RMS <span className="text-amber-500">POS</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600 text-sm">
          <a href="#pocetna" className="text-amber-500 font-semibold">
            Početna
          </a>
          <a
            href="#funkcionalnosti"
            className="hover:text-amber-500 transition-colors"
          >
            Funkcionalnosti
          </a>
          <a href="#cijene" className="hover:text-amber-500 transition-colors">
            Cijene
          </a>
          <a href="#o-nama" className="hover:text-amber-500 transition-colors">
            O nama
          </a>
          <a href="#kontakt" className="hover:text-amber-500 transition-colors">
            Kontakt
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition-all"
          >
            Prijava
          </Link>
          <button className="px-4 py-2 text-sm font-semibold text-white bg-amber-500 rounded-lg hover:bg-amber-600 shadow-sm transition-all">
            Zatraži demo
          </button>
        </div>
      </div>
    </header>
  );
}
