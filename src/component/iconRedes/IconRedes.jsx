import React from 'react';
import './iconRedes.scss'

class IconRedes extends React.Component{
    render(){
    return (
        <div>
            <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                        {/* <SocialIcon iconName="twitter" bcolor="#009dbe" /> */}
                        <i className="fab fa-twitter-square"></i>
                    </a>
                    <a href="http://whatsapp.com" target="_blank" rel="noopener noreferrer">
                        {/* <SocialIcon iconName="whatsapp" bcolor="#2fab4c" /> */}
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                        {/* <SocialIcon iconName="facebook" bcolor="#294e7c" /> */}
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                        {/* <SocialIcon iconName="instagram" bcolor="#3965a4" /> */}
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
                        {/* <SocialIcon iconName="linkedin2" bcolor="#005b80" /> */}
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
                        {/* <SocialIcon iconName="youtube" bcolor="#f22f33" /> */}
                        <i className="fab fa-youtube-square"></i>
                    </a>

        </div>

    )
    }
}


export default IconRedes;