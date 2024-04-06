import Amenities from "@/components/GlobalComponents/Amenities";
import SiteFooter from "@/components/GlobalComponents/SiteFooter";
import Banner from "@/components/Home/Banner";
import BestSale from "@/components/Home/BestSale";
import BottomBanner from "@/components/Home/BottomBanner";
import FeatureCat from "@/components/Home/FeatureCat";
import FeaturePd from "@/components/Home/FeaturePd";
import PopularPd from "@/components/Home/PopularPd";
import TopProducts from "@/components/Home/TopProducts";
import MainLayout from "@/components/Layouts/MainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Banner />
        <FeaturePd />
        <FeatureCat />
        <PopularPd />
        <BestSale />
        <TopProducts />
        <BottomBanner />
        <Amenities />
        <SiteFooter />
      </MainLayout>
    </>
  );
}
