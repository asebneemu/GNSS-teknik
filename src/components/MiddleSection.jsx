export default function MiddleSection({ 
  title, 
  subtitle,
  description,
  paragraphs = [],
  imageLeft, 
  imageRight, 
  buttonText, 
  buttonLink, 
  layout = "left"
}) {
  return (
    <div className="py-10 my-10 w-10/12 mx-auto">
      {/* ✅ Grid Layout - Metin %40, Resimler %60 */}
      <div className="grid lg:grid-cols-5 gap-8 items-stretch">
        
        {/* ✅ Metin İçeriği (%40) */}
        {layout === "left" ? (
          <>
            <div className="col-span-2 flex flex-col gap-6">
              {subtitle && <h4 className="text-base font-medium text-blue-600">{subtitle}</h4>}
              <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
              <p className="text-base leading-relaxed">{description}</p>
              {paragraphs.map((text, index) => (
                <p key={index} className="text-base leading-relaxed">{text}</p>
              ))}
              {buttonText && buttonLink && (
                <a 
                  href={buttonLink} 
                  className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition max-w-max whitespace-nowrap"
                >
                  {buttonText}
                </a>
              )}
            </div>

            {/* ✅ Görseller (%60) */}
            <div className="col-span-3 grid grid-cols-5 gap-4 h-full">
              <div className="col-span-2 overflow-hidden">
                <img src={imageLeft} alt="Image 1" className="w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
              <div className="col-span-3 overflow-hidden">
                <img src={imageRight} alt="Image 2" className="w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* ✅ Görseller (%60) */}
            <div className="col-span-3 grid grid-cols-5 gap-4 h-full">
              <div className="col-span-2 overflow-hidden">
                <img src={imageLeft} alt="Image 1" className="w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
              <div className="col-span-3 overflow-hidden">
                <img src={imageRight} alt="Image 2" className="w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
            </div>

            {/* ✅ Metin İçeriği (%40) */}
            <div className="col-span-2 flex flex-col gap-6">
              {subtitle && <h4 className="text-base font-medium text-blue-600">{subtitle}</h4>}
              <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
              <p className="text-base leading-relaxed">{description}</p>
              {paragraphs.map((text, index) => (
                <p key={index} className="text-base leading-relaxed">{text}</p>
              ))}
              {buttonText && buttonLink && (
                <a 
                  href={buttonLink} 
                  className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition max-w-max whitespace-nowrap"
                >
                  {buttonText}
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
