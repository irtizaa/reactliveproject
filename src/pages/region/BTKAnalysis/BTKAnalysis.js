import React, { Component } from 'react';
import { Map } from 'react-arcgis';
import { Row } from 'reactstrap';
import BTKAnalysisWidget from './BTKAnalysisWidget'
import './customeranalysis.css';
import SpatialQuery from './SpatialQuery';
import Query from './Query';
import MetroNetwork from './MetroNetwork';
import FiberAttachment from './FiberAttachmentNetwork';
import DateWidget from './DateWidget';
import DateWiseCustomer from './DateWiseCustomer'



export default class BTKAnalysis extends Component {

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
                                center: [67.32910, 25.03795],
                                zoom:13,
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
                    {/* <MetroNetwork/> */}

                    {/* <BTKAnalysisWidget/>  */}

                    <SpatialQuery/>

                    {/* <DateWidget/> */}

                    {/* <Query/> */}

                    
                    {/* <DateWiseCustomer/> */}

                {/* <FiberAttachment/> */}
                   
                   
                    </Map>
                </Row>
                </div>
            </div>
            
            );
    }
    
}