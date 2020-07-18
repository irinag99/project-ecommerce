import React, { useState } from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <React.Fragment>
               <form onSubmit = {() => this.props.click('email')}> 
                    <input placeholder = 'Email'/> 
                    <input placeholder = 'Contraseña'/>
                    <input type='submit' value='Enviar' />
                </form>
            </React.Fragment>
        )
    }
    
}

export default Login;
