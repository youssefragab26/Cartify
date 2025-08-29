import { iphones } from "../data";
import ProductCard from "../components/productCard";
export default function Iphone() {
  return (
    <div className="grid grid-cols-4 m-5 justify-center max-w-[1100px] mx-auto">
      {iphones.map((product: any) => {
        return (
          <div key={product.id} className="">
            <ProductCard productName={product.name} productPrice={product.price} productImg={product.image}/>
          </div>
        );
      })}
    </div>
  );
}
