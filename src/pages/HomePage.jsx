// src/pages/HomePage.jsx
import Banner from "../components/Banner";
import BrandSlider from "../components/BrandSlider";
import ContactSection from "../components/ContactSection";
import HeaderBar from "../components/HeaderBar";
import MiddleSection from "../components/MiddleSection";
import MiddleSectionV2 from "../components/MiddleSectionV2";
import Navbar from "../components/Navbar";
import ReferenceSlider from "../components/ReferenceSlider";
import SocialSidebar from "../components/SocialLinks";
import TopBar from "../components/TopBar";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderBar />
      <TopBar />
      <Navbar />
      <Banner />
      <BrandSlider />
      <MiddleSection />
      <MiddleSectionV2 />
      <ReferenceSlider />
      <ContactSection /> 
      <SocialSidebar />
    </div>
  );
}
