import React from 'react';
// importando  logo en una variable
import Logo from '../assets/images/React.svg';
class Header extends React.Component {
    render() {
        return (
            <header id="header">
            <div className="center">
            {/*<!--LOGO -->*/}
            <div id="logo">

                <img src={Logo} alt="logotipo" />
                {/*<!-- brand es como la marca del sitio-->*/}
                <span id="brand">
                    <strong>Curso</strong>React
                </span>

            </div>

            {/*MENU NAVEGACION -->
            <!-- Representa los links que lleva a todas las paginas y es buena practica usar 
            esa etiqueta (nav) -->}*/}
            <nav id="menu">
                <ul>
                    <li>
                        <a href="index.html">Inicio</a>
                    </li>
                    <li>
                        <a href="blog.html">Blog</a>
                    </li>
                    <li>
                        <a href="formulario.html">Formulario</a>
                    </li>
                    <li>
                        <a href="formulario.html">Pagina 1 </a>
                    </li>
                    <li>
                        <a href="formulario.html">Pagina 2</a>
                    </li>
                </ul>

            </nav>
            {/* Limpiar los flotados (para que no se cuelen datos */}
            {/* cuando se reduzca la pantalla*/}
            <div className="clearfix"></div>

        </div>
        </header>
        );
    }
}

export default Header;