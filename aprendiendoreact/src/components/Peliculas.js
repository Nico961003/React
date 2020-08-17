import React from "react";

class Peliculas extends React.Component {


    state = {
        peliculas: [
            { titulo: "Batman vs Superman", image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2016/07/batman-v-superman-ultimate-edition.jpg?itok=OzyYHL55" },
            { titulo: "Gran torino", image: "https://www.marquid.com/wp-content/uploads/2015/05/gran-torino.jpg" },
            { titulo: "Forest Gump", image: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/23/15692551837212.jpg" },
        ],
        nombre: "Genaro Rdz N"
    };

    render() {
        return (
            <div id="content" className="Peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Seccion de las peliculas favoritas de {this.state.nombre}</p>

                {/* crear componente peliculas */

                    this.state.peliculas.map((pelicula, i) => {
                        return (
                            <div id="articles">
                                <article className="article-item" id="article-template">

                                    <div className="image-wrap">
                                        <img src={pelicula.image} alt={pelicula.titulo} />
                                    </div>

                                    <h2>{pelicula.titulo}</h2>
                                    <span className="date">
                                        Hace 5 minutos
                                    </span>

                                    <a href="blog.html">Leer mas</a>
                                    <div className="clearfix"></div>
                                </article>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Peliculas;