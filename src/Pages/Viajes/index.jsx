import React from 'react';
import Viaje from './viaje';

function Viajes(props) {

    return (
        <div className="container">
            <div className="row1">
                <Viaje
                    price="130"
                    offer="New York"
                    imageUrl="newyork.jpg"
                    name="newYork"
                />
                <Viaje />
                <Viaje />
            </div>
            <div className="row2">
            <Viaje
                    price="130"
                    offer="New York"
                    imageUrl="newyork.jpg"
                    name="newYork"
                />
                <Viaje />
                <Viaje />
            </div>
        </div>


    )

}



export default Viajes;