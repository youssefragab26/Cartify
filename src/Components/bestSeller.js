import { bestSeller } from "../Data/bestSeller"
import ProductCard from "./ProductCard"

export default function BestSeller() {
    return (
        <div className="">
            <div className="w-full max-w-6xl mx-auto mt-10">
                <h1 className="text-2xl font-bold text-left pl-4 md:pl-6">Best Sellers</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 justify-center mx-auto w-full  max-w-6xl  mt-2">
                {bestSeller.map((product) => {
                    return (
                        <ProductCard key={product.id} productName={product.name} productPrice={product.price} productImg={product.image} />
                    )
                })}
            </div>
            <hr className="w-full max-w-6xl mx-auto mt-4 md:mt-6 border-t-2 border-gray-200" />
        </div>
    )
}