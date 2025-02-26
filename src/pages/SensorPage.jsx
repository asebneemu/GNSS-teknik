// src/pages/SensorPage.jsx
import HeaderBar from "../components/HeaderBar";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";

export default function SensorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderBar />
      <TopBar />
      <Navbar />
      <h1>SENSÖR Sayfası İçeriği</h1>
    </div>
  );
}
