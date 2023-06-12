import React from 'react'
import { loadModules } from 'react-arcgis';


export default class CentralLayers extends React.Component {

    componentDidMount() {

        let map = this.props.map;
        // let view = this.props.view;

        loadModules(["esri/layers/FeatureLayer", "esri/layers/GeoJSONLayer", "esri/layers/GroupLayer"
        ])
            .then(([FeatureLayer,GeoJSONLayer, GroupLayer]) => {
              
                

                let city =  new FeatureLayer({			//Cities_Boundary
                    url: "http://172.30.30.234:6080/arcgis/rest/services/Basemap/Basemap_Pak/MapServer/2",
                    title: "Cities",
                    popupTemplate: { 
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
                })
               // map.add(city)

                let rings = new FeatureLayer({			//Central MN_Rings
                    url: "http://172.30.30.234:6080/arcgis/rest/services/MN_Central/Multi_Central/MapServer/7",
                    title: "Rings",
                    popupTemplate: { 
                        title: "Central Rings",
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
                                    }
                                ]
                            }
                        ]
                    }
                })
              //  map.add(rings)

                let Joints =  new FeatureLayer({			//Central_Joints
                    url: "http://172.30.30.234:6080/arcgis/rest/services/MN_Central/Multi_Central/MapServer/4",
                    title: "Joints",
                    popupTemplate: { 
                        title: "Central Joints",
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                    {
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
              //  map.add(Joints)

                
                let MetroFiber =  new FeatureLayer({	 //Central_MetroFiber_Network
                    url: "http://172.30.30.234:6080/arcgis/rest/services/MN_Central/Multi_Central/MapServer/6",
                    title: "MetroFiber Network",
                    popupTemplate: { // autocasts 0as new popupTemplate()
                        title: "Central Metro Fiber",
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
                })
            //    map.add(MetroFiber)


             
                let HH =  new FeatureLayer({		//Central_HandHole     
                    url: "http://172.30.30.234:6080/arcgis/rest/services/MN_Central/Multi_Central/MapServer/2",
                    title: "HandHole",
                    popupTemplate: { 
                        title: "Central HandHole",
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                    {
                                        fieldName: "HH_ID",
                                        label: "HH_ID",
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
                })
             //   map.add(HH)
              
                
                let node = new FeatureLayer({		//Central Node
                    url: "http://172.30.30.234:6080/arcgis/rest/services/MN_Central/Multi_Central/MapServer/0",
                    title: "Node",
                    popupTemplate: { 
                        title: "Central Node",
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
                })
             //   map.add(node)


                let Poles =  new FeatureLayer({		//Central_Poles
                    url: "http://172.30.30.234:6080/arcgis/rest/services/MN_Central/Multi_Central/MapServer/3",
                    title: "Poles",
                    popupTemplate: { 
                        title: "Central Poles",
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
                })
              //  map.add(Poles)



                let FA =  new FeatureLayer({		//Central_Fiber_Attachment
                    url: "http://172.30.30.234:6080/arcgis/rest/services/MN_Central/Multi_Central/MapServer/5",
                    title: "Fiber Attachment",
                    popupTemplate: { // autocasts as new popupTemplate()
                        title: "Central Fiber Attachment",
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
                })
              //  map.add(FA)

                              
                let Customers = new FeatureLayer({	//Central_Customers
                    url: "http://172.30.30.234:6080/arcgis/rest/services/MN_Central/Multi_Central/MapServer/1",
                    outFields: ["*"],
                    title: "Customers",
                    popupTemplate: { // autocasts as new popupTemplate()
                        title: "Central Customers",
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                    {
                                        fieldName: "MN_Central_Region.SDE.MN_Customers.Signup_ID",
                                        label: "Signup ID",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "_v_CustomerIPDetailsForGIS.ProjectID",
                                        label: "Project ID",
                                        visible: true
                                    }, {
                                        fieldName: "MN_Central_Region.SDE.MN_Customers.Customer_Name",
                                        label: "Customer Name",
                                        visible: true
                                    }, {
                                        fieldName: "MN_Central_Region.SDE.MN_Customers.Node_Name",
                                        label: "Node Name",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "_v_CustomerIPDetailsForGIS.Primary_SwitchName",
                                        label: "Switch Name",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "_v_CustomerIPDetailsForGIS.SwitchIP",
                                        label: "Switch IP",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "_v_CustomerIPDetailsForGIS.Primary_SwitchPort",
                                        label: "Switch Port",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "_v_CustomerIPDetailsForGIS.ServiceUnit",
                                        label: "Service Unit",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "MN_Central_Region.SDE.MN_Customers.Survey_Date",
                                        label: "Survey Date",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "MN_Central_Region.SDE.MN_Customers.Deployment_Date",
                                        label: "Deployment Date",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "MN_Central_Region.SDE.MN_Customers.Vendor",
                                        label: "Vendor",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "MN_Central_Region.SDE.MN_Customers.Connectivity_Type",
                                        label: "Connectivity Type",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "_v_CustomerIPDetailsForGIS.Status",
                                        label: "Status",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "_v_CustomerIPDetailsForGIS.Address",
                                        label: "Address",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "_v_CustomerIPDetailsForGIS.City",
                                        label: "City",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "MN_Central_Region.SDE.MN_Customers.Remarks",
                                        label: "Remarks",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "MN_Central_Region.SDE.MN_Customers.Latitude",
                                        label: "Latitude",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "MN_Central_Region.SDE.MN_Customers.Longitude",
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
                })
              //  map.add(Customers)      


                         //New Work Beigns from here

                         
            
                     
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
                                    label: "Unique ID",
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
                                }, {
                                    fieldName: "ID",
                                    label: "ID",
                                    visible: true
                                }, {
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
            
        
                        let L_Rings = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/CentralRegion/FeatureServer/8", {
                            outFields: ["*"],
                            title: 'Rings',
                            popupTemplate: {
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
                                            }
                                        ]
                                    }
                                ]
                            }
                        });
                        map.add(L_Rings);

                       //Adding Lahore Layers


                       var TP_joints = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/TP_Light/FeatureServer/2", {
        
                        //  outFields: ["*"],				//Joints
                        title: 'TP Joints',
                        visible: false,
                        popupTemplate:  { // autocasts as new popupTemplate()
                            title: "TP Joints",
                            content: [
                                {
                                    type: "fields",
                                    fieldInfos: [
                                        {
                                            fieldName: "Joint_ID",
                                            label: "Joint ID ",
                                            visible: true,
                                            formate: {
                                                digitSeperate: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "JointType",
                                            label: "Joint Type",
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
                                            fieldName: "ODF_Ports",
                                            label: "ODF Ports",
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
                                            fieldName: "Region",
                                            label: "Region",
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
        
                    });
                    map.add(TP_joints); 
    
                    var TpNet = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/TP_Light/FeatureServer/5", {
            
                            //  outFields: ["*"],				//Tp Network
                            title: 'Tp Network',
                            visible: false,
                            popupTemplate: { // autocasts as new PopupTemplate()
                                title: "Tp Network (Cell ID {Cell_ID})",
                                content: [
                                    {
                                    type: "fields",
                                    fieldInfos: [
                                        {
                                            fieldName: "Cell_ID",
                                            label: "Cell ID",
                                            visible: true,
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "FOC_ID",
                                            label: "FOC ID",
                                            visible: true,
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Core_Number",
                                            label: "Core Number",
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
                                            fieldName: "Calculated_Length",
                                            label: "Calculated Length",
                                            visible: true,
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        }, {
                                            fieldName: "Measured_Length",
                                            label: "Measured Length",
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
                                        } 
                                    ]
                                }
                                    ]
                            }
            
                        });
                        map.add(TpNet); 

           

                        let fiber_Attach = new FeatureLayer({
                    
                            url :"http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/CentralRegion/FeatureServer/5",
                            title:"Fiber Attachment",   //MN_Soth_Infra.SDE.MN_Fiber_Attachment
                            visible:false,   
                            popupTemplate: {
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
                                            fieldName: "Calculated_Length",
                                            label: "Calculated Length",
                                            visible: true,
                                            format: {
                                                digitSeparator: true,
                                                places: 0
                                            }
                                        },{
                                            fieldName: "Measured_Length",
                                            label: "Measured Length",
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
                                            fieldName: "OFC_Type",
                                            label: "OFC Type",
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
                                        },{
                                            fieldName: "Installed_Date",  
                                            label: "Installed Date",  
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
        
                        })  
                        map.add(fiber_Attach)

            let LH = new FeatureLayer({
                url:"http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/CentralRegion/FeatureServer/7",
                title:"LongHaul",       //Longhaul
                popupTemplate:{
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
                                }, {
                                    fieldName: "Section",
                                    label: "Section",
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
                                }, {
                                    fieldName: "Road_Crossing_Fiber",
                                    label: "Road Crossing Fiber",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Attach_Conduit_Fiber",
                                    label: "Attach Conduit Fiber",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Attach_Conduit_Dia",
                                    label: "Attach Conduit Dia",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Connectivity_Type",
                                    label: "Connectivity Type",
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
                
            })
            map.add(LH)


            let L_Metro_Network = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/CentralRegion/FeatureServer/6", {
                outFields: ["*"],
                title: 'Metro Network',
                popupTemplate: { // MN_MetroFiber_Network
                    title: "Central Metro Network",
                    content: [
                        {
    
                        type: "fields",
                        fieldInfos: [{
                            fieldName: "FOC_ID",
                            label: "FOC ID",
                            visible: true
                        }, {
                                fieldName: "Core_No",
                                label: "Core No",
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
                        },{
                            fieldName: "Measured_Length",
                            label: "Measured Length",
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
                            fieldName: "Region",
                            label: "Region",
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
                            label: "Attach Conduit Dia",
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
            });
            map.add(L_Metro_Network);



            

            let L_Poles = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/CentralRegion/FeatureServer/3", {
                outFields: ["*"],
                title: 'Poles',
                popupTemplate: { // MN_Poles
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
            });
            map.add(L_Poles);


            let L_Nodes = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/CentralRegion/FeatureServer/0", {
                outFields: ["*"],
                title: 'Nodes',
                popupTemplate: { // autocasts as new PopupTemplate()
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
            });
            map.add(L_Nodes);



            
           let L_Joints = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/CentralRegion/FeatureServer/4", {
            outFields: ["*"],
            title: 'Joints',
            popupTemplate: { // MN_Joints
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
        });
        map.add(L_Joints);
        

            let L_Handholes = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/CentralRegion/FeatureServer/2", {
                outFields: ["*"],           //Central_HandHole
                title: 'Handholes',
                popupTemplate: { // Central HandHole
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
                                fieldName: "Condition",
                                label: "Condition",
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
                                label: "Image URL",
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
            });
            map.add(L_Handholes);

            const labelClass = {
                // autocasts as new LabelClass()
                symbol: {
                  type: "text", // autocasts as new TextSymbol()
                  color: "white",
                  extend:2,
                  font: {
                    // autocast as new Font()
                    family: "Playfair Display",
                    size: 8,
                    weight: "bold"
                  }
                },
                labelPlacement: "above-center",
                labelExpressionInfo: {
                  expression: "$feature.Customer_Name"
                }
              };


            let L_Customers = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/CentralRegion/FeatureServer/1", {
                outFields: ["*"],           //Customers
                title: 'Customers',
                popupTemplate: {
                    title: "Customer",
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
                },
                // labelingInfo: [labelClass]
            });
            map.add(L_Customers);  
    
  
            });

    }

    render() {
        return null

    }

}

