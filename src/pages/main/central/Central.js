import React from 'react'
import { loadModules } from 'react-arcgis';

export default class Central extends React.Component {

    componentDidMount() {
        let view = this.props.view;
        let map = this.props.map;
        loadModules(["esri/tasks/support/Query", "esri/tasks/QueryTask", "esri/Graphic", "esri/layers/GraphicsLayer"
        ])
            .then(([Query, QueryTask, Graphic, GraphicsLayer]) => {

                let central = document.getElementById('central')
                central.addEventListener('click', function () {
                    view.goTo({
                        target: [74.371348, 31.495086],
                        zoom: 10
                    })
                })

                let lahore = document.getElementById('Lahore')
                lahore.addEventListener('click', function () {
                    view.goTo({
                        target: [74.301348, 31.558086],
                        zoom: 12
                    })
                })
                
                let g, g1, g2,cirLink;
                let layer, layer1, layer2
                let link = "http://103.31.82.102:6080/arcgis/rest/services/Projects/CentralRegion/MapServer/1"
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


                let featuremap = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    where: "Customer = 'Retailer'"
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
                let add = document.getElementById("centralMultinet");
                add.addEventListener('click', function () {
                    click()
                    map.remove(layer1)
                })
                //view.ui.add(add, 'top-right')

                let featuremap1 = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    where: "Vendor = 'Multinet'"
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
                                //     title: "kawish"
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
                let add1 = document.getElementById("centralThirdParty");
                add1.addEventListener('click', function () {
                    clicks()
                })
                //view.ui.add(add1, 'top-right')


                let featuremap2 = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    where: "Circuit_Owner = 'Third Party'"
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
                add2.addEventListener('click', function () {
                    clicking()

                })
                // view.ui.add(add2, 'top-right')


                     //Old total Count of Central Region

                // let querytotal = new Query({
                //     returnGeometry: true,
                //     outFields: ["*"],
                //     where: "1=1"
                // })
                // queryTask.executeForCount(querytotal).then(function (results) {
                //     document.getElementById('centraltotal').innerHTML = results
              
                // });

                
                     //New total Count of Central Region

                let centralTotal = document.getElementById("centraltotal");
                centralTotal.addEventListener('click', CentralTotal)

                function CentralTotal () {

                    let featuremapOptic = new Query({
                        returnGeometry: true,
                        outFields: ["*"],
                        where: "MN_Central_Region.SDE.MN_Customers.Region  = 'Central'"
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


                let querySouthttl = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    where: "MN_Central_Region.SDE.MN_Customers.Region  = 'Central'"
                });
                queryTask.executeForCount(querySouthttl).then(function (results) {
                    document.getElementById('centraltotal').innerHTML = results
                });


                // Where: "MN_Central_Region.SDE.MN_Customers.Region = 'Central'"
                let queryLhr = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    where:  "MN_Central_Region.SDE.MN_Customers.City = 'Lahore'"
                });
                queryTask.executeForCount(queryLhr).then(function (results) {
                    document.getElementById('centralTotal').innerHTML = results
                });


                var query1 = new Query();
                query1.returnGeometry = true;
                query1.outFields = ["*"];
                query1.where = "Circuit_Owner = 'Third Party'";

                queryTask.executeForCount(query1).then(function (results) {
                    document.getElementById('centralThirdParty').innerHTML = results
                }); 

                let query2 = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    where: "Vendor = 'Multinet'"
                });
                queryTask.executeForCount(query2).then(function (results) {
                    document.getElementById('centralMultinet').innerHTML = results
                });
            })
    }


    render() {
        return null

    }

}

