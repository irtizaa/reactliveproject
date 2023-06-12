import React from 'react';
import {Card, CardHeader, CardBody, Badge, Col, Row,} from 'reactstrap';
import { Map } from 'react-arcgis';
// import { Row } from 'reactstrap'
// import ProjectLightLayers from './ProjectLightLayers'
// import ProjectLightWidgets from './ProjectLightWidgets'
// import ProjectLightWidgets from './ProejctLightWidgets'

// import Aggregation from '../aggregation/Aggregation'
// import CellSites from '../cellsites/CellSites'

// import BahawalpurCellsite from '../bahawalpur/BahawalpurCellSite'
// import BahawalpurAgg from '../bahawalpur/BahawalpurAgg'  

// import MultanCellSites  from '../multan/MultanCellSites'
// import MultanAgg  from '../multan/MultanAgg'
  
// import AbbotabadCellSite from '../abottabad/AbbotabadCellSite'
// import AbbottabadAgg from '../abottabad/AbbottabadAgg'

// import AggTotal from '../total/AggTotal'  
// import CellSiteTotal from '../total/CellSiteTotal' 




import FTTT2021Layers from './FTTT2021Layers'
import FTTT2021Widget from './FTTT2021Widgets'



import Aggregation from '../FTTT2021 Header/Karachi/Aggregation'
import CellSite from '../FTTT2021 Header/Karachi/CellSite'
import FTTT_B_Aggregation from '../FTTT2021 Header/Bahwalpur/Aggregation'
import FTTT_BahawalpurCellsite from '../FTTT2021 Header/Bahwalpur/CellSite'
import FTTT_MultanAgg from '../FTTT2021 Header/Multan/Aggregation'
import FTTT_MultanCellsites from '../FTTT2021 Header/Multan/CellSite'
import FTTT_AbbottabadAgg from '../FTTT2021 Header/abottabad/AbbottabadAgg'
import FTTT_AbbotabadCellSite from '../FTTT2021 Header/abottabad/AbbotabadCellSite'
import FTTT_AggTotal from '../FTTT2021 Header/total/AggTotal'
import FTTT_CellSitesTotal from '../FTTT2021 Header/total/CellSiteTotal'
import FTTT_SukkurCellSite from '../FTTT2021 Header/Sukkur/SukkurCellSite'
import FTTT_SukkurAgg from '../FTTT2021 Header/Sukkur/SukkurAgg'
import FTTT_SahiwalAgg from '../FTTT2021 Header/Sahiwal/SahiwalAgg'
import FTTT_SahiwalCellSite from '../FTTT2021 Header/Sahiwal/SahiwalCellSite'
import FTTT_MardanAgg from '../FTTT2021 Header/Mardan/MardanAgg'
import FTTT_MardanCellSite from '../FTTT2021 Header/Mardan/MardanCellSite'


class FTTT2021 extends React.Component{
    constructor(){
        super();  
        this.state = {   
            data: [  
                ['Task', 'Active customers'],
                ['South', 4398],
                ['North', 1803],  
                ['central',2350]
            ]  
        }  
    }  
    render(){
        return(
            <div className="page-wrapper">
                <div className="container-fluid">
            {/* <Row className="card-row">
                <Col xs="12" sm="6" md="2">
                            <Card>
                                
                                <CardBody>
                                  
                                    <div className="cardbody"  id="Lahore">  
                                        <div className="cardbody-key"><strong>Count</strong></div>  
                                        <div className="cardbody-value" id="centralTotal"></div>
                                    </div>  

                                    <div className="cardbody">
                                        <div className="cardbody-key">LitUp Sites</div>
                                        <div className="cardbody-value" id="centralMultinet"></div>
                                    </div>

                                    <div className="cardbody">
                                        <div className="cardbody-key">Pending Sites</div>
                                        <div className="cardbody-value" id="centralThirdParty"></div>
                                    </div>

                                  

                                </CardBody>
                            </Card>
                </Col>

               

             </Row> */}

                        
                    <Row ClassName="map">
                        <Map  className="scene_container"
                        style={{ width: '100vw', height: '90.8vh' }}
                            mapProperties={{ basemap: 'satellite' }}
                            viewProperties={{
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

                            }}
                        >

                            <FTTT2021Layers/>
                            <FTTT2021Widget/>



                            <Aggregation/>
                            <CellSite/>

                            {/* <FTTT_B_Aggregation/>
                            <FTTT_BahawalpurCellsite/> */}


                            <FTTT_MultanAgg/>
                            <FTTT_MultanCellsites/>


                            <FTTT_AbbottabadAgg/>
                            <FTTT_AbbotabadCellSite/>


                            <FTTT_AggTotal/>
                            <FTTT_CellSitesTotal/>

                            <FTTT_SukkurCellSite/>
                            <FTTT_SukkurAgg/>


                            <FTTT_SahiwalAgg/>
                            <FTTT_SahiwalCellSite/>


                            <FTTT_MardanAgg/>
                            <FTTT_MardanCellSite/>

                            

                          

                           {/* <ProjectLightWidgets/> */}
                        </Map>
                    </Row>
                 </div>
            </div>
        )
    }
}

export default FTTT2021;