import React from 'react'
import { loadModules } from 'react-arcgis';


export default class initiativesWidgets extends React.Component {
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
            "esri/widgets/Home", "esri/widgets/Print",'esri/widgets/BasemapGallery',"esri/widgets/CoordinateConversion","esri/widgets/DistanceMeasurement2D"
        ])
            .then(([Search, FeatureLayer, MapImageLayer, Expand, LayerList, BasemapToggle, Locate, Graphic, GraphicsLayerm, 
                Home,Print,BasemapGallery,CoordinateConversion,DistanceMeasurement2D]) => {
                
            // var basemapToggle = new BasemapToggle({
            //     view: view,  // The view that provides access to the map's "streets" basemap
            //     nextBasemap: "topo"  // Allows for toggling to the "hybrid" basemap
            // });
            // view.ui.add(basemapToggle, 'bottom-left')
    

            let source = [
                {
                    layer: new FeatureLayer({
                        url: "http://103.31.82.102:6080/arcgis/rest/services/GISInitiative2021/GISInitiative2021/MapServer/0",
                        popupTemplate: 
                        {
                            title: "Ideas",                    
                            content: [
                                {
                
                                type: "fields",
                                fieldInfos: [{
                                    fieldName: "Aggregation_ID ",
                                    label: "Aggregation ID",
                                    visible: true
                                }, {
                                    fieldName: "Length",
                                    label: "Length",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Ring_Tag",
                                    label: "Ring_Tag",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Category",
                                    label: "Category",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                },{
                                    fieldName: "SHAPE_Length",
                                    label: "SHAPE Length",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "SHAPE",
                                    label: "SHAPE",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "City",
                                    label: "City",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }
                                ]
                            }
                            ]
                        }
                    }),
                    searchFields: ["Aggregation_ID"],
                    displayField: "Aggregation_ID",
                    exactMatch: true,
                    outFields: ["*"],
                    name: "Ideas",
                    placeholder: "Aggregation ID",
                    scale: 100000,
                    maxResults: 200,
                    maxSuggestions: 200,
                    enableSuggestions: true
                   
                }, {
                    layer: new FeatureLayer({
                        url: "http://103.31.82.102:6080/arcgis/rest/services/GISInitiative2021/GISInitiative2021/MapServer/3",
                        popupTemplate: 
                        {
                            title: "TP FTTT Infra",
                            content: [
                                {
                                    type: "fields",
                                    fieldInfos: [
                                        {
                                            fieldName: "FOC_ID",
                                            label: "FOC_ID ",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Core_Number",
                                            label: "Core_Number",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Calculated_Length",
                                            label: "Calculated Length",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        },{
                                            fieldName: "Measured_Length",
                                            label: "Measured Length",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "No_of_Joints",
                                            label: "No of Joints",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "StreetName",
                                            label: "Street Name",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        },  {
                                            fieldName: "Connectivity_Type",
                                            label: "Connectivity Type",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        },
                                     
                                        {
                                            fieldName: "Survey_Date",
                                            label: "Survey Date",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "City",
                                            label: "City",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        },  {
                                            fieldName: "Region",
                                            label: "Region",
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
                                        }
                                    ]
                                }
                            ]
                        }
                    }),
                    searchFields: ["FOC_ID"],
                    displayField: "FOC_ID",
                    exactMatch: true,
                    outFields: ["*"],
                    name: "TP FTTT Infra",
                    placeholder: "FOC ID",
                    scale: 100000,
                    maxResults: 200,
                    maxSuggestions: 200,
                    enableSuggestions: true
                   
                },
                  {                
                    layer: new FeatureLayer({
                       // url: "http://172.30.30.234:6080/arcgis/rest/services/MN_South/MultiGIS/MapServer/7",
                          url:  "http://103.31.82.102:6080/arcgis/rest/services/GISInitiative2021/GISInitiative2021/MapServer/2",
                        popupTemplate: { // autocasts as new popupTemplate()
                            title: "LongHaul Network",
                            content: [
                                {
                                    type: "fields",
                                    fieldInfos: [
                                        {
                                            fieldName: "FOC_ID",
                                            label: "FOC_ID ",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Core_Number",
                                            label: "Core_Number",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Name",
                                            label: "Name",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Calculated_Length",
                                            label: "Calculated_Length",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "No_of_Joints",
                                            label: "No_of_Joints",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "StreetName",
                                            label: "StreetName",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Name",
                                            label: "Name",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Section",
                                            label: "Section",
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
                                        }, {
                                            fieldName: "Trench_Alignment",
                                            label: "Trench_Alignment",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Road_Crossing_Fiber",
                                            label: "Road_Crossing_Fiber",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Attach_Conduit_Fiber",
                                            label: "Attach_Conduit_Fiber",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Attach_Conduit_Dia",
                                            label: "Attach_Conduit_Dia",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Connectivity_Type",
                                            label: "Connectivity_Type",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        },
                                        //{
                                        //    fieldName: "Installed_Date",
                                        //    label: "Installed_Date",
                                        //    visible: true,
                                        //    formate: {
                                        //        digitSeperate: true,
                                        //        places: 0
                                        //    }
                                        //},
                                        {
                                            fieldName: "Survey_Date",
                                            label: "Survey_Date",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "City",
                                            label: "City",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Province",
                                            label: "Province",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Regions",
                                            label: "Regions",
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
                    searchFields: ["FOC_ID"],
                    displayField: "FOC_ID",
                    exactMatch: true,
                    outFields: ["*"],
                    name: "LongHaul Network",
                    placeholder: "FOC ID",
                    scale: 1000,
                    maxResults: 200,
                    maxSuggestions: 200,
                    enableSuggestions: true
                   
                }, {
                    layer: new FeatureLayer({
                        url: "http://103.31.82.102:6080/arcgis/rest/services/GISInitiative2021/GISInitiative2021/MapServer/1",
                        popupTemplate: { // autocasts 0as new popupTemplate()
                            title: "Metro Network",
                            content: [
                                {
                
                                type: "fields",
                                fieldInfos: [{
                                    fieldName: "FOC_ID",
                                    label: "FOC ID",
                                    visible: true
                                }, {
                                    fieldName: "Core_Number",
                                    label: "Core Number",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Name",
                                    label: "Name",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Calculated_Length",
                                    label: "Calculated Length",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Connectivity_Type",
                                    label: "Connectivity Type",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Regions",
                                    label: "Regions",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Ring_Name",
                                    label: "Ring Name",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "StreetName",
                                    label: "Street Name",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Trench_Alignment",
                                    label: "Trench Alignment",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Road_Crossing_Fiber",
                                    label: "Road Crossing Fiber",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Installed_Date",
                                    label: "Installed Date",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Survey_Date",
                                    label: "Survey Date",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }
                                    , {
                                    fieldName: "Attach_Conduit_Fiber",
                                    label: "Attach Conduit Fiber",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Attach_Conduit_Dia",
                                    label: "Attach Conduit_Dia",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "City",
                                    label: "City",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Province",
                                    label: "Province",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Remarks",
                                    label: "Remarks",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }
                                ]
                            }
                            ]
                        }
                    }),
                    searchFields: ["FOC_ID"],
                    displayField: "FOC_ID",
                    exactMatch: true,
                    outFields: ["*"],
                    name: "Metro Network",
                    placeholder: "FOC ID",
                    scale: 100000,
                    maxResults: 200,
                    maxSuggestions: 200,
                    enableSuggestions: true
                   
                },
                {
                    layer: new FeatureLayer({
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/9",
                        popupTemplate: { // autocasts as new popupTemplate()
                            title: "Cities",
                            content: [
                                {
                                    type: "fields",
                                    fieldInfos: [
                                        {
                                            fieldName: "ID",
                                            label: "ID",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "City",
                                            label: "City",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "R_Name",
                                            label: "R_Name",
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
                    searchFields: ["City"],
                    displayField: "City",
                    exactMatch: true,
                    outFields: ["*"],
                    name: "Cities",
                    placeholder: "City",
                    scale: 1000,
                    maxResults: 6,
                    maxSuggestions: 6,
                    enableSuggestions: true
                   
                } ,  {
                    layer: new FeatureLayer({
                        url:"http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/10",
                        popupTemplate: {
                            title: "Regions",
                            content: [
                                {
                                    type: "fields",
                                    fieldInfos: [
                                        {
                                            fieldName: "R_Name",
                                            label: "R_Name ",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Country",
                                            label: "Country",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Province",
                                            label: "Province",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Country",
                                            label: "Country",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Unique_ID",
                                            label: "Unique_ID",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Town",
                                            label: "Town",
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
                    searchFields: ["R_Name"],
                    displayField: "R_Name",
                    exactMatch: false,
                    outFields: ["*"],
                    name: "Regions",  
                    placeholder: "Region Name",
                    scale: 10,
                    maxResults: 6,
                    maxSuggestions: 6,
                    minSuggestCharacters: 0,
                    // resultSymbol: {
                    //     type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
                    //     color: [239, 25, 25],
                    //     size: 10,
                    //     width: 30,
                    //     height: 30,
                    //     xoffset: 0,
                    //     yoffset: 0
                    // }
                }
            ]


            var searchWidget = new Expand({
                content: new Search({
                    view: view,
                    popupEnabled: true,
                    position: "fixed",
                    includeDefaultSources: true,
                    searchAllEnabled: true,
                    sources: [],
                }),
                view: view,
                group: "top-right",
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
                    group: "top-right",
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
                //         printServiceUrl: "http://103.31.82.102:6080/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
                //     });
                //     view.ui.add(print, "top-left")
                //     var expandprint = new Expand({
                //         view: view,
                //         group: "top-right",
                //         content: print.container,
                //         expandIconClass: "esri-icon-printer"
                //     });
                //     view.ui.add([expandprint], "top-left");
                // });
           
                  //basemapGallery
            var gallery = new BasemapGallery({
                view: view,
                expanded: false
                
            })
            view.ui.add(gallery, "top-right");

            var expandgallery = new Expand({
                view: view,
                group: "top-right",
                content: gallery.container,
                expandIconClass: "esri-icon-basemap"
            });
            view.ui.add(expandgallery, "top-right");


            var ccWidget = new CoordinateConversion({
                view: view
            });

            view.ui.add(ccWidget, "bottom-left");

            var expandcordinate = new Expand({
                view: view,
                group: "top-right",
                content: ccWidget.container,
                expandIconClass: "esri-icon-map-pin"
            });
            view.ui.add(expandcordinate, "top-right");


               // To add the DistanceMeasurement2D widget to the map
               var distanceMeasurementWidget = new DistanceMeasurement2D({
                view: view
            });

            view.ui.add(distanceMeasurementWidget, "top-right");

            var expanddistanceMeasurementWidget = new Expand({
                view: view,
                group: "top-right",
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
        return null
    
    }

}

                  