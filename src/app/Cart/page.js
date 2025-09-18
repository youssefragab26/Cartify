"use client";
import CartItem from "@/Components/CartItem";
import CartSummary from "@/Components/CartSummary";
import { CartContext } from "@/Context/CartContext";
import { useContext } from "react";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);
  //   setCart([...cart , {name:productName , Price: productPrice , img: productImg}])
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/*Header Section*/}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-2">
            Shopping Bag
          </h1>
          <p className="text-gray-500 text-lg">Review your items</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <div className="space-y-6">
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cart.map((product) => {
                  return (
                    <div key={product.name}>
                      <CartItem
                        productName={product.name}
                        productPrice={product.price}
                        productImage={product.img}
                      />
                    </div>
                  );
                })
              )}
            </div>
          </div>
          {/* Cart Summary Section */}
          <div className="lg:w-96">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
