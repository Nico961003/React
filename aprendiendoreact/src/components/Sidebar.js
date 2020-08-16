import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            <aside id="sidebar">
                <div id="nav-blog" className="sidebar-item">
                    <h3>Puedes hacer esto : </h3>
                    <a href="formulario.html" className="btn btn-success">Crear articulo</a>
                </div>

                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el articulo que buscas</p>
                    <form>
                        <input type="text" name="search" />
                        <input type="submit" name="submit" value="Buscar" class="btn" />
                    </form>
                </div>
            </aside>
     )
    }
}

export default Sidebar;