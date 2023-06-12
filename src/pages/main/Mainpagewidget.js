import React from 'react';
import { loadModules } from 'react-arcgis';
import routes from "../../routes"

export default class Mainpagewidget extends React.Component{
    componentDidMount(){
        let map = this.props.map;
        let view = this.props.view

        loadModules(["esri/widgets/Home","esri/widgets/Search", "esri/widgets/Fullscreen", "esri/layers/MapImageLayer","esri/widgets/Expand", "esri/layers/FeatureLayer", 'esri/widgets/Expand'])
        .then(([Home, Search,Fullscreen,MapImageLayer, Expand, FeatureLayer]) => {

            let Rings = new FeatureLayer({
                url :"http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/8",
                title:"Rings",      //MN_Soth_Infra.SDE.MN_Rings
                popupTemplate:{
                    title: "Rings",
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
                                    fieldName: "Ring_No",
                                    label: "Ring_No",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "KHI_Metro_Region",
                                    label: "KHI_Metro_Region",
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

            })
          //  map.add(Rings)


            let nodes = new FeatureLayer({
                url :"http://103.31.82.102:6080/arcgis/rest/services/Projects/Nationwide/MapServer/0",    
                title: 'Nodes',             //Nodes
                //minScale: 150000,
                popupTemplate: { //POP/OLT
                    title: "Nodes",
                    content: [{                          
                        type: "fields",
                        fieldInfos: [{
                            fieldName: "Node_Name",
                            label: "Node_Name",
                            visible: true
                        }, {
                            fieldName: "Node_No",
                            label: "Node_No",
                            visible: true,
                            format: {
                                digitSeparator: true,
                                places: 0
                            }
                        }, {
                            fieldName: "Node_ID",
                            label: "Node_ID",
                            visible: true,
                            format: {
                                digitSeparator: true,
                                places: 0
                            }
                        }, {
                            fieldName: "Building",
                            label: "Building",
                            visible: true,
                            format: {
                                digitSeparator: true,
                                places: 0
                            }
                        }, {
                            fieldName: "Name_2",
                            label: "Name_2",
                            visible: true,
                            format: {
                                digitSeparator: true,
                                places: 0
                            }
                        }, {
                            fieldName: "Installed_Switches",
                            label: "Installed_Switches",
                            visible: true,
                            format: {
                                digitSeparator: true,
                                places: 0
                            }
                        }, {
                            fieldName: "Used_Ports",
                            label: "Used_Ports",
                            visible: true,
                            format: {
                                digitSeparator: true,
                                places: 0
                            }
                        }, {
                            fieldName: "Total_Ports",
                            label: "Total_Ports",
                            visible: true,
                            format: {
                                digitSeparator: true,
                                places: 0
                            }
                        }, {
                            fieldName: "No_of_Links",
                            label: "No_of_Links",
                            visible: true,
                            format: {
                                digitSeparator: true,
                                places: 0
                            }
                        }, {
                            fieldName: "Ring_Name",
                            label: "Ring_Name",
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
                            fieldName: "Regions",
                            label: "Regions",
                            visible: true,
                            format: {
                                digitSeparator: true,
                                places: 0
                            }
                        }, {
                            fieldName: "Image_URL",
                            label: "Image_URL",
                            visible: true,
                            format: {
                                digitSeparator: true,
                                places: 0
                            }
                        }, {
                            fieldName: "Node_Image",
                            label: "Node_Image",
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

            })
           // map.add(nodes)  

           /*  let source = [
                {
                    layer: new FeatureLayer({
                        url: "http://172.16.6.176:6080/arcgis/rest/services/KarachiSDE/FeatureServer/5",
                        popupTemplate: { // autocasts as new popupTemplate()
                            title: "Customer",
                            content: [{
                                type: "fields",
                                fieldInfos: [{
                                    fieldName: "Name",
                                    label: "Name",
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "ID",
                                    label: "ID",
                                    format: {
                                        digitSeparator: false,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Type",
                                    label: "Type",
                                    format: {
                                        digitSeparator: false,
                                        places: 0
                                        }
                                    }, {
                                    fieldName: "DC",
                                    label: "DC",
                                    format: {
                                        digitSeparator: false,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "POP",
                                    label: "POP",
                                    format: {
                                        digitSeparator: false,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "FAT",
                                    label: "FAT",
                                    format: {
                                        digitSeparator: false,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "City",
                                    label: "City",
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Comment",
                                    label: "Comment",
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }
                                ]
                            }]
                        }
                    }),
                    searchFields: ["ID", "Name"],
                    displayField: "Name",
                    exactMatch: false,
                    outFields: ["*"],
                    name: "Customer",
                    placeholder: "210103276",
                    scale: 10,
                    maxResults: 6,
                    maxSuggestions: 6,
                    minSuggestCharacters: 0,
                    resultSymbol: {
                        type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
                        color: [239, 25, 25],
                        size: 10,
                        width: 30,
                        height: 30,
                        xoffset: 0,
                        yoffset: 0
                    }
                }] */


                
                var homeWidget = new Home({
                    view: view
                  });
                  
                  // adds the home widget to the top left corner of the MapView
                  view.ui.add(homeWidget, "top-left");


                    //Search Widget
            // var searchWidget = new Expand({
            //     content: new Search({
            //         view: view,
            //         popupEnabled: true,
            //         includeDefaultSources: true,
            //         searchAllEnabled: false,
            //         sources: [],
            //     }),
            //     view: view,
            //     group: "top-right",
            //     expanded: true
            // });
            // view.ui.add(searchWidget, "top-right");


                  //Fullscreen Widget
            // var fullscreen = new Fullscreen({
            //      view: view,
            //    });
            //    view.ui.add(fullscreen, "top-right");

            //searchWidget.content.sources = source
            //this.props.view.ui.add(searchWidget, 'top-right')
/* 
            let boundary = new FeatureLayer({
                url: "http://172.16.6.176:6080/arcgis/rest/services/boundary/MapServer/0",
                maxScale: 200000
            })
            map.add(boundary) */
        
            
        })
        
    }
    render(){
        return null
    }
}