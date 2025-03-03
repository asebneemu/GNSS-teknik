import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import ProductCard from "../components/ProductCard";

const ProductListPage = ({ products }) => {
  const { category, brand } = useParams();

  const normalizedCategory = category ? category.replace("/", "") : "";
  const normalizedBrand = brand ? brand.replace("/", "") : "";

  console.log("URL'den Gelen Category:", normalizedCategory);
  console.log("URL'den Gelen Brand:", normalizedBrand);

  const filteredProducts = data.products.filter(
    (item) =>
      item.category.toLowerCase() === normalizedCategory.toLowerCase() &&
      (normalizedBrand
        ? item.brand.toLowerCase() === normalizedBrand.toLowerCase()
        : true)
  );

  console.log("Filtrelenen Ürünler:", filteredProducts);

  if (filteredProducts.length === 0) {
    return (
      <h2 className="text-center text-gray-600 text-xl mt-10">
        Ürün Bulunamadı
      </h2>
    );
  }

  return (
    <div className="w-10/12 mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        {normalizedCategory.toUpperCase()} -{" "}
        {normalizedBrand ? normalizedBrand.toUpperCase() : "Tüm Markalar"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
