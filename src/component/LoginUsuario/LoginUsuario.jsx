import React, { useState } from 'react';
import { useContext } from "react";
import { loginContext } from "../Context/loginContext";
import {Link, useNavigate } from "react-router-dom";


class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}
import "../NavBar/navBar"
import "./LoginUsuario.css"

const LoginUsuario = () => {
  // const { cart } = useContext(dataContext);
  const [user, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const { usuario, cambiarEstado } = useContext(loginContext);
  const handleClick = () => {navegate('/')};

  const navegate = useNavigate();

  function capturar() {
    fetch("https://6477fdae362560649a2d1ba2.mockapi.io/users")
      .then(res => res.json())
      .then(res => validar(res))
  }

  function validar(res) {
    const persona = res.filter(x => (x.usuario == user && x.pass == contraseña))[0]
    if (persona != undefined) {
      cambiarEstado({
        "usuario": persona.usuario,
        "admin": persona.admin,
        "activo": true,
      })

      console.log(usuario)
      navegate("/")
    } else {
      alert("Usuario o contraseña incorrectos.")
    }

  }

  return (
    <>
    
      <div className='contenedor'>
      <button onClick={handleClick} className='Return'>
        <img src="/src/Imgs/Icono-150-150.png" 
        width="50px"
        height="50px"
        alt="" />
      </button>
        <form className='formulario'>
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
            />
          </div>
        <div className="Forget">
          <label at=""><input type="checkbox"></input>¿Recordar Usuario?</label>
            <a  href='#' className='Rememberme'>¿Olvido su contraseña?</a>
            </div>
          <div>
            <button type="button" onClick={capturar} className='boton'>Ingresar</button>
          </div>
        </form>
      </div>
      
    </>
  );
}

export default LoginUsuario;
