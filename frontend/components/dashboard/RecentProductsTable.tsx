import type { Product } from "@/types/product.type";

export function RecentProductsTable({ products }: { products: Product[] }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5">
      <h2 className="mb-4 text-base font-medium text-gray-900">
        Nedavno dodane stavke
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500">
              <th className="pb-2 pr-4 font-medium">Stavka</th>
              <th className="pb-2 pr-4 font-medium">Kategorija</th>
              <th className="pb-2 font-medium">Cijena</th>
            </tr>
          </thead>
          <tbody>
            {products.slice(0, 5).map((p) => (
              <tr key={p.id} className="border-b border-gray-100">
                <td className="py-2 pr-4 text-gray-900">{p.name}</td>
                <td className="py-2 pr-4 text-gray-500">
                  {p.category?.name ?? "-"}
                </td>
                <td className="py-2 text-gray-900">{p.price} KM</td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={3} className="py-4 text-center text-gray-400">
                  Nema jos dodanih stavki
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
