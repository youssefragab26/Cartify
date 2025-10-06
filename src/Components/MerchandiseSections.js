import Link from "next/link";

export default function Sections() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-10 px-4">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-light text-gray-900">Shop by Category</h2>
        <p className="text-gray-500 mt-1 text-sm md:text-base">Find your favorite Apple products</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <Link href={"/Products/iPhones"}> 
        <div className="group bg-white rounded-3xl border border-gray-200/70 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition duration-200 ease-out overflow-hidden cursor-pointer">
          <div className="aspect-[4/3] bg-white flex items-center justify-center">
            <img src="/images/iphone.png" alt="iPhones" className="w-full h-full object-contain p-6 group-hover:scale-[1.03] transition-transform duration-300 ease-out" />
          </div>
          <div className="px-4 py-4 text-center">
            <h1 className="text-base md:text-lg font-semibold tracking-tight text-gray-900">iPhones</h1>
          </div>
        </div>
        </Link>
        <Link href={"/Products/Macs"}> 
        <div className="group bg-white rounded-3xl border border-gray-200/70 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition duration-200 ease-out overflow-hidden cursor-pointer">
          <div className="aspect-[4/3] bg-white flex items-center justify-center">
            <img src="/images/mac.png" alt="Macs" className="w-full h-full object-contain p-6 group-hover:scale-[1.03] transition-transform duration-300 ease-out" />
          </div>
          <div className="px-4 py-4 text-center">
            <h1 className="text-base md:text-lg font-semibold tracking-tight text-gray-900">Macs</h1>
          </div>
        </div>
        </Link>
        <Link href={"/Products/Airpods"}> 
        <div className="group bg-white rounded-3xl border border-gray-200/70 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition duration-200 ease-out overflow-hidden cursor-pointer">
          <div className="aspect-[4/3] bg-white flex items-center justify-center">
            <img src="/images/airpod.png" alt="AirPods" className="w-full h-full object-contain p-6 group-hover:scale-[1.03] transition-transform duration-300 ease-out" />
          </div>
          <div className="px-4 py-4 text-center">
            <h1 className="text-base md:text-lg font-semibold tracking-tight text-gray-900">AirPods</h1>
          </div>
        </div>
        </Link>
        <Link href={"/Products/Accessories"}> 
        <div className="group bg-white rounded-3xl border border-gray-200/70 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition duration-200 ease-out overflow-hidden cursor-pointer">
          <div className="aspect-[4/3] bg-white flex items-center justify-center">
            <img src="/images/accessories.png" alt="Accessories" className="w-full h-full object-contain p-6 group-hover:scale-[1.03] transition-transform duration-300 ease-out" />
          </div>
          <div className="px-4 py-4 text-center">
            <h1 className="text-base md:text-lg font-semibold tracking-tight text-gray-900">Accessories</h1>
          </div>
        </div>
        </Link>
      </div>
      <hr className="w-full max-w-6xl mx-auto mt-4 md:mt-6 border-t-2 border-gray-200" />
    </div>
  );
}
