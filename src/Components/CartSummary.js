import { CartContext } from "@/Context/CartContext";
import Link from "next/link";
import { useContext } from "react";

export default function CartSummary() {
  const { cart } = useContext(CartContext);
  console.log(cart);
  let total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="bg-white rounded-3xl border border-gray-200/70 p-6 shadow-sm hover:shadow-md transition duration-200 sticky top-8">
      <h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-6">
        Order Summary
      </h2>
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">{`Subtotal (${cart.length} items)`}</span>
          <span className="font-semibold text-gray-900">
            {total.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-semibold text-gray-900">Free</span>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-gray-900">Total</span>
            <span className="text-2xl font-semibold text-gray-900">
              {Math.floor(total).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      <Link href={"/CheckOut"}>
        <button className="w-full h-12 md:h-14 bg-black hover:bg-black/90 text-white font-medium rounded-full transition active:scale-[0.98] cursor-pointer">
          Check Out
        </button>
      </Link>
      <p className="text-xs text-gray-500 text-center mt-4">
        Taxes and shipping calculated at checkout
      </p>
    </div>
  );
}
