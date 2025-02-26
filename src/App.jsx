import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ActiveNavProvider } from "./context/ActiveNavContext";

// Bileşenler
import HeaderBar from "./components/HeaderBar";
import TopBar from "./components/TopBar";
import NavbarMain from "./components/NavbarMain";
import NavbarSecondary from "./components/NavbarSecondary";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage"; // ✅ Dinamik ürün listesi sayfası

export default function App() {
  return (
    <ActiveNavProvider>
      <Router>
        <HeaderBar />
        <TopBar />
        <NavbarMain />
        <NavbarSecondary />

        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* ✅ Kategori: /nivo */}
          <Route path="/:category" element={<ProductListPage />} />
          
          {/* ✅ Marka: /nivo/stec */}
          <Route path="/:category/:brand" element={<ProductListPage />} />
        </Routes>
      </Router>
    </ActiveNavProvider>
  );
}
// ✅ Artık dinamik bir ürün listesi sayfası oluşturabiliriz. Bu sayfa, kategori ve marka parametrelerine göre ürünleri listeler. Örneğin /nivo/stec gibi bir URL, "nivo" kategorisindeki "stec" markasının ürünlerini listeler.
// ✅ Bu sayfada, URL'den alınan kategori ve marka parametrelerine göre ürünleri filtreleyeceğiz. Bunun için useParams ve useLocation hook'larını kullanacağız.
  