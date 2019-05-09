import React from 'react';
import './header.scss';

class Header extends React.Component {

    render() {
        return (

            <div className="container" id="home">
                <div className="isla">
                    <h1>Viaja!</h1>
                    <h3>Descubre lugares maravillosos</h3>
                    <div className="boton">
                        <button>Ver destinos</button>
                    </div>

                </div>

            </div>

        )


    }

}






export default Header;