// src/pages/brands/StecPage.jsx
import HeaderBar from "../../components/HeaderBar";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import NavbarSecondary from "../../components/NavbarSecondary";

export default function StecPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderBar />
      <TopBar />
      <Navbar />
      <NavbarSecondary />
      <h1>STEC Sayfası İçeriği</h1>
    </div>
  );
}
