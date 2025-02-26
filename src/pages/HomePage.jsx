// src/pages/HomePage.jsx
import Banner from "../components/Banner";
import BrandSlider from "../components/BrandSlider";
import ContactSection from "../components/ContactSection";
import MiddleSection from "../components/MiddleSection";
import MiddleSectionV2 from "../components/MiddleSectionV2";
import ReferenceSlider from "../components/ReferenceSlider";
import SocialSidebar from "../components/SocialLinks";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ HeaderBar, TopBar ve Navbar App.jsx’te olduğu için kaldırıldı */}
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
