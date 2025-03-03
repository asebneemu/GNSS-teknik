import { useParams } from "react-router-dom";
import data from "../data.json";

export default function CategoryPage() {
  const { category } = useParams();

  // ✅ Kategori açıklamalarını data.json'dan alalım
  const categoryInfo = {
    gnss: {
      title: "GNSS Teknolojisi",
      description: "GNSS (Global Navigation Satellite System), yüksek doğrulukta konum belirleme teknolojisidir. Haritacılık, jeodezi ve inşaat alanlarında kullanılır.",
      image: "/kategori-resimler/gnss.jpg",
    },
    "total-station": {
      title: "Total Station",
      description: "Total Station, lazer ölçüm teknolojisi ile hassas arazi ölçümleri yapmaya yarayan bir ölçüm cihazıdır.",
      image: "/kategori-resimler/totalstation.jpg",
    },
    iha: {
      title: "İnsansız Hava Araçları (İHA)",
      description: "İHA'lar, haritalama, tarım, güvenlik ve keşif gibi birçok alanda kullanılan gelişmiş hava araçlarıdır.",
      image: "/kategori-resimler/iha.jpg",
    },
    lidar: {
      title: "Lidar Teknolojisi",
      description: "Lidar, lazer darbeleri kullanarak mesafe ölçümü yapabilen bir teknolojidir. Haritalama ve otonom araç sistemlerinde kullanılır.",
      image: "/kategori-resimler/lidar.jpg",
    },
    // Daha fazla kategori eklenebilir
  };

  const info = categoryInfo[category] || {
    title: "Kategori Bulunamadı",
    description: "Seçtiğiniz kategori hakkında bilgi bulunmamaktadır.",
    image: "/kategori-resimler/default.jpg",
  };

  return (
    <div className="w-10/12 mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">{info.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img src={info.image} alt={info.title} className="w-full h-auto object-cover rounded-lg shadow-lg" />
        <p className="text-lg text-gray-700">{info.description}</p>
      </div>
    </div>
  );
}
