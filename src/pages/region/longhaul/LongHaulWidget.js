import React from 'react'
import { loadModules } from 'react-arcgis';
import LongHaulLayers from './LongHaulLayers';


export default class LongHaulWidget extends React.Component {
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
            "esri/widgets/Home", "esri/widgets/Print",'esri/widgets/BasemapGallery',"esri/widgets/Editor"
        ])
            .then(([Search, FeatureLayer, MapImageLayer, Expand, LayerList, BasemapToggle, Locate, Graphic, GraphicsLayerm, Home,Print,BasemapGallery,Editor]) => {
                
            // var basemapToggle = new BasemapToggle({
            //     view: view,  // The view that provides access to the map's "streets" basemap
            //     nextBasemap: "topo"  // Allows for toggling to the "hybrid" basemap
            // });
            // view.ui.add(basemapToggle, 'bottom-left')
    

            let source = [
                {
                    layer: new FeatureLayer({	//MN_Soth_Infra.SDE.MN_LongHaul_Network
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Long_Haul/LH/MapServer/1",
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
                                        }, {
                                            fieldName: "Installed_Date",
                                            label: "Installed_Date",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
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
                    enableSuggestions: true,
                       // resultSymbol: {
                    //     type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
                    //     color: [239, 25, 25],
                    //     size: 10,
                    //     width: 30,
                    //     height: 30,
                    //     xoffset: 0,
                    //     yoffset: 0
                    // }
                },
                //  {
                //     layer: new FeatureLayer({		//MN_LongHaul_Existing_Network
                //         url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/LH/MapServer/2",
                //     popupTemplate: { // autocasts as new popupTemplate()
                //         title: "Existing Network",
                //         content: [
                //             {
                //                 type: "fields",
                //                 fieldInfos: [
                //                     {
                //                         fieldName: "Section_ID",
                //                         label: "Section_ID",
                //                         visible: true,
                //                         formate: {
                //                             digitSeperate: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "Core_No",
                //                         label: "Core_No",
                //                         visible: true,
                //                         formate: {
                //                             digitSeperate: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "Calculated_Length",
                //                         label: "Calculated_Length",
                //                         visible: true,
                //                         formate: {
                //                             digitSeperate: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "Connectivity_Type",
                //                         label: "Connectivity_Type",
                //                         visible: true,
                //                         formate: {
                //                             digitSeperate: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "Section",
                //                         label: "Section",
                //                         visible: true,
                //                         formate: {
                //                             digitSeperate: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "StreetName",
                //                         label: "StreetName",
                //                         visible: true,
                //                         formate: {
                //                             digitSeperate: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "City",
                //                         label: "City",
                //                         visible: true,
                //                         formate: {
                //                             digitSeperate: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "Regions",
                //                         label: "Regions",
                //                         visible: true,
                //                         formate: {
                //                             digitSeperate: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "Province",
                //                         label: "Province",
                //                         visible: true,
                //                         formate: {
                //                             digitSeperate: true,
                //                             places: 0
                //                         }
                //                     }
                //                 ]
                //             }
                //         ]
                //     }
                // }),
                //     searchFields: ["Section_ID"],
                //     displayField: "Section_ID",
                // exactMatch: true,
                // outFields: ["*"],
                // name: "Existing Network",
                // placeholder: "Section ID",
                // scale: 1000,
                // maxResults: 200,
                // maxSuggestions: 200,
                // enableSuggestions: true
                // },
                 {
                    layer: new FeatureLayer({		//SDE.MN_LH_Rings 
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Long_Haul/LH/MapServer/2",
                        popupTemplate: { // autocasts as new popupTemplate()
                            title: "LH Rings",
                            content: [
                                {
                                    type: "fields",
                                    fieldInfos: [
                                        {
                                            fieldName: "Ring_Name",
                                            label: "Ring_Name",
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
                                        }, {
                                            fieldName: "Ring_No",
                                            label: "Ring_No",
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
                    searchFields: ["Ring_Name"],
                    displayField: "Ring_Name",
                    exactMatch: true,
                    outFields: ["*"],
                    name: "LH Rings",
                    placeholder: "Ring Name",
                    scale: 1000,
                    maxResults: 200,
                    maxSuggestions: 200,
                    enableSuggestions: true
                },  {
                    layer: new FeatureLayer({		//Site
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Long_Haul/LH/MapServer/0",
                        popupTemplate: { // autocasts as new popupTemplate()
                            title: "Site",
                            content: [
                                {
                                    type: "fields",
                                    fieldInfos: [
                                        {
                                            fieldName: "Site",
                                            label: "Site ",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Site_Categ",
                                            label: "Site_Categ",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "SDH",
                                            label: "SDH",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "DWDM",
                                            label: "DWDM",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Address",
                                            label: "Address",
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
                                        }, {
                                            fieldName: "Image_URL",
                                            label: "Image URL",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Site_Image",
                                            label: "Site Image",
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
                    searchFields: ["Site"],
                    displayField: "Site",
                    exactMatch: true,
                    outFields: ["*"],
                    name: "Site",
                    placeholder: "Site Name",
                    scale: 1000,
                    maxResults: 200,
                    maxSuggestions: 200,
                    enableSuggestions: true
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
            // view.when(function () {
            //   var print = new Print({
            //       view: view,
            //       printServiceUrl: "http://172.30.30.234:6080/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
            //   });
            //   view.ui.add(print, "top-left")
            //   var expandprint = new Expand({
            //       view: view,
            //       content: print.container,
            //       expandIconClass: "esri-icon-printer"
            //   });
            //   view.ui.add([expandprint], "top-left");
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


            let editor = new Editor({
                view: view
                // Pass in any other additional property as needed
              });

            //  view.ui.add(editor, "top-right");

              var expandeditor = new Expand({
                  view:view,
                  content: editor.container,
                  expandIconClass: "esri-icon-authorize"
              });
           //   view.ui.add(expandeditor,"top-right")


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
        return (
            null
            // <LongHaulLayers
            // map={this.props.map} 
            // view= {this.props.view}
            // height = {this.state.height}
            // />
        )

    }

}

