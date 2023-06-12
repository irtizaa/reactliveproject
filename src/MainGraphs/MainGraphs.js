import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';


import { Collapse,Button,  CardHeader,  Badge, Col, Row} from 'reactstrap';


import Chart from '../pages/main/Charts/CityWiseLH.json'
import Charts from '../pages/main/Charts/line.json'
import CedarChart from '../pages/main/CedarChart'
import CityWiseInfra from '../GraphsData/South/CityWiseInfra.json'
import CityWiseLH from '../GraphsData/South/CityWiseLHInfra.json'
import CoreWiseNetwork from '../GraphsData/South/CoreWiseNetwork.json'
import NodeWiseCustomer from '../GraphsData/South/NodeWiseCustomer.json'
import SouthRingWiseCustomer from '../GraphsData/South/SouthRingCoreNetwork.json'
import CityWiseCustomer from '../GraphsData/South/CityWiseCustomer.json'
import AerialBuried from '../GraphsData/South/AerialBuried.json'


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


            <Col xs="12" sm="6" md="3" >
            <Card  style={{height: '42vh',  backgroundColor: "#171718"  }}>  
            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{  backgroundColor: "#240114"   }}>Region Wise Total Infra Network in (Km)</CardSubtitle>
                <CedarChart definition={CityWiseInfra}/>
                </Card>
            </Col>


            <Col xs="12" sm="6" md="3">
            <Card  style={{height: '42vh',  backgroundColor: "#171718"  }}> 
            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{  backgroundColor: "#240114"   }}>City Wise Longhaul Network in (Km)</CardSubtitle>
                <CedarChart definition={CityWiseLH}/>
                </Card>
            </Col>            
        
            
            <Col xs="12" sm="6" md="3">
            <Card  style={{height: '42vh',  backgroundColor: "#171718"  }}> 
            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{  backgroundColor: "#240114"   }}>Node Wise Customers</CardSubtitle>
                 <CedarChart definition={NodeWiseCustomer} />
                 </Card>
            </Col>                     

            
            <Col xs="12" sm="6" md="3">
            <Card  style={{height: '42vh',  backgroundColor: "#171718"  }}> 
            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{  backgroundColor: "#240114"   }}>City Wise Infra Network in (Km)</CardSubtitle>
                 <CedarChart definition={SouthRingWiseCustomer}/>
                 </Card>
            </Col>
         

            <Col xs="12" sm="6" md="3">
            <Card  style={{height: '46vh',  backgroundColor: "#171718"  }}> 
            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{  backgroundColor: "#240114"   }}>City Wise Customers</CardSubtitle>
                 <CedarChart definition={CityWiseCustomer}/>
                 </Card>
            </Col>


            <Col xs="12" sm="6" md="5">          
            <Card  style={{height: '46vh',  backgroundColor: "#171718"  }}>   
            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{  backgroundColor: "#240114"   }} >Core Wise Infra Network in (Km)</CardSubtitle>
                 <CedarChart definition={CoreWiseNetwork} />
                 </Card>
            </Col>

            <Col xs="12" sm="6" md="4" >            
            <Card  style={{height: '46vh',  backgroundColor: "#171718"  }}>   
            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{  backgroundColor: "#240114"   }}>Aerial & Buried Infra Network in (Km)</CardSubtitle>
                 <CedarChart definition={AerialBuried} />
                 </Card>
            </Col>
            
        </Row>
    </div>
</div>
  );
};

export default Example;