import React from 'react';
import { Map, Marker } from 'react-arcgis';
//import { Scene } from '@esri/react-arcgis';
import { Row } from 'reactstrap';
import './south.css';
import SouthWidget from './SouthWidget';
import SouthLayers from './SouthLayers';
import Query from './Query';
import SpatialQuery from './SpatialQuery';
import Date from './Date';
import { loadModules } from 'react-arcgis';


import SouthCustomers from '../southSummary/SouthCustomers'
import SouthNodes from '../southSummary/SouthNodes'
import SouthMetro from '../SouthInfra/MetroInfra'
import SouthMetroTest from '../SouthInfra/CoreWiseMetroInfra.js'
import { usePosition } from 'use-position';
import { View } from 'mdbreact';
import { useGeolocated } from "react-geolocated";
// import { geolocated } from "react-geolocated";
import Location from '../../../Location'
import WmsLayer from './WmsLayer';
import Test from './Test'

export default class SouthRegion extends React.Component{
    
    constructor(props) {
        super(props);
        const watch = true;
        
        this.state = {
            viewProperties: {
                center: [68.726135,  26.448580],
                // center : this.centerLat,
                constraints : {
                    minZoom: 8,
                    maxZoom: 19
                  },
                popup: {
                    dockEnabled: true,
                    dockOptions: {                       
                        buttonEnabled: true,                    
                        breakpoint: false,
                        position: "bottom-left"
                    }
                },
                 ui: {
                     components: ["zoom", "compass", "attribution"]
                 }

            },
            height: '92.5vh',
            relheight:'0vh'
        }
        this.updateText1 = this.updateText1
    }
    updateText1 = (height, relheight) => {
        this.setState({height, relheight })
    }

    componentDidMount() {
       
        navigator.geolocation.getCurrentPosition(function(position) {

            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            const centerLat =` ${lat} ${long}`

            // console.log(centerLat,"This is center")
            // console.log("Latitude is :", position.coords.latitude);
            // console.log("Longitude is :", position.coords.longitude);
          });

          
        loadModules([ "esri/Graphic"  ])
        .then(([Graphic]) => {
            const point = {
                type: "point", // autocasts as new Point()
                // longitude: coords.latitude,
                // latitude: coords.longitude
              };

              const markerSymbol = {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: [226, 119, 40],
                outline: {
                  // autocasts as new SimpleLineSymbol()
                  color: [255, 255, 255],
                  width: 2
                }
              };


                // Create a graphic and add the geometry and symbol to it
        const pointGraphic = new Graphic({
            geometry: point,
            symbol: markerSymbol
          });
            });

            const Location = ()=>{
                navigator.geolocation.getCurrentPosition(function(position) {

                    const lat = position.coords.latitude;
                    const long = position.coords.longitude;
                    const centerLat =` ${lat} ${long}`
        View.geolocation.Map(centerLat)
                    console.log(centerLat,"This is center")
                    alert("asds")
                    // console.log("Latitude is :", position.coords.latitude);
                    // console.log("Longitude is :", position.coords.longitude);
                  });
            }
    }
 
    
    render(){   
        return (
            <div className="page-wrapper">
                <div className="container-fluid">
                    <Row>
                    <Test/>
                    {/* <Map    
                        className="scene__container"
                        style={{ width: '100vw', height: this.state.height }}
                        mapProperties={{ basemap: 'satellite' }}
                        viewProperties={this.state.viewProperties}
                        center = {this.centerLat}  


                    >
                        <Location/>
                        <WmsLayer/>

                        
                    </Map>  */}
                     {/*    <button style={{ height: '25px' }} onClick={() => this.setState({ height: '90vh', relheight: '0vh' })}>-</button> */}
                        <div className='rel' style={{height:this.state.relheight}}></div>
                    </Row>       
                </div>
               
            </div> 
        )  
    }
}