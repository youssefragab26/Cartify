import Banner from "./Components/banner"
import BestSeller from "./Components/bestSeller"
import NewArrivals from "./Components/newArrivals"

export default function CartifyHome(){
  return (
    <div id="Home" className="min-h-screen bg-gray-50 px-4 md:px-6 py-4 md:py-8">
      <Banner />
      <BestSeller />
      <NewArrivals />
    </div>
  )
}