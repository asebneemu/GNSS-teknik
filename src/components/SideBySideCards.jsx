const SideBySideCards = ({ leftTitle, leftText, leftImage, rightTitle, rightText, rightImage }) => {
    return (
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
        {/* Sol Kart */}
        <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img src={leftImage} alt={leftTitle} className="w-40 h-40 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold text-gray-800">{leftTitle}</h3>
          <p className="text-sm text-gray-600 mt-2">{leftText}</p>
        </div>
  
        {/* Sağ Kart */}
        <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img src={rightImage} alt={rightTitle} className="w-40 h-40 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold text-gray-800">{rightTitle}</h3>
          <p className="text-sm text-gray-600 mt-2">{rightText}</p>
        </div>
      </div>
    );
  };
  
  export default SideBySideCards;
  