import React from "react";
import { useRevealOnScroll } from "./useRevealOnScroll";

const Card = ({ datos }) => {
  const { title, subtitle, price, billing, features, cta, highlighted } = datos;

   useRevealOnScroll();

  return (
    <div
      data-appear
      className={`
        relative rounded-xl p-8 text-center shadow-xl
        transition-all duration-700 ease-out
        opacity-0 translate-y-10
        ${
          highlighted
            ? "bg-gradient-to-r from-[#f2e382] to-[#dfc929] text-black scale-105"
            : "bg-gradient-to-r from-[#4f4f4f] to-[#1B1B1B] text-white hover:-translate-y-2"
        }
      `}
    >
      <p
        className={`tracking-wider font-title text-3xl mb-4 ${
          highlighted ? "text-black" : "text-primary"
        }`}
      >
        {title}
      </p>

      <div className="mb-4">
        <span className="text-7xl font-title">${Math.floor(price)}</span>
        <span className="text-lg align-top">
          {price % 1 !== 0 && ".99"}
        </span>
      </div>

      <p className="text-sm mb-6">{billing}</p>
      <p className="font-semibold mb-6">{subtitle}</p>

      <ul className="text-sm space-y-2 mb-8 text-left">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

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
