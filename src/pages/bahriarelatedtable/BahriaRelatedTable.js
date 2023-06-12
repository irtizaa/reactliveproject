import React from 'react';
import { Map } from 'react-arcgis';
//import { Scene } from '@esri/react-arcgis';
import { Row } from 'reactstrap';
import './bahriarelatedtable.css';
import BahriaRelatedTableWidget from './BahriaRelatedTableWidget';



export default class BahriaRelatedTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            viewProperties: {
                center: [67.3034, 25.0015],
                constraints : {
                    minZoom: 15,
                    maxZoom: 19
                  },
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
            relheight:'0vh'
        }
        this.updateText1 = this.updateText1
    }
    updateText1 = (height, relheight) => {
        this.setState({height, relheight })
    }
 
    render(){
        return (
            <div className="page-wrapper">
                <div className="container-fluid">
                    <Row>

                    <Map    
                        className="scene__container"
                        style={{ width: '100vw', height: this.state.height }}
                        mapProperties={{ basemap: 'satellite' }}
                        viewProperties={this.state.viewProperties}

                    >
                        
                        <BahriaRelatedTableWidget height={this.updateText1} />
                        {/* <Query />
                        <SpatialQuery />       */}
                        {/* <Date />       */}
                        {/* <RelatedTableLayers/> */}
                    </Map> 
                     {/*    <button style={{ height: '25px' }} onClick={() => this.setState({ height: '90vh', relheight: '0vh' })}>-</button> */}
                        <div className='rel' style={{height:this.state.relheight}}></div>
                    </Row>       
                
                </div>
               
            </div> 
        )  
    }
}