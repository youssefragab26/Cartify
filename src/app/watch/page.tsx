import { watches } from "../data/watch";
import ProductCard from "../components/productCard";

export default function Watch() {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Watch Collection</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 justify-items-center">
            {watches.map((watch) => (
                <ProductCard key={watch.id} productName={watch.name} productPrice={watch.price} productImg={watch.image} />
            ))}
            </div>
            </div>
        </div>
    )
}