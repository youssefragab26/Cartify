"use client";
import { useContext } from "react";
import { CartContext } from "@/Context/CartContext";
import Link from "next/link";

export default function CheckOut() {
    const { cart } = useContext(CartContext);
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * 1), 0);
    const shipping = subtotal > 50000 ? 0 : 2000;
    const tax = subtotal * 0.14;
    const total = subtotal + shipping + tax;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="text-2xl font-bold text-gray-900">
                            Cartify
                        </Link>
                        <div className="text-sm text-gray-600">
                            Secure Checkout
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Order Summary */}
                        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-100">
                                <h2 className="text-xl font-semibold text-gray-900">Order Summary</h2>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {cart.length === 0 ? (
                                    <div className="px-6 py-12 text-center">
                                        <div className="text-gray-400 text-lg mb-2">🛒</div>
                                        <p className="text-gray-500">Your cart is empty</p>
                                        <Link 
                                            href="/" 
                                            className="inline-block mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                                        >
                                            Continue Shopping
                                        </Link>
                                    </div>
                                ) : (
                                    cart.map((item, index) => (
                                        <div key={index} className="px-6 py-4 flex items-center space-x-4">
                                            <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                                                <img 
                                                    src={item.img} 
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-sm font-medium text-gray-900 truncate">
                                                    {item.name}
                                                </h3>
                                                <div className="flex items-center space-x-2 mt-1">
                                                    {item.color && (
                                                        <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600">
                                                            {item.color}
                                                        </span>
                                                    )}
                                                    {item.storage && (
                                                        <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600">
                                                            {item.storage}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {item.price.toLocaleString()} EGP
                                                </div>
                                                <div className="text-xs text-gray-500">Qty: 1</div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Shipping Information */}
                        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-100">
                                <h2 className="text-xl font-semibold text-gray-900">Shipping Information</h2>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            First Name
                                        </label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Last Name
                                        </label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Address
                                    </label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                        placeholder="123 Main Street"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            City
                                        </label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                            placeholder="Cairo"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            State
                                        </label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                            placeholder="Cairo"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            ZIP Code
                                        </label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                            placeholder="12345"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Information */}
                        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-100">
                                <h2 className="text-xl font-semibold text-gray-900">Payment Information</h2>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Card Number
                                    </label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                        placeholder="1234 5678 9012 3456"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Expiry Date
                                        </label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                            placeholder="MM/YY"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            CVV
                                        </label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                            placeholder="123"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
                            
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-medium">{subtotal.toLocaleString()} EGP</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-medium">
                                        {shipping === 0 ? 'Free' : `${shipping.toLocaleString()} EGP`}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Tax</span>
                                    <span className="font-medium">{tax.toLocaleString()} EGP</span>
                                </div>
                                <div className="border-t border-gray-200 pt-3">
                                    <div className="flex justify-between text-base font-semibold">
                                        <span>Total</span>
                                        <span>{total.toLocaleString()} EGP</span>
                                    </div>
                                </div>
                            </div>

                            <button 
                                className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={cart.length === 0}
                            >
                                Complete Order
                            </button>

                            <div className="mt-4 text-center">
                                <p className="text-xs text-gray-500">
                                    🔒 Secure checkout powered by SSL
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
