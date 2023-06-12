import React from 'react';
import { Collapse,Button, Card, CardHeader, CardBody, Badge, Col, Row,} from 'reactstrap';
import { Map } from 'react-arcgis';
import './mainpage.css'
import South from './south/South';
import Central from './central/Central';
import North from './north/North';
import BTKCustomers from './btkSummary/BTKCustomers'
// import Btk from './btk/BTK';
import Mainpagewidget from './Mainpagewidget';
import Chart from 'react-google-charts';
import Complaint from './south/Complaint';
// import Graph from './Graphs/Graph'
// import BarGraph from './Graphs/BarGraph'
// import PieGraph from './Graphs/PieGraph'
// import ComposedGraph from './Graphs/ComposedGraph'
import SouthRegion from '../region/south/SouthRegion';
// import MetroInfra from '../../../src/pages/region/SouthInfra/MetroInfra'
// import SCustomer from '../../../src/pages/region/southSummary/South' 
// import CCustomer from '../../../src/pages/region/central/CentralCustomersSummary' 
// src\pages\region\SouthInfra\MetroInfra.js
import ProjectLightRegion from '../../pages/region/projectlight/ProjectLightRegion'
// /pages/region/projectlight/ProjectLightRegion

import AggTotal from '../../pages/region/total/AggTotal'  
import CellSiteTotal from '../../pages/region/total/CellSiteTotal'

import AbbotabadCellSite from '../region/abottabad/AbbotabadCellSite'



import CedarChart from "./CedarChart";

import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/serial";
import "amcharts3/amcharts/pie";
import "amcharts3/amcharts/radar";
import "amcharts3/amcharts/xy";

import lineChart from './line.json'
import barChart from './bar.json'
import lhChart from './Charts/LHChart.json'
import arialburid from './Charts/arialburid.json'
import coreWiseInfra from './Charts/CoreWiseInfra.json'
import CityWiseInfra from './Charts/CityWiseLH.json'
import CityWiseMetroInfra from './Charts/CityWiseSouthMetroInfra.json'
// import lh from './LH.json'
import CustomersCount from './Charts/CustomersCount.json'
import SouthCharts from './SouthChart'
import pie from './pie.json'

import Slider from './Charts/GridSlider'

// import bar1 from './LHChart.json'
export default class MainpageTest extends React.Component{
    
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
                    <Row className="card-row">
                       
                                {/* South Region */}
                        <Col xs="12" sm="6" md="3">
                            <Card>
                                <CardHeader style={{textAlign:"center",  fontSize:14 }}>
                                    <span id="south"><strong>South Region Customers</strong></span>
                                    <a id= "remove" style={{ marginRight: 10, cursor: 'pointer'}}><i class="fas fa-minus-circle"></i></a>
                                    <div className="card-header-actions">
                                        <Badge pill color="success" className="float-right" id="total" style={{cursor: 'pointer', fontSize: 16 }}></Badge>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <div className="cardbody"  id="karachi">
                                        <div className="cardbody-key"><strong>Karachi</strong></div>
                                        <div className="cardbody-valse" id="khi"></div>
                                    </div>                                   

                                    <div className="cardbody">
                                        <div className="cardbody-key">Multinet</div>
                                        <div className="cardbody-value" id="ret"></div>
                                    </div>
                                    
                                    <div className="cardbody">
                                        <div className="cardbody-key">Third Party</div>
                                        <div className="cardbody-value" id="cor"></div>
                                    </div>

                                    {/* <div className="cardbody">
                                        <div className="cardbody-key">Satcom</div>
                                        <div className="cardbody-value" id="res"></div>
                                    </div>

                                    <div className="cardbody">
                                        <div className="cardbody-key">SharpTel</div>
                                        <div className="cardbody-value" id="cir"></div>
                                    </div> */}

                                    {/* <div className="cardbody">
                                        <div className="cardbody-key">Ebon</div>
                                        <div className="cardbody-value" id="ebon"></div>
                                    </div> */}
                                     
                                    {/* <div className="cardbody">
                                        <div className="cardbody-key">Optix</div>
                                        <div className="cardbody-value" id="optic"></div>
                                    </div>  */}

                                </CardBody>
                            </Card>
                        </Col>

                                    {/* Central Region */}
                        <Col xs="12" sm="6" md="3">
                            <Card>
                                <CardHeader style={{textAlign:"center",  fontSize:14 }}>
                                    <span id="central"><strong>Central Region Customers</strong></span>
                                    <a id="remove" style={{ marginRight: 10, cursor: 'pointer' }}><i class="fas fa-minus-circle"></i></a>
                                    <div className="card-header-actions">
                                        <Badge pill color="success" className="float-right" id="centraltotal"  style={{cursor: 'pointer', fontSize: 16 }}></Badge>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    {/* <div className="cardbody">
                                        <div className="cardbody-key">Lahore</div>
                                        <div className="cardbody-value" id="northcor"></div>
                                    </div> */}
                                    <div className="cardbody"  id="Lahore">  
                                        <div className="cardbody-key"><strong>Lahore</strong></div>  
                                        <div className="cardbody-value" id="centralTotal"></div>
                                    </div>  

