import React from 'react'
import { loadModules } from 'react-arcgis';

export default class BTK extends React.Component {

    componentDidMount() {
    
        let view = this.props.view;
        let map = this.props.map;
        loadModules(["esri/tasks/support/Query", "esri/tasks/QueryTask", "esri/Graphic", "esri/layers/GraphicsLayer"
        ])
            .then(([Query, QueryTask, Graphic, GraphicsLayer]) => {

                let north = document.getElementById('btkZoom')
                north.addEventListener('click', function () {
                    view.goTo({
                        target: [67.3034, 25.0215],
                        zoom: 12
                    })
                })

                let Karachi = document.getElementById('btkZoom')
                Karachi.addEventListener('click',function () {
                    view.goTo({
                        target: [67.3034, 25.0215],
                        zoom: 12
                    })
                })

                let g, g1, g2, cirLink;
                                                //Customers
                let link = "http://103.31.82.102:6080/arcgis/rest/services/Projects/BahriaTown/MapServer/0"
                //*****QUERY AND QUERY TASK*****//
                let queryTask = new QueryTask({
                    url: link
                });

                var resultsLayer = new GraphicsLayer({
                    listMode: "hide"
                });
                map.add(resultsLayer)

                let remove = document.getElementById("remove")
                remove.addEventListener("click", () => {
                    resultsLayer.removeAll()
                })

   
                let multi = document.getElementById("northmultinet");
                multi.addEventListener('click', northmultinet)

                function northmultinet () {

                    let featuremap = new Query({
                        returnGeometry: true,
                        outFields: ["*"],
                        where: "MN_North_Region.SDE.MN_Customers.Vendor= 'MultiNet'"
                    })

                    queryTask.execute(featuremap).then(function (results) {
                        resultsLayer.removeAll(g1, g2, cirLink)
                         g = results.features.map((item, index) => {
                            item.symbol = {
                                type: "simple-marker",
                                color: "orange",
                                size: 5,
                                outline: { // autocasts as new SimpleLineSymbol()
                                    width: 0.5,
                                    color: [0, 0, 0, 0.2]
                                }
                            }
                            return item

                        });
                        resultsLayer.addMany(g);
                        view.goTo({
                            target: view.graphics
                        });
                    }).otherwise(function (e) {
                        console.log(e);
                    });
                }
             
           
              
                
                     //New total Count of North Region

                     let northTotal = document.getElementById("btkZoom");
                     northTotal.addEventListener('click', NorthTotal)
     
                     function NorthTotal () {
     
                         let featuremapOptic = new Query({
                             returnGeometry: true,
                             outFields: ["*"],
                             where: "1=1"
                         })
     
                         queryTask.execute(featuremapOptic).then(function (results) {
                             resultsLayer.removeAll(g, g1, g2)
                             cirLink = results.features.map((item, index) => {
                                 item.symbol = {
                                     type: "simple-marker",
                                     color: "pink",
                                     size: 5,
                                     outline: { // autocasts as new SimpleLineSymbol()
                                         width: 0.5,
                                         color: [0, 0, 0, 0.2]
                                     }
                                 }
                                 return item
                
                             });
                             resultsLayer.addMany(cirLink)
                             view.goTo({
                                 target: view.graphics
                             });
                         }).otherwise(function (e) {
                             console.log(e);
                         });
     
                     }
     
     
                     let queryNorth = new Query({
                         returnGeometry: true,
                         outFields: ["*"],
                         where: "1=1"
                     });
                     queryTask.executeForCount(queryNorth).then(function (results) {
                         document.getElementById('btktotal').innerHTML = results
                     });
     

            })
          

    }
    render() {
        return null
            

    }

}

