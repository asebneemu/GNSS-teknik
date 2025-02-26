// src/pages/NivoPage.jsx
import HeaderBar from "../components/HeaderBar";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import NavbarSecondary from "../components/NavbarSecondary";

export default function NivoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderBar />
      <TopBar />
      <Navbar />
      <NavbarSecondary />
      <h1>NİVO Sayfası İçeriği</h1>
    </div>
  );
}
