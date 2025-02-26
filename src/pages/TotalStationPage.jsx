// src/pages/TotalStationPage.jsx
import HeaderBar from "../components/HeaderBar";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import NavbarSecondary from "../components/NavbarSecondary";

export default function TotalStationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderBar />
      <TopBar />
      <Navbar />
      <NavbarSecondary />
      <h1>Total Station Sayfası İçeriği</h1>
    </div>
  );
}
