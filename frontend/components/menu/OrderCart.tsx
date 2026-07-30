import type { CartItem } from "@/types/cart.type";

export function OrderCart({
  items,
  onIncrease,
  onDecrease,
  onRemove,
}: {
  items: CartItem[];
  onIncrease: (productId: number) => void;
  onDecrease: (productId: number) => void;
  onRemove: (productId: number) => void;
}) {
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce(
    (sum, i) => sum + Number(i.product.price) * i.quantity,
    0,
  );

  return (
    <aside className="w-full shrink-0 lg:w-80">
      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <h2 className="mb-4 text-base font-medium text-gray-900">Narudzba</h2>

        {items.length === 0 ? (
          <p className="py-6 text-center text-sm text-gray-400">
            Nema dodanih stavki
          </p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex items-start gap-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {item.product.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.product.price} KM
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => onDecrease(item.product.id)}
                      className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="w-4 text-center text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onIncrease(item.product.id)}
                      className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {(Number(item.product.price) * item.quantity).toFixed(2)} KM
                  </p>
                  <button
                    onClick={() => onRemove(item.product.id)}
                    className="mt-2 text-xs text-red-600 hover:underline"
                  >
                    Ukloni
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 space-y-1 border-t border-gray-200 pt-4 text-sm">
          <div className="flex justify-between text-gray-500">
            <span>Stavki</span>
            <span>{totalItems}</span>
          </div>
          <div className="flex justify-between text-base font-semibold text-gray-900">
            <span>Ukupno</span>
            <span>{totalPrice.toFixed(2)} KM</span>
          </div>
        </div>

        <button
          disabled={items.length === 0}
          onClick={() => alert("Slanje narudzbe jos nije dostupnooo")}
          className="mt-4 w-full rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50"
        >
          Posalji narudzbu
        </button>
      </div>
    </aside>
  );
}
