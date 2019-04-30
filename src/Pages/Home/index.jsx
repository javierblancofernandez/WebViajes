import React from 'react';
import Header from './Header';
import QuienesSomos from './QuienesSomos';
import Estamos from './Estamos';
import Viaje from '../Viajes/viaje'
import './home.scss';

class Home extends React.Component {

    render() {
        return (
            
            <div className="home-container">
                <Header />
                <div className="travels">
                <div className="row1">
                <Viaje
                    price="130"
                    offer="New York"
                    imgUrl="new_york.jpg"
                    name="newYork"
                />
                <Viaje />
                <Viaje />
            </div>
            <div className="row2">
            <Viaje
                    price="130"
                    offer="New York"
                    imgUrl="new_york.jpg"
                    name="newYork"
                />
                <Viaje />
                <Viaje />
            </div>

                </div>
                <QuienesSomos />
                <Estamos />

            </div>
                
            

        )


    }

}






export default Home;