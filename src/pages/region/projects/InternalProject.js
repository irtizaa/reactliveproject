import React from 'react';
import {Card, CardHeader, CardBody, Badge, Col, Row,} from 'reactstrap';
import { Map } from 'react-arcgis';
import InternalProjectLayer from './InternalProjectLayer'
import InternalProjectWidget from './InternalProjectWidget'

import InternalPorjectHeader from './InternalPorjectHeader'



class InternalProject extends React.Component{
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
                                center: [67.06083, 24.93881],
                                // constraints : {
                                //     minZoom: 6,
                                //     maxZoom: 19
                                //   },
                                zoom:14,
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
                            <InternalPorjectHeader/>
                           <InternalProjectLayer/>
                           <InternalProjectWidget/> 

                           
                           
                        </Map>
                    </Row>
                 </div>
            </div>
        )
    }
}

export default InternalProject;