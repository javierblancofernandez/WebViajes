import React from 'react';
import logo from '../../img/iconoweb.png';
import './menu.scss'
import IconRedes from '../../component/iconRedes/IconRedes'


class Menu extends React.Component {
    render() {
        return (
            <div className="nav-menu">
                <div className="logo">
                    <img src={logo} alt="logo" className="logo-img" />
                    <figcaption className="logo-name">
                       Viajes
                    </figcaption>
                </div>
                <div className="destinos">
                    <a href="#destinos">Destinos</a>
                    <a href="#aboutUs">Quienes somos</a>
                    <a href="#Donde">Donde Estamos</a>
                </div>
                <div className="redes">
                    <IconRedes />
                </div>
            </div>
        )
    }
}

export default Menu;

