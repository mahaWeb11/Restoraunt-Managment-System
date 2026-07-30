"use client";

import { useState, useEffect } from "react";
import { useApiForm } from "@/hooks/useApiForm";
import { apiFetch } from "@/lib/api";

// types
import type { Stats } from "../../types/stats.type";
import type { Category } from "../../types/category.type";
import type { Product } from "../../types/product.type";

// components
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { CategoryForm } from "@/components/dashboard/CategoryForm";
import { ProductForm } from "@/components/dashboard/ProductForm";
import { RecentProductsTable } from "@/components/dashboard/RecentProductsTable";

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const [pageError, setPageError] = useState("");
  const [pageLoading, setPageLoading] = useState(true);

  const loadData = async () => {
    try {
      const [statsData, categoriesData, productsData] = await Promise.all([
        apiFetch("/dashboard"),
        apiFetch("/categories"),
        apiFetch("/products"),
      ]);

      setStats(statsData);
      setCategories(categoriesData.categories);
      setProducts(productsData.products);
    } catch (error: any) {
      setPageError(error.message);
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const categoryForm = useApiForm(
    { name: "", sortOrder: "0" },
    (data) =>
      apiFetch("/categories", {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          sortOrder: Number(data.sortOrder),
        }),
      }),
    (result) => {
      // moglo i samo () => loadData()
      setCategories([...categories, result.category]);
      setStats((prev) =>
        prev ? { ...prev, categoryCount: prev.categoryCount + 1 } : prev,
      );
    },
  );

  const productForm = useApiForm(
    { name: "", description: "", price: "", imageUrl: "", categoryId: "" },
    (data) =>
      apiFetch("/products", {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          description: data.description || undefined,
          price: Number(data.price),
          imageUrl: data.imageUrl || undefined,
          categoryId: Number(data.categoryId),
        }),
      }),
    (result) => {
      // moglo i samo () => loadData()
      setProducts([result.product, ...products]);
      setStats((prev) =>
        prev ? { ...prev, productCount: prev.productCount + 1 } : prev,
      );
    },
  );

  // za loading
  if (pageLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-gray-500">
        Ucitavanje...
      </div>
    );
  }

  // za error
  if (pageError) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-red-600">
        {pageError}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Dashboard
          </h1>
          <p className="text-sm text-gray-500">
            Upravljaj svojim menijem, kategorijama i statistikom restorana.
          </p>
        </div>

        <StatsGrid stats={stats} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <CategoryForm onSuccess={loadData} />
          <ProductForm categories={categories} onSuccess={loadData} />
        </div>

        <RecentProductsTable products={products} />
      </div>
    </div>
  );
}
