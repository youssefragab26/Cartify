export default function Accessories() {

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-2">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Accessories</h1>
        <p className="text-sm md:text-base text-gray-600">Curated add-ons to complete your look. New drops are on the way.</p>
      </div>

      {/* Featured Coming Soon Card */}
      <div className="mt-8">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50" />
          <div className="relative p-5 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
              <span className="text-2xl" role="img" aria-label="sparkles">✨</span>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-lg md:text-xl font-medium text-gray-900">New accessories dropping soon</h2>
              <p className="mt-1 text-sm text-gray-600">We’re carefully crafting a selection of premium essentials — belts, hats, cases and more.</p>
            </div>
            <div className="md:ml-auto">
              <a href="/Products" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30">
                Explore other products
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder grid */}
      {/* <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md">
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
              <div className="h-full w-full animate-pulse bg-gradient-to-b from-gray-100 to-gray-200" />
            </div>
            <div className="mt-3 space-y-2">
              <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
              <div className="h-3 w-1/2 animate-pulse rounded bg-gray-200" />
              <div className="mt-3 flex items-center justify-between">
                <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
                <div className="h-8 w-20 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <hr className="w-full mx-auto mt-8 md:mt-10 border-t-2 border-gray-100" />
    </div>
  );
}