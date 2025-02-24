import resim1 from "../assets/featured/drone1.jfif";
import resim2 from "../assets/featured/drone2.jfif";

const FeaturedDrones = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center my-40">
      <div className="w-10/12 lg:w-8/12 flex space-x-6">
        {/* İlk div - Başlık, Açıklama ve Resim */}
        <div className="flex flex-col justify-between w-1/2">
          <div>
            <h1 className="3xs:text-2xl md:text-6xl font-bold mb-4">Öne Çıkan Drone</h1>
            <p className="3xs:text-sm md:text-lg mb-4">
              Son teknoloji drone modellerimizle keşif ve görüntüleme deneyiminizi üst seviyeye taşıyın. Profesyonel hava çekimleri ve üstün manevra kabiliyeti!
            </p>
          </div>
          <img
            src={resim1}
            alt="Drone 1"
            className="w-[450px] h-[500px] object-cover"
          />
        </div>

        {/* İkinci div - Drone Resmi */}
        <div className="w-1/2">
          <img
            src={resim2}
            alt="Drone 2"
            className="w-[450px] h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedDrones;
