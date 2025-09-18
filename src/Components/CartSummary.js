export default function CartSummary() {
    return (
        <div className="bg-white rounded-3xl border border-gray-200/70 p-6 shadow-sm hover:shadow-md transition duration-200 sticky top-8">
            <h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                    <span className="text-gray-600">Subtotal (3 items)</span>
                    <span className="font-semibold text-gray-900">2,20,000</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold text-gray-900">Free</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold text-gray-900">26,400</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-medium text-gray-900">Total</span>
                        <span className="text-2xl font-semibold text-gray-900">46,400</span>
                    </div>
                </div>
            </div>
            
            <button className="w-full h-12 md:h-14 bg-black hover:bg-black/90 text-white font-medium rounded-full transition active:scale-[0.98]">
                Check Out
            </button>
            
            <p className="text-xs text-gray-500 text-center mt-4">
                Taxes and shipping calculated at checkout
            </p>
        </div>
    )
}