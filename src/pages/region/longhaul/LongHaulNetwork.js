import React, { Component } from 'react';
import { Map } from 'react-arcgis';
import { Row } from 'reactstrap';
import LongHaulLayers from './LongHaulLayers'
import LongHaulWidget from './LongHaulWidget'



export default class LongHaulNetwork extends Component {

    render(){
        return(
            
            <div className="page-wrapper">
                <div className="container-fluid">
                <Row className="map">
                    <Map 
                            className="scene__container"
                            style={{ width: '100vw', height: '94.5vh' }}
                            mapProperties={{ basemap: 'satellite' }}
                            viewProperties={{
                                center: [70.3539603, 29.7763997],
                                constraints : {
                                    minZoom: 6,
                                    maxZoom: 19
                                  },
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
                        <LongHaulLayers/>
                        <LongHaulWidget/>
                
                    </Map>
                </Row>
                </div>
            </div>
            
            );
    }
    
}
