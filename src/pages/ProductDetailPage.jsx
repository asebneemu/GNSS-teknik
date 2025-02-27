import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json";

export default function ProductDetailPage() {
  const { category, brand, productId } = useParams();
  const navigate = useNavigate();

  // URL parametrelerini küçük harfe çevir ve data içindeki değerlerle karşılaştır
  const product = data.products.find(
    (item) =>
      item.id.toString() === productId &&
      item.category.toLowerCase() === category.toLowerCase() &&
      item.brand.toLowerCase() === brand.toLowerCase()
  );

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-700">
        <h2 className="text-2xl font-semibold">Ürün Bulunamadı</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Geri Dön
        </button>
      </div>
    );
  }

  return (
    <div className="w-10/12 mx-auto py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 transition"
      >
        ← Geri Dön
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
        <div>
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
    </div>
  );
}
