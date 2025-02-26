import resimBir from "/resimler/resim-orta-1.jpg";
import resimIki from "/resimler/resim-orta-2.jpg";

const MiddleSection = () => {
  return (
    <div className="py-10 my-10 w-10/12 mx-auto">
      {/* Grid Layout */}
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Görsel Alanı (Her zaman üstte olacak) */}
        <div className="grid grid-cols-5 gap-4 h-full order-1 lg:order-none">
          <div className="col-span-2 overflow-hidden">
            <img src={resimBir} alt="Drone Image 1" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-3 overflow-hidden">
            <img src={resimIki} alt="Drone Image 2" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Metin İçeriği (Her zaman altta olacak) */}
        <div className="flex flex-col gap-6 order-2 lg:order-none">
          <h4 className="text-base font-medium text-blue-600">Advanced Drones</h4>
          <h1 className="text-4xl md:text-5xl font-bold">Next-Gen Drone Technology</h1>
          <p className="text-base leading-relaxed">
            Experience the future of aerial photography with our cutting-edge drone technology.
          </p>
          <p className="text-base leading-relaxed">
            Our cutting-edge drones are designed to push the limits of aerial photography and exploration. Equipped with high-resolution cameras, real-time data processing, and AI-powered stabilization, these drones ensure unparalleled image clarity and smooth flights in any condition.
          </p>
        </div>

      </div>
    </div>
  );
};

export default MiddleSection;
