import type { Category } from "@/types/category.type";

export function CategorySidebar({
  categories,
  selectedId,
  onSelect,
}: {
  categories: Category[];
  selectedId: number | null;
  onSelect: (id: number | null) => void;
}) {
  return (
    <aside className="w-full shrink-0 lg:w-56">
      <h2 className="mb-3 text-sm font-medium text-gray-500">Kategorije</h2>

      <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
        <button
          onClick={() => onSelect(null)}
          className={`whitespace-nowrap rounded-md px-3 py-2 text-left text-sm ${
            selectedId === null
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          } border border-gray-200`}
        >
          Sva jela
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`whitespace-nowrap rounded-md px-3 py-2 text-left text-sm ${
              selectedId === cat.id
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            } border border-gray-200`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </aside>
  );
}
