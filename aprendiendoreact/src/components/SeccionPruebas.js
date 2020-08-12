import React from 'react';
import logo from "../assets/images/logo.svg";
import MiComponente from "./MiComponente";
import Peliculas from "./Peliculas";

class SeccionPruebas extends React.Component {
    /* funcion de flecha*/
    //var holaMundo = () =>{}
    /* definir un metodoen jsx*/
    hola($nombre, $edad) {
        return (
            <div>
                <h1>Hola {$nombre} </h1>
                <h2>tienes {$edad}</h2>
            </div>
        );
    }

    render() {
        var $nombre = 'Genaro';
        var $edad = 20;
        return (
            <section id="content">
                <h2 className="subheader"> Ultimos articulos</h2>
                {this.hola($nombre, $edad)}

                <section className="componentes">
                    <MiComponente></MiComponente>
                    <MiComponente></MiComponente>
                    <MiComponente></MiComponente>
                    <Peliculas />
                </section>
            </section>
        )
    }
}

export default SeccionPruebas;