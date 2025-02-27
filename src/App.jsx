import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ActiveNavProvider } from "./context/ActiveNavContext";
import { DataProvider } from "./context/DataContext"; // ✅ Yeni eklenen context

// Bileşenler
import HeaderBar from "./components/HeaderBar";
import TopBar from "./components/TopBar";
import NavbarMain from "./components/NavbarMain";
import NavbarSecondary from "./components/NavbarSecondary";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";

export default function App() {
  return (
    <DataProvider>
      <ActiveNavProvider>
        <Router>
          <HeaderBar />
          <TopBar />
          <NavbarMain />
          <NavbarSecondary />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/:category/:brand/:productId"
              element={<ProductDetailPage />}
            />
            <Route path="/:category/:brand" element={<ProductListPage />} />
            <Route path="/:category" element={<ProductListPage />} />
          </Routes>
        </Router>
      </ActiveNavProvider>
    </DataProvider>
  );
}
