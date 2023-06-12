import React from 'react'
import { loadModules } from 'react-arcgis';  
import { Row } from 'reactstrap';
import { queryRelated } from '@esri/arcgis-rest-feature-layer'
// import './south.css'


export default class IicLayers extends React.Component {  
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
                    expandIconClass:"fas fa-info"
                })
               // view.ui.add(expand, 'top-left')
          
                
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

                var L1 = { // autocasts as new PopupTemplate()
                    title: "OLA And ADM",
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

                let Attachment_template = {
                    title: "Fiber_Attachment",
                    actions: [relatedTable, closeTable],
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
                            fieldName: "OFC_Type",
                            label: "OFC_Type",
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

                let LH_template = {
                    title: "Long-Haul", 
                    actions: [relatedTable, closeTable],
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
                
                  view.popup.on("trigger-action", function (event) {
                   
                    if (event.action.id === "related-table") {
                        //expand.expanded = true  
                        return _this.props.height('60vh', '30vh')  
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
              
  
                let Ring = new FeatureLayer({
                    url:"http://103.31.82.102:6080/arcgis/rest/services/Projects/PakBoundaries/MapServer/0",
                    title:"Ring",       //Ring
           
                })  
                map.add(Ring)

                var LHInfra = new MapImageLayer({
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/MPPL2021/MapServer",
                    title: "LH Infra",
                    sublayers: [
        
                        {
                            id: 8,
                            title: "North",
                            visible: false
                        }, {
                            id: 7,
                            title: "Central",
                            visible: false
                        }, {
                            id: 6,
                            title: "South",
                            visible: false
                        }, {
                            id: 5,
                            title: "All LH Infra",
                            visible: true
                        }
        
        
                    ]
                });
        
                map.add(LHInfra);

                
                let fiber = new FeatureLayer({
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/IRUSites13June2022/MapServer/3",
                    title: 'Infra',
                    // minScale: 150000,            //MN_MetroFiber_Network
                    popupTemplate: {
                        title: "Fiber",
                        content: [
                            {
    
                            type: "fields",
                            fieldInfos: [
                                {
                                    fieldName: "FOC_ID",
                                    label: "FOC_ID",
                                    visible: true
                                },{
                                fieldName: "Site_ID",
                                label: "Site ID",
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
                                fieldName: "Calculated_Length",
                                label: "Calculated Length",
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
                            },{
                                fieldName: "Measured_Length",
                                label: "Measured Length",
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
                            }
                            ]
                        }
                        ]
                    }

                })
                map.add(fiber)  


                let joint = new FeatureLayer({
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/IRUSites13June2022/MapServer/2",
                    title: 'Joints',
                    // minScale:1300,
                   // minScale: 20000,
                   popupTemplate: { ////MN_Joints
                    title: "Joints",
                    
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
                                },  {
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
                                }
                            ]
                        }
                    ]
                }
                });
                map.add(joint)


             

         
                let Handhole = new FeatureLayer({
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/IRUSites13June2022/MapServer/1",
                    title: 'Hand Hole',
                    //minScale: 20000
                    popupTemplate: { 	//MN_HandHole
                        title: "HandHole",
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
                                    },  {
                                        fieldName: "Street_Name",
                                        label: "Street_Name",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
                                        fieldName: "No_Of_Core",
                                        label: "No Of Core",
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
                                        fieldName: "HH_Longitude",
                                        label: "HH Longitude",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },  {
                                        fieldName: "City",
                                        label: "City",
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
                                        fieldName: "Province",
                                        label: "Province",
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
                map.add(Handhole)  

                var L1 = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Long_Haul/LH/MapServer/0", {
                    outFields: ["*"],               //Sites
                    title: 'OLA And ADM',
                    popupTemplate: L1
                    });
                    map.add(L1);

                let Sites = new FeatureLayer({
                    url:"http://103.31.82.102:6080/arcgis/rest/services/Projects/IRUSites13June2022/MapServer/0",
                    title:"Sites",      //Sites
                    popupTemplate:{
                        title: "Sites",
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                    {
                                        fieldName: "Site_ID",
                                        label: "Site ID",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Site_Name",
                                        label: "Site Name",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Section_Name",
                                        label: "Section Name",
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
                                    }
                                ]
                            }
                        ]
                    }

                })
                map.add(Sites) 


            

                view.on("click", function (event) {
                    var screenPoint = {
                        x: event.x,
                        y: event.y
                    };
                    
                    // Search for graphics at the clicked location
                            //Metro_Fiber for 12 core
                    view.hitTest(screenPoint).then(function (response) {    

                        if (response.results.length) {
                            var graphic = response.results.filter(function (result) {
                                // check if the graphic belongs to the layer of interest
                                return result.graphic.layer === fiber;
                            })[0].graphic;
                            // do something with the result graphic
                             console.log(graphic.attributes.OBJECTID);
                            _this.setState({
                                id: graphic.attributes.OBJECTID
                            })

                        }

                        queryRelated({
                            url: "http://172.30.30.234:6080/arcgis/rest/services/MN_South/OFC_South/FeatureServer/1",
                            objectIds: _this.state.id,
                            relationshipId: 0,
                            returnGeometry: true,
                            outFields: ["Tube", "Colour", "FOC_ID", "Customer"]
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

                            //Metro_Fiber for 24 core
                    view.hitTest(screenPoint).then(function (response) {    

                        if (response.results.length) {
                            var graphic = response.results.filter(function (result) {
                                // check if the graphic belongs to the layer of interest
                                return result.graphic.layer === fiber;
                            })[0].graphic;
                            // do something with the result graphic
                             console.log(graphic.attributes.OBJECTID);
                            _this.setState({
                                id: graphic.attributes.OBJECTID
                            })

                        }

                        queryRelated({  
                            url: "http://172.30.30.234:6080/arcgis/rest/services/MN_South/OFC_South/FeatureServer/1",
                            objectIds: _this.state.id,
                            relationshipId: 1,
                            returnGeometry: true,
                            outFields: ["Tube", "Colour", "FOC_ID", "Customer"]
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

                            //Metro_Fiber for 48 core
                    view.hitTest(screenPoint).then(function (response) {    

                                    if (response.results.length) {
                                        var graphic = response.results.filter(function (result) {
                                            // check if the graphic belongs to the layer of interest
                                            return result.graphic.layer === fiber;
                                        })[0].graphic;
                                        // do something with the result graphic
                                         console.log(graphic.attributes.OBJECTID);
                                        _this.setState({
                                            id: graphic.attributes.OBJECTID
                                        })
            
                                    }
            
                                      queryRelated({  
                                        url: "http://172.30.30.234:6080/arcgis/rest/services/MN_South/OFC_South/FeatureServer/1",
                                        objectIds: _this.state.id,
                                        relationshipId: 2,
                                        returnGeometry: true,
                                        outFields: ["Tube", "Colour", "FOC_ID", "Customer", "Ring_Name","City"]
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


                            //Metro_Fiber for 96 core
                    // view.hitTest(screenPoint).then(function (response) {    

                    //                 if (response.results.length) {
                    //                     var graphic = response.results.filter(function (result) {
                    //                         // check if the graphic belongs to the layer of interest
                    //                         return result.graphic.layer === fiber;
                    //                     })[0].graphic;
                    //                     // do something with the result graphic
                    //                      console.log(graphic.attributes.OBJECTID);
                    //                     _this.setState({
                    //                         id: graphic.attributes.OBJECTID
                    //                     })
            
                    //                 }
            
                    //                 queryRelated({  
                    //                     url: "http://172.30.30.234:6080/arcgis/rest/services/MN_South/OFC_South/FeatureServer/1",
                    //                     objectIds: _this.state.id,
                    //                     relationshipId: 3,
                    //                     returnGeometry: true,
                    //                     outFields: ["Tube", "Colour", "FOC_ID", "Customer"]
                    //                     /*  params: { returnCountOnly: true } */
                    //                 })
                    //                 .then(response => {
                    //                     console.log(response)
                    //                     myTableDiv.innerHTML = ''
            
                    //                     var table = document.createElement('TABLE');
                    //                     table.setAttribute('id', 'table')
            
                    //                     //table.appendChild(close)
             
            
                    //                     var header = document.createElement("tr");
                    //                     table.appendChild(header)
                                        
                    //                     if (response.fields) {   
                    //                         response.fields.forEach(j => { 
                    //                             var column = document.createElement("th");
                    //                             column.textContent = j.alias;  
                    //                             header.appendChild(column);  
                    //                             // console.log(j)
                    //                         }) 
                    //                     }  
                    //                     else{
                    //                         return null  
                    //                     }
                                          
            
                    //                     response.relatedRecordGroups.forEach(e => {
            
                    //                         e.relatedRecords.forEach(i => {  
            
                    //                             var row = document.createElement("tr");
                    //                             table.appendChild(row);
                                                
                    //                             response.fields.forEach(k => {
                    //                                 //console.log(response.fields[i])    
                    //                                 var columns = document.createElement("td");
                    //                                 columns.textContent = i.attributes[k.name];
                    //                                 row.appendChild(columns);
            
                    //                             })
            
                    //                             /* console.log(i.attributes.Name)
                    //                             console.log(i.attributes.FAT)
                    //                             console.log(i.attributes.DC)
                    //                             console.log(i.attributes.POP)  */
                                        
                    //                         })
                    //                     }) //console.log(response.relatedRecordGroups)
                    //                     myTableDiv.appendChild(table);
                    //                     //view.ui.add(expand, 'top-left')
                                     
                                        
                                       
                    //                 })
                
                    //                 console.log(_this.state.id)
                    // });

                            //for Fiber_Attachment
                    // view.hitTest(screenPoint).then(function (response) {    

                    //     if (response.results.length) {
                    //         var graphic = response.results.filter(function (result) {
                    //             // check if the graphic belongs to the layer of interest
                    //             return result.graphic.layer === fiber_Attach;
                    //         })[0].graphic;
                    //         // do something with the result graphic
                    //          console.log(graphic.attributes.OBJECTID);
                    //         _this.setState({
                    //             id: graphic.attributes.OBJECTID
                    //         })

                    //     }

                    //     queryRelated({
                    //         url: "http://172.30.30.234:6080/arcgis/rest/services/MN_South/OFC_South/FeatureServer/2",
                    //         objectIds: _this.state.id,
                    //         relationshipId: 4,
                    //         returnGeometry: true,
                    //         outFields: ["FA_ID", "Colour", "Tube", "Customer","Core_No "]
                    //         /*  params: { returnCountOnly: true } */
                    //     })
                    //     .then(response => {
                    //         console.log(response)
                    //         myTableDiv.innerHTML = ''

                    //         var table = document.createElement('TABLE');
                    //         table.setAttribute('id', 'table')

                    //         //table.appendChild(close)
 

                    //         var header = document.createElement("tr");
                    //         table.appendChild(header)
                            
                    //         if (response.fields) {   
                    //             response.fields.forEach(j => { 
                    //                 var column = document.createElement("th");
                    //                 column.textContent = j.alias;  
                    //                 header.appendChild(column);  
                    //                 // console.log(j)
                    //             }) 
                    //         }  
                    //         else{
                    //             return null  
                    //         }
                              

                    //         response.relatedRecordGroups.forEach(e => {

                    //             e.relatedRecords.forEach(i => {  

                    //                 var row = document.createElement("tr");
                    //                 table.appendChild(row);
                                    
                    //                 response.fields.forEach(k => {
                    //                     //console.log(response.fields[i])    
                    //                     var columns = document.createElement("td");
                    //                     columns.textContent = i.attributes[k.name];
                    //                     row.appendChild(columns);

                    //                 })

                    //                 /* console.log(i.attributes.Name)
                    //                 console.log(i.attributes.FAT)
                    //                 console.log(i.attributes.DC)
                    //                 console.log(i.attributes.POP)  */
                            
                    //             })
                    //         }) //console.log(response.relatedRecordGroups)
                    //         myTableDiv.appendChild(table);
                    //         //view.ui.add(expand, 'top-left')
                         
                            
                           
                    //     })
    
                    //     console.log(_this.state.id)
                    // });

                            //for longHaul
                     view.hitTest(screenPoint).then(function (response) {   
                                 if (response.results.length) {
                                     var graphic = response.results.filter(function (result) {
                                         // check if the graphic belongs to the layer of interest
                                        //  return result.graphic.layer === LH;
                                     })[0].graphic;
                                     // do something with the result graphic
                                      console.log(graphic.attributes.OBJECTID);
                                     _this.setState({
                                         id: graphic.attributes.OBJECTID
                                     })

                                 }

                                 queryRelated({
                                     url: "http://172.30.30.234:6080/arcgis/rest/services/Long_Haul/MN_Longhaul/FeatureServer/7",
                                     objectIds: _this.state.id,
                                     relationshipId: 0,
                                     returnGeometry: true,
                                     outFields: ["Section_ID", "Colour", "Tube", "Customer","Core_No "]
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