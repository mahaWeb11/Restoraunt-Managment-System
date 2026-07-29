"use client";

import Link from "next/link";
import { useAuthForm } from "@/hooks/useAuthForm";

export default function LoginPage() {
  const { form, error, loading, handleChange, handleSubmit } = useAuthForm(
    { email: "", password: "" },
    "/auth/login",
    "/",
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-2xl font-semibold text-gray-900">Prijava</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Lozinka
            </label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? "Prijavljivanje..." : "Prijavi se"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Nemas nalog?{" "}
          <Link
            href="/register"
            className="font-medium text-gray-900 underline"
          >
            Registruj se
          </Link>
        </p>
      </div>
    </div>
  );
}
