import React from "react";
// load requred AmCharts libraries
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/serial";
// load Cedar's AmChart theme (optional)
import "@esri/cedar/dist/umd/themes/amCharts/calcite.js";
// load app resources and components
import "./mainpage.css";
import CedarChart from "./CedarChart";
// fetch a pre-defined Cedar line chart definition (optional)
// import lineChart from "././charts/line.json";

// export default class South extends React.Component {

export default function SouthCharts() {
    


const barChart = {
    type: "bar",
    datasets: [
      {
        url:
          "http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/0",  
        name: "Number_of_SUM",
        query: {
          orderByFields: "Number_of_SUM DESC",  
          groupByFieldsForStatistics: "Node_Name",
          outStatistics: [
            {  
              statisticType: "sum",
              onStatisticField: "No_of_Links",
              outStatisticFieldName: "Number_of_SUM"
            }
          ]
        }  
      }
    ],
    series: [
      {
        category: { field: "Node_Name", label: "Node" },
        value: { field: "Number_of_SUM", label: "Customers" },
        source: "Number_of_SUM"
      }
    ]
  };

  return (
    <div className="App">
    
     
      <CedarChart definition={barChart} />
      {/* <p>Line Chart</p> */}
      {/* <CedarChart definition={lineChart} /> */}
    </div>
  );
}