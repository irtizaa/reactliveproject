import React from 'react';
import {Card, CardHeader, CardBody, Badge, Col, Row,} from 'reactstrap';
import { Map } from 'react-arcgis';
import './mainpage.css'
import South from './south/South';
import Central from './central/Central';
import North from './north/North';
import Mainpagewidget from './Mainpagewidget';
import Chart from 'react-google-charts';
import Complaint from './south/Complaint';

export default class Mainpage extends React.Component{
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
                        <Col xs="12" sm="6" md="4">
                            <Card>
                                <CardHeader>
                                    <span id="south">South Region</span>
                                    <a id= "remove" style={{ marginRight: 220, cursor: 'pointer' }}><i class="fas fa-minus-circle"></i></a>
                                    <div className="card-header-actions">
                                        <Badge pill color="success" className="float-right" id="total"></Badge>
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

                        <Col xs="12" sm="6" md="4">
                            <Card>
                                <CardHeader>
                                    <span id="central">Central Region</span>
                                    <a id="remove" style={{ marginRight: 220, cursor: 'pointer' }}><i class="fas fa-minus-circle"></i></a>
                                    <div className="card-header-actions">
                                        <Badge pill color="success" className="float-right" id="centraltotal"></Badge>
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

                        <Col xs="12" sm="6" md="4">
                        <Card>
                                <CardHeader>
                                    {/* North Region
                                    <div className="card-header-actions"> */}
                                        {/* <Badge pill color="success" className="float-right">362</Badge> */}
                                    {/* </div> */}

                                    <span id="north">North Region</span>
                                    <a id="remove" style={{ marginRight: 220, cursor: 'pointer' }}><i class="fas fa-minus-circle"></i></a>
                                    <div className="card-header-actions">
                                        <Badge pill color="success" className="float-right" id="isltotal"></Badge>
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

                    </Row>

                    <Row >
                                  {/* Chart1 */}
                                  {/* <Col xs="12" sm="6" md="4">
                              <div class="cardbody">
                              <Chart
                                     width={'22.5vw'}
                                     height={'40vh'}
                                     chartType="BarChart"
                                     background={'black'}
                                     loader={<div>Loading Chart</div>}
                                     data={this.state.data}
                                     options={{
                                         title: 'Active Customers',
                                         chartArea: { width: '99%' }

                                     }}
                                     rootProps={{ 'data-testid': '1' }}
                                 />  */}
                              {/* <Chart    Dynaminc Chart
                                  chartType="ScatterChart"
                                  spreadSheetUrl="https://docs.google.com/spreadsheets/d/1jN0iw0usssnsG1_oi-NXtuKfsUsGme09GsFidbqxFYA/edit#gid=0"
                                  options={{
                                    hAxis: {
                                      format: 'short',
                                    },
                                    vAxis: {
                                      format: 'decimal',
                                      // format:'scientific'
                                      // format:'long'
                                      // format:'percent'
                                    },
                                  }}
                                  rootProps={{ 'data-testid': '1' }}
                                /> */}
                                {/* </div>
                            </Col>                      */}

                                   {/* Map */}
                            <Col xs="12" sm="16" md="19">
                              <div class="cardbody">
                                <Map
                                //  marginLeft:25,
                                    className="scene__container"
                                style={{ height: '66.6vh', width: '54.5vw', max_Width: '54.45vw',  display: 'flex', flex: 1 }}
                                mapProperties={{ basemap: 'streets-night-vector' }}
                                viewProperties={{
                                    center: [69.3451, 30.3753],
                                    zoom: 4.5,
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
                                    
                                    <Mainpagewidget />
                                </Map>
                                </div>
                            </Col>   
                                    
                                    {/* Chart2 */}
                            {/* <Col xs="12" sm="6" md="4">
                              <div class="cardbody">
                              <Chart
                                     width={'22.5vw'}
                                     height={'40vh'}
                                     chartType="PieChart"
                                     background={'black'}
                                     loader={<div>Loading Chart</div>}
                                     data={this.state.data}
                                     options={{
                                         title: 'Active Customers',
                                         chartArea: { width: '99%' }

                                     }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />  */}
                               {/* <Chart
                                      chartType="ColumnChart"
                                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1XWJLkAwch5GXAt_7zOFDcg8Wm8Xv29_8PWuuW15qmAE"
                                      spreadSheetQueryParameters={{
                                        headers: 1,
                                        query: 'SELECT A, H, O, Q, R, U LIMIT 5 OFFSET 8',
                                      }}
                                      options={{
                                        // hAxis: {
                                        // format:'short'
                                        // },
                                        vAxis: {
                                          format: 'long',
                                        },
                                      }}
                                      rootProps={{ 'data-testid': '2' }}
                                    /> */}
                              {/* </div>
                            </Col>    */}
                          
                        <Row>
                                     {/* BarChart    */}
                             {/* <Col xs="12" sm="6" md="7">
                              
                                <CardBody>
                             <Chart
                                     width={'6.5vw'}
                                     height={'20vh'}
                                     chartType="BarChart"
                                     background={'black'}
                                     loader={<div>Loading Chart</div>}
                                     data={this.state.data}
                                     options={{
                                         title: 'Active Customers',
                                         chartArea: { width: '99%' }

                                     }}
                                     rootProps={{ 'data-testid': '1' }}
                                 /> 
                                </CardBody>      
                                                   
                             </Col> */}
                                     {/* PieChart */}
                             {/* <Row xs="12" sm="7" md="9">
                                <CardBody>
                                <Chart
                                        width={'6.5vw'}
                                     height={'20vh'}
                                     chartType="PieChart"
                                     background={'black'}
                                     loader={<div>Loading Chart</div>}
                                     data={this.state.data}
                                     options={{
                                         title: 'Active Customers',
                                         chartArea: { width: '99%' }

                                     }}
                                        rootProps={{ 'data-testid': '1' }}  
                                    /> 
                                   </CardBody>
                                
                             </Row> */}
                                     {/* Count */}
                          
                             
                        </Row>
                    </Row>
                </div>
            </div>

        )
    }
}