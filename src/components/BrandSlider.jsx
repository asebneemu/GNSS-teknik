import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const brands = [
  { name: "STEC", logo: "/logos/stec.png" },
  { name: "Senceive", logo: "/logos/senceive.png" },
  { name: "SOKKIA", logo: "/logos/sokkia.png" },
  { name: "A", logo: "/logos/a.png" },
  { name: "DJI", logo: "/logos/dji.png" },
  { name: "CHCNAV", logo: "/logos/chcnav.png" },
  { name: "Brand 7", logo: "/logos/stec.png" },
  { name: "Brand 8", logo: "/logos/stec.png" },
  { name: "Brand 9", logo: "/logos/brand9.png" },
  { name: "Brand 10", logo: "/logos/brand10.png" },
  { name: "Brand 11", logo: "/logos/brand11.png" },
  { name: "Brand 12", logo: "/logos/brand12.png" },
  { name: "Brand 13", logo: "/logos/brand13.png" },
];

const BrandSlider = () => {
  return (
    <div className="w-10/12 mx-auto py-10 relative">
      {/* Başlık ve Oklar */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-gray-500 text-transparent bg-clip-text">
          MARKALARIMIZ
        </h2>
        <div className="flex gap-4">
          <button className="swiper-button-prev-custom w-14 h-14 bg-gray-300 rounded-lg flex items-center justify-center text-2xl">
            ❮
          </button>
          <button className="swiper-button-next-custom w-14 h-14 bg-gray-300 rounded-lg flex items-center justify-center text-2xl">
            ❯
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="w-10/12 mx-auto">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={3} // her kaydırmada 3 slayt kaydıracak
          spaceBetween={20}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[Navigation]}
          className="mySwiper my-20"
          breakpoints={{
            0: {
              slidesPerView: 3, // en küçük ekranlar için 3 resim
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3, // sm ve altı 3 resim
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 5, // md için 5 resim
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 7, // lg ve üstü için 7 resim
              spaceBetween: 20,
            },
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-16 w-auto sm:h-12 md:h-14 lg:h-16" // responsive image height
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandSlider;
