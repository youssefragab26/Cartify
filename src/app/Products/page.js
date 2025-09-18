import { Products as productsData} from "@/Data/products";
import ProductCard from "@/Components/ProductCard";
export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          All Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 justify-items-center">
          {productsData.map((product) => {
            return (
              <div key={product.model} className="w-full max-w-sm">
                <ProductCard
                  productName={product.name}
                  productPrice={product.price}
                  productImg={product.image}
                  href=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
