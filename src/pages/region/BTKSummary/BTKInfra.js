import React from 'react';
import { Collapse,Button, Card, CardHeader, CardBody, Badge, Col, Row,} from 'reactstrap';
import { Map } from 'react-arcgis';



import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/serial";
import "amcharts3/amcharts/pie";
import "amcharts3/amcharts/radar";
import "amcharts3/amcharts/xy";



import Axios from 'axios';
import './btk.css'


var GeoJSON = require('geojson');



// import bar1 from './LHChart.json'
export default class MainpageTest extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            
            sum:0,
            count:0,
            data: [
                ['Task', 'Active customers'],
                ['South', 4398],
                ['North', 1803],
                ['central',2350]
            ]
        }
    }
    async  componentDidMount() {
        let view = this.props.view;
        let map = this.props.map;

        await Axios.get("http://103.31.82.102:8400/metro")
        .then(response => {
            this.setState({
                loading: false,
               // customer: response.data.result,
            //    TestInfratotal :response.data.result.Calculated_Length_km,
             MetroInfratotal :response.data.Metrofiberlength.Measured_Length_km.toFixed(1),
           // MetroInfratotal :response.data.Metrofiberlength.Measured_Length_km,
                // AerialInfratotal :response.data.aeriaFiberlength
            })
            console.log(this.state.MetroInfratotal,"BTK Metro")
        })


        await Axios.get("http://103.31.82.102:8400/fa")
        .then(response => {
            this.setState({
                loading: false,
               // customer: response.data.result,
            //    TestInfratotal :response.data.result.Calculated_Length_km,
            BTKFA :response.data.FAlength.Measured_Length_km.toFixed(1),
                
                // AerialInfratotal :response.data.aeriaFiberlength
            })
            console.log(this.state.BTKFA,"BTK FA Metro")
        })


    }
    
    render(){
        return(
          

             <button className="BTKInfra">     
             {/* <b style={{ textAlign:"center", color:"SkyBlue",  fontSize:17 }}><strong>Metro Infra </strong><br/></b> */}
             <div className="row" style={{float:"left", padding:1}}>
             {/* <b style={{ marginLeft:4,textAlign:"center", color:"GreenYellow",  fontSize:12 }}><strong>Cell Sites</strong><br/></b> */}
           &nbsp; 
           <b style={{ textAlign:"center", color:"lightgreen", fontSize:16 }}>Metro Total</b> 
              
              <b><div className="column3"  style={{ color:"LightGray", fontSize:16,  textAlign:"center", marginLeft:13}}><b>{this.state.MetroInfratotal} KM</b></div></b>
              &nbsp; &nbsp;  

               <b style={{ textAlign:"center", color:"lightgreen", fontSize:16 }}>FA Total</b> 
              
              <b><div className="column3"  style={{ color:"LightGray", fontSize:16,  textAlign:"center", marginLeft:13}}><b>{this.state.BTKFA} KM</b></div></b>
              &nbsp; 
         </div><br/>

         
  
         {/* <div className="row" style={{float:"left", padding:1}}>
            
             &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
              <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Metro Total</b> 
              &nbsp;
              <b><div className="column3"  style={{ color:"LightGray", fontSize:13, float:"left", textAlign:"center", marginLeft:13}}>{this.state.MetroInfratotal}</div></b>
              &nbsp; 
         
        </div> */}
           
    </button>  
        )
    }
}