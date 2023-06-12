import React, { Component } from 'react';
import { Map } from 'react-arcgis';
import { Row } from 'reactstrap';
import CustomerAnalysisWidget from './CustomerAnalysisWidget'
import CustomerAnalysisLayers from './CustomerAnalysisLayers'
import './customeranalysis.css';
import SpatialQuery from './SpatialQuery';
import Query from './Query';
import MetroNetwork from './MetroNetwork';
import FiberAttachment from './FiberAttachmentNetwork';
import DateWidget from './DateWidget'



export default class CustomerAnalysis extends Component {

    render(){
        return(
            
            <div className="page-wrapper">
                <div className="container-fluid">
                <Row className="map">
                    <Map 
                            className="scene__container"
                            style={{ width: '100vw', height: '90.55vh' }}
                            mapProperties={{ basemap: 'satellite' }}
                            viewProperties={{
                                center: [67.4011, 25.1607],
                                zoom:10,
                                // constraints : {
                                //     minZoom: 10,
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
                   
                    {/* <CustomerAnalysisWidget/>  */}
                    {/* <CustomerAnalysisLayers/>  */}

                    <SpatialQuery/>
                    <Query/>
                    {/* <DateWidget/> */}
                    {/* <MetroNetwork/> */}
                    {/* <FiberAttachment/> */}
                   
                   
                    </Map>
                </Row>
                </div>
            </div>
            
            );
    }
    
}