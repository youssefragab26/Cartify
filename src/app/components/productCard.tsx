type ProductCardProps = {
    productName: string ,
    productPrice: number ,
    productImg: string
}
export default function ProductCard({productName , productPrice , productImg}: ProductCardProps){
    return (
        <div>
           <div className="w-3xs h-96 bg-white m-2.5 rounded-2xl p-2.5">
            <div className="h-[60%] bg-amber-200">
                <img src={productImg} className="object-fill w-full h-full"/>
            </div>
            <div className="h-1/4 text-center pt-2.5">
                <h1 className="text-xl">{productName}</h1>
                <h2 className="font-bold">{`${productPrice} EGP`}</h2>
            </div>
            <div className="h-1/4 flex justify-center">
                <button className="bg-black hover:bg-gray-800 cursor-pointer text-white h-11 w-28 rounded-xl m-1">Buy Now</button>
                <button className="bg-blue-800 hover:bg-blue-950 cursor-pointer text-white h-11 w-28 rounded-xl m-1">Add to Cart</button>
            </div>
           </div>
        </div>
    )
}