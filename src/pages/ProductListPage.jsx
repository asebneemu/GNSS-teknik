import { useParams } from "react-router-dom";
import data from "../data.json";
import ProductCard from "../components/ProductCard"; // ✅ Ürün Kartını Dahil Ettik

export default function ProductListPage() {
  const { category, brand } = useParams();

  console.log("URL'den Gelen Category:", category);
  console.log("URL'den Gelen Brand:", brand);

  // Eğer `brand` undefined ise, sadece kategoriye göre filtreleme yap
  const filteredProducts = data.products.filter((item) =>
    item.category.toLowerCase() === category.toLowerCase() &&
    (brand ? item.brand.toLowerCase() === brand.toLowerCase() : true) // ✅ Eğer `brand` yoksa tüm ürünleri al
  );

  console.log("Filtrelenen Ürünler:", filteredProducts);

  if (filteredProducts.length === 0) {
    return <h2 className="text-center text-gray-600 text-xl mt-10">Ürün Bulunamadı</h2>;
  }

  return (
    <div className="w-10/12 mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        {category.toUpperCase()} - {brand ? brand.toUpperCase() : "Tüm Markalar"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            category={product.category}
            brand={product.brand}
            productId={product.id}
          />
        ))}
      </div>
    </div>
  );
}
