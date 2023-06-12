import React, {Component} from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from "../history"
import routes from "../routes"


export default class Dashboard extends Component{
    render(){
        return( 
                <div>        
                    <Router history={history}>
                        <Switch>
                            <div>                       
                                {
                                    routes.map((route, index) => {
                                        return <Route key={index} {...route} />
                                    })
                                }
                            </div>
                        </Switch>
                    </Router>
                </div>      
               
            

        )
    }
}