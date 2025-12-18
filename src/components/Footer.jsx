import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3 text-white">
        <div>
          <h2 className="font-title text-2xl mb-3">
            Fit <span className="text-primary">Zone</span>
          </h2>
          <p className="text-sm opacity-70">
            Entrenamiento personalizado para transformar tu cuerpo y tu mente.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Navegación</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <a href="#inicio" className="hover:text-primary">
                Inicio
              </a>
            </li>
            <li>
              <a href="#planes" className="hover:text-primary">
                Planes
              </a>
            </li>
            <li>
              <a href="#entrenadores" className="hover:text-primary">
                Entrenadores
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                className="hover:text-primary"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Seguinos</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-primary transition"
            >
              <FontAwesomeIcon icon={faInstagram} className="lg:text-3xl" />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="text-white hover:text-primary transition"
            >
              <FontAwesomeIcon icon={faFacebook} className="lg:text-3xl" />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="text-white hover:text-primary transition"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="lg:text-3xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-white/50 py-4 border-t border-white/10">
        © {new Date().getFullYear()} FitZone. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
