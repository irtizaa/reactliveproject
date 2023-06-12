import React from 'react'
import { loadModules } from 'react-arcgis';
// import CentralLayer from './CentralLayer';


export default class CentralWidget extends React.Component {
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
            'esri/widgets/LayerList', "esri/widgets/BasemapGallery","esri/widgets/CoordinateConversion","esri/widgets/DistanceMeasurement2D", "esri/widgets/Locate", "esri/Graphic", "esri/layers/GraphicsLayer",
            "esri/widgets/Home","esri/widgets/Editor"
        ])
            .then(([Search, FeatureLayer, MapImageLayer, Expand, LayerList, BasemapGallery, CoordinateConversion, DistanceMeasurement2D, Locate, Graphic, GraphicsLayerm, Home, Editor]) => {
              
                let source = [
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
                       
                    },{
                    layer: new FeatureLayer({		//Central_HandHole     
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/CentralRegion/MapServer/2",
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
                                            label: "HH_No",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "No_Of_Cables",
                                            label: "No_Of_Cables",
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
                                            fieldName: "Landmark",
                                            label: "Landmark",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "HH_Slab",
                                            label: "HH_Slab",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "HH_Category",
                                            label: "HH_Category",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "HH_Type",
                                            label: "HH_Type",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Condition",
                                            label: "Condition",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "HH_Size",
                                            label: "HH_Size",
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
                                        }
                                        , {
                                            fieldName: "Cable_Position",
                                            label: "Cable_Position",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "No_Of_Core",
                                            label: "No_Of_Core",
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
                                            label: "FOC_Type",
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
                                            fieldName: "HH_Longitude",
                                            label: "HH_Longitude",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "HH_Latitude",
                                            label: "HH_Latitude",
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
                                            label: "HandHole_Image",
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
                    placeholder: "HH_ID",
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
                    layer:  new FeatureLayer({			//Central_Joints
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/CentralRegion/MapServer/4",
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
                   
                },
                 {
                    layer:  new FeatureLayer({		//Central_Poles
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/CentralRegion/MapServer/3",
                        popupTemplate: { // autocasts as new popupTemplate()
                            title: "Poles",
                            content: [{
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
                {
                    layer: new FeatureLayer({		//Central_MetroFiber_Network
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/CentralRegion/MapServer/6",
                        popupTemplate: { // autocasts 0as new popupTemplate()
                            title: "Metro Fiber",
                            content: [
                                {
                                    type: "fields",
                                    fieldInfos: [{
                                        fieldName: "FOC_ID",
                                        label: "FOC_ID",
                                        visible: true
                                    }, {
                                        fieldName: "Core_No",
                                        label: "Core_No",
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
                                        label: "Calculated_Length",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Connectivity_Type",
                                        label: "Connectivity_Type",
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
                                        fieldName: "StreetName",
                                        label: "StreetName",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Trench_Alignment",
                                        label: "Trench_Alignment",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Road_Crossing_Fiber",
                                        label: "Road_Crossing_Fiber",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    },
                                    //{
                                    //fieldName: "Installed_Date",
                                    //label: "Installed_Date",
                                    //visible: true,
                                    //format: {
                                    //    digitSeparator: true,
                                    //    places: 0
                                    //}
                                    //},
                                    {
                                        fieldName: "Survey_Date",
                                        label: "Survey_Date",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }
                                        , {
                                        fieldName: "Attach_Conduit_Fiber",
                                        label: "Attach_Conduit_Fiber",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Attach_Conduit_Dia",
                                        label: "Attach_Conduit_Dia",
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
                                    }]
                                }, {
                                    // Autocasts as new TextContent() 
                                    type: "text",
                                    text: "There are {Calculated_Length} meter in {FOC_ID}"
                                }
                            ]
                        }
                    }),
                    searchFields: ["FOC_ID"],
                    displayField: "FOC_ID",
                    exactMatch: true,
                    outFields: ["*"],
                    name: "Metro Fiber",
                    placeholder: "FOC ID",
                    scale: 100000,
                    maxResults: 200,
                    maxSuggestions: 200,
                    enableSuggestions: true
                }, {                
                    layer:  new FeatureLayer({		//Central_Fiber_Attachment
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/CentralRegion/MapServer/5",
                        popupTemplate: { // autocasts as new popupTemplate()
                            title: "Fiber Attachment",
                            content: [
                                {
                                    // It is also possible to set the fieldInfos outside of the content
                                    // directly in the popupTemplate. If no fieldInfos is specifically set
                                    // in the content, it defaults to whatever may be set within the popupTemplate.
                                    type: "fields",
                                    fieldInfos: [{
                                        fieldName: "FA_ID",
                                        label: "FA_ID",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Joint_ID",
                                        label: "Joint_ID",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Client_Name",
                                        label: "Client_Name",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Connectivity_Type",
                                        label: "Connectivity_Type",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Core_No",
                                        label: "Core_No",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "HH_ID",
                                        label: "HH_ID",
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
                   
                }, {
                    layer:  new FeatureLayer({	//Central_Customers
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/CentralRegion/MapServer/1",
                        popupTemplate: {
                            title: "Customers",
                            content: [
                                {
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
                                        }, {
                                            fieldName: "ProjectID",
                                            label: "Project ID",
                                            visible: true
                                        }, {
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
                                            fieldName: "Primary_SwitchName",
                                            label: "Switch Name",
                                            visible: true,
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "SwitchIP",
                                            label: "Switch IP",
                                            visible: true,
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Primary_SwitchPort",
                                            label: "Switch Port",
                                            visible: true,
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "ServiceUnit",
                                            label: "Service Unit",
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
                                            fieldName: "Status",
                                            label: "Status",
                                            visible: true,
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Address",
                                            label: "Address",
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
                    searchFields: ["Signup_ID"],
                    displayField: "Signup_ID",
                    exactMatch: false,
                    outFields: ["*"],
                    name: "Customers",
                    placeholder: "SignupID",
                    scale: 100000,
                    maxResults: 200,
                    maxSuggestions: 1000,
                    enableSuggestions: true
                   
                }, {
                    layer:  new FeatureLayer({		//Central POP/OLT
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/CentralRegion/MapServer/0",
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
                                    label: "Node Name",
                                    visible: true
                                }, {
                                    fieldName: "Node_No",
                                    label: "Node No",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Node_ID",
                                    label: "Node ID",
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
                                    label: "Name 2",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Installed_Switches",
                                    label: "Installed Switches",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Used_Ports",
                                    label: "Used Ports",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Total_Ports",
                                    label: "Total Ports",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "No_of_Links",
                                    label: "No of Links",
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
                                    label: "Image URL",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Node_Image",
                                    label: "Node Image",
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
                },{
                    layer:   new FeatureLayer({			//Central MN_Rings
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/CentralRegion/MapServer/8",                        popupTemplate: { // autocasts as new popupTemplate()
                            title: "Rings",
                            content: [
                                {
                                    type: "fields",
                                    fieldInfos: [
                                        {
                                            fieldName: "Ring_Name",
                                            label: "Ring Name",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Ring_No",
                                            label: "Ring No",
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
                    name: "Rings",
                    placeholder: "Ring Name",
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

                
            var basemapgallery = new BasemapGallery({
                view: view,  // The view that provides access to the map's "streets" basemap
                // nextBasemap: "topo"  // Allows for toggling to the "hybrid" basemap
            });
            view.ui.add(basemapgallery, 'top-right')

            var expandgallery = new Expand({
                view: view,
                group: "top-right",
                content: basemapgallery.container,
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

            let home = new Home({
                view:view
            });
            view.ui.add(home, 'top-left')

              /*   var locateBtn = new Locate({
                    view: view
                });
                view.ui.add(locateBtn, {
                    position: "top-right"
                }); */


                let editor = new Editor({
                    view: view,
                    
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
        //     <CentralLayer
        //     map={this.props.map} 
        //     view= {this.props.view}
        //     height = {this.state.height}
        //     />
        // )

    }

}

