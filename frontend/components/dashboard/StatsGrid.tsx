import { StatCard } from "./StatCard";
import type { Stats } from "@/types/stats.type.ts";

export function StatsGrid({ stats }: { stats: Stats | null }) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <StatCard
        label="Ukupno stavki"
        value={stats?.productCount ?? 0}
        sub="Na meniju"
      />
      <StatCard
        label="Kategorije"
        value={stats?.categoryCount ?? 0}
        sub="Aktivne kategorije"
      />
      <StatCard
        label="Narudzbe danas"
        value={stats?.ordersToday ?? 0}
        sub="Danas"
      />
      <StatCard
        label="Prihod danas"
        value={`${(stats?.revenueToday ?? 0).toFixed(2)} KM`}
        sub="Danas"
      />
    </div>
  );
}
