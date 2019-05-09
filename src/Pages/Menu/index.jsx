import React from 'react';
import logo from '../../img/iconoweb.png';
import { NavLink,Link } from 'react-router-dom';
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
                    <Link to="/#travels">Destinos</Link>
                    <Link to="/#quienesomos">Quienes somos</Link>
                    <Link to="/#donde">Donde Estamos</Link>

                    <NavLink to="/login">LoginIn</NavLink>
                    <a href="#Login">LoginOut</a>

                </div>  
                <div className="redes">
                    <IconRedes />
                </div>
            </div>
        )
    }
}

export default Menu;

