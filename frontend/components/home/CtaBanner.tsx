import React from "react";
import { Zap, Clock, Headphones, ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="space-y-2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Spremni da unaprijedite svoj restoran?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Zatražite besplatnu demo verziju i uvjerite se kako RSM POS može
            olakšati vaše poslovanje.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Besplatna demo verzija</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-500" />
            <span>Brza implementacija</span>
          </div>
          <div className="flex items-center gap-2">
            <Headphones className="w-4 h-4 text-amber-500" />
            <span>Podrška 24/7</span>
          </div>
        </div>

        <button className="whitespace-nowrap px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all shadow-md flex items-center gap-2">
          Zatraži demo <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
