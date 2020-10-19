// importamos react
import React from 'react';

// se hacen estas declaraciones para que el fichero se interprete
// como un archivo de react y poder usar toda su funcionalidad
class MiComponente extends React.Component {
    // render es el que se encarga de mostrar la vista de ese componente
    render() {

        let receta = {
            nombre: 'Pizza',
            ingredientes: ['tomate', 'queso', 'jamon'],
            calorias: 400
        };


        return (
            /*<React.Fragment>
            <h1>Hola soy Mi Componente</h1>
            <h2>solo puedo usar una etiqueta en JSX</h2>
            <h3>se soluciono con div o react.fragment</h3>
            </React.Fragment>*/
            /* <div className="mi-componente">
                 <h1>Hola soy Mi Componente</h1>
                 <h2>solo puedo usar una etiqueta en JSX</h2>
                 <h3>se soluciono con div o react.fragment</h3>
             </div>*/

            <div className="mi-componente">
                <h1>{receta.nombre}</h1>
                <h2> Ingredientes :
                    <ol>
                        {
                            // map recorre todo el array, similar a forEach
                            receta.ingredientes.map((ingredientes, i) => {
                                return (
                                    // key es importante en react ya que con ello se identifica dentro
                                    // del DOM y sirve para hacer las actualizaciones más dinamicas
                                    <li key="i">{ingredientes}</li>
                                )
                            })
                        }
                    </ol>
                </h2>
                <h3>{receta.calorias + ' calorias'} </h3>
                {this.props.saludo &&
                    <React.Fragment>
                        <h1> Desde una prop : </h1>
                        <h3>{this.props.saludo}</h3>
                    </React.Fragment>
                }
            </div>
        );
    }
}

// se exporta para poder utilizarlo en cualquier otra vista y poder 
// trabajar con el
export default MiComponente;