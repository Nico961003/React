import React from 'react';
import MiComponente from "./MiComponente";
import Peliculas from "./Peliculas";

class SeccionPruebas extends React.Component {
    contador = 0;

    // estado en React se usa para los componentes que seran dinamicos
    /* constructor(props) {
         super(props);
 
         this.state = {
             contador: 0
         };
     }*/

    state = {
        contador: 0
    };

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

    sumar(e) {
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    restar = (e) => {
        this.setState({
            contador: (this.state.contador - 1)
        });
    }

    render() {
        var $nombre = 'Genaro';
        var $edad = 20;
        return (
            <section id="content">
                <h2 className="subheader"> Funciones y JSX básico</h2>
                {this.hola($nombre, $edad)}
                <h2 className="subheader"> Componentes</h2>
                <section className="componentes">
                    <MiComponente></MiComponente>
                    <Peliculas />
                </section>
                <h2 className="subheader"> Estado</h2>
                <p>
                    Cuenta : {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar.bind(this)} />
                    <input type="button" value="Restar" onClick={this.restar} />
                </p>
            </section>
        )
    }
}

export default SeccionPruebas;