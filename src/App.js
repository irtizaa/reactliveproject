import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
// import history from "./history"
// import Header from './component/Header';
// import Sidebar from './component/Sidebar';
// import Dashboard from './component/Dashboard';


// import Login from './component/Login's
import Login from './component/Login'
import Admin from './component/Admin'
import Logout from './component/Logout'
import Tracking from './Tracking'
import Test from './pages/region/south/Test.js'
// import CustomerAnalysis from './pages/region/customeranalysis/CustomerAnalysis'

class App extends Component {
  render() {
    return (
      // <div id="main-wrapper">
      <div>
      {/* <BrowserRouter> */}    
      <HashRouter>      
      {/* <Header/> */}    
      {/* <Sidebar/> */}

      <Switch>    
    
        {/* <Route path = '/' Component={Login}/> */}
        {/* <Redirect from='/' to='/Admin'></Redirect> */}  

        <Route exact path="/" component={Login}/>
        <Route exact path="/Admin" component={Admin}/>
        <Route exact path="/Logout" component={Logout}/>  
        
        {/* <Tracking/>    */}
   {/* <Test/> */}

        {/* <Route exact path="/Dashboard" component={Dashboard}/>
        <Route exact path="/Sidebar" component={Sidebar}/>
        <Route exact path="/Header" component={Header}/> */}
        {/* <Route exact path="/CustomerAnalysis" component={CustomerAnalysis}/> */}
   

        {/* <Sidebar/> */}
        {/* <CustomerAnalysis/> */}  

          </Switch>
          {/* <Header/>
          <Dashboard/> */}
          </HashRouter>
      </div>       
    );
  }
}

export default App;
