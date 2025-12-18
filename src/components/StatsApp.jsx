import mujerEntrenando from "../assets/image/mujerEntrenando.jpg";
import Counter from "./Counter";

const StatsApp = () => {
  return (
    <section
      className="relative w-full h-[300px] md:h-[380px] flex items-center"
      style={{
        backgroundImage: `url(${mujerEntrenando})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">

          <div>
            <Counter end={500} suffix="+" />
            <p className=" lg:mt-8 text-sm text-gray-300 uppercase tracking-wide">
              Socios activos
            </p>
          </div>

          <div>
            <Counter end={5} />
            <p className="lg:mt-8 text-sm text-gray-300 uppercase tracking-wide">
              Años entrenando resultados
            </p>
          </div>

          <div>
            <Counter end={98} suffix="%" />
            <p className="lg:mt-8  text-sm text-gray-300 uppercase tracking-wide">
              Clientes satisfechos
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsApp;
