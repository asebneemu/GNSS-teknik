import { useParams } from "react-router-dom";

export default function ProductListPage() {
  const { category, brand } = useParams();

  return (
    <div className="w-[80%] mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">
        {category && brand
          ? `${category.toUpperCase()} - ${brand.toUpperCase()} Ürünleri`
          : `${category?.toUpperCase()} Kategorisi`}
      </h1>

      {/* ✅ Ürünler burada kategori ve markaya göre listelenecek */}
      {brand ? (
        <p className="text-lg">"{brand.toUpperCase()}" markasına ait ürünler listelenecek.</p>
      ) : (
        <p className="text-lg">"{category?.toUpperCase()}" kategorisine ait ürünler listelenecek.</p>
      )}
    </div>
  );
}
