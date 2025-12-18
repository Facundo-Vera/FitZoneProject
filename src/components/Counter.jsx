import { useEffect, useRef, useState } from "react";

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  // Detecta cuando entra en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect(); // se ejecuta solo una vez
        }
      },
      { threshold: 0.5 } // 50% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Animación del contador
  useEffect(() => {
    if (!started) return;

    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, end, duration]);

  return (
    <span
      ref={ref}
      className="text-primary text-4xl md:text-6xl  lg:text-6xl font-extrabold"
    >
      {count}
      {suffix}
    </span>
  );
};

export default Counter;
