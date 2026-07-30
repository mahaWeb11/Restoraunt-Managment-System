import React from "react";
import {
  ShieldCheck,
  ArrowRight,
  ArrowDown,
  Zap,
  BarChart3,
  Cloud,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="pocetna"
      className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Pametno rješenje <br />
            za moderne <br />
            <span className="text-amber-500">restorane</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
            Upravljajte svojim restoranom jednostavno i efikasno. Od narudžbi do
            fiskalizacije – sve na jednom mjestu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all shadow-md">
              Zatraži demo <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-700 font-semibold border border-slate-200 rounded-lg hover:bg-slate-100 transition-all">
              Saznaj više <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000"
              alt="POS Sistem Restoran"
              className="w-full h-80 sm:h-96 object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          </div>

          <div className="absolute top-4 right-4 sm:-right-4 bg-white/95 backdrop-blur border border-slate-100 p-4 rounded-xl shadow-lg flex flex-col items-center justify-center text-center">
            <div className="bg-amber-100 p-2 rounded-full text-amber-600 mb-1">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-slate-900">100+</span>
            <span className="text-xs text-slate-500 font-medium">
              Zadovoljnih restorana
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-slate-200">
        <div className="flex flex-col items-center text-center p-2">
          <Zap className="w-8 h-8 text-amber-500 mb-2" />
          <span className="font-semibold text-sm text-slate-800">
            Brzo i jednostavno korištenje
          </span>
        </div>
        <div className="flex flex-col items-center text-center p-2">
          <ShieldCheck className="w-8 h-8 text-amber-500 mb-2" />
          <span className="font-semibold text-sm text-slate-800">
            Sigurno i pouzdano poslovanje
          </span>
        </div>
        <div className="flex flex-col items-center text-center p-2">
          <BarChart3 className="w-8 h-8 text-amber-500 mb-2" />
          <span className="font-semibold text-sm text-slate-800">
            Detaljni izvještaji i statistike
          </span>
        </div>
        <div className="flex flex-col items-center text-center p-2">
          <Cloud className="w-8 h-8 text-amber-500 mb-2" />
          <span className="font-semibold text-sm text-slate-800">
            Dostupno bilo gdje, bilo kada
          </span>
        </div>
      </div>
    </section>
  );
}
