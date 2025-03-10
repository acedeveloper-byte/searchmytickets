import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Engine from "@/components/HomeSection/Engine";
import "bootstrap/dist/css/bootstrap.min.css";
import Flightoffers from "@/components/HomeSection/Flightoffers";
import Topdestination from "@/components/HomeSection/Topdestination";
import Testinmonial from "@/components/HomeSection/Testinmonial";
import Recentblogs from "@/components/HomeSection/Recentblogs";

export default function Home() {
  return (
    <>
      <Header />
      <Engine />
      <Flightoffers />
      <Topdestination />
      <Testinmonial />
      <Recentblogs />
      <Footer />
    </>
  );
}
