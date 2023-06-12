import React,{ Component } from 'react';  
import { Link, Redirect } from 'react-router-dom';
// import './login.css';

import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Mainpage from '../pages/main/Mainpage'
import Locate from '../Locate'



export default class Admin extends Component{

    constructor(props){   
        super(props)  
        const token = localStorage.getItem("token")  
          
        let loggedIn = true
        if(token == null){
            loggedIn = false
        }

        this.state = {
            loggedIn
        }
    }
render(){
    if(this.state.loggedIn === false){  
        return <Redirect to ="/"/>
    }
    return(
        // <div>
        // <h1>this is Admin Page</h1>
        // <Link to ="/logout">logout</Link>
        // </div>

        <div id="main-wrapper">
        
        {/* <Locate/> */}
        <Header/>  
        <Dashboard/>
        <Sidebar/>
        {/* <Mainpage/> */}
        {/* <Link to ="/logout">logout</Link> */}
    </div>       
    )
}
}