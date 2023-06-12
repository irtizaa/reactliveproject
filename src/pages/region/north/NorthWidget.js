import React from 'react'
import { loadModules } from 'react-arcgis';
// import SouthLayers from './SouthLayers';


export default class NorthWidget extends React.Component {
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
            "esri/widgets/Home", "esri/widgets/Print",'esri/widgets/BasemapGallery',"esri/widgets/CoordinateConversion","esri/widgets/DistanceMeasurement2D","esri/widgets/Editor"
        ])
            .then(([Search, FeatureLayer, MapImageLayer, Expand, LayerList, BasemapToggle, Locate, Graphic, GraphicsLayerm, 
                Home,Print,BasemapGallery,CoordinateConversion,DistanceMeasurement2D,Editor]) => {
                
            // var basemapToggle = new BasemapToggle({
            //     view: view,  // The view that provides access to the map's "streets" basemap
            //     nextBasemap: "topo"  // Allows for toggling to the "hybrid" basemap
            // });
            // view.ui.add(basemapToggle, 'bottom-left')
    

            let source = [
                {
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
                   
                },
                {
                    layer: new FeatureLayer({
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/1",
                        popupTemplate: { // autocasts as new popupTemplate()
                            title: "Customers",
                            content: [
                                {
                                    // It is also possible to set the fieldInfos outside of the content
                                    // directly in the popupTemplate. If no fieldInfos is specifically set
                                    // in the content, it defaults to whatever may be set within the popupTemplate.
                                    type: "fields",
                                    fieldInfos: [
                                        {
                                            fieldName: "Signup_ID",
                                            label: "Signup ID",
                                            visible: true,
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        },{
                                            fieldName: "Customer_Name",
                                            label: "Customer Name",
                                            visible: true
                                        }, {
                                            fieldName: "Node_Name",
                                            label: "Node Name",
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
                                        }, {
                                            fieldName: "Deployment_Date",
                                            label: "Deployment Date",
                                            visible: true,
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Vendor",
                                            label: "Vendor",
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
                                            fieldName: "City",
                                            label: "City",
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
                                        }, {
                                            fieldName: "Latitude",
                                            label: "Latitude",
                                            visible: true,
                                            // format: {
                                            //     digitSeparator: true,
                                            //     places: 0
                                            // }
                                        }, {
                                            fieldName: "Longitude",
                                            label: "Longitude",
                                            visible: true,
                                            // format: {
                                            //     digitSeparator: true,
                                            //     places: 0
                                            // }
                                        }
                                    ]
                                }
                            ]
                        }
                    }),
                    searchFields: ["Signup_ID"],
                    displayField: "Signup_ID",
                    exactMatch: false,
                    outFields: ["*"],
                    name: "Customers",
                    placeholder: "Signup_ID",
                    scale: 100000,
                    maxResults: 200,
                    maxSuggestions: 1000,
                    enableSuggestions: true
                   
                } , {
                    layer: new FeatureLayer({
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/0",
                        popupTemplate: { // autocasts as new popupTemplate()
                            title: "Node",
                            content: [
                                {
                                    // It is also possible to set the fieldInfos outside of the content
                                    // directly in the popupTemplate. If no fieldInfos is specifically set
                                    // in the content, it defaults to whatever may be set within the popupTemplate.
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
                                        fieldName: "Latitude",
                                        label: "Lat",
                                        visible: true,
                                        // format: {
                                        //     digitSeparator: true,
                                        //     places: 0
                                        // }
                                    }, {
                                        fieldName: "Longitude",
                                        label: "Long",
                                        visible: true,
                                        // format: {
                                        //     digitSeparator: true,
                                        //     places: 0
                                        // }
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
                    }),
                    searchFields: ["Node_Name"],
                    displayField: "Node_Name",
                    exactMatch: true,
                    outFields: ["*"],   
                    name: "Node",
                    placeholder: "Node Name",
                    scale: 1000,
                    maxResults: 200,
                    maxSuggestions: 200,
                    enableSuggestions: true
                   
                }, {
                    layer: new FeatureLayer({
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/2",
                        popupTemplate: { // autocasts as new popupTemplate()
                            title: "HandHole",
                            content: [
                                {
                                    type: "fields",
                                    fieldInfos: [
                                        {
                                            fieldName: "HH_ID",
                                            label: "HH ID",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "HH_No",
                                            label: "HH No",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "No_Of_Cables",
                                            label: "No Of Cables",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Street_Name",
                                            label: "Street Name",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Landmark",
                                            label: "Landmark",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "HH_Slab",
                                            label: "HH Slab",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "HH_Category",
                                            label: "HH Category",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "HH_Type",
                                            label: "HH Type",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "HH_Condition",
                                            label: "HH Condition",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "HH_Size",
                                            label: "HH Size",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Trench_Alignment",
                                            label: "Trench Alignment",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }
                                        , {
                                            fieldName: "Cable_Position",
                                            label: "Cable Position",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "No_Of_Core",
                                            label: "No Of Core",
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
                                        }, {
                                            fieldName: "Attachment",
                                            label: "Attachment",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "FOC_Type",
                                            label: "FOC Type",
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
                                            fieldName: "Ring_Name",
                                            label: "Ring Name",
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
                                            label: "Survey Date",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "HH_Longitude",
                                            label: "HH Longitude",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "HH_Latitude",
                                            label: "HH Latitude",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
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
                                        }, {
                                            fieldName: "Image_URL",
                                            label: "Image_URL",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "HandHole_Image",
                                            label: "HandHole Image",
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
                    searchFields: ["HH_ID"],
                    displayField: "HH_ID",
                    exactMatch: false,
                    outFields: ["*"],
                    name: "HandHole",
                    placeholder: "HH ID",
                    scale: 1000,
                    maxResults: 1000,
                    maxSuggestions: 1000,
                    enableSuggestions: false,
                   
                }, {
                    layer: new FeatureLayer({
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/3",
                        popupTemplate: { // autocasts as new popupTemplate()
                            title: "Joints",
                            content: [
                                {
                                    type: "fields",
                                    fieldInfos: [{
                                        fieldName: "Joint_ID",
                                        label: "Joint_ID ",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "JointNo",
                                        label: "JointNo",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "JointType",
                                        label: "JointType",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Street_Name",
                                        label: "Street_Name",
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
                                    }, {
                                        fieldName: "Connectivity_Type",
                                        label: "Connectivity_Type",
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
                                        fieldName: "Ring_Name",
                                        label: "Ring_Name",
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
                                        fieldName: "Remarks",
                                        label: "Remarks",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
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
                                    }
                                    ]
                                }
                            ]
                        }
                    }),
                    searchFields: ["Joint_ID"],
                    displayField: "Joint_ID",
                    exactMatch: true,
                    outFields: ["*"],
                    name: "Joints",
                    placeholder: "Joint ID",
                    scale: 100000,
                    maxResults: 1000,
                    maxSuggestions: 1000,
                    enableSuggestions: true
                   
                }, {
                    layer: new FeatureLayer({
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/4",
                        popupTemplate: { // autocasts as new popupTemplate()
                            title: "Poles",
                            content: 
                            [
                                {
                                    // It is also possible to set the fieldInfos outside of the content
                                    // directly in the popupTemplate. If no fieldInfos is specifically set
                                    // in the content, it defaults to whatever may be set within the popupTemplate.
                                    type: "fields",
                                    fieldInfos: [{
                                        fieldName: "Pole_ID",
                                        label: "Pole_ID",
                                        visible: true
                                    }, {
                                        fieldName: "Pole_Type",
                                        label: "Pole_Type",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Street_Name",
                                        label: "Street_Name",
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
                                        fieldName: "Region",
                                        label: "Region",
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
                                        fieldName: "Remarks",
                                        label: "Remarks",
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
                                        fieldName: "Pole_Images",
                                        label: "Pole_Images",
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
                    searchFields: ["Pole_ID"],
                    displayField: "Pole_ID",
                    exactMatch: true,
                    outFields: ["*"],
                    name: "Poles",
                    placeholder: "Pole ID",
                    scale: 100000,
                    maxResults: 1000,
                    maxSuggestions: 1000,
                    enableSuggestions: true
                   
                },
                // {
                //     layer: new FeatureLayer({
                //         url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/6",   
                //         popupTemplate: { // autocasts 0as new popupTemplate()
                //             title: "Metro Network",
                //             content: [
                //                 {
        
                //                     type: "fields",
                //                     fieldInfos: [{
                //                         fieldName: "FOC_ID",
                //                         label: "FOC_ID",
                //                         visible: true
                //                     }, {
                //                         fieldName: "Core_No",
                //                         label: "Core_No",
                //                         visible: true,
                //                         format: {
                //                             digitSeparator: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "Name",
                //                         label: "Name",
                //                         visible: true,
                //                         format: {
                //                             digitSeparator: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "Calculated_Length",
                //                         label: "Calculated_Length",
                //                         visible: true,
                //                         format: {
                //                             digitSeparator: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "Connectivity_Type",
                //                         label: "Connectivity_Type",
                //                         visible: true,
                //                         format: {
                //                             digitSeparator: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "Region",
                //                         label: "Region",
                //                         visible: true,
                //                         format: {
                //                             digitSeparator: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "Ring_Name",
                //                         label: "Ring_Name",
                //                         visible: true,
                //                         format: {
                //                             digitSeparator: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "StreetName",
                //                         label: "StreetName",
                //                         visible: true,
                //                         format: {
                //                             digitSeparator: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "Trench_Alignment",
                //                         label: "Trench_Alignment",
                //                         visible: true,
                //                         format: {
                //                             digitSeparator: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "Road_Crossing_Fiber",
                //                         label: "Road_Crossing_Fiber",
                //                         visible: true,
                //                         format: {
                //                             digitSeparator: true,
                //                             places: 0
                //                         }
                //                     },
                //                     //{
                //                     //fieldName: "Installed_Date",
                //                     //label: "Installed_Date",
                //                     //visible: true,
                //                     //format: {
                //                     //    digitSeparator: true,
                //                     //    places: 0
                //                     //}
                //                     //},
                //                     {
                //                         fieldName: "Survey_Date",
                //                         label: "Survey_Date",
                //                         visible: true,
                //                         format: {
                //                             digitSeparator: true,
                //                             places: 0
                //                         }
                //                     }
                //                         , {
                //                         fieldName: "Attach_Conduit_Fiber",
                //                         label: "Attach_Conduit_Fiber",
                //                         visible: true,
                //                         format: {
                //                             digitSeparator: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "Attach_Conduit_Dia",
                //                         label: "Attach_Conduit_Dia",
                //                         visible: true,
                //                         format: {
                //                             digitSeparator: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "City",
                //                         label: "City",
                //                         visible: true,
                //                         format: {
                //                             digitSeparator: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "Province",
                //                         label: "Province",
                //                         visible: true,
                //                         format: {
                //                             digitSeparator: true,
                //                             places: 0
                //                         }
                //                     }, {
                //                         fieldName: "Remarks",
                //                         label: "Remarks",
                //                         visible: true,
                //                         format: {
                //                             digitSeparator: true,
                //                             places: 0
                //                         }
                //                     }]
                //                 }, {
                //                     // Autocasts as new TextContent()
                //                     type: "text",
                //                     text: "There are {Calculated_Length} meter in {FOC_ID}"
                //                 }
                //             ]
                //         }
                //     }),
                //     searchFields: ["FOC_ID"],
                //     displayField: "FOC_ID",
                //     exactMatch: true,
                //     outFields: ["*"],
                //     name: "Metro Network",
                //     placeholder: "FOC ID",
                //     scale: 100000,
                //     maxResults: 200,
                //     maxSuggestions: 200,
                //     enableSuggestions: true
                   
                // },
                {
                    layer: new FeatureLayer({
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/6",
                        popupTemplate: { // autocasts 0as new popupTemplate()
                            title: "South Metro Network",
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
                    name: "South Metro Network",
                    placeholder: "FOC ID",
                    scale: 100000,
                    maxResults: 200,
                    maxSuggestions: 200,
                    enableSuggestions: true
                   
                },
                 {
                    layer: new FeatureLayer({
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/5",
                        popupTemplate: { // autocasts as new popupTemplate()
                            title: "Fiber Attachment",
                            content: [
                                {
                                    type: "fields",
                                    fieldInfos: [
                                        {
                                            fieldName: "FA_ID",
                                            label: "FA ID",
                                            visible: true,
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Joint_ID",
                                            label: "Joint ID",
                                            visible: true,
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Client_Name",
                                            label: "Client Name",
                                            visible: true,
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "CalculatedLength",
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
                                            fieldName: "Core_No",
                                            label: "Core No",
                                            visible: true,
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "HH_ID",
                                            label: "HH ID",
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
                                            fieldName: "Tube",
                                            label: "Tube",
                                            visible: true
                                        }, {
                                            fieldName: "Core_Colour",
                                            label: "Core Colour",
                                            visible: true,
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Remarks",
                                            label: "Remarks",
                                            visible: true
                                        }
                                    ]
                                }
                            ]
                        }
                    }),
                    searchFields: ["FA_ID"],
                    displayField: "FA_ID",
                    exactMatch: true,
                    outFields: ["*"],
                    name: "Fiber Attachment",
                    placeholder: "FA ID",
                    scale: 100000,
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

            view.ui.add(ccWidget, "top-left");

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

            // view.ui.add(distanceMeasurementWidget, "top-right");

            var expanddistanceMeasurementWidget = new Expand({
                view: view,
                group: "top-right",
                content: distanceMeasurementWidget.container,
                expandIconClass: "esri-icon-launch-link-external"
            });
            // view.ui.add(expanddistanceMeasurementWidget, "top-right");

           

            let editor = new Editor({
                view: view,
                allowedWorkflows: ["create"]
                // Pass in any other additional property as needed
              });
    
              view.ui.add(editor, "top-right");
    
              var expandeditor = new Expand({    
                  view:view,
                  content: editor.container,
                  expandIconClass: "esri-icon-authorize"
              });
              view.ui.add(expandeditor,"top-right")

              
              
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
        // (
        //     <SouthLayers
        //     map={this.props.map} 
        //     view= {this.props.view}
        //     height = {this.state.height}
        //     />
        // )

    }

}

