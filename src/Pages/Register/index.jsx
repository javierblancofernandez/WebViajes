import React from 'react';
import FormRegister from '../../component/FormRegister';
import './register.scss';

class Register extends React.Component {
    render(){
        return (
            <div className="registro">
            
                <FormRegister texto="REGISTRO">
                    <input type="text" name="username" id="username" placeholder="Nombre de usuario" />
                    <input type="text" name="email" id="email" placeholder="Email" />
                    <input type="text" name="pasword" id="password" placeholder="Contraseña" />
                    <input type="text" name="pasword" id="password" placeholder="Repetir Contraseña" />
                    <div className="authForm-conditions">
                        <input type="checkbox" name="agree" id="agree" />
                        <span>Acepto los términos y condiciones, así como la política de privacidad.</span>
                    </div>
                    <button className="">Enviar</button>
                    
                </FormRegister>
            </div>
        );
    }
}


export default Register;