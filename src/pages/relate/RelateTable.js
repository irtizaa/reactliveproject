import React, { Component } from 'react';
import { Map } from 'react-arcgis';
import { Row } from 'reactstrap';
// import { loadModules } from 'react-arcgis'
import RelateTableLayers from './RelateTableLayers'
import RelateWidget from './RelateWidget'
import './relate.css';



export default class RelateTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewProperties: {
                center: [68.589073, 26.092168],
                zoom:6,
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
            height: '90.5vh',
            relheight:'0vh'
        }
        this.updateText1 = this.updateText1
    }
    updateText1 = (height, relheight) => {
        this.setState({height, relheight })
    }
 


    render(){
        return(
            
            <div className="page-wrapper">
                <div className="container-fluid">
                <Row className="map">
                    <Map 
                            className="scene__container"
                            style={{ width: '100vw', height: '90vh' }}
                            mapProperties={{ basemap: 'satellite' }}
                            viewProperties={{
                                center: [67.107377,24.807459],
                                zoom: 13,
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
                      
                      <RelateTableLayers/>
                       <RelateWidget/>
                
                    </Map>
                    <div className='rel' style={{height:this.state.relheight}}></div>
                </Row>
                </div>
            </div>
            
            );
    }
    
}
