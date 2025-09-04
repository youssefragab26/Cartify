import { iphones } from "../Data";
import ProductCard from "../Components/productCard";
import Link from "next/link";

export default function Iphone() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">iPhone Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 justify-items-center">
          {iphones.map((product: any) => {
            return (
              <div key={product.id} className="w-full max-w-sm">
                <Link href={product.href}>
                <ProductCard 
                  productName={product.name} 
                  productPrice={product.price} 
                  productImg={product.image}
                />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
