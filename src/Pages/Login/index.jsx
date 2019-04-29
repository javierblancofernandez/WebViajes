import React from 'react';
import FormRegister from '../../component/FormRegister';
import './login.scss';

class Login extends React.Component {
    render(){
        return (
            <div className="login">
            
                <FormRegister texto="LOGIN">
                    
                    <input type="text" name="email" id="email" placeholder="Usuario o email" />
                    <input type="text" name="pasword" id="password" placeholder="Contraseña" />
                    <button className="">Enviar</button>
                    
                </FormRegister>
            </div>
        );
    }
}

export default Login;
