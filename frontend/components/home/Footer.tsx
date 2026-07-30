"use client";

import React, { FormEvent } from "react";
import { UtensilsCrossed, Send } from "lucide-react";

export default function Footer() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <footer
      id="kontakt"
      className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800 mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl text-white">
              <div className="bg-amber-500 p-1.5 rounded-lg text-white">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span>
                RMS <span className="text-amber-500">POS</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Sveobuhvatno rješenje za upravljanje restoranima. Povećajte
              efikasnost, smanjite troškove i ostvarite veći profit.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Proizvod</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Funkcionalnosti
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cijene
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Integracije
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ažuriranja
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Kompanija</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  O nama
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Karijere
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Newsletter</h4>
            <p className="text-xs text-slate-400 mb-3">
              Prijavite se za novosti i savjete za uspješno poslovanje.
            </p>
            <form className="flex gap-1" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Vaš email"
                className="bg-slate-800 text-white text-xs px-3 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-amber-500 w-full"
              />
              <button
                type="submit"
                className="bg-amber-500 text-white p-2 rounded-lg hover:bg-amber-600 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} RSM POS. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}
