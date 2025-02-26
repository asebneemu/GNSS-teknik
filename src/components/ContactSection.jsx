import {
  FaHeadset,
  FaPhoneAlt,
  FaArrowRight,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaRegEnvelope,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="w-10/12 mx-auto py-10 flex justify-center">
      {/* Ana divler */}
      <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
        {/* İlk Ana Div */}
        <div className="p-6 border border-gray-300 rounded-lg flex flex-col space-y-6">
          <div className="flex items-start justify-start">
            <FaHeadset className="text-3xl" />
          </div>
          <div className="text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Bize Her Zaman Ulaşabilirsiniz
            </h3>
          </div>
          <div className="text-left">
            <p className="text-sm sm:text-base">
              Satış ve sonrası desteğimizle müşterilerimiz her zaman
              yanındayız.
            </p>
          </div>
          <div className="flex items-start justify-start mt-auto">
            <FaPhoneAlt className="text-2xl mr-2" />
            <p>Telefon</p>
          </div>
        </div>

        {/* İkinci Ana Div */}
        <div className="p-6 border border-gray-300 rounded-lg flex flex-col space-y-6">
          <div className="flex items-start justify-start">
            <FaArrowRight className="text-3xl" />
          </div>
          <div className="text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Bizi Takip Edin
            </h3>
          </div>
          <div className="text-left">
            <p className="text-sm sm:text-base">
              Satış ve sonrası desteğimizle müşterilerimiz her zaman
              yanındayız.
            </p>
          </div>
          <div className="text-left">
            <p className="text-sm sm:text-base text-gray-700 mt-4 mb-4">
              Sosyal medya hesaplarımızdan bizi takip edebilirsiniz.
            </p>
          </div>

          <div className="flex justify-start space-x-4 mt-auto">
            <FaInstagram className="text-2xl text-black opacity-70" />
            <FaTwitter className="text-2xl text-black opacity-70" />
            <FaLinkedin className="text-2xl text-black opacity-70" />
            <FaFacebook className="text-2xl text-black opacity-70" />
            <FaYoutube className="text-2xl text-black opacity-70" />
            <FaWhatsapp className="text-2xl text-black opacity-70" />
          </div>
        </div>

        {/* Üçüncü Ana Div */}
        <div className="p-6 border border-gray-300 rounded-lg flex flex-col space-y-6">
          <div className="flex items-start justify-start">
            <FaRegEnvelope className="text-3xl" />
          </div>
          <div className="text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Bize Her Zaman Ulaşabilirsiniz
            </h3>
          </div>
          <div className="text-left">
            <p className="text-sm sm:text-base">
              Satış ve sonrası desteğimizle müşterilerimiz her zaman
              yanındayız.
            </p>
          </div>
          <div className="flex items-start justify-start mt-auto">
            <FaRegEnvelope className="text-2xl mr-2" />
            <p>info@gnss.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
