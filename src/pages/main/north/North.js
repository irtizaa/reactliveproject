import React from 'react'
import { loadModules } from 'react-arcgis';

export default class North extends React.Component {

    componentDidMount() {
    
        let view = this.props.view;
        let map = this.props.map;
        loadModules(["esri/tasks/support/Query", "esri/tasks/QueryTask", "esri/Graphic", "esri/layers/GraphicsLayer"
        ])
            .then(([Query, QueryTask, Graphic, GraphicsLayer]) => {

                let north = document.getElementById('north')
                north.addEventListener('click', function () {
                    view.goTo({
                        target: [73.0479, 33.6844],
                        zoom: 8
                    })
                })

                // let Karachi = document.getElementById('karachi')
                // Karachi.addEventListener('click',function () {
                //     view.goTo({
                //         target: [67.068037, 24.872328],
                //         zoom: 10
                //     })
                // })

                let g, g1, g2, cirLink;
                                                //Customers
                let link = "http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/1"
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
             
               //For Satcom
                // let satcm = document.getElementById("res");
                // satcm.addEventListener('click', res)

                // function res () {

                //     let featuremap1 = new Query({
                //         returnGeometry: true,
                //         outFields: ["*"],
                //         where: "Vendor = 'Satcom'"
                //     })

                //     queryTask.execute(featuremap1).then(function (results) {
                //         resultsLayer.removeAll(g, g2, cirLink)
                //          g1 = results.features.map((item, index) => {
                //             item.symbol ={
                //                 type: "simple-marker",
                //                 color: "green",
                //                 size: 5,
                //                 outline: { // autocasts as new SimpleLineSymbol()
                //                     width: 0.5,
                //                     color: [0, 0, 0, 0.2]
                //                 } 
                //             }
                //             return item
                //         });
                //         resultsLayer.addMany(g1)

                //         view.goTo({
                //             target: view.graphics
                //         });
                //     }).otherwise(function (e) {
                //         console.log(e);
                //     });
                // }

                
                //view.ui.add(add1, 'top-right')       
               
                //For Connect
                let conect = document.getElementById("norththrd");
                conect.addEventListener('click', Connect)

                function Connect () {

                    let featuremap2 = new Query({
                        returnGeometry: true,
                        outFields: ["*"],
                        where: "MN_North_Region.SDE.MN_Customers.Circuit_Owner = 'Third Party'"
                    })

                    queryTask.execute(featuremap2).then(function (results) {
                        resultsLayer.removeAll(g1, g, cirLink)
                        g2 =  results.features.map((item, index) => {
                            item.symbol = {
                                type: "simple-marker",
                                color: "red",
                                size: 5,
                                outline: { // autocasts as new SimpleLineSymbol()
                                    width: 0.5,
                                    color: [0, 0, 0, 0.2]
                                }
                            }
                            return item
                        });
                        resultsLayer.addMany(g2)
                        view.goTo({
                            target: view.graphics
                        });
                    }).otherwise(function (e) {
                        console.log(e);
                    });

                }
               
                //For SharpTel
                // let sharptel = document.getElementById("cir");
                // sharptel.addEventListener('click', sharp)

                // function sharp () {

                //     let featuremapcir = new Query({
                //         returnGeometry: true,
                //         outFields: ["*"],
                //         where: "Vendor = 'SharpTel'"
                //     })

                //     queryTask.execute(featuremapcir).then(function (results) {
                //         resultsLayer.removeAll(g, g1, g2)
                //         cirLink = results.features.map((item, index) => {
                //             item.symbol = {
                //                 type: "simple-marker",
                //                 color: "orange",
                //                 size: 5,
                //                 outline: { // autocasts as new SimpleLineSymbol()
                //                     width: 0.5,
                //                     color: [0, 0, 0, 0.2]
                //                 }
                //             }
                //             return item
           
                //         });
                //         resultsLayer.addMany(cirLink)
                //         view.goTo({
                //             target: view.graphics
                //         });
                //     }).otherwise(function (e) {
                //         console.log(e);
                //     });

                // }

                //For Ebon
                // let ebon = document.getElementById("ebon");
                // ebon.addEventListener('click', ebons)

                // function ebons () {

                //     let featuremapebon = new Query({
                //         returnGeometry: true,
                //         outFields: ["*"],  
                //         where: "Vendor = 'Ebone'"  
                //     })

                //     queryTask.execute(featuremapebon).then(function (results) {
                //         resultsLayer.removeAll(g, g1, g2)
                //         cirLink = results.features.map((item, index) => {
                //             item.symbol = {
                //                 type: "simple-marker",
                //                 color: "black",
                //                 size: 5,
                //                 outline: { // autocasts as new SimpleLineSymbol()
                //                     width: 0.5,
                //                     color: [0, 0, 0, 0.2]
                //                 }
                //             }
                //             return item
           
                //         });
                //         resultsLayer.addMany(cirLink)
                //         view.goTo({
                //             target: view.graphics
                //         });
                //     }).otherwise(function (e) {
                //         console.log(e);
                //     });

                // }

                //For Optix
                // let optic = document.getElementById("optic");
                // optic.addEventListener('click', optics)

                // function optics () {

                //     let featuremapOptic = new Query({
                //         returnGeometry: true,
                //         outFields: ["*"],
                //         where: "Vendor = 'Optix'"
                //     })

                //     queryTask.execute(featuremapOptic).then(function (results) {
                //         resultsLayer.removeAll(g, g1, g2)
                //         cirLink = results.features.map((item, index) => {
                //             item.symbol = {
                //                 type: "simple-marker",
                //                 color: "white",
                //                 size: 5,
                //                 outline: { // autocasts as new SimpleLineSymbol()
                //                     width: 0.5,
                //                     color: [0, 0, 0, 0.2]
                //                 }
                //             }
                //             return item
           
                //         });
                //         resultsLayer.addMany(cirLink)
                //         view.goTo({
                //             target: view.graphics
                //         });
                //     }).otherwise(function (e) {
                //         console.log(e);
                //     });

                // }

                //To show the graphics on map on button click
               
                let islcity = document.getElementById("islcity");
                islcity.addEventListener('click', Islcity)

                function Islcity () {

                    let featuremapOptic = new Query({
                        returnGeometry: true,
                        outFields: ["*"],
                        where: "MN_North_Region.SDE.MN_Customers.City  = 'Islamabad'"
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

                // let querytotal = new Query({
                //     returnGeometry: true,
                //     outFields: ["*"],
                //     where: "1=1"
                // })
                // queryTask.executeForCount(querytotal).then(function (results) {
                //     document.getElementById('isltotal').innerHTML = results
                // });


                
                     //New total Count of North Region

                     let northTotal = document.getElementById("isltotal");
                     northTotal.addEventListener('click', NorthTotal)
     
                     function NorthTotal () {
     
                         let featuremapOptic = new Query({
                             returnGeometry: true,
                             outFields: ["*"],
                             where: "MN_North_Region.SDE.MN_Customers.Region  = 'North'"
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
                         where: "MN_North_Region.SDE.MN_Customers.Region  = 'North'"
                     });
                     queryTask.executeForCount(queryNorth).then(function (results) {
                         document.getElementById('isltotal').innerHTML = results
                     });
     


                let queryKar = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    where: "MN_North_Region.SDE.MN_Customers.City  = 'Islamabad'"
                });
                queryTask.executeForCount(queryKar).then(function (results) {
                    document.getElementById('islcity').innerHTML = results
                });

                let query = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    where: "MN_North_Region.SDE.MN_Customers.Circuit_Owner = 'Third Party'"
                });
                queryTask.executeForCount(query).then(function (results) {
                    document.getElementById('norththrd').innerHTML = results
                });


                // var query1 = new Query();
                // query1.returnGeometry = true;
                // query1.outFields = ["*"];
                // query1.where = "Vendor = 'Satcom'"
          
                // queryTask.executeForCount(query1).then(function (results) {
                //     document.getElementById('res').innerHTML = results
                // });

                let queryMulti = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    where: "MN_North_Region.SDE.MN_Customers.Vendor= 'MultiNet'"
                });
                queryTask.executeForCount(queryMulti).then(function (results) {
                    document.getElementById('northmultinet').innerHTML = results
                });

                // let querycir = new Query({
                //     returnGeometry: true,
                //     outFields: ["*"],
                //     where: "Vendor = 'SharpTel'"
                // });
                // queryTask.executeForCount(querycir).then(function (results) {
                //     document.getElementById('cir').innerHTML = results
                // });

                //For Ebon
                // let queryEbon = new Query({
                //     returnGeometry: true,
                //     outFields: ["*"],
                //     where: "Vendor = 'Ebone'"
                // });
                // queryTask.executeForCount(queryEbon).then(function (results) {
                //     document.getElementById('ebon').innerHTML = results
                // });

                let queryOptic = new Query({
                    returnGeometry: true,
                    outFields: ["*"],
                    where: "MN_North_Region.SDE.MN_Customers.Vendor = 'Optix'"
                });
                queryTask.executeForCount(queryOptic).then(function (results) {
                    document.getElementById('optic').innerHTML = results
                });

                // let queryKhi = new Query({
                //     returnGeometry: true,
                //     outFields: ["*"],
                //     where: "City = 'Karachi'"
                // });
                // queryTask.executeForCount(queryKhi).then(function (results) {
                //     document.getElementById('khi').innerHTML = results
                // });


            })
          

    }
    render() {
        return null
            

    }

}

