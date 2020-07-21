import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';



const Login = () =>{
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [token, setToken] = useState(null);

    const signInHandler = () => {
        const url = 'http://localhost:3030/api/login'
        axios
            .post(url, {
                email: email,
                password: password
            })
            .then((user) => {
                if (user.data){
                    localStorage.setItem('user', user.data.token)
                    setToken(user.data.token)
                }else{
                    setEmail('')
                    setPassword('')
                    setToken(null)
                }
                
            })
            .catch(err => {
                console.error(err);
            });

    }

    return (
        <React.Fragment>

            {
                    token && <Redirect to='/'/>
                }
            <form onSubmit={(e) => { 
                e.preventDefault();
                signInHandler();
                }} >
                <input type="text" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} value={email}/>
                <input type="password" placeholder='Contraseña' onChange={(e) => {setPassword(e.target.value)}} value={password}/>
                <button type='submit' >Login</button>
            </form>
            <ul>
                <li>{email}</li>
                <li>{password}</li>
                <li>{token}</li>
            </ul>
        </React.Fragment>
    )
}

export default Login; 