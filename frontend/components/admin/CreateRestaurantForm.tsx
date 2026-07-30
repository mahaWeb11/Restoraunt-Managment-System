import { useApiForm } from "@/hooks/useApiForm";
import { apiFetch } from "@/lib/api";

export function CreateRestaurantForm({ onSuccess }: { onSuccess: () => void }) {
  const form = useApiForm(
    {
      name: "",
      address: "",
      phone: "",
      ownerFirstName: "",
      ownerLastName: "",
      ownerEmail: "",
      ownerPassword: "",
    },
    (data) =>
      apiFetch("/restoraunts", {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          address: data.address,
          phone: data.phone,
          owner: {
            firstName: data.ownerFirstName,
            lastName: data.ownerLastName,
            email: data.ownerEmail,
            password: data.ownerPassword,
          },
        }),
      }),
    onSuccess,
  );

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5">
      <h2 className="mb-4 text-base font-medium text-gray-900">
        Kreiraj restoran i vlasnika
      </h2>

      <form onSubmit={form.handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Naziv restorana
          </label>
          <input
            name="name"
            value={form.form.name}
            onChange={form.handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Adresa
            </label>
            <input
              name="address"
              value={form.form.address}
              onChange={form.handleChange}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Telefon
            </label>
            <input
              name="phone"
              value={form.form.phone}
              onChange={form.handleChange}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
            />
          </div>
        </div>

        <hr className="border-gray-200" />

        <p className="text-sm font-medium text-gray-700">Podaci vlasnika</p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Ime
            </label>
            <input
              name="ownerFirstName"
              value={form.form.ownerFirstName}
              onChange={form.handleChange}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Prezime
            </label>
            <input
              name="ownerLastName"
              value={form.form.ownerLastName}
              onChange={form.handleChange}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email vlasnika
          </label>
          <input
            name="ownerEmail"
            type="email"
            value={form.form.ownerEmail}
            onChange={form.handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Lozinka vlasnika
          </label>
          <input
            name="ownerPassword"
            type="password"
            value={form.form.ownerPassword}
            onChange={form.handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
          />
        </div>

        {form.error && <p className="text-sm text-red-600">{form.error}</p>}

        <button
          type="submit"
          disabled={form.loading}
          className="w-full rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50"
        >
          {form.loading ? "Kreiranje..." : "Kreiraj restoran"}
        </button>
      </form>
    </div>
  );
}
