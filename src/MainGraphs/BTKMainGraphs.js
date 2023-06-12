import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';


import { Collapse,Button,  CardHeader,  Badge, Col, Row} from 'reactstrap';


import Chart from '../pages/main/Charts/CityWiseLH.json'
import Charts from '../pages/main/Charts/line.json'
import CedarChart from '../pages/main/CedarChart'
import PrecinctWiseInfra from '../GraphsData/BTK/PrecinctWiseInfra.json'
import TotalBTKInfra from '../GraphsData/BTK/TotalBTKInfra.json'
import CoreWiseNetwork from '../GraphsData/BTK/CoreWiseNetwork.json'
import PrecinctWiseCustomers from '../GraphsData/BTK/PrecinctWiseCustomers.json'
import BTKRingWiseCustomer from '../GraphsData/BTK/BTKRingCoreNetwork.json'
import CityWiseCustomer from '../GraphsData/BTK/CityWiseCustomer.json'
import AerialBuried from '../GraphsData/BTK/AerialBuried.json'


import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/serial";
import "amcharts3/amcharts/pie";
import "amcharts3/amcharts/radar";
import "amcharts3/amcharts/xy";


const Example = (props) => {
  return (
//     <div>
//       <Col xs="12" sm="16" md="3">
//       <Card>
//         <CardBody>
//           <CardTitle tag="h5">Card title</CardTitle>
//           <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>

//           <CedarChart definition={Chart}/>
//         </CardBody>
//         {/* <img width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        
        
//       </Card>

// </Col>
    
//     </div>


<div className="page-wrapper">
    <div className="container-fluid">
        <Row className="card-row">


            <Col xs="12" sm="6" md="4">
            <Card  style={{height: '42vh',   backgroundColor: "#171718"  }}>  
            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{  backgroundColor: "#240114"   }}>Precinct Wise Infra Network </CardSubtitle>
                <CedarChart definition={PrecinctWiseInfra}/>
                </Card>
            </Col>



            <Col xs="12" sm="6" md="5">            
            <Card  style={{height: '42vh',  backgroundColor: "#171718"  }}>  
            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{  backgroundColor: "#240114"   }} >Core Wise Network</CardSubtitle>
                 <CedarChart definition={CoreWiseNetwork} />
                 </Card>
            </Col>



            <Col xs="12" sm="6" md="3">
            <Card  style={{height: '46vh',  backgroundColor: "#171718"  }}> 
            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{  backgroundColor: "#240114"   }}>Total BTK Infra</CardSubtitle>
                <CedarChart definition={TotalBTKInfra}/>
                </Card>
            </Col>            
        
            
            <Col xs="12" sm="6" md="6">
            <Card  style={{height: '46vh', width:'41vw', backgroundColor: "#171718"  }}> 
            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{  backgroundColor: "#240114"   }}>Precinct Wise Customers</CardSubtitle>
                 <CedarChart definition={PrecinctWiseCustomers} />
                 </Card>
            </Col>                     

        

            <Col xs="12" sm="6" md="4">       
            <Card  style={{height: '46vh',  width:'41vw', backgroundColor: "#171718"  }}>      
            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{  backgroundColor: "#240114"   }}>Aerial & Buried Infra Network</CardSubtitle>
                 <CedarChart definition={AerialBuried} />
                 </Card>
            </Col>
            
        </Row>
    </div>
</div>
  );
};

export default Example;