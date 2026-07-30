import type { AdminStats } from "@/types/admin.type";

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}

export function AdminStatsGrid({ stats }: { stats: AdminStats | null }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <StatCard label="Restorani" value={stats?.restaurantCount ?? 0} />
      <StatCard label="Vlasnici" value={stats?.ownerCount ?? 0} />
      <StatCard label="Konobari" value={stats?.waiterCount ?? 0} />
    </div>
  );
}
