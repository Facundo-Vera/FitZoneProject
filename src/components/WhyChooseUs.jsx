import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook,  faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import entrenadorpersonal from "../assets/image/entrenadorpersonal.webp";

const WhyChooseUs = () => {
  return (
    <section className="bg-dark py-20 scroll-mt-24" id='nosotros'>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 lg:gap-12 items-center">

        <div>
          <h2 className="font-title text-white text-4xl md:text-5xl">
            Por qué elegir <span className="text-primary">FitZone</span>
          </h2>

          <p className="text-white mt-6 font-light">
            En FitZone no solo entrenás, te transformás. Combinamos planes personalizados, entrenadores certificados y equipamiento de primer nivel para ayudarte a alcanzar resultados reales y sostenibles.
          </p>
          <p className="text-white mt-6 font-light">
            Nuestro enfoque se adapta a tu nivel, tus objetivos y tu ritmo, en un ambiente motivador diseñado para que cada entrenamiento cuente.
          </p>
          <p className="text-white mt-6 font-light">
          Ya sea que busques mejorar tu rendimiento, ganar fuerza o cambiar tu estilo de vida, FitZone es el lugar donde empieza tu mejor versión.
          </p>
           <div className="flex items-center gap-2 mt-3 lg:mt-5">
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-primary transition"
            >
              <FontAwesomeIcon icon={faInstagram} className='lg:text-2xl'  />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="text-white hover:text-primary transition"
            >
              <FontAwesomeIcon icon={faFacebook} className='lg:text-2xl' />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="text-white hover:text-primary transition"
            >
              <FontAwesomeIcon icon={faWhatsapp} className='lg:text-2xl' />
            </a>
          </div>
        </div>
    
       <img 
          alt="Imagen de entrenador personal" 
          className="rounded-lg lg:w-4xl h-auto" 
          src={entrenadorpersonal}
          width="1200" 
          height="800"
            />

      </div>
    </section>
  );
};

export default WhyChooseUs;
