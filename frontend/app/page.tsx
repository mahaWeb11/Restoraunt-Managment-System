import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">RestaurantPOS</h1>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="hover:text-blue-600">
              Funkcionalnosti
            </a>

            <a href="#about" className="hover:text-blue-600">
              O sistemu
            </a>

            <Link
              href="/login"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white"
            >
              Prijava
            </Link>
          </div>

          <button className="md:hidden text-2xl">☰</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-20 lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Upravljajte restoranom
            <span className="text-blue-600"> jednostavno.</span>
          </h1>

          <p className="mt-6 text-gray-600">
            Sistem za upravljanje menijem, narudžbama, zaposlenicima i POS
            prodajom.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/login"
              className="rounded-lg bg-blue-600 px-6 py-3 text-center text-white"
            >
              Prijava
            </Link>

            <Link
              href="/about"
              className="rounded-lg border px-6 py-3 text-center"
            >
              Saznaj više
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <div className="rounded-xl border bg-gray-100 p-8 shadow-sm">
            <div className="mb-4 h-4 w-32 rounded bg-gray-300" />
            <div className="mb-2 h-3 rounded bg-gray-300" />
            <div className="mb-2 h-3 rounded bg-gray-300" />
            <div className="mb-6 h-3 w-2/3 rounded bg-gray-300" />

            <div className="grid grid-cols-2 gap-4">
              <div className="h-24 rounded-lg bg-white shadow" />
              <div className="h-24 rounded-lg bg-white shadow" />
              <div className="h-24 rounded-lg bg-white shadow" />
              <div className="h-24 rounded-lg bg-white shadow" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
