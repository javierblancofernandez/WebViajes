import React, { useState } from 'react';
import useName from '../../Hooks/useName';
import { Link } from 'react-router-dom';
import FormRegister from '../../component/FormRegister';
import axios from 'axios';
import './register.scss';

function Register(props) {
    const [username, setName] = useName('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setrePassword] = useState('');



    const onSubmit = (e) => {
        e.preventDefault();
        const body = {
            username,
            password,
            email
        }
        axios.post('http://localhost:8080/user/',body).then(res=>{
            console.log(res.headers.authorization)
            localStorage.setItem('authorization',res.headers.authorization);
        }).catch(console.error)
        
    }

    const comparacion = () => {
        if (password != repassword) {
            alert('el password no coincide')

        }

    }
    return (
        <div className="registro">

            <FormRegister text="REGISTRO" onSubmit={onSubmit}>

                <Link to="/login"><p classname="registrado">Ya estas registrado</p></Link>

                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombre de usuario"
                    onChange={(e) => setName(e.target.value)}
                    value={username}
                />
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder=" Repetir Contraseña"
                    onChange={(e) => setrePassword(e.target.value)}
                    value={repassword}
                />

                <div className="authForm-conditions">
                    <input type="checkbox" name="agree" id="agree" />
                    <span>Acepto los términos y condiciones, así como la política de privacidad.</span>
                </div>
                <input className="button " type="submit" value="Enviar" onClick={comparacion}>
                </input>

            </FormRegister>
        </div>
    );
}


export default Register;