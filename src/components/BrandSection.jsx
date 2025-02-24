const BrandSection = () => {
    const brands = [
      { name: "STEC", logo: "/logos/stec.png" },
      { name: "Senceive", logo: "/logos/senceive.png" },
      { name: "SOKKIA", logo: "/logos/sokkia.png" },
      { name: "DJI", logo: "/logos/dji.png" },
      { name: "CHCNAV", logo: "/logos/chcnav.png" },
      { name: "Diğer Marka", logo: "/logos/other.png" },
    ];
  
    return (
      <div className="py-10 px-8 md:w-11/12 md:mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">MARKALARIMIZ</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 md:h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BrandSection;
  