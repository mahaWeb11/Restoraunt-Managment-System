import { useApiForm } from "@/hooks/useApiForm";
import { apiFetch } from "@/lib/api";

export function CategoryForm({ onSuccess }: { onSuccess: () => void }) {
  const form = useApiForm(
    { name: "", sortOrder: "0" },
    (data) =>
      apiFetch("/categories", {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          sortOrder: Number(data.sortOrder),
        }),
      }),
    onSuccess,
  );

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5">
      <h2 className="mb-4 text-base font-medium text-gray-900">
        Dodaj novu kategoriju
      </h2>

      <form onSubmit={form.handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Naziv kategorije
          </label>
          <input
            name="name"
            value={form.form.name}
            onChange={form.handleChange}
            placeholder="npr. Predjela"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Redoslijed
          </label>
          <input
            name="sortOrder"
            type="number"
            value={form.form.sortOrder}
            onChange={form.handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
          />
        </div>

        {form.error && <p className="text-sm text-red-600">{form.error}</p>}

        <button
          type="submit"
          disabled={form.loading}
          className="w-full rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50"
        >
          {form.loading ? "Dodavanje..." : "Dodaj kategoriju"}
        </button>
      </form>
    </div>
  );
}
