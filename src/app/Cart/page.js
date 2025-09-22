"use client";
import CartItem from "@/Components/CartItem";
import CartSummary from "@/Components/CartSummary";
import { CartContext } from "@/Context/CartContext";
import { useContext } from "react";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);

  // setCart([...cart , {name:productName , price: productPrice , img: productImg , storage: productStorage , color: productColor}])
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
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-xl text-center py-14 px-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">🛍️</div>
                    <p className="text-base md:text-lg text-gray-700 font-medium">Your cart is empty.</p>
                    <p className="mt-1 text-sm text-gray-500">Add items to get started.</p>
                  </div>
                </div>
              ) : (
                cart.map((product) => {
                  return (
                    <div key={product.name}>
                      <CartItem
                        productName={product.name}
                        productPrice={product.price}
                        productImage={product.img}
                        productStorage={product.storage}
                        productColor={product.color}
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
