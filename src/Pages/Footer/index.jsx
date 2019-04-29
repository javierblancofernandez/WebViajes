import React from 'react';
import './footer.scss'
import IconRedes from '../../component/iconRedes/IconRedes'

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <div className="contenido">
                    <div className="col1">
                        <h2>¿Necesitas Ayuda?</h2>

                        <h4>026 123 4567</h4>
                        <h4>enquiry@geekshubtravels.com</h4>

                        <p>Lun-Vie 9.30:19.00 Sab. 10.00:14.00</p>
                    </div>
                    <div className="col2">
                        <h2>INFORMACION</h2>

                        <h4>Quienes somos</h4>
                        <h4>Preguntas Frecuentes</h4>
                        <h4>Politica de privacidad</h4>
                        <h4>Condiciones generales</h4>
                        <h4>Aviso Legal</h4>
                        <h4>contacto</h4>
                        <h4>Programa de puntos</h4>
                    </div>

                    <div className="col3">
                        <h2>SUSCRIBETE A LA NEWSLETTER</h2>
                        <input type="email" placeholder="Correo electronico" />

                        <div className="redes">
                            
                                <IconRedes />
                            
                        </div>
                    </div>
                </div>
                <div className="copyright">
                <p>GeeksHubs Travels 2018.Todos los derechos reservados</p>
                </div>

            </div>

        );
    }
}



export default Footer;