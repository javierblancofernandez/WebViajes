import React from 'react';
import './formRegister.scss';

function FormRegister (props) {
    
   
        console.log(props)
        return (
        
                <form className="authForm" onSubmit={props.onSubmit}>
                <h2>{props.text}</h2>
                    {props.children}
                </form>
            
        );
    
}

export default FormRegister;