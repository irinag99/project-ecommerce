import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import styles from './login.module.css';




const Login = () => {
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
                if (user.data) {
                    localStorage.setItem('user', user.data.token)
                    setToken(user.data.token)
                } else {
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
        <div> 
            <h1> Login </h1>
        <div className = {styles.total}>
            
            <div className={styles.containerLogin}>

           
                {
                    token && <Redirect to='/' />
                }
                
                <form onSubmit={(e) => {
                    e.preventDefault();
                    signInHandler();
                }} >
                    <input type="text" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} value={email} /> <br/> 
                    <input type="password" placeholder='Contraseña' onChange={(e) => { setPassword(e.target.value) }} value={password} /> <br/>
                    <button type='submit' >Login</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login; 