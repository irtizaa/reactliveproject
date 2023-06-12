import React from 'react'
import { loadModules } from 'react-arcgis';

export default class CellSites extends React.Component {

    componentDidMount() {
        let view = this.props.view;
        let map = this.props.map;
        loadModules(["esri/tasks/support/Query", "esri/tasks/QueryTask", "esri/Graphic", "esri/layers/GraphicsLayer"
        ])
            .then(([Query, QueryTask, Graphic, GraphicsLayer]) => {

                let central = document.getElementById('central')
                // central.addEventListener('click', function () {
                //     view.goTo({
                //         target: [74.371348, 31.495086],
                //         zoom: 10
                //     })
                // })

                let lahore = document.getElementById('Lahore')
                // lahore.addEventListener('click', function () {
                //     view.goTo({
                //         target: [74.301348, 31.558086],
                //         zoom: 12
                //     })
                // })
                
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

                let remove = document.getElementById("remove")
                // remove.addEventListener("click", () => {
                //     resultsLayer.removeAll()
                // })


                let featuremap = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    // where: "Customer = 'Retailer'"
                })
                function click() {
                    queryTask.execute(featuremap).then(function (results) {
                        results.features.map((item, index) => {

                            g = new Graphic({
                                geometry: item.geometry,
                                attributes: item.attribute,
                                symbol: {
                                    type: "simple-marker",
                                    color: "blue",
                                    size: 5,
                                    outline: { // autocasts as new SimpleLineSymbol()
                                        width: 0.5,
                                        color: [0, 0, 0, 0.2]
                                    }
                                }
                                // , popupTemplate: {
                                //     title: "Ahsan"
                                // }
                            });
                            // view.graphics.add(g);
                            layer = new GraphicsLayer({
                                graphics: [g]
                            })
                            map.add(layer)

                        });
                        view.goTo({
                            target: view.graphics
                        });
                    }).otherwise(function (e) {
                        console.log(e);
                    });
                }
                let add = document.getElementById("KlitUp");
                // add.addEventListener('click', function () {
                //     click()
                //     map.remove(layer1)
                // })
                //view.ui.add(add, 'top-right')

                let featuremap1 = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    // where: "Stage = 'LitUp'"  
                    where: "City = 'Karachi' AND Stage = 'LitUp'" 
                })
                function clicks() {
                    queryTask.execute(featuremap1).then(function (results) {
                        results.features.map((item, index) => {

                            g1 = new Graphic({
                                geometry: item.geometry,
                                attributes: item.attribute,
                                symbol: {
                                    type: "simple-marker",
                                    color: "green",
                                    size: 5,
                                    outline: { // autocasts as new SimpleLineSymbol()
                                        width: 0.5,
                                        color: [0, 0, 0, 0.2]
                                    }
                                }
                                // , popupTemplate: {
                                //     title: "anythng"
                                // }
                            });
                            //view.graphics.add(g1);  
                            layer1 = new GraphicsLayer({
                                graphics: [g1]
                            })
                            map.add(layer1)
                        });
                        view.goTo({
                            target: view.graphics
                        });
                    }).otherwise(function (e) {
                        console.log(e);
                    });
                }
                let add1 = document.getElementById("Kpending");
                // add1.addEventListener('click', function () {
                //     clicks()
                // })
                //view.ui.add(add1, 'top-right')


                let featuremap2 = new Query({
                    returnGeometry: true,
                    outFields: ["*"],  
                    // where: "Stage = 'Pending'"  
                    where: "City = 'Karachi' AND Stage = 'Pending'" 
                })
                function clicking() {
                    queryTask.execute(featuremap2).then(function (results) {
                        results.features.map((item, index) => {

                            g2 = new Graphic({
                                geometry: item.geometry,
                                attributes: item.attribute,
                                symbol: {
                                    type: "simple-marker",
                                    color: "red",
                                    size: 5,
                                    outline: { // autocasts as new SimpleLineSymbol()
                                        width: 0.5,
                                        color: [0, 0, 0, 0.2]
                                    }
                                }
                                // , popupTemplate: {
                                //     title: "title"
                                // }
                            });
                            //view.graphics.add(g2);
                            layer2 = new GraphicsLayer({
                                graphics: [g2]
                            })
                            map.add(layer2)
                        });
                        view.goTo({
                            target: view.graphics
                        });
                    }).otherwise(function (e) {
                        console.log(e);
                    });
                }
                let add2 = document.getElementById("centralTotal");
                // add2.addEventListener('click', function () {
                //     clicking()

                // })
                // view.ui.add(add2, 'top-right')


                let querytotal = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    where: "1=1"
                })
                queryTask.executeForCount(querytotal).then(function (results) {
                    document.getElementById('centraltotal').innerHTML = results
              
                });

                // let queryLhr = new Query({
                //     returnGeometry: true,
                //     outFields: ["*"],
                //     where:  "MN_Central_Region.SDE.MN_Customers.City = 'Lahore'"
                // });
                // queryTask.executeForCount(queryLhr).then(function (results) {
                //     document.getElementById('centralTotal').innerHTML = results
                // }); 


                var query1 = new Query();
                query1.returnGeometry = true;
                query1.outFields = ["*"];
                query1.where = "City = 'Karachi' AND Stage = 'Pending' AND Project_Year = 2019";

                queryTask.executeForCount(query1).then(function (results) {
                    document.getElementById('Kpending').innerHTML = results
                }); 

                let query2 = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    // where: "Stage = 'LitUp'"  
                    where: "City = 'Karachi' AND Stage = 'LitUp' AND Project_Year = 2019" 
                });
                queryTask.executeForCount(query2).then(function (results) {
                    document.getElementById('KlitUp').innerHTML = results
                });
            })
    }


    render() {
        return null

    }

}

