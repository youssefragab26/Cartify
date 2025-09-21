import Banner from "@/Components/Banner";
import BestSeller from "@/Components/bestSeller";
import Footer from "@/Components/Footer";
import NewArrivals from "@/Components/newArrivals";


export default function Home() {
  return (
    <div>
      <Banner />
      <NewArrivals />
      <BestSeller />
      <Footer />
    </div>
  );
}
