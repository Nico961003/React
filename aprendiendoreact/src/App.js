import React from "react";
import "./assets/css/App.css";
// importando un componente 
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';

function hola($nombre, $edad) {
    return (
        <div>
            <h1>Hola {$nombre} </h1>
            <h2>tienes {$edad}</h2>
        </div>
    );
}


function App() {

    return (
        <div className="App">
            <Header />
            <Slider />
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
