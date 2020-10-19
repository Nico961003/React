import React, { Component } from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom'

import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import SeccionPruebas from './components/SeccionPruebas';

class Rutas extends Component {
    
    render() {
        return(

            <BrowserRouter>

            <Switch>

                <Route exact path="/" Component={Peliculas}/>
                <Route path="/ruta-prueba" Component={SeccionPruebas}/>
                <Route path="/mi-componente" Component={MiComponente}/>

            </Switch>
            
            </BrowserRouter>
        );
    }
}


export default Rutas;