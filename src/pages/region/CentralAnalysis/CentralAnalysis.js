import React, { Component } from 'react';
import { Map } from 'react-arcgis';
import { Row } from 'reactstrap';
import CentralAnalysisWidget from './CentralAnalysisWidget'
import './customeranalysis.css';
import SpatialQuery from './SpatialQuery';
import Query from './Query';
import MetroNetwork from './MetroNetwork';
import FiberAttachment from './FiberAttachmentNetwork';
import DateWidget from './DateWidget'
import DateWiseCustomer from './DateWiseCustomer'



export default class CentralAnalysis extends Component {

    render(){
        return(
            
            <div className="page-wrapper">
                <div className="container-fluid">
                <Row className="map">
                    <Map 
                            className="scene__container"
                            style={{ width: '100vw', height: '94vh' }}
                            mapProperties={{ basemap: 'satellite' }}
                            viewProperties={{
                                center: [74.080119, 31.474916],
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
                   
                    {/* <CentralAnalysisWidget/>  */}
                    
                    {/* <SpatialQuery/> */}
                    {/* <Query/> */}
                    {/* <DateWidget/> */}
                    <DateWiseCustomer/>
                    {/* <MetroNetwork/> */}
                {/* <FiberAttachment/> */}
                   
                   
                    </Map>
                </Row>
                </div>
            </div>
            
            );
    }
    
}