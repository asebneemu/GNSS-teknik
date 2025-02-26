// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

export default function App() {
  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
}
