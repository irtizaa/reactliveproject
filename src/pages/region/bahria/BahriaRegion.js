import React, { Component } from 'react';
import { Map } from 'react-arcgis';
import { Row } from 'reactstrap';
import './bahria.css'
import BahriaLayer from './BahriaLayer';
import BahriaWidget from './BahriaWidget';

import BTKCustomers from '../BTKSummary/BTKCustomers'
import BTKNodes from '../BTKSummary/BTKNodes'


import BTKDiffCustomers from '../../main/btkSummary/BTKCustomers'



class BahriaRegion extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <div className="container-fluid">
                    <Row className="map">
                        <Map
                            className="scene__container"
                            style={{ width: '100vw', height: '88.5vh' }}
                            mapProperties={{ basemap: 'osm' }}
                            viewProperties={{
                                center: [67.3334, 25.0815],
                                constraints : {
                                    minZoom: 12,
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
                         <BahriaLayer /> 
                         <BahriaWidget /> 

                        {/* <BTKDiffCustomers/> */}
{/*                          
                         <BTKCustomers /> 
                         <BTKNodes />  */}
                        </Map>
                    </Row>
                </div>

            </div> 
        ); 
    }
}

export default BahriaRegion;
