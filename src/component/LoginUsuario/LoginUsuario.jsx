import React, { useState, useContext, useEffect } from 'react';
import { loginContext } from "../Context/loginContext";
import { Link, useNavigate } from "react-router-dom";
import { FaBeer } from 'react-icons/fa';
import "../NavBar/navBar";
import "./LoginUsuario.css";

const LoginUsuario = () => {
  const [user, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [recordarUsuario, setRecordarUsuario] = useState(false);

  const { usuario, cambiarEstado } = useContext(loginContext);
  const handleClick = () => {navegate('/')};

  const navegate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('recordarUsuario');
    if (storedUser) {
      setUsuario(storedUser);
      setRecordarUsuario(true);
    }
  }, []);

  function capturar(event) {
    event.preventDefault();

    fetch("https://6477fdae362560649a2d1ba2.mockapi.io/users")
      .then(res => res.json())
      .then(res => validar(res))
  }

  function validar(res) {
    const persona = res.filter(x => (x.usuario === user && x.pass === contraseña))[0]
    if (persona !== undefined) {
      cambiarEstado({
        "usuario": persona.usuario,
        "admin": persona.admin,
        "activo": true,
      });

      if (recordarUsuario) {
        localStorage.setItem('recordarUsuario', user);
      } else {
        localStorage.removeItem('recordarUsuario');
      }

      console.log(usuario);
      navegate("/");
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      capturar(e);
    }
  };

  const handleRecordarUsuario = () => {
    setRecordarUsuario(!recordarUsuario);
  };

  return (
    <>
      <div className='contenedor'>
        <button onClick={handleClick} className='Return'>
          <img
            src="/src/Imgs/Icono-150-150.png"
            width="50px"
            height="50px"
            alt=""
          />
        </button>
        <form className='formulario' onSubmit={capturar}>
          <div>
            <span className='texto'>Usuario</span>
            <input
              className='inputs'
              type="text"
              value={user}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div>
            <span className='texto'>Contraseña</span>
            <input
              className='inputs'
              type="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="Forget">
            <label>
              <input
                type="checkbox"
                checked={recordarUsuario}
                onChange={handleRecordarUsuario}
              />
              ¿Recordar Usuario?
            </label>
            <a href='#' className='Rememberme'>¿Olvidó su contraseña?</a>
          </div>
          <div>
            <button type="submit" className='boton'>Ingresar</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginUsuario;
