import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Engine from "@/components/HomeSection/Engine";
import "bootstrap/dist/css/bootstrap.min.css";
import Flightoffers from "@/components/HomeSection/Flightoffers";
import Topdestination from "@/components/HomeSection/Topdestination";
import Testinmonial from "@/components/HomeSection/Testinmonial";
import Recentblogs from "@/components/HomeSection/Recentblogs";
import CabsSection from "@/components/HomeSection/CabsSection";
import HotelSection from "@/components/HomeSection/HotelSection";

export default function Home() {
  return (
    <>
      <Header />
      <Engine />
      <Flightoffers />
      <Topdestination />
      <CabsSection />
      <HotelSection />
      <Testinmonial />
      <Recentblogs />
      <Footer />
    </>
  );
}
