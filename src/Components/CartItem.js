export default function CartItem({productImage , productName , productPrice}) {
  return (
    <div className="bg-white w-full rounded-3xl border border-gray-200/70 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition duration-200 ease-out group">
      <div className="flex items-center p-5 md:p-6">
        {/* Product Image - Apple style */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-2xl overflow-hidden flex items-center justify-center">
            <img 
              src={productImage}
              alt={productName}
              className="w-full h-full object-contain p-3 group-hover:scale-[1.03] transition-transform duration-300 ease-out" 
            />
          </div>
        </div>

        {/* Product Details - Apple typography */}
        <div className="flex-1 min-w-0 ml-6">
          <h3 className="text-lg md:text-xl font-semibold tracking-tight text-gray-900 mb-1">
            {productName}
          </h3>
          <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
            {`${productPrice} EGP`}
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span>Space Gray</span>
            <span className="mx-2">•</span>
            <span>128GB</span>
          </div>
        </div>

        {/* Quantity Controls - Apple style */}
        <div className="flex flex-col items-end space-y-4">
          <div className="flex items-center space-x-3">
            <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition duration-200 hover:scale-105">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4" />
              </svg>
            </button>
            <span className="w-8 text-center font-medium text-gray-900 text-lg">1</span>
            <button className="w-10 h-10 bg-black hover:bg-black/90 rounded-full flex items-center justify-center transition duration-200 hover:scale-105">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          
          {/* Remove Button - Apple style */}
          <button className="text-gray-500 hover:text-red-500 text-sm font-medium transition-colors duration-200 flex items-center space-x-2 group/remove">
            <svg className="w-4 h-4 group-hover/remove:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <span>Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
}