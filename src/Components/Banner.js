import Link from "next/link";

export default function Banner({mainTitle , secTitle , image , linkHerf}) {
  return (
    <div className="flex gap-[px] bg-white w-250 h-100 mx-auto my-10 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-4 md:p-6 mt-20 ml-10 w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0 lg:mr-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-800 leading-tight">
          {mainTitle}
        </h1>
        <p className="mb-4 md:mb-6 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-md lg:max-w-none">
          {secTitle}
        </p>
        <Link href={linkHerf}>
          <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 cursor-pointer text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl text-sm md:text-base font-semibold transition-all duration-200 hover:shadow-md transform hover:scale-105 active:scale-95 min-h-[48px] min-w-[120px]">
            Shop Now
          </button>
        </Link>
      </div>
      <div className="w-125 h-100 p-4">
        <img src={image}/>
      </div>
    </div>
  );
}
