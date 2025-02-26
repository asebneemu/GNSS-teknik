// src/pages/IhaPage.jsx
import HeaderBar from "../components/HeaderBar";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import NavbarSecondary from "../components/NavbarSecondary";

export default function IhaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderBar />
      <TopBar />
      <Navbar />
      <NavbarSecondary  />
      <h1>İHA Sayfası İçeriği</h1>
    </div>
  );
}
