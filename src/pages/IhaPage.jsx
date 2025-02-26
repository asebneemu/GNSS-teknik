// src/pages/IhaPage.jsx
import HeaderBar from "../components/HeaderBar";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";

export default function IhaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderBar />
      <TopBar />
      <Navbar />
      <h1>İHA Sayfası İçeriği</h1>
    </div>
  );
}
