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

export default function HomePage() {
  const brands = [
    { name: "Autel", logo: "/logos/autel.png" },
    { name: "Benewake", logo: "/logos/benewake.png" },
    { name: "CHCNAV", logo: "/logos/chcnav.png" },
    { name: "DJI", logo: "/logos/dji.png" },
    { name: "Senceive", logo: "/logos/senceive.png" },
    { name: "SOKKIA", logo: "/logos/sokkia.png" },
    { name: "STEC", logo: "/logos/stec.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ HeaderBar, TopBar ve Navbar App.jsx’te olduğu için kaldırıldı */}
      <Banner />
      <InfoCards
        items={[
          {
            icon: "/icons/gnss.png",
            title: "GNSS Teknolojisi",
            description: "Hassas konumlandırma sistemleriyle tanışın.",
          },
          {
            icon: "/icons/lidar.png",
            title: "Lidar Sensörleri",
            description: "Üç boyutlu yüzey modelleme teknolojisi.",
          },
          {
            icon: "/icons/drone.png",
            title: "Drone Çözümleri",
            description: "Hava çekimi ve haritalama için gelişmiş sistemler.",
          },
        ]}
      />
      <FeaturedSection
        title="Yüksek Hassasiyetli Haritalama Çözümleri"
        description="Lidar ve GNSS teknolojileri modern haritalama süreçlerinde devrim yaratıyor. Özellikle arazi haritalama, şehir planlaması ve otonom araç sistemleri için yüksek hassasiyet gerektiren uygulamalarda kullanılıyor."
        imageLeft="/resimler/resim-orta-1.jpg"
        imageRight="/resimler/resim-orta-2.jpg"
      />
      <Slider title="Markalarımız" photos={brands} />
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
        description="Lidar ve GNSS teknolojileri modern haritalama süreçlerinde devrim yaratıyor. Özellikle arazi haritalama, şehir planlaması ve otonom araç sistemleri için yüksek hassasiyet gerektiren uygulamalarda kullanılıyor."
        paragraphs={[
          "GNSS sistemleri, global uydu ağları sayesinde milimetre seviyesinde konumlandırma sağlarken, Lidar teknolojisi lazer darbeleri kullanarak detaylı üç boyutlu yüzey modelleri oluşturuyor.",
          "Gelecekte akıllı şehirler ve coğrafi bilgi sistemleri (GIS) için bu teknolojilerin entegrasyonu daha da kritik hale gelecek.",
        ]}
        imageLeft="/resimler/resim-orta-1.jpg" // ✅ Büyük resim
        imageRight="/resimler/resim-orta-2.jpg" // ✅ Küçük resim
        buttonText="Detayları Keşfet"
        buttonLink="/lidar-gnss"
        layout="right" // ✅ Metin sağda, resimler solda
      />
      <TeamCards
        team={[
          {
            name: "Ali Yılmaz",
            role: "GNSS Uzmanı",
            photo: "/team/ali.jpg",
            socials: [{ icon: "🔗", link: "#" }],
          },
          {
            name: "Zeynep Kaya",
            role: "Lidar Mühendisi",
            photo: "/team/zeynep.jpg",
            socials: [{ icon: "🔗", link: "#" }],
          },
          {
            name: "Ahmet Demir",
            role: "Drone Pilot",
            photo: "/team/ahmet.jpg",
            socials: [{ icon: "🔗", link: "#" }],
          },
        ]}
      />
      <TestimonialSlider
        testimonials={[
          {
            name: "Ayşe Yıldız",
            position: "Mühendis",
            comment: "GNSS teknolojisi mükemmel çalışıyor!",
          },
          {
            name: "Mehmet Kılıç",
            position: "Arazi Haritacısı",
            comment: "Lidar sistemleri çok doğru sonuç veriyor.",
          },
          {
            name: "Fatma Demir",
            position: "Fotogrametri Uzmanı",
            comment: "Drone çözümleri harika!",
          },
        ]}
      />
      <ContactSection />

      <SocialSidebar />
    </div>
  );
}
