import type { Product } from "@/types/product.type";

export function ProductGrid({
  products,
  search,
  onSearchChange,
  onAdd,
}: {
  products: Product[];
  search: string;
  onSearchChange: (value: string) => void;
  onAdd: (product: Product) => void;
}) {
  return (
    <div className="flex-1">
      <div className="mb-4">
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Pretrazi jela..."
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => onAdd(product)}
            className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white text-left hover:border-gray-400"
          >
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-32 w-full object-cover"
              />
            ) : (
              <div className="flex h-32 w-full items-center justify-center bg-gray-100 text-xs text-gray-400">
                Nema slike
              </div>
            )}

            <div className="flex flex-1 flex-col p-3">
              <p className="text-sm font-medium text-gray-900">
                {product.name}
              </p>
              {product.description && (
                <p className="mt-1 line-clamp-2 text-xs text-gray-500">
                  {product.description}
                </p>
              )}
              <p className="mt-auto pt-2 text-sm font-semibold text-gray-900">
                {product.price} KM
              </p>
            </div>
          </button>
        ))}

        {products.length === 0 && (
          <p className="col-span-full py-8 text-center text-sm text-gray-400">
            Nema pronadjenih jela
          </p>
        )}
      </div>
    </div>
  );
}
