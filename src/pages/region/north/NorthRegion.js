import React from 'react';
import { Map } from 'react-arcgis';
import { Row } from 'reactstrap'
import NorthLayer from './NorthLayer'
import NorthWidget from './NorthWidget'

import NorthCustomers from '../NorthSummary/NorthCustomers'
import NorthNodes from '../NorthSummary/NorthNodes'

class NorthRegion extends React.Component{

    render(){
        return(
            <div className="page-wrapper">
                <div className="container-fluid">
                    <Row ClassName="map">
                        <Map  className="scene_container"
                              style={{ width: '100vw', height: '88.5vh' }}
                              mapProperties={{ basemap: 'satellite' }}
                              viewProperties={{
                                center: [71.644854, 31.668737],
                                zoom: 7.1,
                                // constraints : {
                                //     minZoom: 9,
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

                         <NorthLayer/>  
                         <NorthWidget/>

                         {/* <NorthCustomers/>
                         <NorthNodes/> */}
                        </Map>
                    </Row>
                 </div>
            </div>
        )
    }
}

export default NorthRegion;