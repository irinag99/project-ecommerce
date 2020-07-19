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
/* import React, { useState } from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email:"gastonrberretta@gmail.com",
            password:"123123123"
        }
      }
      handleEmail(text){
          this.setState({email:text.target.value})
      }
      handlePassword(text){
        this.setState({password:text.target.value})
    }
    componentDidMount(){
        let obj = {}
        obj.email=this.state.email;
        obj.password= this.state.password
        fetch('http://localhost:3030/api/login', {
            header:{
                "content-Type": "application/json"
            },
            method: 'POST',
            body: {email: this.state.email,
                password: this.state.password}})
        .then(res => console.log(res))
    }
    render() {
        return (
            
            <React.Fragment>
               <form >
                   {console.log(this.state)} 
                    <input type = "text"  placeholder = 'Email' onChange={(text)=> {this.handleEmail(text)}} /> 
                    <input type= "password" placeholder = 'Contraseña' onChange={(text)=> {this.handlePassword(text)}}/>
                    <button onMouseOver={()=> {this.login()}} >Login</button>
                </form>
            </React.Fragment>
        )
    }
    
}

export default Login;
 */