                                    <div className="cardbody">
                                        <div className="cardbody-key">Multinet</div>
                                        <div className="cardbody-value" id="centralMultinet"></div>
                                    </div>

                                    <div className="cardbody">
                                        <div className="cardbody-key">Third Party</div>
                                        <div className="cardbody-value" id="centralThirdParty"></div>
                                    </div>

                                    {/* <div className="cardbody">
                                        <div className="cardbody-key">Satcom</div>
                                        <div className="cardbody-value" id="northcir"></div>
                                    </div>   */}

                                </CardBody>
                            </Card>
                        </Col>

                                    {/* North Region */}
                        <Col xs="12" sm="6" md="3">
                        <Card >
                                <CardHeader style={{textAlign:"center",  fontSize:14 }}>
                                    {/* North Region
                                    <div className="card-header-actions"> */}
                                        {/* <Badge pill color="success" className="float-right">362</Badge> */}
                                    {/* </div> */}

                                    <span id="north"><strong>North Region Customers</strong></span>
                                    <a id="remove" style={{ marginRight: 10, cursor: 'pointer' }}><i class="fas fa-minus-circle"></i></a>
                                    <div className="card-header-actions">
                                        <Badge pill color="success" className="float-right" id="isltotal"  style={{cursor: 'pointer', fontSize: 16 }}></Badge>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                <div className="cardbody"  id="karachi">
                                        <div className="cardbody-key"><strong>Islamabad</strong></div>
                                        <div className="cardbody-valse" id="islcity"></div>
                                    </div>                                   

                                    <div className="cardbody">
                                        <div className="cardbody-key">Multinet</div>
                                        <div className="cardbody-value" id="northmultinet"></div>
                                    </div>
                                    
                                     <div className="cardbody">
                                        <div className="cardbody-key">Third Party</div>
                                        <div className="cardbody-value" id="norththrd"></div>
                                    </div>                             
                             

                                </CardBody>
                            </Card>
                       
                        </Col>

                                    {/* BTK  */}
                        <Col xs="12" sm="6" md="1">
                          <Card >
                                <CardHeader>
                                 

                                    <span id="btkZoom" style={{textAlign:"center",fontSize:13}}><strong>BTK Customers</strong></span>
                                   
                                </CardHeader>
                                <CardBody>
                                                               

                                    <div className="cardbody"> 
                                    {/* <b style={{ textAlign:"center", color:"Orange",  fontSize:19 }}><strong>Customers </strong><br/></b> */}
                                         <div className="cardbody-value" id="btktotal" style={{ textAlign:"center", fontSize:26 }}></div>
                                        
                                    </div>
                                    
                                                              
                             

                                </CardBody>
                            </Card>
                        </Col>               
                     
                     
                                    {/* FTTT 20020 */}
                        <Col xs="12" sm="6" md="2">
                            <Card>
                                <CardHeader>
                                <span style={{textAlign:"center",  fontSize:16, marginLeft:"40px" }}><strong>FTTT 2020</strong><br/></span>
                                    {/* <a id= "remove" style={{ marginRight: 100, cursor: 'pointer' }}><i class="fas fa-minus-circle"></i></a> */}
                                    <div className="card-header-actions">    
                                        <Badge pill color="success" className="float-right" id="total"></Badge>  
                                    </div>
                                </CardHeader>
                                <CardBody>
                                <div  id="Tot" style={{}}> 
           
        {/* <div className="row" style={{float:"left", padding:1}}>  
             <b style={{ marginLeft:4, textAlign:"center",   fontSize:14 }}><b>Cell Sites</b><br/></b>
             &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <b style={{ textAlign:"center",  fontSize:12 }}>Litup</b> 
              &nbsp;
              &nbsp;
             <b><div  className="column3" id="T_LitUpCellSite" style={{ color:"LightGray", fontSize:13}}></div></b>
             &nbsp; 
             &nbsp; 
             <b style={{ textAlign:"center",  fontSize:12 }}>Pending</b>
             &nbsp;
             &nbsp;
             <b><div  className="column3" id="T_PendingCellSite" style={{ color:"LightGray", fontSize:13}}></div></b>
        </div><br/> */}

        <div className="cardbody" >  
      
        <div className="cardbody-key"><strong>Cell Sites Total</strong></div>  
         </div>  



         <div className="cardbody" >  
      
                 <b style={{ textAlign:"center",  fontSize:12 }}>Litup</b>  &nbsp;
                 <div className="cardbody-value" id="T_LitUpCellSite"></div>
                 &nbsp; &nbsp; &nbsp;
                 <b style={{ textAlign:"center",  fontSize:12 }}>Pending</b>  &nbsp;
                 <div className="cardbody-value" id="T_PendingCellSite"></div>
         </div>  




         <div className="cardbody" >  
         <div className="cardbody-key"><strong>Agg Sites Total</strong></div>  
          </div>  


