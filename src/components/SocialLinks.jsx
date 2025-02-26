import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaWhatsapp, FaGlobe, FaFacebook } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Hem aşağıya hem yukarıya ok simgeleri

const SocialSidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // İçeriğin açık olup olmadığını kontrol ederiz
  const links = [
    { icon: <FaGlobe />, text: "Marketing" },
    { icon: <FaInstagram />, text: "Instagram" },
    { icon: <FaTwitter />, text: "Twitter" },
    { icon: <FaLinkedin />, text: "LinkedIn" },
    { icon: <FaFacebook />, text: "Facebook" }, 
    { icon: <FaYoutube />, text: "YouTube" },
    { icon: <FaWhatsapp />, text: "WhatsApp" },
  ];

  return (
    <div className="fixed bottom-0 right-0 w-max bg-white shadow-lg border-l border-t border-gray-300 rounded-tl-2xl px-4 py-4 z-[999]">
      {/* Aşağıya ok, gri arka plan */}
      <div
        className="absolute top-0 left-0 w-full flex justify-center py-2 cursor-pointer text-white text-xl bg-gray-300 rounded-tl-2xl"
        onClick={() => setIsOpen(!isOpen)} // Ok tıklanınca içerik açılır/kapanır
      >
        {isOpen ? <FaChevronDown /> : <FaChevronUp />} {/* Ok simgesi içerik durumuna göre değişir */}
      </div>

      {/* Sosyal medya linkleri, kutucuktan aşağıya kaydırılmış */}
      {isOpen && (
        <div className="mt-8"> {/* mt-8 ile kutucuktan aşağıya kaydırdık */}
          {links.map((link, index) => (
            <div key={index} className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg group transition-all">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black bg-opacity-80 transition-all group-hover:bg-white">
                {React.cloneElement(link.icon, { className: "text-white text-lg transition-all group-hover:text-black" })}
              </div>
              <span className="text-gray-800 text-sm lg:text-base sm:block hidden">{link.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialSidebar;
