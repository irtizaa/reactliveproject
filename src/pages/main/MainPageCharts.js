import React from 'react';
import {Card, CardHeader, CardBody, Badge, Col, Row,} from 'reactstrap';
import { Map } from 'react-arcgis';
import './mainpage.css'
import './chart.css'

import South from './south/South';
import Central from './central/Central';
import North from './north/North';
import Mainpagewidget from './Mainpagewidget';
import Chart from 'react-google-charts';
import Complaint from './south/Complaint';

import CedarChart from "./CedarChart";

import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/serial";

import SouthChart from './SouthChart'
import lineChart from './line.json'
// import barChart from './bar.json'
import lhChart from './LHChart.json'
// load Cedar's AmChart theme (optional)
// import "@esri/cedar/dist/umd/themes/amCharts/calcite.js";

export default function MainPageCharts() {

 
    
        return(
            
            <div className="page-wrapper">

                <div className="container-fluid">
                    <Row className="card-row">
                        {/* <Col xs="12" sm="6" md="4">
                            <Card> */}
                            <Col xs="12" sm="6" md="2" >
                              <Card style={{ height: '12.6vh', width: '14.5vw', max_Width: '14.45vw'}} >
                               
                                <CardBody>
                                <CedarChart definition={lineChart}/>
                                </CardBody>
                            </Card>
                        </Col>


                        <Col xs="12" sm="6" md="4">
                              <Card  style={{ height: '12.2vh'}}>
                               
                                <CardBody>
                                <CedarChart definition={lhChart}/>
                                </CardBody>
                            </Card>
                        </Col>
                         <Col xs="12" sm="6" md="4">
                              <Card  style={{ height: '12.2vh'}}>
                               
                                <CardBody>
                                <CedarChart definition={lineChart}/>
                                </CardBody>
                            </Card>
                        </Col>
                        
                        {/* <Col xs="12" sm="6" md="8">
                            <Card>
                               
                                <CardBody>
                                <CedarChart definition={SouthChart}/>
                                </CardBody>
                            </Card>
                        </Col>
                   */}

                    </Row>
                    <Row></Row>
                    {/* <CedarChart definition={lineChart}/> */}
                    
                  
                    {/* <CedarChart definition={barChart}/> */}
                </div>
            </div>

        )
    }