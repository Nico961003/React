import React from 'react';

class Slider extends React.Component {
    render() {
        return (

            <div id="slider" className="slider-big">
                <h1>{this.props.title}</h1>
                {/* componente hijo de los props */}
                <a href="blog.html" class="btn-white">{this.props.btn}</a>
            </div>
        )
    }
}

export default Slider;