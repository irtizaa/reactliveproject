import React,{ Component } from 'react';  
import { Redirect } from 'react-router-dom';
import './login.css';


export default class Login extends Component{

    
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        
        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
        this.state={
            username : '',
            password : '',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
     refreshPage() {
        window.location.reload(false);
      }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
 
    submitForm(e){
        e.preventDefault() 
        const {username , password } = this.state

        if(username === "gis_admin" && password === "GA!@#1"){ 
            localStorage.setItem("token", "asdsaasdqececsacascasc")
            this.setState({
                loggedIn: true
            })
        }else if(username === "Gis_admin" && password === "GA!@#1"){ 
            localStorage.setItem("token", "asdsaasdqececsacascasc")
            this.setState({
                loggedIn: true
            })
        }else if(username === "" && password === ""){ 
            alert("Enter Credentials") 
        }
        
        else{ 
            alert("wrong Credentials")
        }
    }

    
render(){
    if(this.state.loggedIn){
        return <Redirect exact to ="/admin"/>
    }
    return(
        <div>
               
                <form onSubmit ={this.submitForm}>
                {/* <form class="ui loading form">    */}
                <div class="page-login">
                    
                <h1>GIS Portal</h1>
                {/* <div class="container"> */}
                <label for="uname"><b>Username</b>
                    <input type="text"  name="username" placeholder="User Name" value={this.state.username} onChange={this.onChange}/>
                     <br/></label>
                     <label for="psw"><b>Password</b>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
                    <br/></label>
                    <input className="button" onClick={() => window.location.reload(false)} type="submit" value="Submit"/>
                    {/* <input class="ui primary labeled icon button" type="submit"/> */}
                    </div>
                </form>
            </div>
    )
}

}