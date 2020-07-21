/*  import React, { useState } from 'react';

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

export default Login;   */
import React, { useState } from 'react';
import { json, urlencoded } from 'body-parser';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: null,
            password: null
        }
    }
    handleEmail(text) {
        this.setState({ email: text.target.value })
    }
    handlePassword(text) {
        this.setState({ password: text.target.value })
    }
/*     componentDidMount() {
        let obj = {}
        obj.email = this.state.email;
        obj.password = this.state.password


        fetch('http://localhost:3030/api/login', {
            method: 'POST',
            body: { obj },
            header: {
                "Content-Type": "x-www-form-urlencoded"
            }
        })

            .then(res => res.json())
            .then(res => console.log(res))

    } */
    signInHandler = () => {
        const url = 'http://localhost:3030/api/login'
        axios
            .post(url, {
                email: this.state.email,
                password: this.state.password
            })
            .then((user) => {
                return(
                    <Redirect to = '/'/>
                )
            })
            .catch(err => {
                console.error(err);
            });

    }

    render() {
        return (

            <React.Fragment>
                <form >
                    <input type="text" placeholder='Email' onChange={(text) => { this.handleEmail(text) }} />
                    <input type="password" placeholder='Contraseña' onChange={(text) => { this.handlePassword(text) }} />
                    <button onClick={() => { this.signInHandler() }} >Login</button>
                </form>
            </React.Fragment>
        )
    }

}

export default Login; 