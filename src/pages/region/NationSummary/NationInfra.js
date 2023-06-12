import React from 'react';
import { Collapse, Card, CardHeader, CardBody, Badge, Col, Row,} from 'reactstrap';
import { Map } from 'react-arcgis';
import { Button,Segment } from 'semantic-ui-react'


import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/serial";
import "amcharts3/amcharts/pie";
import "amcharts3/amcharts/radar";
import "amcharts3/amcharts/xy";



import Axios from 'axios';
import './Style.css'


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

        await Axios.get("http://103.31.82.102:9000/metro")
        .then(response => {
           // this.intervalLoop = setInterval(()=>{
            this.setState({
                loading: false,
                customer: response.data.result,
                TotalMetroLength :response.data.TotalMetrofiberlength.Measured_Length_km.toFixed(3),
                
                // AerialInfratotal :response.data.aeriaFiberlength
            })
            console.log(this.state.TotalMetroLength," Total Metro Data")
       // },12000) 
    })

    await   Axios.get("http://103.31.82.102:9000/fa")
    .then(response => {
       // this.intervalLoop = setInterval(()=>{
        this.setState({
            loading: false,
            customer: response.data.result,
            TotalFALength :response.data.TotalFAlength.Measured_Length_km.toFixed(3),
            
            // AerialInfratotal :response.data.aeriaFiberlength
        })
        console.log(this.state.TotalFALength," Total FA Data")
  //  },12000)
 }) 

    await Axios.get("http://103.31.82.102:9000/lh")
    .then(response => {
      //  this.intervalLoop = setInterval(()=>{
        this.setState({
            loading: false,
            customer: response.data.result,
            TotalLHLength :response.data.TotalLHfiberlength.Measured_Length_km.toFixed(3),
            
            // AerialInfratotal :response.data.aeriaFiberlength
        })
        console.log(this.state.TotalLHLength," Total LH Data")
  //  },12000)
 })


 await Axios.get("http://103.31.82.102:9000/metroAerial")
 .then(response => {
   //  this.intervalLoop = setInterval(()=>{
     this.setState({
         loading: false,
         customer: response.data.result,
         TotalmetroAerial :response.data.TotalmetroAerial.Measured_Length_km.toFixed(3),
         
         // AerialInfratotal :response.data.aeriaFiberlength
     })
     console.log(this.state.TotalmetroAerial,"Total Metro Aerial")
//  },12000)
})
  

await Axios.get("http://103.31.82.102:9000/metroBuried")
 .then(response => {
   //  this.intervalLoop = setInterval(()=>{
     this.setState({
         loading: false,
         customer: response.data.result,
         TotalmetroBuried :response.data.TotalmetroBuried.Measured_Length_km.toFixed(3),
         
         // AerialInfratotal :response.data.aeriaFiberlength
     })
     console.log(this.state.TotalmetroBuried,"Total Metro Buried")
//  },12000)
})
    }
    
    render(){
        return(
          
            <div>
             <button className="Container">     
            
             <div className="row" style={{float:"left", height: "50px"}}>
            
             &nbsp;
            
           <b style={{ textAlign:"center", color:"lightgreen", fontSize:16 }}>Total Metro Infra </b> 
              <b  style={{ color:"LightGray", fontSize:16,  textAlign:"center", marginLeft:3}}>:</b>
              <b><div className="column3"  style={{ color:"LightGray", fontSize:16,  textAlign:"center", marginLeft:13}}><b>{this.state.TotalMetroLength}</b></div></b>
              &nbsp; &nbsp;  

              &nbsp;
            
            <b style={{ textAlign:"center", color:"lightgreen", fontSize:16 }}>Total FA Infra </b> 
               <b  style={{ color:"LightGray", fontSize:16,  textAlign:"center", marginLeft:3}}>:</b>
               <b><div className="column3"  style={{ color:"LightGray", fontSize:16,  textAlign:"center", marginLeft:13}}><b>{this.state.TotalFALength}</b></div></b>
               &nbsp; &nbsp; 

                     
             &nbsp;
                       
            <b style={{ textAlign:"center", color:"lightgreen", fontSize:16 }}>Total LH Infra </b> 
               <b  style={{ color:"LightGray", fontSize:16,  textAlign:"center", marginLeft:3}}>:</b>
               <b><div className="column3"  style={{ color:"LightGray", fontSize:16,  textAlign:"center", marginLeft:13}}><b>{this.state.TotalLHLength}</b></div></b>
               &nbsp; &nbsp;  
           

         </div><br/>

           
           
    </button>  
    
{/* <button className="Aerial">
      <div className="row" style={{float:"left", height: "50px"}}>
            
          
                     
             &nbsp;
            
            <b style={{ textAlign:"center", color:"lightgreen", fontSize:16 }}>Metro Aerial</b> 
               <b  style={{ color:"LightGray", fontSize:16,  textAlign:"center", marginLeft:3}}>:</b>
               <b><div className="column3"  style={{ color:"LightGray", fontSize:16,  textAlign:"center", marginLeft:13}}><b>{this.state.TotalmetroAerial}</b></div></b>
               &nbsp; &nbsp;  
           
               &nbsp;
            
            <b style={{ textAlign:"center", color:"lightgreen", fontSize:16 }}>Metro Buried</b> 
               <b  style={{ color:"LightGray", fontSize:16,  textAlign:"center", marginLeft:3}}>:</b>
               <b><div className="column3"  style={{ color:"LightGray", fontSize:16,  textAlign:"center", marginLeft:13}}><b>{this.state.TotalmetroBuried}</b></div></b>
               &nbsp; &nbsp;  
           

         </div><br/>
</button> */}
          </div>
        )
    }
}