import React from 'react'
import { loadModules } from 'react-arcgis';

export default class CellSite extends React.Component {

    componentDidMount() {
        let view = this.props.view;
        let map = this.props.map;
        loadModules(["esri/tasks/support/Query", "esri/tasks/QueryTask", "esri/Graphic", "esri/layers/GraphicsLayer"
        ])
            .then(([Query, QueryTask, Graphic, GraphicsLayer]) => {

            
                
                let g, g1, g2;
                let layer, layer1, layer2
                let link = "http://103.31.82.102:6080/arcgis/rest/services/Projects/TP_Light/MapServer/1"
                //*****QUERY AND QUERY TASK*****//
                let queryTask = new QueryTask({
                    url: link
                });

                var resultsLayer = new GraphicsLayer({
                    listMode: "hide"
                });
                map.add(resultsLayer)

                // let karCell = document.getElementById('karCell')
                // karCell.addEventListener('click', function () {
                //     view.goTo({
                //         target: [71.6911, 29.3544],
                //         zoom: 12
                //     })
                // })


                // let querytotal = new Query({
                //     returnGeometry: true,
                //     outFields: ["*"],
                //     where: "1=1"
                // })
                // queryTask.executeForCount(querytotal).then(function (results) {
                //     document.getElementById('centraltotal').innerHTML = results
              
                // });

               
                var query1 = new Query();
                query1.returnGeometry = true;
                query1.outFields = ["*"];
                // query1.where = "Stage = 'Pending'";
                query1.where = "City = 'Karachi' AND Stage = 'Pending' AND Project_Year = 2021";

                queryTask.executeForCount(query1).then(function (results) {
                    document.getElementById('FTTT_K_PendingCellSite').innerHTML = results
                }); 

                let query2 = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    // where: "Stage = 'LitUp'"
                    where : "City = 'Karachi' AND Stage = 'LitUp' AND Project_Year = 2021"  
                });
                queryTask.executeForCount(query2).then(function (results) {
                    document.getElementById('FTTT_K_LitUpCellSite').innerHTML = results
                });
            })
    }

    render() {
        return null
    }

}

