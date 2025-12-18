import React from "react";

const CardProfile = ({ datosPerfil }) => {
  const { nombre, especialidad, experiencia_anios, descripcion, imagen_url } =
    datosPerfil;

  return (
    <div className="relative group w-64 lg:w-80 overflow-hidden rounded-2xl ">
      <img
        src={imagen_url}
        alt={nombre}
        className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] rounded-xl bg-white/10 backdrop-blur-md p-4 text-white shadow-lg">
        <h3 className="text-lg  font-bold">{nombre}</h3>
        <p className="text-sm text-primary">{especialidad}</p>

        <div className="mt-2 text-xs opacity-80">
          <span>{experiencia_anios} años de experiencia</span>
        </div>

        <p className="mt-2 hidden text-xs group-hover:block transition-all duration-300 text-white">
          {descripcion}
        </p>
      </div>
    </div>
  );
};

export default CardProfile;
