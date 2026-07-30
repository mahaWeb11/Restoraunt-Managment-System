import { useApiForm } from "@/hooks/useApiForm";
import { apiFetch } from "@/lib/api";
import type { Category } from "@/types/category.type";

export function ProductForm({
  categories,
  onSuccess,
}: {
  categories: Category[];
  onSuccess: () => void;
}) {
  const form = useApiForm(
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
    onSuccess,
  );

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5">
      <h2 className="mb-4 text-base font-medium text-gray-900">
        Dodaj novu stavku na meni
      </h2>

      <form onSubmit={form.handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Naziv stavke
          </label>
          <input
            name="name"
            value={form.form.name}
            onChange={form.handleChange}
            placeholder="npr. Margharita Pizza"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Kategorija
          </label>
          <select
            name="categoryId"
            value={form.form.categoryId}
            onChange={form.handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
          >
            <option value="">Odaberi kategoriju</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Cijena (KM)
            </label>
            <input
              name="price"
              type="number"
              step="0.01"
              value={form.form.price}
              onChange={form.handleChange}
              placeholder="npr. 12.50"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              URL slike (opciono)
            </label>
            <input
              name="imageUrl"
              value={form.form.imageUrl}
              onChange={form.handleChange}
              placeholder="https://..."
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Opis (opcionalno)
          </label>
          <textarea
            name="description"
            value={form.form.description}
            onChange={form.handleChange}
            placeholder="Kratak opis sastojaka..."
            rows={3}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
          />
        </div>

        {form.error && <p className="text-sm text-red-600">{form.error}</p>}

        <button
          type="submit"
          disabled={form.loading}
          className="w-full rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50"
        >
          {form.loading ? "Dodavanje..." : "Dodaj stavku"}
        </button>
      </form>
    </div>
  );
}
