import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com"; // ✅ EmailJS Kütüphanesi
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  return (
    <div className="w-10/12 mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Bize Ulaşın</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ContactCard
          title="Genel İletişim"
          description="Herhangi bir sorunuz varsa bizimle iletişime geçin."
          serviceId="service_general"
          templateId="template_general"
        />
        <ContactCard
          title="Teknik Destek"
          description="Ürünlerimizle ilgili teknik destek almak için bize yazabilirsiniz."
          serviceId="service_techsupport"
          templateId="template_techsupport"
        />
        <ContactCard
          title="Satış Ekibi"
          description="Ürünlerimiz ve fiyatlarımız hakkında bilgi almak için satış ekibimize ulaşın."
          serviceId="service_sales"
          templateId="template_sales"
        />
      </div>
    </div>
  );
};

const ContactCard = ({ title, description, serviceId, templateId }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsSubmitting(true);

    emailjs
      .send(
        serviceId, // ✅ EmailJS "Service ID" (EmailJS panelinden al)
        templateId, // ✅ EmailJS "Template ID" (EmailJS panelinden al)
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "YOUR_PUBLIC_KEY" // ✅ EmailJS "Public Key" (EmailJS panelinden al)
      )
      .then(() => {
        toast.success(`${title} formu başarıyla gönderildi! 📩`);
        reset(); // ✅ Formu temizle
      })
      .catch(() => {
        toast.error("Mesaj gönderilirken hata oluştu! ❌");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* ✅ İsim Alanı */}
        <input
          type="text"
          {...register("name", {
            required: "İsim alanı zorunludur",
            minLength: { value: 3, message: "İsim en az 3 karakter olmalıdır" },
          })}
          placeholder="Adınız"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        {/* ✅ Email Alanı */}
        <input
          type="email"
          {...register("email", {
            required: "Email alanı zorunludur",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Geçerli bir email girin",
            },
          })}
          placeholder="Email Adresiniz"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        {/* ✅ Mesaj Alanı */}
        <textarea
          rows="4"
          {...register("message", {
            required: "Mesaj alanı zorunludur",
            minLength: { value: 10, message: "Mesaj en az 10 karakter olmalıdır" },
          })}
          placeholder="Mesajınız"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

        {/* ✅ Gönder Butonu */}
        <button
          type="submit"
          className={`w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Gönderiliyor..." : "Gönder"}
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
