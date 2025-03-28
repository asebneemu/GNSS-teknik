import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import data from "../data.json";

export default function ProductDetailPage() {
  const { category, brand, productId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Verileri normalize et
  const normalizedCategory = category ? category.replace("/", "").toLowerCase() : "";
  const normalizedBrand = brand ? brand.replace("/", "").toLowerCase() : "";
  const normalizedProductId = productId ? productId.toString() : "";

  // Doğru ürünü bul
  const product = data.products.find(
    (item) =>
      item.id.toString() === normalizedProductId &&
      item.category.toLowerCase() === normalizedCategory &&
      item.brand.toLowerCase() === normalizedBrand
  );

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-700">
        <h2 className="text-2xl font-semibold">Ürün Bulunamadı</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition"
        >
          Geri Dön
        </button>
      </div>
    );
  }

  // Varsayılan görsel ilk resmi atla, yoksa mevcut görsel
  const mainImage = selectedImage || product.images?.[1] || product.image;

  return (
    <div className="w-4/5 mx-auto py-10">
      {/* Geri Dön Butonu: Sağ Alt Köşe */}
      <button
        onClick={() => navigate(-1)}
        className="fixed bottom-5 right-5 bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition z-50"
      >
        ← Geri Dön
      </button>

      {/* Resimler ve Bilgiler */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-start">
        {/* Resimler Kısmı */}
        <div className="flex w-full md:w-1/2 items-start">
          {/* Küçük Resimler */}
          <div className="flex flex-col space-y-4 mr-4 mt-10 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {product.images?.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Small ${index + 1}`}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer transition-opacity duration-300 ${
                  mainImage === image ? "opacity-100" : "opacity-80"
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>

          {/* Büyük Resim */}
          <div className="w-[450px] h-[600px] rounded-md overflow-hidden ml-auto mr-4">
            <img
              src={mainImage}
              alt={product.name}
              className="object-cover w-full h-full cursor-pointer transition-transform duration-300"
              onClick={() => setIsModalOpen(true)} // ✅ Tıklayınca modal aç
            />
          </div>
        </div>

        {/* Ürün Bilgileri */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-lg text-gray-700 mt-4">{product.description}</p>
          {product.specs && (
            <ul className="mt-6 space-y-2">
              {product.specs.map((spec, index) => (
                <li key={index} className="text-gray-600 text-sm">
                  ✅ {spec}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Modal: Tam Ekran Resim */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
          >
            ✕
          </button>
          <img
            src={mainImage}
            alt="Tam Ekran"
            className="object-contain max-h-full max-w-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
