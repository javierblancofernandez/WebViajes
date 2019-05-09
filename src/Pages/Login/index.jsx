import React, { useState } from 'react';
import FormRegister from '../../component/FormRegister';
import './login.scss';

import axios from 'axios';

import {connect} from 'react-redux';
import {addUserLogin} from '../../Redux/Actions/actions';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();
        const body = {
            password,
            email
        }

        axios.post('http://localhost:8080/users/auth',body).then(res=>{
            console.log(res)
            const user ={
                ...res.data,
                token:res.headers.authorization
            };
            props.userLogin(user);
        }).catch(console.error)
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
                    <input className="button " type="submit" value="Enviar" />
                     {/* <button className="">Enviar</button> */}

                </FormRegister>
            </div>
        );
   
}
const mapStateToProps = ( state, props) => {

    return {
        user: state.user
    }
};

const mapDispatchToProps = (dispatch, props) => {

    return {
  
      userLogin: (user) => dispatch( addUserLogin( user)),
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(Login);

