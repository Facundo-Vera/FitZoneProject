import hombreImg from "../assets/image/hombreImg.webp";
import ButtonApp from "./ButtonApp";

const HeaderApp = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        src={hombreImg}
        alt="Hombre entrenando"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center gap-6">
        <h1
          className="font-title text-white text-center
                       text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                       uppercase tracking-widest"
        >
          Transformá tu cuerpo
        </h1>
        <h1
          className="font-title text-center uppercase tracking-widest leading-none
               text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-outline">Transformá tu</span>
          <span className="text-primary p-4">vida</span>
        </h1>
        <p className="text-secondary text-center text-xs lg:text-lg ">Cada repetición te acerca a la mejor versión de vos.</p>
      <ButtonApp className="" title={"Ver planes"} background={"bg-primary"} bghover={"hover:bg-tertiary"} href={"#planes"}/>
      </div>
    </div>
  );
};

export default HeaderApp;
