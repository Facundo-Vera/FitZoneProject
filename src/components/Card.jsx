import React from "react";

const Card = ({ datos, id }) => {
  const { title, subtitle, price, billing, features, cta, highlighted } = datos;

  return (
    <div
      className={`
        relative rounded-xl w-auto p-8  text-center shadow-xl transition-all duration-300
        ${
          highlighted
            ? "bg-gradient-to-r from-[#f2e382] to-[#dfc929]  text-black scale-105"
            : "bg-gradient-to-r from-[#4f4f4f] to-[#1B1B1B] text-white hover:-translate-y-2"
        }
      `}
    >
      <p
        className={` tracking-wider font-title text-3xl mb-4 
        ${highlighted ? "text-black  " : "text-primary"}`}
      >
        {title}
      </p>

      <div className="mb-4">
        <span className="text-7xl lg:text-8xl font-title ">${Math.floor(price)}</span>
        <span className="text-lg align-top">{price % 1 !== 0 && ".99"}</span>
      </div>

      <p
        className={`text-sm mb-6 ${
          highlighted ? "text-black" : "text-gray-200"
        }`}
      >
        {billing}
      </p>

      <p className="font-semibold mb-6">{subtitle}</p>

      <ul className="text-sm space-y-2 mb-8 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-2 ">
            {/* <span className="text-primary "></span> */}
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* BOTÓN */}
      <button
        className={`
          w-full py-3 rounded font-bold uppercase transition
          ${
            highlighted
              ? "bg-black text-white hover:bg-neutral-900"
              : "bg-primary text-black hover:opacity-80"
          }
        `}
      >
        {cta}
      </button>
    </div>
  );
};

export default Card;
