import React from 'react'
import { loadModules } from 'react-arcgis';

export default class FTTT_MardanAgg extends React.Component {

    componentDidMount() {
        let view = this.props.view;
        let map = this.props.map;
        loadModules(["esri/tasks/support/Query", "esri/tasks/QueryTask", "esri/Graphic", "esri/layers/GraphicsLayer"
        ])
            .then(([Query, QueryTask, Graphic, GraphicsLayer]) => {

             
                
                let g, g1, g2;
                let layer, layer1, layer2
                let link = "http://103.31.82.102:6080/arcgis/rest/services/Projects/TP_Light/MapServer/0" 
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


                let Mardan = document.getElementById('Mardan')
                Mardan.addEventListener('click', function () {
                    view.goTo({
                        target: [72.0231, 34.1989],
                        zoom: 12
                    })
                })

               
                var query1 = new Query();
                query1.returnGeometry = true;
                query1.outFields = ["*"];
                // query1.where = "Stage = 'Pending'";
                query1.where = "City = 'Mardan' AND Stage = 'Pending' AND Project_Year = '2021'";

                queryTask.executeForCount(query1).then(function (results) {
                    document.getElementById('FTTT_Mardan_PendingAgg').innerHTML = results
                }); 

                let query2 = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    // where: "Stage = 'LitUp'"
                    where : "City = 'Mardan' AND Stage = 'LitUp' AND Project_Year = '2021'" 
                });
                queryTask.executeForCount(query2).then(function (results) {
                    document.getElementById('FTTT_Mardan_LitUpAgg').innerHTML = results
                });
            })
    }

    render() {
        return null
    }

}

