import React from 'react';
import { loadModules } from 'react-arcgis';


export default class Complaint extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',  
                  
        }
    }

    componentDidMount(){
     // let view = this.props.view;
      let map = this.props.map

        loadModules(['esri/Map',
        'esri/layers/GeoJSONLayer',

    ])
    .then(([Map,GeoJSONLayer]) =>{

        const url =
        // "http://172.30.30.237:1000";
        "http://103.31.82.102:1000";

        // const template = {
        //     title: "Singup ID ({Signup_ID})",
        //     // content: "Complaint Status is {ComplaintStatus} Where ticket type is {TicketType}",  
        //     fieldInfos: [  
        //       {  
        //         fieldName: "ComplaintStatus",
        //         /*format: {
        //           dateFormat: "short-date-short-time"  
        //         }*/
        //       }  
        //     ]  
        //   };
  
          const renderer = {
            type: "heatmap",  
            colorStops: [
              { ratio: 0, color: "rgba(255, 255, 255, 0)" },
              { ratio: 0.2, color: "rgba(255, 255, 255, 1)" },   
              { ratio: 0.5, color: "rgba(255, 140, 0, 1)" },  
              { ratio: 0.8, color: "rgba(255, 140, 0, 1)" },  
              { ratio: 1, color: "rgba(255, 0, 0, 1)" }  
            ],
            blurRadius:6,
            maxPixelIntensity: 60,
            minPixelIntensity: 0
          };
  
          let geojsonLayer = new GeoJSONLayer({
            url: url,
            updating: true,
            refreshInterval: 1,
            setInterval:1,
            //copyright: "USGS Earthquakes",
            popupTemplate: { // MN_Customers
              title: "Singup ID ({Signup_ID})",
              content: [
                  {
                      type: "fields",
                      fieldInfos: [{
                          fieldName: "ComplaintStatus",
                          label: "Complaint Status",
                          visible: true
                      },  {
                        fieldName: "TicketNo",
                        label: "Ticket No",
                        visible: true,
                        format: {
                            digitSeparator: true,
                            places: 0
                        }
                    },{
                          fieldName: "Customer_Name",
                          label: "Customer Name",
                          visible: true
                      }, {
                          fieldName: "Node_Name",
                          label: "Node Name",
                          visible: true,
                          format: {
                              digitSeparator: true,
                              places: 0
                          }
                      }
                      ]
                  }
              ]
          },
            renderer: renderer //optional
          });
          map.add(geojsonLayer)
  
    });
    
    }
    render(){
        return( 
            //  <Map
            //      class="full-screen-map"
            //      mapProperties={{ basemap: 'satellite' }}
            //  />
            <div id="viewDiv"></div>  
            
             )
    }
   
}


// new code

// import React from 'react';
// import { loadModules } from 'react-arcgis';
// import { Row, Col, Card, CardBody } from 'reactstrap';
// import { Bar } from "react-chartjs-2";
// import Axios from 'axios';
// import Chart from 'react-google-charts';

// export default class heat extends React.Component{

//   constructor(props){
//     super(props);
//     this.state={
//       cus:{},
//       node:{},
//     }
//   }

//  async componentDidMount(){
// await Axios.get('http://localhost:2000/customer')
// .then(res =>{
//   const data = res.data;
//   this.setState=({
//     cus:{
//       cus : data.length
//     }
//   })
//   console.log(this.state.cus)
// })

//   }

//   sync
//  render(){
//    return(
//     <Chart
//       width="450px" 
//       height="250px" 
//       chartType="Bar" 
//       loader={<div>Loading Gulshan Chart</div>} 
//       data={[ 
//           ['Category', 'Crime'], 
//           ['Two wheeler', this.state.cus.cus], 
//           // ['Four Wheeler', this.state.FourWheeler.FourWheelerData], 
//           // ['Target Killing', this.state.TargetKilling.TargetKillingData], 
//           // ['Kidnapping', this.state.Kidnapping.KidnappingData], 
//       ]} 
//       options={{ 
//           // Material design options 
//           chart: { 
//           title: 'Gulshan Town', 
//           subtitle: 'Crime Stats in Gulshan Town', 
//           }, 
//       }} 
//       // For tests 
//       rootProps={{ 'data-testid': '2' }} 
//       /> 
//    )
//  }
// }