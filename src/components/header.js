import React  from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons'

const Header = ()=>{
    return(
        <header className="header">
            <h1 className="heade_title">Lista de tareas</h1>
            <button className="header_buttom">No mostrar completadas
            <FontAwesomeIcon icon={faEyeSlash} className="header_icono-boton"/>
            </button>
        </header>
    );
}

export default Header