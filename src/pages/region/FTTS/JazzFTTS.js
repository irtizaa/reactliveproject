import React from 'react';
import {Card, CardHeader, CardBody, Badge, Col, Row,} from 'reactstrap';
import { Map } from 'react-arcgis';
// import { Row } from 'reactstrap'
import JazzFTTSLayers from './JazzFTTSLayers'
import JazzFTTSWidgets from './JazzFTTSWidgets'

import SialkotAgg from '../JazzFTTS Header/Sialkot/SialkotAgg'
import SialkotCell from '../JazzFTTS Header/Sialkot/SialkotCellSite'

import OkaraAgg from '../JazzFTTS Header/Okara/OkaraAgg'
import OkaraCell from '../JazzFTTS Header/Okara/OkaraCellSite'




class JazzFTTS extends React.Component{
    constructor(){
        super();  
        this.state = {   
            data: [  
                ['Task', 'Active customers'],
                ['South', 4398],
                ['North', 1803],  
                ['central',2350]
            ]  
        }  
    }  
    render(){
        return(
            <div className="page-wrapper">
                <div className="container-fluid">
         

                        
                    <Row ClassName="map">
                        <Map  className="scene_container"
                        style={{ width: '100vw', height: '94vh' }}
                            mapProperties={{ basemap: 'satellite' }}
                            viewProperties={{
                                center: [73.469114, 31.684368],
                                constraints : {
                                    minZoom: 6,
                                    maxZoom: 19
                                  },
                                  zoom:8,
                                popup: {
                                    dockEnabled: true,
                                    dockOptions: {
                                        // Disables the dock button from the popup
                                        buttonEnabled: true,
                                        // Ignore the default sizes that trigger responsive docking
                                        breakpoint: false,
                                        position: "bottom-left"
                                    }
                                }

                            }}
                        >
                           <JazzFTTSLayers/>
                           <JazzFTTSWidgets/>


                           <SialkotAgg/>
                           <SialkotCell/>

                           <OkaraAgg/>
                           <OkaraCell/>
                           
                         
                          
                        </Map>
                    </Row>
                 </div>
            </div>
        )
    }
}

export default JazzFTTS;