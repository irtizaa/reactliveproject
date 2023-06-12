import React from 'react'
import { loadModules } from 'react-arcgis';

export default class SouthMetro extends React.Component {

    componentDidMount() {
        let view = this.props.view;
        let map = this.props.map;
        loadModules(["esri/tasks/support/Query", "esri/tasks/QueryTask", "esri/Graphic", "esri/layers/GraphicsLayer"
        ])
            .then(([Query, QueryTask, Graphic, GraphicsLayer]) => {

                let central = document.getElementById('central')
               
                
                let g, g1, g2;
                let layer, layer1, layer2
                let link = "http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/6"
                //*****QUERY AND QUERY TASK*****//
                let queryTask = new QueryTask({
                    url: link
                });

                var resultsLayer = new GraphicsLayer({
                    listMode: "hide"
                });
                map.add(resultsLayer)

             
            

                // let querytotal = new Query({
                //     returnGeometry: true,
                //     outFields: ["*"],
                //     where: "1=1"
                // })
                // queryTask.executeForCount(querytotal).then(function (results) {
                //     document.getElementById('centraltotal').innerHTML = results
              
                // });


  
                let southNodes = document.getElementById('southMetro')
                southNodes.addEventListener('click', function () {
                    // view.goTo({
                    //     target: [67.0011, 24.8607],
                    //     zoom: 12
                    // })
                })



                // let asd = new Query({
                //     where: {
                //         "orderByFields": "Number_of_SUM DESC",
                //         "groupByFieldsForStatistics": "Region",
                //         "outStatistics": [{
                //             "statisticType": "sum",
                //             "onStatisticField": "Calculated_Length",
                //             "outStatisticFieldName": "Number_of_SUM"
                //         }]
                //     }
                // })


                var sumPopulation = {
                    orderByFields: "Number_of_SUM DESC",
                    statisticType: "sum",
                    // statisticType: "count",
                    onStatisticField: "Calculated_Length_km",
                    outStatisticFieldName: "Number_of_SUM"
                  };

                let query1 = new Query({
                    // returnGeometry: true,
                    outFields: ["*"],
                    // where: "Stage = 'LitUp'",
                    where: "Region = 'South'",
                //     statisticType: "sum",
                //     onStatisticField: "Calculated_Length",
                //     outStatisticFieldName: "Number_of_SUM",
                //     statisticType:"SUM",
                //     where: "Measured_Length.value'",
                //     where:"(SUM Measured_Length)",
                //    outStatistics : [sumPopulation],
                //     statisticType: "sum",
                //     onStatisticField: "Calculated_Length",
                //     outStatisticFieldName: "Number_of_SUM"


                    // query: {
                    //     "orderByFields": "Number_of_SUM DESC",
                    //     "groupByFieldsForStatistics": "Region",
                    //     "outStatistics": [{
                    //         "statisticType": "sum",
                    //         "onStatisticField": "Calculated_Length",
                    //         "outStatisticFieldName": "Number_of_SUM"
                    //     }]
                    // }
                   
                });

                var sqlExpressions = ["SUM(Measured_Length)"];
                //  query.select = "SUM('Measured_Length')";
            //  query.where = "Region = 'South'";
            //  query.outSpatialReference = { wkid: 102100 };
            //  query.where = "1 = 1";
               // query.where ="count (Calculated_Length)";
            //  query.onStatisticField= "Calculated_Length";  // service field for 2015 population
            //  query.outStatisticFieldName= "Calculated_Length_Sum";
            //  query.statisticType= "count";

            var sumPopulation = {
                // onStatisticField: "Calculated_Length",  // service field for 2015 population
                // outStatisticFieldName: "Calculated_Length_Sum",
                // statisticType: "count",
                // sqlExpressions : "SUM(Calculated_Length)"
                outSpatialReference: { wkid: 4326 },
                
              };      

             var query = new Query();
             query.where = "Calculated_Length.value";
            //  query.outStatistics = [ sumPopulation];
            //  query.outFields = ["*"];
      
              

                queryTask.executeForCount(query).then(function (results) {  
                    document.getElementById('S_MetroCount').innerHTML = results  
                });
            })            
    }

    render() {
        return null
    }

}