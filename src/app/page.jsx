import Banner from "@/components/Home/Banner";
import FeatureCat from "@/components/Home/FeatureCat";
import FeaturePd from "@/components/Home/FeaturePd";
import MainLayout from "@/components/Layouts/MainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Banner />
        <FeaturePd />
        <FeatureCat />
      </MainLayout>
    </>
  );
}
