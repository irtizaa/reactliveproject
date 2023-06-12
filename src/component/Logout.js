import React,{ Component } from 'react';  
import { Link } from 'react-router-dom';
// import './login.css';


export default class Logout extends Component{

    constructor(props){
        super(props)    
        localStorage.removeItem("token")
    }

render(){
    return(
        
        <div class="page-login">
        <h2>You Have Been Logout</h2>
        <Link to = "/"><h3>Login Again</h3></Link>
    </div>         
    )
}
}