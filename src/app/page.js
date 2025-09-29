import Banner from "@/Components/Banner";
import BannerView from "@/Components/BannerView";
import BestSeller from "@/Components/bestSeller";
import Footer from "@/Components/Footer";
import Sections from "@/Components/MerchandiseSections";
import NewArrivals from "@/Components/newArrivals";


export default function Home() {
  return (
    <div>
      <BannerView />
      <Sections />
      <NewArrivals />
      <BestSeller />
    </div>
  );
}
