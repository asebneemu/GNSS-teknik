// src/pages/HomePage.jsx
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import ContactSection from "../components/ContactSection";
import MiddleSection from "../components/MiddleSection";
import SocialSidebar from "../components/SocialLinks";
import FeaturedSection from "../components/FeaturedSection";
import InfoCards from "../components/InfoCards";
import SideBySideCards from "../components/SideBySideCards";
import TeamCards from "../components/TeamCards";
import TestimonialSlider from "../components/TestimonialSlider";
import { useData } from "../context/DataContext";

export default function HomePage() {
  const { 
    products, 
    newNavbar, 
    socialLinks, 
    infoCards,        
    teamCards,        
    testimonials,
    references         // ✅ Yeni: Referansları çek
  } = useData();

  const brands = newNavbar.map((brand) => ({
    name: brand.name,
    logo: brand.icon,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Banner />

      <InfoCards items={infoCards} />  {/* ✅ data.json'dan çekilen veriyi kullandık */}

      <Slider title="Referanslarımız" photos={references} />  {/* ✅ Referansları kullan */}
      
      <FeaturedSection
        title="Yüksek Hassasiyetli Haritalama Çözümleri"
        description="Lidar ve GNSS teknolojileri modern haritalama süreçlerinde devrim yaratıyor."
        imageLeft="/resimler/resim-orta-1.jpg"
        imageRight="/resimler/resim-orta-2.jpg"
      />

      <Slider title="Markalarımız" photos={brands} />  {/* ✅ Markalar için slider */}

      <SideBySideCards
        leftTitle="GNSS Sensörleri"
        leftText="Yüksek doğruluk sağlayan GNSS sensörlerimizle arazi ölçümlerinde fark yaratın."
        leftImage="/resimler/resim-orta-1.jpg"
        rightTitle="Lidar Haritalama"
        rightText="Lidar teknolojisiyle detaylı yüzey modelleri oluşturun."
        rightImage="/resimler/resim-orta-2.jpg"
      />

      <MiddleSection
        title="Lidar ve GNSS ile Yüksek Hassasiyetli Haritalama"
        subtitle="Advanced Drone & Mapping Tech"
        description="Lidar ve GNSS teknolojileri modern haritalama süreçlerinde devrim yaratıyor."
        paragraphs={[
          "GNSS sistemleri, global uydu ağları sayesinde milimetre seviyesinde konumlandırma sağlarken...",
          "Gelecekte akıllı şehirler ve coğrafi bilgi sistemleri (GIS) için bu teknolojilerin entegrasyonu daha da kritik hale gelecek."
        ]}
        imageLeft="/resimler/resim-orta-1.jpg"
        imageRight="/resimler/resim-orta-2.jpg"
        buttonText="Detayları Keşfet"
        buttonLink="/lidar-gnss"
        layout="right"
      />

      <TeamCards team={teamCards} />  {/* ✅ data.json'dan çekilen veriyi kullandık */}
      <TestimonialSlider testimonials={testimonials} />  {/* ✅ data.json'dan çekilen veriyi kullandık */}
      
      <ContactSection />
      <SocialSidebar socialLinks={socialLinks} />  {/* ✅ data.json'dan çekilen veriyi kullandık */}
    </div>
  );
}
