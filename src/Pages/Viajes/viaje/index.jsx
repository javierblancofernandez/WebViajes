import React from 'react';

import './viaje.scss'
function Viaje(props) {

    const styleImg = {
        backgroundImage: `url('/imagenes/${props.imgUrl}')`,
        backgroundRepeat: 'no repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'


    }

    return (
        <div className="travel-container">
            <div className="travel-foto" style={styleImg}>

                <div className="precio" >
                    <p>{props.price}</p>
                </div>
                <div className="offer">
                    <p>{props.offer}</p>
                </div>
            </div>
            <div className="nombre">
                <p>{props.name}</p>
            </div>

        </div>
    )

}


export default Viaje;