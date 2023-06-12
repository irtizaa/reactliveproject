import React, { Component } from 'react';
import { Map } from 'react-arcgis';
import { Row } from 'reactstrap';
import TowerNetlayers from './TowerNetLayers'
import TowerNetWidget from './TowerNetWidget'
import TowerNetSouthLayers from './TowerNetSouthLayers'
import "./towernet.css"

export default class TowerNetRegion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewProperties: {
                center: [67.157586, 24.898499],
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
            height: '94vh',
            relheight:'20vh'
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
                            // className="scene__container"
                            // style={{ width: '100vw', height: '90.5vh' }}
                            // mapProperties={{ basemap: 'satellite' }}
                            className="scene__container"
                        style={{ width: '100vw', height: this.state.height }}
                        mapProperties={{ basemap: 'satellite' }}
                            viewProperties={{
                                // center: [68.4011, 30.1607],
                                // zoom : 6,
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
                                }
                            }             
                    >
  {/* <div className='rel' style={{height:this.state.relheight}}></div> */}
                    {/* <TowerNetlayers />  */}
                    <TowerNetSouthLayers  height={this.updateText1}/> 
                    <TowerNetWidget /> 
                    </Map>
                </Row>
                </div>
            </div>
            
            );
    }
    
}
