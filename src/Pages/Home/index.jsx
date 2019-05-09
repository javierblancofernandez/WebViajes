import React from 'react';
import Header from './Header';
import QuienesSomos from './QuienesSomos';
import Estamos from './Estamos';
import Viaje from '../Viajes/viaje'
import './home.scss';
import useHash from '../../Hooks/useHash'


function Home() {

    useHash();
        return (

            <div className="home-container" >
                <Header />
                <div className="travels" id="travels">
                    <div className="row1">
                        <Viaje
                            price="500€"
                            offer="New York"
                            imgUrl="new_york.jpg"
                            name="New York"
                        />
                        <Viaje
                            price="800€"
                            offer="Beijing"
                            imgUrl="beijing.jpg"
                            name="Beijing"
                        />
                        <Viaje
                            price="600€"
                            offer="Buenos Aires"
                            imgUrl="buenos_aires.jpg"
                            name="Buenos Aires"
                        />
                    </div>
                    <div className="row2">
                        <Viaje
                            price="200€"
                            offer="Madrid"
                            imgUrl="madrid.jpg"
                            name="Madrid"
                        />
                        <Viaje
                            price="1000€"
                            offer="Tokio"
                            imgUrl="tokyo.jpg"
                            name="Tokio"
                        />
                        <Viaje
                            price="500€"
                            offer="Ciudad Mexico"
                            imgUrl="ciudad_mexico.jpg"
                            name="Ciudad Mexico"
                        />
                    </div>

                </div>
                <QuienesSomos />
                <Estamos />

            </div>


        )

}






export default Home;