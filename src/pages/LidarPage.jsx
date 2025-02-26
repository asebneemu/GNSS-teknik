// src/pages/LidarPage.jsx
import HeaderBar from "../components/HeaderBar";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";

export default function LidarPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderBar />
      <TopBar />
      <Navbar />
      <h1>LİDAR Sayfası İçeriği</h1>
    </div>
  );
}
