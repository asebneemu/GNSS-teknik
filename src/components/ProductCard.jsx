import { useNavigate } from "react-router-dom";

const ProductCard = ({ image, name, description, category, brand, productId }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl w-80">
      {/* Ürün Resmi */}
      <div className="relative w-full h-56 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Ürün Bilgileri */}
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>

        {/* Daha Fazla Bilgi Butonu */}
        <button
          onClick={() => navigate(`/${category}/${brand}/${productId}`)}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Daha Fazla Bilgi
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
