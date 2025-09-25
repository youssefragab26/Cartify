import { Products } from "@/Data/products";
export default function Mac() {
  let Macs = Products.filter((product) => {
    return (product.model = "Mac");
  });
  return (
    <div className="w-full max-w-6xl mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 justify-center mx-auto w-full  max-w-6xl  mt-2">
        {Macs.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard
                productName={product.name}
                productPrice={product.price}
                productImg={product.image}
                productColor={product.colors}
                productStorage={product.storage}
              />
            </div>
          );
        })}
      </div>
      <hr className="w-full max-w-6xl mx-auto mt-4 md:mt-6 border-t-2 border-gray-200" />
    </div>
  );
}