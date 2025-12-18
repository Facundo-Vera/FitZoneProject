import { useState } from "react";
import NavItem from "../components/NavItem";

const NavBarApp = () => {
  const [open, setOpen] = useState(false);

  return (
      <nav className="shadow z-30 w-screen bg-black/80 fixed top-0">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between md:justify-center text-gray-300">

 
        <span className="md:hidden text-white font-title text-lg">
          Fit <span className="text-primary">Zone</span>
        </span>

     
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-8 capitalize">
          <NavItem href="#" active>Inicio</NavItem>
          <NavItem href="#nosotros">Sobre nosotros</NavItem>
          <NavItem href="#planes">Planes</NavItem>
          <NavItem href="#entrenadores">Entrenadores</NavItem>
          <NavItem href="https://wa.me/5491112345678" target="_blank">Contacto</NavItem>
        </div>
      </div>

 
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-6 pb-6 bg-black capitalize">
          <NavItem href="#" onClick={() => setOpen(false)}>Inicio</NavItem>
          <NavItem href="#nosotros" onClick={() => setOpen(false)}>Sobre nosotros</NavItem>
          <NavItem href="#planes" onClick={() => setOpen(false)}>Planes</NavItem>
          <NavItem href="#entrenadores" onClick={() => setOpen(false)}>Entrenadores</NavItem>
          <NavItem href="https://wa.me/5491112345678" target="_blank" onClick={() => setOpen(false)}>Contacto</NavItem>
        </div>
      </div>
    </nav>
  );
};

export default NavBarApp;
