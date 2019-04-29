import React from 'react';
import new_york from '../../../img/new_york.jpg'
import './viaje.scss'
function Viaje (props){
    return(
        <figure className="travel">
            <span className="travel-price">
                130€
            </span>
            <span className="travel-offer">
                Save 20€ pay only
            </span>
            <img className="travel-img" src={new_york} alt="new_york" />
            <figcaption className="travel-name">
                New York
            </figcaption>
        </figure>
    )

}


export default Viaje;