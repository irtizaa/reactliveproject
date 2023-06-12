import React from 'react';
import { Collapse,Button, Card, CardHeader, CardBody, Badge, Col, Row,} from 'reactstrap';
import { Map } from 'react-arcgis';



import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/serial";
import "amcharts3/amcharts/pie";
import "amcharts3/amcharts/radar";
import "amcharts3/amcharts/xy";



import Axios from 'axios';
import './south.css'


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

        await Axios.get("http://103.31.82.102:8200/metro")
        .then(response => {
            this.setState({
                loading: false,
               // customer: response.data.result,
            //    TestInfratotal :response.data.result.Calculated_Length_km,
            MetroInfratotal :response.data.Metrofiberlength.Measured_Length_km.toFixed(3),
                
                // AerialInfratotal :response.data.aeriaFiberlength
            })
            console.log(this.state.MetroInfratotal,"South Metro")
        })


    
        
     
        
        await Axios.get("http://103.31.82.102:8200/metroAerial")
        .then(response => {
            this.setState({
                loading: false,
               // customer: response.data.result,
            //    TestInfratotal :response.data.result.Calculated_Length_km,
            MetroAerial :response.data.Metrofiberlength.Calculated_Length_km.toFixed(3),

                
                // AerialInfratotal :response.data.aeriaFiberlength
            })
            console.log(this.state.MetroAerial,"Metro Aerial Data")
        })

        await Axios.get("http://103.31.82.102:8200/metroBuried")
        .then(response => {
            this.setState({
                loading: false,
               // customer: response.data.result,
            //    TestInfratotal :response.data.result.Calculated_Length_km,
            MetroBuried :response.data.Metrofiberlength.Calculated_Length_km.toFixed(3),

                
                // AerialInfratotal :response.data.aeriaFiberlength
            })
            console.log(this.state.MetroBuried,"Metro Buried Data")
        })

        await Axios.get("http://103.31.82.102:8200/lh")
        .then(response => {
            this.setState({
                loading: false,
               // customer: response.data.result,
            //    TestInfratotal :response.data.result.Calculated_Length_km,
            LHInfratotal :response.data.LHfiberlength.Measured_Length_km.toFixed(3),

                
                // AerialInfratotal :response.data.aeriaFiberlength
            })
            console.log(this.state.LHInfratotal," South LH")
        })

        
        
        await Axios.get("http://103.31.82.102:8200/lhAerial")
        .then(response => {
            this.setState({
                loading: false,
               // customer: response.data.result,
            //    TestInfratotal :response.data.result.Calculated_Length_km,
            LHAerial :response.data.LHfiberlength.Calculated_Length_km.toFixed(3),

                
                // AerialInfratotal :response.data.aeriaFiberlength
            })
            console.log(this.state.LHAerial,"LH Aerial")
        })
        
        await Axios.get("http://103.31.82.102:8200/lhBuried")
        .then(response => {
            this.setState({
                loading: false,
               // customer: response.data.result,
            //    TestInfratotal :response.data.result.Calculated_Length_km,
            LHBuried :response.data.LHfiberlength.Calculated_Length_km.toFixed(3),

                
                // AerialInfratotal :response.data.aeriaFiberlength
            })
            console.log(this.state.LHBuried,"LH Buried")
        })
      
    }
    
    render(){
        return(
          

             <button className="SInfra">     
             {/* <b style={{ textAlign:"center", color:"SkyBlue",  fontSize:17 }}><strong>Metro Infra </strong><br/></b> */}
             <div className="row" style={{float:"left", padding:1}}>
             {/* <b style={{ marginLeft:4,textAlign:"center", color:"GreenYellow",  fontSize:12 }}><strong>Cell Sites</strong><br/></b> */}
             &nbsp;
              <b style={{ textAlign:"center", color:"lightgreen", fontSize:13 }}>Metro Aerial</b>  
                
             
              &nbsp; 
             <b><div  className="column3"  style={{ color:"LightGray", fontSize:13}}><b>{this.state.MetroAerial}</b></div></b> 
             
             &nbsp; 
               
             <b style={{ textAlign:"center", color:"lightgreen", fontSize:13 }}>Metro Buried</b>
             &nbsp;  
           <b>  <div  className="column3"  style={{ color:"LightGray", fontSize:13}}><b> {this.state.MetroBuried}</b></div></b> 
           &nbsp; 
           <b style={{ textAlign:"center", color:"lightgreen", fontSize:13 }}>Metro Total</b> 
              
              <b><div className="column3"  style={{ color:"LightGray", fontSize:13,  textAlign:"center", marginLeft:13}}><b>{this.state.MetroInfratotal}</b></div></b>
              &nbsp; &nbsp;    

                  <b style={{ textAlign:"center", color:"lightgreen", fontSize:13 }}>LH Aerial</b> 
                  &nbsp;
              <b><div className="column3"  style={{ color:"LightGray", fontSize:13,  textAlign:"center", marginLeft:13}}><b>{this.state.LHAerial}</b></div></b>
              &nbsp;   &nbsp;&nbsp;&nbsp;
              <b style={{ textAlign:"center", color:"lightgreen", fontSize:13 }}>LH Buried</b> 
              &nbsp;
              <b><div className="column3"  style={{ color:"LightGray", fontSize:13,  textAlign:"center", marginLeft:13}}><b>{this.state.LHBuried}</b></div></b>
              &nbsp; 
              <b style={{ textAlign:"center", color:"lightgreen", fontSize:13 }}>LH Total</b> 
              
              <b><div className="column3"  style={{ color:"LightGray", fontSize:13,  textAlign:"center", marginLeft:13}}><b>{this.state.LHInfratotal}</b></div></b>
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