import React, { useContext } from 'react';
import { loginContext } from '../Context/loginContext';
import './banner.css';

export const Banner = () => {
  const { usuario } = useContext(loginContext);

  return (
    <div className="bannerContenedor">
      <div className="jumbo">
        {usuario.activo ? (
          <>
            <h3>Bienvenido de nuevo, {usuario.usuario}!</h3>
            <p>Gracias por seguir confiando en nosotros para brindarte la mayor calidad
               a la hora de brindarte nuestros servicios.</p>
          </>
        ) : (
          <>
            <h3>Únete a nosotros</h3>
            <p>
              En IA seguimos trabajando con toda, porque aquí sabemos que más
              allá de las palabras lo que cuentan son las acciones, por eso,
              seguiremos poniendo todo nuestro esfuerzo, dedicación y pasión
              para demostrarte que tú eres lo que más nos importa.
            </p>
            <button>Regístrate</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Banner;
