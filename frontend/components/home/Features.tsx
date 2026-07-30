import React from "react";
import {
  BookOpen,
  ShoppingCart,
  Receipt,
  BarChart3,
  Users,
  Settings,
  LucideIcon,
} from "lucide-react";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const featuresData: FeatureItem[] = [
  {
    icon: BookOpen,
    title: "Digitalni meni",
    description: "Kreirajte kategorije i stavke menija u nekoliko klikova.",
  },
  {
    icon: ShoppingCart,
    title: "Brze narudžbe",
    description: "Konobari lako primaju narudžbe i šalju u kuhinju.",
  },
  {
    icon: Receipt,
    title: "Fiskalizacija",
    description: "Potpuna podrška za fiskalne uređaje i zakonske standarde.",
  },
  {
    icon: BarChart3,
    title: "Izvještaji",
    description:
      "Pratite promet, najprodavanija jela i performanse vašeg restorana.",
  },
  {
    icon: Users,
    title: "Upravljanje korisnicima",
    description: "Dodajte konobare, kuhare i dajte im odgovarajuća ovlaštenja.",
  },
  {
    icon: Settings,
    title: "Postavke i integracije",
    description: "Povežite štampače, fiskalne uređaje i druge servise.",
  },
];

export default function Features() {
  return (
    <section
      id="funkcionalnosti"
      className="py-16 bg-white border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Sve što vam je potrebno za uspješno poslovanje
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow text-center sm:text-left"
              >
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
