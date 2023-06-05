import { Children, createContext, useEffect, useState } from "react";


export const loginContext = createContext();

const LoginProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({
        "usuario": "",
        "admin": false,
        "activo": false
    });



    const cambiarEstado = (entradaUsuario, estado) => {
        setUsuario(entradaUsuario)
        localStorage.setItem("estadoUsuario", estado)

    }

    return (
        <loginContext.Provider value={{ usuario, cambiarEstado }}>
            {children}
        </loginContext.Provider>
    );
};

export default LoginProvider; 