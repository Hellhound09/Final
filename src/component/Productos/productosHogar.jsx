import { useContext } from "react";
import { dataContext } from "../Context/dataContext";
import './productos.css'
import Slider from "../Slider/Slider";

import React from 'react'
import { loginContext } from "../Context/loginContext";

const ProductosHogar = () => {
    const { dataHogar, comprarProducto } = useContext(dataContext);

    const { usuario, cambiarEstado } = useContext(loginContext);
    function validarUsuario(producto) {
        if (usuario.activo == false) {
            alert("Debe iniciar sesion.")
        } else {
            comprarProducto(producto)
        }
    }

    return dataHogar.map((producto) => {
        return (
            
            <div className="card" key={producto.id}>
                <img src={producto.img} alt="imagen" />
                <h3>{producto.name}</h3>
                <h4>{producto.price}$</h4>
                <button onClick={() => validarUsuario(producto)}>Agregar</button>
                {usuario.admin === true &&
                    <div>
                        <button onClick={() => modificarPrecioSuma(producto)}>+</button>
                        <button onClick={() => modificarPrecioResta(producto)}>-</button>
                    </div>
                }
            </div>
           
        );
    });
};

export default ProductosHogar