import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import routes from '../routes';
import history from '../history';
import './header.css';
import { Link, Redirect } from 'react-router-dom';


export default class Header extends React.Component{
    render(){
        return(
            <header className="topbar" data-navbarbg="skin5">
                <nav className="navbar fixed-top top-navbar navbar-expand-md navbar-dark">
                    <div className="navbar-header" data-logobg="skin5">

                        <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close" /></a>

                        <a className="navbar-brand">

                            <b className="logo-icon p-l-10">

                                <img src="assets/images/GIS_Logo.png" alt="homepage" className="light-logo" style={{ width:"45px", align:"center"}} />
                            </b>

                            <span className="logo-text" style={{ color:'#ffffff', paddingLeft:5}}>

                                        GIS Portal
                            </span>
                            
                        </a>

                        <a className="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="ti-more" /></a>
                    </div>  

                    <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">

                        <ul className="navbar-nav float-left mr-auto">
                            <li className="nav-item d-none d-md-block"><a className="nav-link sidebartoggler waves-effect waves-light"  data-sidebartype="mini-sidebar"><i className="mdi mdi-menu font-24" /></a></li>                             
                                <Router history ={history}>
                                    <Switch>
                                      
                                        {routes.map((route) => (
                                            <Route
                                                key={route.path}
                                                path={route.path}
                                                exact={route.exact}
                                                component={route.head}
                                            />
                                        ))}
                                       
                                    </Switch>
                                            
                                </Router>
   

                           {/*  <li className="nav-item search-box"> <a className="nav-link waves-effect waves-dark" href="javascript:void(0)"><i className="ti-search" /></a>
                                <form className="app-search position-absolute">
                                    <input type="text" className="form-control" placeholder="Search & enter" /> <a className="srh-btn"><i className="ti-close" /></a>
                                </form>
                            </li> */}
                        </ul>
                        {/* <Link class="mdi mdi-logout" to ="/logout">logout</Link> */}
                    </div>
                </nav>
            </header>
        )
    }
}