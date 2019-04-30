import React, { useState } from 'react';
import FormRegister from '../../component/FormRegister';
import './login.scss';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();
        const body = {
            password,
            email
        }
    }
        return (
            <div className="login">

                <FormRegister text="LOGIN" onSubmit={onSubmit} >


                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="introduce tu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="introduce tu password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    {/* <input type="submit" value="Enviar" /> */}
                     <button className="">Enviar</button>

                </FormRegister>
            </div>
        );
   
}

export default Login;
