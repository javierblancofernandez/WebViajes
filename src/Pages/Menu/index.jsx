import React from 'react';
import logo from '../../img/iconoweb.png';
import { NavLink } from 'react-router-dom';
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
                    <NavLink to="/"><a href="#destinos">Destinos</a></NavLink>
                    <NavLink to="/"><a href="#quienessomos">Quienes somos</a></NavLink>
                    <NavLink to="/"><a href="#Donde">Donde Estamos</a></NavLink>
                </div>
                <div className="redes">
                    <IconRedes />
                </div>
            </div>
        )
    }
}

export default Menu;

