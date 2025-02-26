// src/pages/GnssPage.jsx
import HeaderBar from "../components/HeaderBar";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";

export default function GnssPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderBar />
      <TopBar />
      <Navbar />
      <h1>GNSS Sayfası İçeriği</h1>
    </div>
  );
}
