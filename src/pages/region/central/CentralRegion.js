import React, { Component } from 'react';
import { Map } from 'react-arcgis';
import { Row } from 'reactstrap';
import './central.css'
import CentralLayers from './CentralLayers';
import CentralWidget from './CentralWidget';


import CentralCustomersSummary from '../centralSummary/CentralCustomersSummary'
import CentralNodesSummary from '../centralSummary/CentralNodesSummary'

class CentralRegion extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <div className="container-fluid">
                    <Row className="map">
                        <Map
                            className="scene__container"
                            style={{ width: '100vw', height: '88.5vh' }}
                            mapProperties={{ basemap: 'satellite' }}
                            viewProperties={{
                                center: [72.35453, 30.97742],
                                zoom:7,
                                // constraints : {
                                //     minZoom: 7,
                                //     maxZoom: 19
                                //   },
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

                        {/* <CentralCustomersSummary/>
                        <CentralNodesSummary/> */}


                        <CentralLayers />
                        <CentralWidget />
                        </Map>
                    </Row>
                </div>

            </div> 
        );
    }
}

export default CentralRegion;
