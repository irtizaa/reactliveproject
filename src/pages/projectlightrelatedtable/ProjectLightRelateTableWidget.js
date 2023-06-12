import React from 'react'
import { loadModules } from 'react-arcgis';
import ProjectLightRelatedTableLayers from './ProjectLightRelatedTableLayers';


export default class ProjectLightRelateTableWidget extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            height : this.props.height
        }
    }

    componentDidMount() {
        let view = this.props.view;
        let map = this.props.map
        

        loadModules(["esri/widgets/Search", "esri/layers/FeatureLayer", "esri/layers/MapImageLayer", 'esri/widgets/Expand',
            'esri/widgets/LayerList', "esri/widgets/BasemapToggle", "esri/widgets/Locate", "esri/Graphic", "esri/layers/GraphicsLayer",
            "esri/widgets/Home", "esri/widgets/Print",'esri/widgets/BasemapGallery',"esri/widgets/DistanceMeasurement2D"
        ])
            .then(([Search, FeatureLayer, MapImageLayer, Expand, LayerList, BasemapToggle, Locate, Graphic, GraphicsLayerm, 
                Home,Print,BasemapGallery,DistanceMeasurement2D]) => {
                
            // var basemapToggle = new BasemapToggle({
            //     view: view,  // The view that provides access to the map's "streets" basemap
            //     nextBasemap: "topo"  // Allows for toggling to the "hybrid" basemap
            // });
            // view.ui.add(basemapToggle, 'bottom-left')
    

            let source = [                               
                
              {
                    layer: new FeatureLayer({
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/TP_Light/MapServer/0",
                        popupTemplate: { // autocasts as new popupTemplate()
                            title: "Aggregation",
                            content: [
                                {
                                    type: "fields",
                                    fieldInfos: [
                                        {
                                            fieldName: "Aggregation_ID",
                                            label: "Aggregation ID ",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "New_Pole",
                                            label: "New Pole",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "New_Handhole",
                                            label: "New Handhole",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "OnNet_Infra",
                                            label: "OnNet Infra",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "OffNet_Infra",
                                            label: "OffNet Infra",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "No_of_CellSites",
                                            label: "No of CellSites",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "OnNet_Aerial",
                                            label: "OnNet Aerial",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "OnNet_Buried",
                                            label: "OnNet Buried",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "OffNet_Aerial",
                                            label: "OffNet Aerial",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "OffNet_Buried",
                                            label: "OffNet Buried",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Priority",
                                            label: "Priority",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Region",
                                            label: "Region",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    }),
                    searchFields: ["Site_ID"],
                    displayField: "Site_ID",
                    exactMatch: true,
                    outFields: ["*"],
                    name: "Aggregation",
                    placeholder: "Site ID",
                    scale: 100000,
                    maxResults: 200,
                    maxSuggestions: 200,
                    enableSuggestions: true
                   
                } ,
                {
                    layer: new FeatureLayer({
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/TP_Light/MapServer/1",
                        popupTemplate: { // autocasts as new popupTemplate()
                            title: "Cell Sites",
                            content: [
                                {
                                    type: "fields",
                                    fieldInfos: [
                                        {
                                            fieldName: "Site_ID",
                                            label: "Site ID ",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, 
                                        {
                                            fieldName: "Signup_ID",
                                            label: "Signup ID ",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        },{
                                            fieldName: "Aggregation_ID",
                                            label: "Aggregation ID",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Status",
                                            label: "Status",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Priority",
                                            label: "Priority",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "OnNet_Infra",
                                            label: "OnNet Infra",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "OffNet_Infra",
                                            label: "OffNet Infra",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Remarks",
                                            label: "Remarks",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        },{
                                            fieldName: "Latitude",
                                            label: "Latitude",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        },{
                                            fieldName: "Longitude",
                                            label: "Longitude",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Image_URL",
                                            label: "Image URL",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Cell_Image",
                                            label: "Cell Image",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    }),
                    searchFields: ["Site_ID"],
                    displayField: "Site_ID",
                    exactMatch: true,
                    outFields: ["*"],
                    name: "Cell Sites",
                    placeholder: "Site ID",
                    scale: 1000,
                    maxResults: 6,
                    maxSuggestions: 6,
                    enableSuggestions: true
                }
            ]


            var searchWidget = new Expand({
                content: new Search({
                    view: view,
                    popupEnabled: true,
                    position: "fixed",
                    includeDefaultSources: false,
                    searchAllEnabled: false,
                    sources: [],
                }),
                view: view,
                group: "bottom-right",
                expanded: false
            });
            view.ui.add(searchWidget, "top-right");
            searchWidget.content.sources = source

                let layerlist = new Expand({
                    content: new LayerList({
                        view: view,
                        style: "classic", //  styles include 'card' and 'classic'
                        statusIndicatorsVisible: false,
                        listItemCreatedFunction: function (event) {
                            let item = event.item
                            if (item.title !== "South Region")
                                item.panel = {
                                    content: "legend",
                                    open: false
                                };
                        }
                    }),
                    view: view,
                    group: "bottom-right",
                    expanded: false
                })
                view.ui.add(layerlist, 'top-right')


          

            let home = new Home({
                view:view
            });
            view.ui.add(home, 'top-left')

                 var locateBtn = new Locate({
                    view: view
                });
                view.ui.add(locateBtn, {
                    position: "top-left"
                }); 

                  //Print Widget
                //   view.when(function () {
                //     var print = new Print({
                //         view: view,
                //         printServiceUrl: "http://103.31.82.102:6080/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"                    });
                //     view.ui.add(print, "top-left")
                //     var expandprint = new Expand({
                //         view: view,
                //         content: print.container,
                //         expandIconClass: "esri-icon-printer"
                //     });
                //     view.ui.add([expandprint], "top-left");
                // });

           
                  //basemapGallery
            var galery = new BasemapGallery({
                view: view,
                expanded: false
                
            })
            view.ui.add(galery, "top-right");

            var expandgallery = new Expand({
                view: view,
                content: galery.container,
                expandIconClass: "esri-icon-basemap"
            });
            view.ui.add(expandgallery, "top-right");


               // To add the DistanceMeasurement2D widget to the map
               var distanceMeasurementWidget = new DistanceMeasurement2D({
                view: view
            });

            view.ui.add(distanceMeasurementWidget, "top-right");

            var expanddistanceMeasurementWidget = new Expand({
                view: view,
                content: distanceMeasurementWidget.container,
                expandIconClass: "esri-icon-launch-link-external"
            });
            view.ui.add(expanddistanceMeasurementWidget, "top-right");

            //*** Add div element to show coordates ***//
            var coordsWidget = document.createElement("div");
            coordsWidget.id = "coordsWidget";
            coordsWidget.className = "esri-widget esri-component";
            coordsWidget.style.padding = "7px 15px 5px";
            view.ui.add(coordsWidget, "bottom-right");

            //*** Update lat, lon, zoom and scale ***//
            function showCoordinates(xy) {
                var coords = "Lat/Lon " + xy.latitude.toFixed(6) + " " + xy.longitude.toFixed(6) +
                    " | Scale 1:" + Math.round(view.scale * 1) / 1 +
                    " | Zoom " + view.zoom;
                coordsWidget.innerHTML = coords;
            }

            //*** Add event and show center coordinates after the view is finished moving e.g. zoom, pan ***//
            view.watch(["stationary"], function () {
                showCoordinates(view.center);
            });

            //*** Add event to show mouse coordinates on click and move ***//
            view.on(["pointer-down", "pointer-move"], function (evt) {
                showCoordinates(view.toMap({ x: evt.x, y: evt.y }));
            });
            view.popup.autoOpenEnabled = true;
            view.on('click', ["Shift"], function (evt) {

                var lat = Math.round(evt.mapPoint.latitude * 1000000) / 1000000;
                var lon = Math.round(evt.mapPoint.longitude * 1000000) / 1000000;

                let graphic = new Graphic({
                    geometry: evt.mapPoint,
                    symbol: {
                        type: "simple-marker",
                        color: "blue",
                        size: 5,
                        outline: { // autocasts as new SimpleLineSymbol()
                            width: 0.5,
                            color: [0, 0, 0, 0.2]
                        }
                    },  popupTemplate: {
                            content: "Lat/Lon " + lat + ", " + lon,
                            location: evt.mapPoint
                        },
                    
                })
                view.graphics.removeAll()
                view.graphics.add(graphic);
                
                setTimeout(function () {
                    view.graphics.remove(graphic);
                }, 5000);

                view.popup.open({
                    // Set the popup's title to the coordinates of the location
                    title: "Reverse geocode: [" + lon + ", " + lat + "]",
                    location: evt.mapPoint // Set the location of the popup to the clicked location
                });
            });
        });

    }

    render() {
        return (null
            // <ProjectLightRelatedTableLayers
            // map={this.props.map} 
            // view= {this.props.view}
            // height = {this.state.height}
            // />
        )

    }

}

