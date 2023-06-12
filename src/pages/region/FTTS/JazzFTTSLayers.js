import React from 'react'
import { loadModules } from 'react-arcgis';


export default class CentralLayers extends React.Component {

    componentDidMount() {

        let map = this.props.map;
        // let view = this.props.view;

        loadModules(["esri/layers/FeatureLayer", "esri/layers/GeoJSONLayer", "esri/layers/GroupLayer"
        ])
            .then(([FeatureLayer,GeoJSONLayer, GroupLayer]) => {
              
            
    
                let Pak = new FeatureLayer({
                    url:"http://103.31.82.102:6080/arcgis/rest/services/Projects/PakBoundaries/MapServer/3",
                    title:"Pak Boundary",       //MN_Pak_Boundary
           
                })  
                map.add(Pak)
                
                let Region = new FeatureLayer({
                    
                    url:"http://103.31.82.102:6080/arcgis/rest/services/Projects/PakBoundaries/MapServer/2",
                    title:"Region",
                    popupTemplate:{     //MN_Soth_Infra.SDE.MN_Regional_Boundary
                    title: "Regional Boundary",
                    content: [
                    {
                        type: "fields",
                        fieldInfos: [
                            {
                                fieldName: "R_Name",
                                label: "Region Name ",
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
                            } 
                        ]
                    }
                ]
                    }
                })
                
                map.add(Region)


                let City = new FeatureLayer({
                    url:"http://103.31.82.102:6080/arcgis/rest/services/Projects/PakBoundaries/MapServer/1",
                    title:"City",
                    popupTemplate:{ //MN_Soth_Infra.SDE.MN_Cities_Boundary
                        title: "City",  
                        //actions: [measureThisAction],
                        content: [{
                            // It is also possible to set the fieldInfos outside of the content
                            // directly in the popupTemplate. If no fieldInfos is specifically set
                            // in the content, it defaults to whatever may be set within the popupTemplate.
                            type: "fields",
                            fieldInfos: [{
                                fieldName: "City",
                                label: "City",
                                visible: true,
                                formate: {
                                    digitSeperate: true,
                                    places: 0
                                }
                            },  {
                                fieldName: "R_Name",
                                label: "Region Name",
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
                map.add(City)


        
                        let Rings = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Jazz_FTTS/Jazz_FTTS/MapServer/3", {
                            outFields: ["*"],
                            title: 'Rings',
                            popupTemplate: {
                                title: "Rings",
                                content: [
                                    {
                                        type: "fields",
                                        fieldInfos: [
                                            {
                                                fieldName: "Ring_Tag",
                                                label: "Ring Tag",
                                                visible: true,
                                                formate: {
                                                    digitSeperate: true,
                                                    places: 0
                                                }
                                            }, {
                                                fieldName: "Cell_Sites_Count",
                                                label: "Cell Sites Count",
                                                visible: true,
                                                formate: {
                                                    digitSeperate: true,
                                                    places: 0
                                                }
                                            }, {
                                                fieldName: "Aggregation_Sites_Count",
                                                label: "Aggregation Sites Count",
                                                visible: true,
                                                formate: {
                                                    digitSeperate: true,
                                                    places: 0
                                                }
                                            }, {
                                                fieldName: "Total_Sites_Count",
                                                label: "Total Sites Count",
                                                visible: true,
                                                formate: {
                                                    digitSeperate: true,
                                                    places: 0
                                                }
                                            }, {
                                                fieldName: "OFC_ON_Net",
                                                label: "OFC ON Net",
                                                visible: true,
                                                formate: {
                                                    digitSeperate: true,
                                                    places: 0
                                                }
                                            }, {
                                                fieldName: "OFC_OFF_Net",
                                                label: "OFC OFF Net",
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
                                            }
                                        ]
                                    }
                                ]
                            }
                        });
                        map.add(Rings);

                        var Route = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Jazz_FTTS/Jazz_FTTS/MapServer/2",{
                            title:'Proposed Route',
                            visible : true,
                            popupTemplate:  { // autocasts as new popupTemplate()
                                title: "Proposed Route",
                                content: [
                                    {
                                        type: "fields",
                                        fieldInfos: [
                                            {
                                                fieldName: "Section_Name",
                                                label: "Section Name",
                                                visible: true,
                                                formate: {
                                                    digitSeperate: true,
                                                    places: 0
                                                }
                                            }, {
                                                fieldName: "Ring_Tag",
                                                label: "Ring Tag",
                                                visible: true,
                                                formate: {
                                                    digitSeperate: true,
                                                    places: 0
                                                }
                                            },{
                                                fieldName: "Status",
                                                label: "Status",
                                                visible: true,
                                                formate: {
                                                    digitSeperate: true,
                                                    places: 0
                                                }
                                            }, {
                                                fieldName: "Connectivity",
                                                label: "Connectivity",
                                                visible: true,
                                                formate: {
                                                    digitSeperate: true,
                                                    places: 0
                                                }
                                            },  {
                                                fieldName: "Length_M",
                                                label: "Length_M",
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
                        map.add(Route);

                        var Aggre = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Jazz_FTTS/Jazz_FTTS/MapServer/1", {
        
                            //  outFields: ["*"],				//Aggregation Sites
                            title: 'Aggregation Sites',
                            visible: true,
                            popupTemplate: {
                                title: "Aggregation Sites",
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
                                        fieldName: "Region",
                                        label: "Region",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
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
                                        fieldName: "Aggregation_Image",
                                        label: "Aggregation Image",
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
            
                        });
                        map.add(Aggre); 
    
                        
                    var cellSite = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Jazz_FTTS/Jazz_FTTS/MapServer/0", {
        
                        //  outFields: ["*"],				//Cell Sites
                        title: 'Cell Sites',
                        visible: true,
                        popupTemplate: {
                            title:"Cell Sites",
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
                                        },{
                                            fieldName: "Aggregation_ID",
                                            label: "Aggregation ID",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Ring_Tag",
                                            label: "Ring Tag",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Latitude",
                                            label: "Latitude",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Longitude",
                                            label: "Longitude",
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
                                        },{
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
        
                    });
                    map.add(cellSite); 

                 
    
  
            });

    }

    render() {
        return null

    }

}

