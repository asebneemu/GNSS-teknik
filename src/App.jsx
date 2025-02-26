import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Diğer sayfalar
import HomePage from "./pages/HomePage";
import GnssPage from "./pages/GnssPage";
import TotalStationPage from "./pages/TotalStationPage";
import IhaPage from "./pages/IhaPage";
import LidarPage from "./pages/LidarPage";
import NivoPage from "./pages/NivoPage";
import BatimetriPage from "./pages/BatimetriPage";
import MakineKontrolPage from "./pages/MakineKontrolPage";
import SensorPage from "./pages/SensorPage";
import YazilimPage from "./pages/YazilimPage";
import AksesuarPage from "./pages/AksesuarPage";

// Marka sayfaları (brands klasörü altından import)
import ChcnavPage from "./pages/brands/ChcnavPage";
import StecPage from "./pages/brands/StecPage";
import DjiPage from "./pages/brands/DjiPage";
import AutelPage from "./pages/brands/AutelPage";
import SokkiaPage from "./pages/brands/SokkiaPage";
import SenceivePage from "./pages/brands/SenceivePage";
import BenewakePage from "./pages/brands/BenewakePage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Diğer Sayfalar */}
        <Route path="/" element={<HomePage />} />
        <Route path="/gnss" element={<GnssPage />} />
        <Route path="/total-station" element={<TotalStationPage />} />
        <Route path="/iha" element={<IhaPage />} />
        <Route path="/lidar" element={<LidarPage />} />
        <Route path="/nivo" element={<NivoPage />} />
        <Route path="/batimetri" element={<BatimetriPage />} />
        <Route path="/makine-kontrol" element={<MakineKontrolPage />} />
        <Route path="/sensor" element={<SensorPage />} />
        <Route path="/yazilim" element={<YazilimPage />} />
        <Route path="/aksesuar" element={<AksesuarPage />} />

        {/* Marka Sayfaları */}
        <Route path="/chcnav" element={<ChcnavPage />} />
        <Route path="/stec" element={<StecPage />} />
        <Route path="/dji" element={<DjiPage />} />
        <Route path="/autel" element={<AutelPage />} />
        <Route path="/sokkia" element={<SokkiaPage />} />
        <Route path="/senceive" element={<SenceivePage />} />
        <Route path="/benewake" element={<BenewakePage />} />
      </Routes>
    </Router>
  );
}
