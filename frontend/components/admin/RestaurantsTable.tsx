import type { Restaurant } from "@/types/restaurant.type";

export function RestaurantsTable({
  restaurants,
}: {
  restaurants: Restaurant[];
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5">
      <h2 className="mb-4 text-base font-medium text-gray-900">Restorani</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500">
              <th className="pb-2 pr-4 font-medium">Naziv</th>
              <th className="pb-2 pr-4 font-medium">Adresa</th>
              <th className="pb-2 pr-4 font-medium">Telefon</th>
              <th className="pb-2 font-medium">Vlasnik</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((r) => (
              <tr key={r.id} className="border-b border-gray-100">
                <td className="py-2 pr-4 text-gray-900">{r.name}</td>
                <td className="py-2 pr-4 text-gray-500">{r.address}</td>
                <td className="py-2 pr-4 text-gray-500">{r.phone}</td>
                <td className="py-2 text-gray-500">
                  {r.owner ? `${r.owner.firstName} ${r.owner.lastName}` : "-"}
                </td>
              </tr>
            ))}
            {restaurants.length === 0 && (
              <tr>
                <td colSpan={4} className="py-4 text-center text-gray-400">
                  Nema restorana
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
