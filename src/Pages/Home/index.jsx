import React from 'react';
import Header from './Header';
import QuienesSomos from './QuienesSomos';
import Estamos from './Estamos';

class Home extends React.Component {

    render() {
        return (
            
            <div className="home-container">
                <Header />
                <QuienesSomos />
                <Estamos />

            </div>
                
            

        )


    }

}






export default Home;