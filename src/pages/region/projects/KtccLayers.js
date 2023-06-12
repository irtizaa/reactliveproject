import React from 'react'
import { loadModules } from 'react-arcgis';  
import { Row } from 'reactstrap';
import { queryRelated } from '@esri/arcgis-rest-feature-layer'
// import './south.css'


export default class KtccLayers extends React.Component {  
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
                    url:"http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/11",
                    title:"Pak Boundary",       //MN_Pak_Boundary
           
                })  
               // map.add(Pak)
                
                let Region = new FeatureLayer({
                    
                    url:"http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/10",
                    title:"Region",
                    popupTemplate:{     //MN_Soth_Infra.SDE.MN_Regional_Boundary
                    title: "Regional_Boundary",
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
                })
                
               // map.add(Region)


                let City = new FeatureLayer({
                    url:"http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/9",
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
                                label: "R_Name",
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
              //  map.add(City)
              
  
              
         
              let Fiber = new FeatureLayer({
                url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/6",
                title: 'Metro Fiber',
                //minScale: 20000
                visible: false,
                popupTemplate: { 	//MN_HandHole
                    title: 'Metro Fiber',
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

            });
            map.add(Fiber)  


        


                       

         


           

                
               
                    let  KTCCPlaned = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Projects/KTCC/MapServer/2", {                    
                        title: 'KTCC Planed',
                    // minScale: 150000,            //MN_MetroFiber_Network
                    popupTemplate: {
                        title: "{Name}",
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                   {
                                        fieldName: "Name",
                                        label: "Name",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Length",
                                        label: "Length",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },
                                    {
                                        fieldName: "Segment",
                                        label: "Segment",
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
                map.add(KTCCPlaned)  


                let  KTCCActual = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Projects/KTCC/MapServer/1", {
                    outFields: ["*"],
                    title: "KTCC Actual",
                    popupTemplate: {
                        title: "{Name}",
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
                            },{
                                fieldName: "Measured_Length",
                                label: "Measured Length",
                                visible: true,
                                formate: {
                                    digitSeperate: true,
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
                });
                map.add(KTCCActual);


                let HH = new FeatureLayer({
                    url:"http://103.31.82.102:6080/arcgis/rest/services/Projects/KTCC/MapServer/0",
                    title:"HandHole",      //Sites
                    visible: false,
                    popupTemplate:{
                        title:"Hand Hole", 
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
                                        fieldName: "HH_Condition",
                                        label: "HH_Condition",
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
                map.add(HH) 
                let Segment = new FeatureLayer({
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/KTCC/MapServer/2",
                    title: 'KTCC Segments',
                    // minScale:1300,
                   // minScale: 20000,
                   popupTemplate: { ////MN_Joints
                    title: 'KTCC Segments',
                    
                    content: [
                        {
                            type: "fields",
                            fieldInfos: [
                                {
                                    fieldName: "Name",
                                    label: "Name",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Segment_No",
                                    label: "Segment No",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Length",
                                    label: "Length",
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
               // map.add(Segment)


             


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
                                //return result.graphic.layer === fiber;
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
                              //  return result.graphic.layer === fiber;
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
                                          //  return result.graphic.layer === fiber;
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