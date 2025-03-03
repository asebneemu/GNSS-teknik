import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ActiveNavProvider } from "./context/ActiveNavContext";
import { DataProvider } from "./context/DataContext";
import { CompareProvider } from "./context/CompareContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Sayfa Bileşenleri
import HeaderBar from "./components/HeaderBar";
import TopBar from "./components/TopBar";
import NavbarMain from "./components/NavbarMain";
import NavbarSecondary from "./components/NavbarSecondary";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ComparePage from "./pages/ComparePage";
import CompareButton from "./components/CompareButton";

export default function App() {
  return (
    <DataProvider>
      <ActiveNavProvider>
        <CompareProvider>
          <Router>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
            <HeaderBar />
            <TopBar />
            <NavbarMain />
            <NavbarSecondary />
            <CompareButton />


            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/kategori/:category" element={<CategoryPage />} />
              <Route path="/kategori/:category/:brand" element={<ProductListPage />} />
              <Route path="/:category/:brand/:productId" element={<ProductDetailPage />} />
              <Route path="/compare" element={<ComparePage />} />
            </Routes>
          </Router>
        </CompareProvider>
      </ActiveNavProvider>
    </DataProvider>
  );
}
