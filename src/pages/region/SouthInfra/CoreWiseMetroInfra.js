import React from 'react'
import { loadModules } from 'react-arcgis';

export default class SouthMetroTest extends React.Component {

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

             
  
                let southNodes = document.getElementById('southMetro')
                southNodes.addEventListener('click', function () {
                    // view.goTo({
                    //     target: [67.0011, 24.8607],
                    //     zoom: 12
                    // })
                })

             var query = new Query();

            //  query.where = "Region = 'South'";
          
              
                let core1 = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    where : "Core_No = '96 Core'",
                    // statisticType: "sum",
                    // sqlExpressions: "SUM([Calculated_Length])",
                    // onStatisticField: "Calculated_Length",
                    // outStatisticFieldName: "Number_of_SUM"
                    
                })
                queryTask.executeForCount(core1).then(function (results) {  
                    document.getElementById('S_96_MetroCount').innerHTML = results  
                });



                let core2 = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    where : "Core_No = '48 Core'",
                   
                    
                })
                queryTask.executeForCount(core2).then(function (results) {  
                    document.getElementById('S_48_MetroCount').innerHTML = results  
                });


                let core3 = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    where : "Core_No = '24 Core'",
                   
                    
                })
                queryTask.executeForCount(core3).then(function (results) {  
                    document.getElementById('S_24_MetroCount').innerHTML = results  
                });


                let core4 = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    where : "Core_No = '12 Core'",
                   
                    
                })
                queryTask.executeForCount(core4).then(function (results) {  
                    document.getElementById('S_12_MetroCount').innerHTML = results  
                });


                let core5 = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    where : "Core_No = '8 Core'",
                   
                    
                })
                queryTask.executeForCount(core5).then(function (results) {  
                    document.getElementById('S_8_MetroCount').innerHTML = results  
                });

                let core6 = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    where : "Core_No = '4 Core'"
                   
                    
                })
                queryTask.executeForCount(core6).then(function (results) {  
                    document.getElementById('S_6_MetroCount').innerHTML = results  
                });


                

            })            
    }

    render() {
        return null
    }

}