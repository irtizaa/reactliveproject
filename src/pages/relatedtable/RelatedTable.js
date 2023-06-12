import React from 'react';
import { Map } from 'react-arcgis';
//import { Scene } from '@esri/react-arcgis';
import { Row } from 'reactstrap';
import './relatedtable.css';
import RelatedTableWidget from './RelatedTableWidget';



export default class RelatedTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            viewProperties: {
                center: [68.726135,  26.448580],
                constraints : {
                    minZoom: 8,
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
            height: '95.5vh',
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
                        
                        <RelatedTableWidget height={this.updateText1} />
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