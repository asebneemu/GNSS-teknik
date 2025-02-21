import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/resimler/resim1.jpg",
  "/resimler/resim2.jpg",
  "/resimler/resim3.jpg",
  "/resimler/resim4.jpg",
];

export default function Banner() {
  const [isLg, setIsLg] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsLg(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex items-center justify-center relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full"
        navigation={isLg} // Büyük ekranda oklar aktif
        pagination={{ clickable: true }}
        autoplay={isLg ? false : { delay: 3000, disableOnInteraction: false }} // Küçük ekranda autoplay
        loop={true} // Sonsuz döngü aktif!
        loopAdditionalSlides={1} // Daha düzgün geçişler için ekledim
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center h-auto"
          >
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
              style={{ backgroundImage: `url(${src})` }}
            >
              <div
                className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg 
             lg:absolute lg:left-1/4 lg:bottom-1/4 lg:-translate-x-1/4
             w-4/5 max-md:w-4/5 max-md:mx-auto"
                style={{ width: "30%" }}
              >
                <h2 className="text-2xl font-bold text-gray-800">
                  Başlık {index + 1}
                </h2>
                <p className="text-gray-600 mt-2 hidden lg:block">
                  Açıklama metni buraya gelecek. Açıklama metni buraya gelecek.
                  Açıklama metni buraya gelecek. Açıklama metni buraya gelecek.
                  Açıklama metni buraya gelecek. Açıklama metni buraya gelecek.
                  Açıklama metni buraya gelecek. Açıklama metni buraya gelecek.
                  Açıklama metni buraya gelecek. Açıklama metni buraya gelecek.
                  Açıklama metni buraya gelecek.
                </p>
                <button className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md">
                  Hemen Keşfet
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper buton stilleri */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important; /* LG altında okları gizle */
          }
        }

        .swiper-button-next,
        .swiper-button-prev {
          width: 80px;
          height: 80px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: white;
          color: black;
        }

        .swiper-button-next {
          right: 5%;
        }

        .swiper-button-prev {
          left: 5%;
        }

        /* Pagination noktalarını çizgi yaptım */
        .swiper-pagination-bullet {
          width: 20px;
          height: 4px;
          border-radius: 0;
          background: gray;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 40px;
          background: black;
        }
      `}</style>
    </div>
  );
}
