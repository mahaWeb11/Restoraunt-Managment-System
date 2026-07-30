"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { AdminStatsGrid } from "@/components/admin/AdminStatsGrid";
import { CreateRestaurantForm } from "@/components/admin/CreateRestaurantForm";
import { RestaurantsTable } from "@/components/admin/RestaurantsTable";
import type { AdminStats } from "@/types/admin.type";
import type { Restaurant } from "@/types/restaurant.type";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [pageError, setPageError] = useState("");
  const [pageLoading, setPageLoading] = useState(true);

  const loadData = async () => {
    try {
      const [statsData, restaurantsData] = await Promise.all([
        apiFetch("/admin/dashboard"),
        apiFetch("/restoraunts"),
      ]);

      setStats(statsData);
      setRestaurants(restaurantsData.restaurants ?? restaurantsData);
    } catch (err: any) {
      setPageError(err.message);
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (pageLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-gray-500">
        Ucitavanje...
      </div>
    );
  }

  if (pageError) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-red-600">
        {pageError}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Admin Dashboard
          </h1>
          <p className="text-sm text-gray-500">
            Pregled restorana i kreiranje novih naloga.
          </p>
        </div>

        <AdminStatsGrid stats={stats} />

        <CreateRestaurantForm onSuccess={loadData} />

        <RestaurantsTable restaurants={restaurants} />
      </div>
    </div>
  );
}
