import React from 'react';
import './formRegister.scss';

class FormRegister extends React.Component {
    
    render() {
        console.log(this.props)
        return (
        
                <form className="authForm">
                <h2>{this.props.texto}</h2>
                    {this.props.children}
                </form>
            
        );
    }
}

export default FormRegister;