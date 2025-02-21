import Banner from "./components/Banner";
import HeaderBar from "./components/HeaderBar";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderBar />
      <TopBar />
      <Navbar />
      
      {/* Banner ayrı bir alan olarak */}

      <Banner />
      <div className="w-full h-[700px]">İçerik</div>
      <div className="w-full h-[700px]">İçerik</div>
      <div className="w-full h-[700px]">İçerik</div>
      <div className="w-full h-[700px]">İçerik</div>
      <div className="w-full h-[700px]">İçerik</div>
      <div className="w-full h-[700px]">İçerik</div>
      <div className="w-full h-[700px]">İçerik</div>
      <div className="w-full h-[700px]">İçerik</div>
    </div>
  );
}
