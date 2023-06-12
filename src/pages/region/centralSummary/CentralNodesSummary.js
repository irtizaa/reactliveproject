import React from 'react'
import { loadModules } from 'react-arcgis';

export default class CentralNodesSummary extends React.Component {

    componentDidMount() {
        let view = this.props.view;
        let map = this.props.map;
        loadModules(["esri/tasks/support/Query", "esri/tasks/QueryTask", "esri/Graphic", "esri/layers/GraphicsLayer"
        ])
            .then(([Query, QueryTask, Graphic, GraphicsLayer]) => {

               // let centralNodes = document.getElementById('centralNodes')
                // central.addEventListener('click', function () {
                //     view.goTo({
                //         target: [74.371348, 31.495086],
                //         zoom: 10
                //     })
                // })

                // let lahore = document.getElementById('Lahore')
                // lahore.addEventListener('click', function () {
                //     view.goTo({
                //         target: [74.301348, 31.558086],
                //         zoom: 12
                //     })
                // })
                
                let g, g1, g2;
                let layer, layer1, layer2
                let link = "http://103.31.82.102:6080/arcgis/rest/services/Projects/CentralRegion/MapServer/0"
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


  
                let southNodes = document.getElementById('centralNodes')
                southNodes.addEventListener('click', function () {
                    // view.goTo({
                    //     target: [67.0011, 24.8607],
                    //     zoom: 12
                    // })
                })


           

                var sumPopulation = {
                    orderByFields: "Number_of_SUM DESC",
                    statisticType: "sum",
                    // statisticType: "count",
                    onStatisticField: "Calculated_Length_km",
                    outStatisticFieldName: "Number_of_SUM"
                  };
                let query1 = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    // where: "Stage = 'LitUp'"
                    where: "1 = '1'"
                   
                });
                queryTask.executeForCount(query1).then(function (results) {
                    document.getElementById('C_T_NodeCount').innerHTML = results
                });
            })
    }

    render() {
        return null
    }

}