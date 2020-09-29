import React from "react";
import Pelicula from './Pelicula';

class Peliculas extends React.Component {


    state = {
        peliculas: [
            { titulo: "Batman vs Superman", image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2016/07/batman-v-superman-ultimate-edition.jpg?itok=OzyYHL55" },
            { titulo: "Gran torino", image: "https://www.marquid.com/wp-content/uploads/2015/05/gran-torino.jpg" },
            { titulo: "Forest Gump", image: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/23/15692551837212.jpg" },
        ],
        nombre: "Genaro Rdz N",
        favorita: {}
    };
    // actualizar un elemento en concreto
    cambiarTitulo = () => {
        // generando valor random del 0 al 3
        // var random = Math.floor (Math.random() * 3);

        var { peliculas } = this.state;
        // peliculas[random].titulo = "cambiando nombre";
        peliculas[0].titulo = "cambiando nombre";
        this.setState({
            peliculas : peliculas
        })
    }
    // heredando a clase hijo se debe de declarar en el map
    favorita = (pelicula, indice) =>{
        console.log("favorita marcada : ")
        console.log(pelicula, indice);
        this.setState({
            favorita: pelicula
        });
    }


    render() {
        var pStyle ={
            background: 'green',
            color: 'white',
            padding:'10px'
        };

        return (
            <div id="content" className="Peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Seccion de las peliculas favoritas de {this.state.nombre}</p>
                {/*} boton con evento de cambio de titulo*/}
                <p><button onClick={this.cambiarTitulo}>Cambiar titulo de Batman</button></p>
                {/* CONDICION QUE SE MUESTRE SI UNA PELICULA FUE SELECCIONADA COMO FAVORITA */
                this.state.favorita.titulo && 
                <p className="favortia" style={pStyle}><strong>La pelicula favorita es : </strong> <span>{this.state.favorita.titulo} </span></p>
                }
                
                {/* crear componente peliculas */

                    this.state.peliculas.map((pelicula, i) => {
                        return (
                            <div id="articles">
                                <Pelicula key={i} pelicula={pelicula} indice={i} marcarFavorita={this.favorita}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Peliculas;