         <div className="cardbody" >  
      
                 <b style={{ textAlign:"center",  fontSize:12 }}>Litup</b>  &nbsp;
                 <div className="cardbody-value" id="T_LitUpAgg"></div>
                 &nbsp; &nbsp; &nbsp;
                 <b style={{ textAlign:"center",  fontSize:12 }}>Pending</b>  &nbsp;
                 <div className="cardbody-value" id="T_PendingAgg"></div>
         </div> 
{/* 
        <div className="row" style={{float:"left", padding:1}}>
        
             <b style={{marginLeft:4, textAlign:"center",  fontSize:14 }}><b>Agg Sites</b><br/></b>
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <b style={{ textAlign:"center", fontSize:12 }}>Litup</b> 
              &nbsp;
              &nbsp;
              <b><div  className="column3" id="T_LitUpAgg" style={{ color:"LightGray", fontSize:13}}></div></b>
              &nbsp; 
              &nbsp; 
             <b style={{ textAlign:"center",  fontSize:12 }}>Pending</b>
             &nbsp;
             &nbsp;
             <b><div  className="column3" id="T_PendingAgg" style={{ color:"LightGray", fontSize:13}}></div></b>
        </div> */}
         
</div>  
                                </CardBody>
                            </Card>
                        </Col>
                 
                 








                 
                                {/* Region Wise Infra */}
                        <Col xs="12" sm="6" md="4">
                          <Card  style={{ height: '31.6vh',  backgroundColor: "#011424"   }}>
                               
                                {/* <CardBody>
                              
                                </CardBody> */}
                                <p style={{color:"red", fontSize:17}}>Region Wise Infra</p>
                                <CedarChart definition={lhChart}/>
                                {/* <Slider /> */}


                            </Card>
                        </Col>

                        {/* City Wise Infra */}
                       
                        <Col xs="12" sm="6" md="4">
                        {/* <CardBody> */}
                     
                                <Card  style={{ height: '31.6vh',  backgroundColor: "#011424"   }}>
                        <p style={{color:"red", fontSize:17}}>City Wise Infra</p>
                                <CedarChart definition={CityWiseInfra} />
                                {/* </CardBody> */}
                                </Card>

                                
                                {/* </CardBody> */}
                        </Col>

                                    {/* Map */}
                        <Col xs="12" sm="6" md="4">
                              <div class="cardbody">
                                <Map
                                //  marginLeft:25,
                                    className="scene__container"
                                style={{ height: '31.6vh', width: '54.5vw', max_Width: '54.45vw',  display: 'flex', flex: 1 }}
                                mapProperties={{ basemap: 'streets-night-vector' }}
                                viewProperties={{
                                    center: [69.3451, 30.3753],
                                    zoom: 3,
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
                                    <Complaint />
                                    <South />
                                    <Central />
                                    <North />
                                    <BTKCustomers />
                                    <AbbotabadCellSite />
                                    <AggTotal />
                                    <CellSiteTotal />
                                    {/* <ProjectLightRegion /> */}
                                    {/* <Btk /> */}
                                    {/* <MetroInfra/> */}
                                    {/* <SCustomer/>
                                    <CCustomer/> */}
                                    <Mainpagewidget />
                                </Map>
                                </div>
                        </Col>  


                                    {/* Core Wise Infra */}
                        <Col xs="12" sm="6" md="4">
                        {/* <CardBody> */}
                            <Card  style={{ height: '29.6vh',  backgroundColor: "#011424"   }}>
                        <p style={{color:"red", fontSize:17}}>Core Wise Infra</p>
                                <CedarChart definition={coreWiseInfra}/>
                                {/* </CardBody> */}
                                </Card>
                        </Col>
                        

                                  {/* Aerial & Buried Graph */} 
                        <Col xs="12" sm="6" md="4">
                        {/* <CardBody> */}
                            <Card  style={{height: '29.6vh',  backgroundColor: "#011424"   }}>     
                        <p style={{color:"red", fontSize:17}}>Aerial & Buried Infra</p>  
                                <CedarChart definition={arialburid}/>
                                </Card> 
                        </Col>
                        
                         
                                    {/* City Wise Customers */}
                        <Col xs="12" sm="6" md="4">
                        {/* <CardBody> */}
                          <Card  style={{ height: '29.6vh', backgroundColor: "#011424"   }}>
                          {/* <CardHeader style={{textAlign:"center",color:"red",  fontSize:14 }}>City Wise Customers</CardHeader> */}
                        <p style={{color:"red", fontSize:17}}>City Wise Customers</p>  
                                <CedarChart definition={CustomersCount}/>
                                {/* <CedarChart definition={pie}/> */}
                                {/* <SouthCharts/> */}  
                                {/* </CardBody> */}  
                                </Card>
                        </Col>

                          
                       
                        
                    </Row>

                    <Row >
                             
                        <Row>
                        </Row>
                    </Row>
                </div>
            </div>

        )
    }
}