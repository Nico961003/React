import React from "react";
// importando un mensaje que no tenga mucha funcionalidad
import MensajeEstatico from './MensajeEstatico';
class Peliculas extends React.Component {
    render() {
        return (
            <div>
                <h4>Soy el componente de peliculas</h4>
                <MensajeEstatico/>
            </div>
        );
    }
}

export default Peliculas;