import React from 'react'
import { loadModules } from 'react-arcgis';
import { Row } from 'reactstrap';
import { queryRelated } from '@esri/arcgis-rest-feature-layer'
import './northrelatedtable.css'


export default class NorthRelatedTableLayers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',                    
        }
    }
    
    componentDidMount() {
        let _this = this;
        let map = this.props.map;  
        let view = this.props.view;

        var myTableDiv = document.getElementById("attribute");  


       /*  let close = document.getElementById('close'); */

        loadModules(["esri/tasks/support/Query", "esri/tasks/QueryTask", "esri/tasks/support/LengthsParameters",
            "esri/layers/FeatureLayer", "esri/layers/MapImageLayer", "esri/layers/support/Relationship", 'esri/widgets/Expand'
        ])
            .then(([Query, QueryTask, LengthsParameters, FeatureLayer, MapImageLayer, Relationship, Expand]) => {
                view.popup.autoOpenEnabled = false;

                let expand = new Expand({
                    view: view,
                    content: myTableDiv,
                    group: "bottom-right",
                    expanded: false,
                    expandIconClass:"fas fa-table"
                })
                view.ui.add(expand, 'bottom-right')

                let basemap = new MapImageLayer({
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/11",
                    listMode: "hide",
                });
                map.add(basemap);

                
              /*   let fiber = new FeatureLayer({
                    url: "http://172.30.30.234:6080/arcgis/rest/services/MN_South/OFC_South/FeatureServer/1",
                    title: 'Fiber',
                    minScale: 150000,    
                    popupTemplate: template,                  
                    outFields: ["*"]

                })
                map.add(fiber)
 */          

                var relatedTable = {
                    title: "Related Table",
                    id: "related-table",
                    image:
                        "assets/images/table.png"
                };
                var closeTable = {
                    title: "close Table",
                    id: "related-close",
                    image:
                        "assets/images/error.png"
                };

                let template = {
                    title: "Metro Fiber",
                    actions: [relatedTable, closeTable],
                    content: [
                        {

                        type: "fields",
                        fieldInfos: [{
                            fieldName: "FOC_ID",
                            label: "FOC_ID",
                            visible: true
                        }, {
                            fieldName: "Core_Number",
                            label: "Core_Number",
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
                            fieldName: "Regions",
                            label: "Regions",
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
                        }, {
                            fieldName: "Installed_Date",
                            label: "Installed_Date",
                            visible: true,
                            format: {
                                digitSeparator: true,
                                places: 0
                            }
                        }, {
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
                        }
                        ]
                    }
                    ]
                }

                let Fiber_pop = {
                    title: "Metro Fiber",
                 //   actions: [relatedTable, closeTable],
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

                 let LH_pop = {
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

          
                let FA_template = {
                    title: "Fiber Attachment", 
                 //   actions: [relatedTable, closeTable],
                    content: [
                        {
                        // It is also possible to set the fieldInfos outside of the content
                        // directly in the popupTemplate. If no fieldInfos is specifically set
                        // in the content, it defaults to whatever may be set within the popupTemplate.
                        type: "fields",
                        fieldInfos: [
                            {
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
                                label: "Core No",
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
                
                  view.popup.on("trigger-action", function (event) {
                   
                    if (event.action.id === "related-table") {
                        //expand.expanded = true  
                        return _this.props.height('70vh', '30vh')  
                    }  
                    if (event.action.id === "related-close") {
                        //expand.expanded = true
                        return _this.props.height('90vh', '0vh')
                    }
                });  

              /*   view.when(function () {
                    // Watch for when features are selected
                    view.popup.watch("selectedFeature", function (graphic) {
                        view.popup.on("trigger-action", (event) => {
                            if (event.action.id === "related-table") {
                                view.ui.add('attribute', 'top-left')
                            }
                        })
                    });
                }); */
    
                 

              
                let Pak = new FeatureLayer({
                    url:"http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/9",
                    title:"City Boundary",       //MN_Pak_Boundary
           
                })  
                map.add(Pak)

               
                let LH = new FeatureLayer({
                    url:"http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/7",
                    title:"LongHaul",       //Longhaul
                    popupTemplate: LH_pop
                    
                })
                map.add(LH)
               

                let Central_fiber = new FeatureLayer({
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/6",
                    title: "Fiber",   //Central_fiber  
                    popupTemplate: Fiber_pop,   
                })
                map.add(Central_fiber)     


           
                let FA = new FeatureLayer({
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/5",  
                    title: "Fiber Attachment",   //Fiber Attachment
                    popupTemplate: FA_template,   
                })
                map.add(FA)

                let L_Joints = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/3", {
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

                let L_Nodes = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/0", {
                    outFields: ["*"],
                    title: 'Nodes',
                    popupTemplate: { // Nodes
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

                
                let Customers = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/1", {
                    outFields: ["*"],
                    title:"Customers",   //Customers
                    popupTemplate: { // autocasts as new popupTemplate()
                        title: "Central Customers",
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
                })    
                map.add(Customers)

                view.on("click", function (event) {
                    var screenPoint = {
                        x: event.x,
                        y: event.y
                    };
                    
                    // Search for graphics at the clicked location
               
                       

                                    //Central_Fiber for 12 core
                    view.hitTest(screenPoint).then(function (response) {    

                        if (response.results.length) {
                            var graphic = response.results.filter(function (result) {
                                // check if the graphic belongs to the layer of interest
                                return result.graphic.layer === Central_fiber;
                            })[0].graphic;
                            // do something with the result graphic
                             console.log(graphic.attributes.OBJECTID);
                            _this.setState({
                                id: graphic.attributes.OBJECTID
                            })

                        }

                          queryRelated({  
                            url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/6",
                            objectIds: _this.state.id,
                            relationshipId: 2,
                            returnGeometry: true,
                            outFields: ["FOC_ID","Tube","Colour","Customer","Remarks"]
                            /*  params: { returnCountOnly: true } */
                        })
                        .then(response => {
                            console.log(response)   
                            myTableDiv.innerHTML = ''

                            var table = document.createElement('TABLE');
                            table.setAttribute('id', 'table')

                            //table.appendChild(close)
 

                            var header = document.createElement("tr");
                            table.appendChild(header)
                            
                            if (response.fields) {   
                                response.fields.forEach(j => { 
                                    var column = document.createElement("th");
                                    column.textContent = j.alias;  
                                    header.appendChild(column);  
                                    // console.log(j)
                                }) 
                            }  
                            else{
                                return null  
                            }
                              

                            response.relatedRecordGroups.forEach(e => {

                                e.relatedRecords.forEach(i => {  

                                    var row = document.createElement("tr");
                                    table.appendChild(row);
                                    
                                    response.fields.forEach(k => {
                                        //console.log(response.fields[i])    
                                        var columns = document.createElement("td");
                                        columns.textContent = i.attributes[k.name];
                                        row.appendChild(columns);

                                    })

                                    /* console.log(i.attributes.Name)
                                    console.log(i.attributes.FAT)
                                    console.log(i.attributes.DC)
                                    console.log(i.attributes.POP)  */
                            
                                })
                            }) //console.log(response.relatedRecordGroups)
                            myTableDiv.appendChild(table);
                            //view.ui.add(expand, 'top-left')
                         
                            
                           
                        })
    
                        console.log(_this.state.id)
                });
                  
       
                         //Central_Fiber for 24 core
                         view.hitTest(screenPoint).then(function (response) {    

                            if (response.results.length) {
                                var graphic = response.results.filter(function (result) {
                                    // check if the graphic belongs to the layer of interest
                                    return result.graphic.layer === Central_fiber;
                                })[0].graphic;
                                // do something with the result graphic
                                 console.log(graphic.attributes.OBJECTID);
                                _this.setState({
                                    id: graphic.attributes.OBJECTID
                                })
    
                            }
    
                              queryRelated({  
                                url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/6",
                                objectIds: _this.state.id,
                                relationshipId: 3,
                                returnGeometry: true,
                                outFields: ["FOC_ID","Tube","Colour","Customer","Remarks"]
                                /*  params: { returnCountOnly: true } */
                            })
                            .then(response => {
                                console.log(response)   
                                myTableDiv.innerHTML = ''
    
                                var table = document.createElement('TABLE');
                                table.setAttribute('id', 'table')
    
                                //table.appendChild(close)
     
    
                                var header = document.createElement("tr");
                                table.appendChild(header)
                                
                                if (response.fields) {   
                                    response.fields.forEach(j => { 
                                        var column = document.createElement("th");
                                        column.textContent = j.alias;  
                                        header.appendChild(column);  
                                        // console.log(j)
                                    }) 
                                }  
                                else{
                                    return null  
                                }
                                  
    
                                response.relatedRecordGroups.forEach(e => {
    
                                    e.relatedRecords.forEach(i => {  
    
                                        var row = document.createElement("tr");
                                        table.appendChild(row);
                                        
                                        response.fields.forEach(k => {
                                            //console.log(response.fields[i])    
                                            var columns = document.createElement("td");
                                            columns.textContent = i.attributes[k.name];
                                            row.appendChild(columns);
    
                                        })
    
                                        /* console.log(i.attributes.Name)
                                        console.log(i.attributes.FAT)
                                        console.log(i.attributes.DC)
                                        console.log(i.attributes.POP)  */
                                
                                    })
                                }) //console.log(response.relatedRecordGroups)
                                myTableDiv.appendChild(table);
                                //view.ui.add(expand, 'top-left')
                             
                                
                               
                            })
        
                            console.log(_this.state.id)
                    });
                  

                        //Central_Fiber for 48 core
                        view.hitTest(screenPoint).then(function (response) {    

                            if (response.results.length) {
                                var graphic = response.results.filter(function (result) {
                                    // check if the graphic belongs to the layer of interest
                                    return result.graphic.layer === Central_fiber;
                                })[0].graphic;
                                // do something with the result graphic
                                 console.log(graphic.attributes.OBJECTID);
                                _this.setState({
                                    id: graphic.attributes.OBJECTID
                                })
    
                            }
    
                              queryRelated({  
                                url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/6",
                                objectIds: _this.state.id,
                                relationshipId: 4,
                                returnGeometry: true,
                                outFields: ["FOC_ID","Tube","Colour","Customer","Remarks"]
                                /*  params: { returnCountOnly: true } */
                            })
                            .then(response => {
                                console.log(response)   
                                myTableDiv.innerHTML = ''
    
                                var table = document.createElement('TABLE');
                                table.setAttribute('id', 'table')
    
                                //table.appendChild(close)
     
    
                                var header = document.createElement("tr");
                                table.appendChild(header)
                                
                                if (response.fields) {   
                                    response.fields.forEach(j => { 
                                        var column = document.createElement("th");
                                        column.textContent = j.alias;  
                                        header.appendChild(column);  
                                        // console.log(j)
                                    }) 
                                }  
                                else{
                                    return null  
                                }
                                  
    
                                response.relatedRecordGroups.forEach(e => {
    
                                    e.relatedRecords.forEach(i => {  
    
                                        var row = document.createElement("tr");
                                        table.appendChild(row);
                                        
                                        response.fields.forEach(k => {
                                            //console.log(response.fields[i])    
                                            var columns = document.createElement("td");
                                            columns.textContent = i.attributes[k.name];
                                            row.appendChild(columns);
    
                                        })
    
                                        /* console.log(i.attributes.Name)
                                        console.log(i.attributes.FAT)
                                        console.log(i.attributes.DC)
                                        console.log(i.attributes.POP)  */
                                
                                    })
                                }) //console.log(response.relatedRecordGroups)
                                myTableDiv.appendChild(table);
                                //view.ui.add(expand, 'top-left')
                             
                                
                               
                            })
        
                            console.log(_this.state.id)
                    });


                           //Central_Fiber for 96 core
                           view.hitTest(screenPoint).then(function (response) {    

                            if (response.results.length) {
                                var graphic = response.results.filter(function (result) {
                                    // check if the graphic belongs to the layer of interest
                                    return result.graphic.layer === Central_fiber;
                                })[0].graphic;
                                // do something with the result graphic
                                 console.log(graphic.attributes.OBJECTID);
                                _this.setState({
                                    id: graphic.attributes.OBJECTID
                                })
                            }
    
                              queryRelated({  
                                url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/6",
                                objectIds: _this.state.id,
                                relationshipId: 5,
                                returnGeometry: true,
                                outFields: ["FOC_ID","Tube","Colour","Customer","Remarks"]
                                /*  params: { returnCountOnly: true } */
                            })
                            .then(response => {
                                console.log(response)   
                                myTableDiv.innerHTML = ''
    
                                var table = document.createElement('TABLE');
                                table.setAttribute('id', 'table')
    
                                //table.appendChild(close)
     
    
                                var header = document.createElement("tr");
                                table.appendChild(header)
                                
                                if (response.fields) {   
                                    response.fields.forEach(j => { 
                                        var column = document.createElement("th");
                                        column.textContent = j.alias;  
                                        header.appendChild(column);  
                                        // console.log(j)
                                    }) 
                                }  
                                else{
                                    return null  
                                }
                                  
    
                                response.relatedRecordGroups.forEach(e => {
    
                                    e.relatedRecords.forEach(i => {  
    
                                        var row = document.createElement("tr");
                                        table.appendChild(row);
                                        
                                        response.fields.forEach(k => {
                                            //console.log(response.fields[i])    
                                            var columns = document.createElement("td");
                                            columns.textContent = i.attributes[k.name];
                                            row.appendChild(columns);
    
                                        })
    
                                        /* console.log(i.attributes.Name)
                                        console.log(i.attributes.FAT)
                                        console.log(i.attributes.DC)
                                        console.log(i.attributes.POP)  */
                                
                                    })
                                }) //console.log(response.relatedRecordGroups)
                                myTableDiv.appendChild(table);
                                //view.ui.add(expand, 'top-left')
                             
                                
                               
                            })
        
                            console.log(_this.state.id)
                    });
                      
                  

                     //Central_Fiber Attachment
                     view.hitTest(screenPoint).then(function (response) {    

                        if (response.results.length) {
                            var graphic = response.results.filter(function (result) {
                                // check if the graphic belongs to the layer of interest  
                                return result.graphic.layer === FA;
                            })[0].graphic;
                            // do something with the result graphic  
                             console.log(graphic.attributes.OBJECTID);
                            _this.setState({
                                id: graphic.attributes.OBJECTID
                            })

                        }
  
                          queryRelated({  
                            url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/5",
                            objectIds: _this.state.id,
                            relationshipId: 1,
                            returnGeometry: true,
                            outFields: ["FA_ID","Tube","Colour","Core_No","Customer","Remarks"]  
                            /*  params: { returnCountOnly: true } */
                        })
                        .then(response => {
                            console.log(response)   
                            myTableDiv.innerHTML = ''

                            var table = document.createElement('TABLE');
                            table.setAttribute('id', 'table')

                            //table.appendChild(close)
 

                            var header = document.createElement("tr");
                            table.appendChild(header)
                            
                            if (response.fields) {   
                                response.fields.forEach(j => { 
                                    var column = document.createElement("th");
                                    column.textContent = j.alias;  
                                    header.appendChild(column);  
                                    // console.log(j)
                                }) 
                            }  
                            else{
                                return null  
                            }
                              

                            response.relatedRecordGroups.forEach(e => {

                                e.relatedRecords.forEach(i => {  

                                    var row = document.createElement("tr");
                                    table.appendChild(row);
                                    
                                    response.fields.forEach(k => {
                                        //console.log(response.fields[i])    
                                        var columns = document.createElement("td");
                                        columns.textContent = i.attributes[k.name];
                                        row.appendChild(columns);

                                    })

                                    /* console.log(i.attributes.Name)
                                    console.log(i.attributes.FAT)
                                    console.log(i.attributes.DC)
                                    console.log(i.attributes.POP)  */
                            
                                })
                            }) //console.log(response.relatedRecordGroups)
                            myTableDiv.appendChild(table);
                            //view.ui.add(expand, 'top-left')
                         
                            
                           
                        })
    
                        console.log(_this.state.id)
                    });       

                           //Long Haul
                   view.hitTest(screenPoint).then(function (response) {    

                    if (response.results.length) {
                        var graphic = response.results.filter(function (result) {
                            // check if the graphic belongs to the layer of interest
                            return result.graphic.layer === LH;
                        })[0].graphic;
                        // do something with the result graphic
                         console.log(graphic.attributes.OBJECTID);
                        _this.setState({
                            id: graphic.attributes.OBJECTID
                        })

                    }

                      queryRelated({  
                        url: " http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/7",
                        objectIds: _this.state.id,
                        relationshipId: 6,
                        returnGeometry: true,
                        outFields: ["Section_ID","Tube_ID","Core","Tube","Customer","Remarks"]
                        /*  params: { returnCountOnly: true } */
                    })
                    .then(response => {
                        console.log(response)   
                        myTableDiv.innerHTML = ''

                        var table = document.createElement('TABLE');
                        table.setAttribute('id', 'table')

                        //table.appendChild(close)


                        var header = document.createElement("tr");
                        table.appendChild(header)
                        
                        if (response.fields) {   
                            response.fields.forEach(j => { 
                                var column = document.createElement("th");
                                column.textContent = j.alias;  
                                header.appendChild(column);  
                                // console.log(j)
                            }) 
                        }  
                        else{
                            return null  
                        }
                          

                        response.relatedRecordGroups.forEach(e => {

                            e.relatedRecords.forEach(i => {  

                                var row = document.createElement("tr");
                                table.appendChild(row);
                                
                                response.fields.forEach(k => {
                                    //console.log(response.fields[i])    
                                    var columns = document.createElement("td");
                                    columns.textContent = i.attributes[k.name];
                                    row.appendChild(columns);

                                })

                                /* console.log(i.attributes.Name)
                                console.log(i.attributes.FAT)
                                console.log(i.attributes.DC)
                                console.log(i.attributes.POP)  */
                        
                            })
                        }) //console.log(response.relatedRecordGroups)
                        myTableDiv.appendChild(table);
                        //view.ui.add(expand, 'top-left')
                     
                        
                       
                    })

                    console.log(_this.state.id)
            });


                //       //Central_LongHaul Network
                //       view.hitTest(screenPoint).then(function (response) {    

                //         if (response.results.length) {
                //             var graphic = response.results.filter(function (result) {
                //                 // check if the graphic belongs to the layer of interest
                //                 return result.graphic.layer === LH;
                //             })[0].graphic;
                //             // do something with the result graphic
                //              console.log(graphic.attributes.OBJECTID);
                //             _this.setState({
                //                 id: graphic.attributes.OBJECTID
                //             })
    
                //         }
    
                //           queryRelated({ 
                //             // url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/7",
                //             url: " http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/7",
                //             objectIds: _this.state.id,
                //             relationshipId: 6,
                //             returnGeometry: true,
                //             outFields: ["Section_ID","Tube_ID","Core","Tube","Customer","Remarks"]
                //             /*  params: { returnCountOnly: true } */
                //         })
                //         .then(response => {
                //             console.log(response)   
                //             myTableDiv.innerHTML = ''
    
                //             var table = document.createElement('TABLE');
                //             table.setAttribute('id', 'table')
    
                //             //table.appendChild(close)
    
    
                //             var header = document.createElement("tr");
                //             table.appendChild(header)
                            
                //             if (response.fields) {   
                //                 response.fields.forEach(j => { 
                //                     var column = document.createElement("th");
                //                     column.textContent = j.alias;  
                //                     header.appendChild(column);  
                //                     // console.log(j)
                //                 }) 
                //             }  
                //             else{
                //                 return null  
                //             }
                              
    
                //             response.relatedRecordGroups.forEach(e => {
    
                //                 e.relatedRecords.forEach(i => {  
    
                //                     var row = document.createElement("tr");
                //                     table.appendChild(row);
                                    
                //                     response.fields.forEach(k => {
                //                         //console.log(response.fields[i])    
                //                         var columns = document.createElement("td");
                //                         columns.textContent = i.attributes[k.name];
                //                         row.appendChild(columns);
    
                //                     })
    
                //                     /* console.log(i.attributes.Name)
                //                     console.log(i.attributes.FAT)
                //                     console.log(i.attributes.DC)
                //                     console.log(i.attributes.POP)  */
                            
                //                 })
                //             }) //console.log(response.relatedRecordGroups)
                //             myTableDiv.appendChild(table);
                //             //view.ui.add(expand, 'top-left')
                         
                            
                           
                //         })
    
                //         console.log(_this.state.id)
                // });   
            });   
  
        });    
    }

    cancelTable = () => {
        return this.props.height('90vh', '0vh')  
    }
    render() {
        return (
            <div className='relate'>
                <div id="attribute"></div>  
                <div className="relateButton">
                    {/* <div className="fat-customer">
                        <span id="fat">FAT</span>
                        <span id="customer">Customers</span>
                    </div> */}
                    {/* <div className="relateClose">
                        <sapn className="closeRelate" onClick={this.cancelTable}><img src="https://img.icons8.com/color/48/000000/delete-sign.png" style={{ height: 25 }} /></sapn>

                    </div> */}

                </div>
           </div>              
           
        )
                    
    }

}