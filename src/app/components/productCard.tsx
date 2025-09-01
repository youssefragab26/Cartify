type ProductCardProps = {
    productName: string ,
    productPrice: number ,
    productImg: string
}
export default function ProductCard({productName , productPrice , productImg}: ProductCardProps){
    return (
        <div className="w-full">
           <div className="w-65 h-80 md:h-96 bg-white m-2 md:m-2.5 rounded-xl md:rounded-2xl p-2 md:p-2.5 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-[60%] bg-amber-200 rounded-lg overflow-hidden">
                <img src={productImg} className="object-cover w-full h-full" alt={productName}/>
            </div>
            <div className="h-1/4 text-center pt-2 md:pt-2.5 px-1">
                <h1 className="text-lg md:text-xl font-medium truncate">{productName}</h1>
                <h2 className="font-bold text-base md:text-lg">{`${productPrice} EGP`}</h2>
            </div>
            <div className="h-1/4 flex flex-col sm:flex-row justify-center gap-2 md:gap-1 px-2">
                <button className="bg-black hover:bg-gray-800 cursor-pointer text-white h-10 md:h-11 w-full sm:w-28 rounded-lg md:rounded-xl m-0 md:m-1 text-sm md:text-base transition-colors">Buy Now</button>
                <button className="bg-blue-800 hover:bg-blue-950 cursor-pointer text-white h-10 md:h-11 w-full sm:w-28 rounded-lg md:rounded-xl m-0 md:m-1 text-sm md:text-base transition-colors">Add to Cart</button>
            </div>
           </div>
        </div>
    )
}