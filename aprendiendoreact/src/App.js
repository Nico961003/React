import React from "react";
import "./assets/css/App.css";
// importando un componente 
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';

function App() {
var ButtonString ="Ir al Blog";
    return (
        <div className="App">
            <Header />
            {/* uso de props o propiedades en react
            Este es el componente padre y el hijo de ejemplo es Slider.js
            */}
            <Slider 
            title="Bienvenido al curso de React con Genaro Rodriguez"
            btn={ButtonString}
            />
            <div className="center">
                <section id="content">
                   <SeccionPruebas/>
                </section>
                <Sidebar />
            </div>
            <div className="clearfix"></div>
            <Footer />
        </div >
    );
}

export default App;
