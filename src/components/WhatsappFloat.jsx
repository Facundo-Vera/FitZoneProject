import whatsappIcon from "../assets/image/icons8-whatsapp-48.png";

const WhatsappFloat = () => {
  return (
    <a
      href="https://wa.me/5491112345678"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50
               
                 transition-transform duration-300 hover:scale-110"
      aria-label="WhatsApp"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-full h-full object-contain"
      />
    </a>
  );
};

export default WhatsappFloat;
