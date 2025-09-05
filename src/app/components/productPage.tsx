import {iPhones} from "../Data"
import InStock from "./inStock"
import OutOfStock from "./outOfStock"
export default function ProductPage(){
    return (
        <div>
            <div className="w-full max-w-6xl flex mx-auto bg-white text-black rounded-2xl shadow my-10 p-4">
                <div>
                    <img src={"/images/iphone16pro.jpeg"} />
                </div>
                <div>
                    <div className="text-2xl my-5">
                        <h1>iPhone 16 Pro & iPhone 16 Pro Max</h1>
                    </div>
                    <hr className="text-neutral-200 my-5"/>
                    <div>
                        <h2>Model. Which is best for you?</h2>
                        <div className="flex">
                            <button className="w-50 m-1 bg-neutral-200 rounded-xl">iPhone 16 Pro</button>
                            <button className="w-50 m-1 bg-neutral-200 rounded-xl">iPhone 16 Pro Max</button>
                        </div>
                    </div>
                     <hr className="text-neutral-200 my-5"/>
                    <div>
                        <h2>Pick your favorite color.</h2>
                        <div>
                            <button className="bg-neutral-200 w-10 h-10 rounded-full m-1">1</button>
                            <button className="bg-neutral-200 w-10 h-10 rounded-full m-1">2</button>
                            <button className="bg-neutral-200 w-10 h-10 rounded-full m-1">3</button>
                            <button className="bg-neutral-200 w-10 h-10 rounded-full m-1">4</button>
                        </div>
                    </div>
                     <hr className="text-neutral-200 my-5"/>
                    <div>
                        <h2>Storage. How much space do you need?</h2>
                        <div>
                            <button className="bg-neutral-200 w-20 rounded-2xl m-1">128GB</button>
                            <button className="bg-neutral-200 w-20 rounded-2xl m-1">256GB</button>
                            <button className="bg-neutral-200 w-20 rounded-2xl m-1">512GB</button>
                            <button className="bg-neutral-200 w-20 rounded-2xl m-1">1T</button>
                        </div>
                    </div>
                     <hr className="text-neutral-200 my-5"/>
                     <div>
                        <button className="bg-black hover:bg-gray-800 cursor-pointer text-white h-10 md:h-11 w-50 rounded-lg md:rounded-xl m-0 md:m-1 text-sm md:text-base transition-colors">Buy Now</button>
                        <button className="bg-blue-800 hover:bg-blue-950 cursor-pointer text-white h-10 md:h-11 w-50 rounded-lg md:rounded-xl m-0 md:m-1 text-sm md:text-base transition-colors">Add to Cart</button>
                     </div>
                     <hr className="text-neutral-200 my-5"/>
                     {iPhones.find((iphone) => iphone.id === 1)?.inStock ? <InStock /> : <OutOfStock />}

                    
                </div>

            </div>
        </div>
    )
}