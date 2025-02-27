import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // ✅ Özel ikonlar

// Fallback (Eğer resim bozuksa)
const fallbackLogo = "/logos/default-logo.png"; 

export default function Slider({ title = "Slider Başlığı", photos = [] }) {
  return (
    <div className="relative w-10/12 mx-auto py-10 px-6 border border-gray-300 rounded-lg shadow-sm">
      {/* ✅ Başlık ve Oklar */}
      <div className="flex flex-col items-center relative mb-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">{title}</h2>

        {/* ✅ Oklar Sağ Üstte */}
        <div className="absolute top-0 right-0 flex gap-2 z-10">
          <button className="custom-prev w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center shadow-md transition-all">
            <FaChevronLeft className="text-gray-700 text-lg" />
          </button>
          <button className="custom-next w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center shadow-md transition-all">
            <FaChevronRight className="text-gray-700 text-lg" />
          </button>
        </div>
      </div>

      {/* ✅ Slider (Otomatik geçiş tamamen kapatıldı) */}
      <Swiper
        modules={[Navigation]} // ❌ Autoplay tamamen kaldırıldı
        spaceBetween={20}
        slidesPerView={5} // Büyük ekranda 5 fotoğraf gösterecek
        loop={false} // ❌ Sonsuz kaydırma kapatıldı
        navigation={{
          prevEl: ".custom-prev", // ✅ Sol ok SOLA kaydırıyor
          nextEl: ".custom-next", // ✅ Sağ ok SAĞA kaydırıyor
        }}
        speed={300} // ❌ Kaydırma süresi hızlı ve akıcı
        allowTouchMove={false} // ❌ Dokunarak kaydırmayı kapattık
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="rounded-lg"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="w-32 h-32 flex justify-center items-center bg-white shadow-lg rounded-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl">
              <img
                src={photo.logo || fallbackLogo}
                alt={photo.name}
                className="w-24 h-24 object-contain transition-opacity duration-300 hover:opacity-80"
                loading="lazy"
                onError={(e) => (e.currentTarget.src = fallbackLogo)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
