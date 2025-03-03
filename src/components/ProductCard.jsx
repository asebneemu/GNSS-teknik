import React from "react";
import { useNavigate } from "react-router-dom";
import { useCompare } from "../context/CompareContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { compareList, toggleCompare, isInCompare } = useCompare(); // ✅ `isInCompare` eklendi

  if (!product) {
    return null; // product undefined ise bileşeni render etme
  }

  const isCompared = isInCompare(product.id); // ✅ Güncellenmiş kontrol

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl w-80">
      {/* Ürün Resmi */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Ürün Bilgileri */}
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-2">{product.description}</p>

        {/* Daha Fazla Bilgi Butonu */}
        <button
          onClick={() =>
            navigate(`/${product.category}/${product.brand}/${product.id}`)
          }
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Daha Fazla Bilgi
        </button>

        {/* ✅ Karşılaştır Butonu */}
        <button
          onClick={() => toggleCompare(product)}
          className={`mt-4 px-4 py-2 rounded-lg text-white ${
            isCompared ? "bg-red-500" : "bg-blue-500"
          } transition`}
        >
          {isCompared ? "Kaldır" : "Karşılaştır"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
