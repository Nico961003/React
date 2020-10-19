import React, { Component } from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom'

import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import SeccionPruebas from './components/SeccionPruebas';
import Error from './components/Error';

class Router extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Peliculas}></Route>
                    <Route exact path="/ruta-prueba" component={SeccionPruebas}></Route>
                    <Route exact path="/segunda-ruta" component={MiComponente}></Route>

                    <Route exact path="/pagina-1" render={() => (
                        <React.Fragment>
                        <h1> Hola mundo desde la ruta pagina 1</h1>
                        <MiComponente saludo="Hola amigo"/>
                        </React.Fragment>
                    )}></Route>

                    <Route component={Error}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
    
export default Router;