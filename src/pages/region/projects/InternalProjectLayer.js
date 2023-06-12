import React from 'react'
import { loadModules } from 'react-arcgis';  
import { Row } from 'reactstrap';
import { queryRelated } from '@esri/arcgis-rest-feature-layer'
// import './south.css'


export default class InternalProjectLayer extends React.Component {  
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
             


                let template = {
                    title: "South Metro Fiber",                    
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

                let   Northtemplate= {
                    title: "North Metro Fiber",                    
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
              
  

                
                let  NorthMetroFiber = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Nationwide/InternalProjects/MapServer/5", {                    
                    title: 'North Metro Fiber',
                // minScale: 150000,            //MN_MetroFiber_Network
                popupTemplate: Northtemplate

            })
            map.add(NorthMetroFiber)  
         
            
            let L_Metro_Network = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Projects/CentralRegion/MapServer/6", {
                outFields: ["*"],
                title: 'Central Metro Network',
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
               
                    let  MetroFiber = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Nationwide/InternalProjects/MapServer/4", {                    
                        title: 'South Metro Fiber',
                    // minScale: 150000,            //MN_MetroFiber_Network
                    popupTemplate: template

                })
                map.add(MetroFiber)  


                let  eightenSegments = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Nationwide/InternalProjects/MapServer/3", {
                    outFields: ["*"],
                    visible:false,
                    title: "18 Segments",
                    popupTemplate: {
                        title: "18 Segments",
                        content: [
                            {
            
                            type: "fields",
                            fieldInfos: [{
                                fieldName: "PO_Number",
                                label: "PO Number",
                                visible: true
                            }, {
                                fieldName: "Length",
                                label: "Length",
                                visible: true,
                                format: {
                                    digitSeparator: true,
                                    places: 0
                                }
                            },{
                                fieldName: "Status",
                                label: "Status",
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
                map.add(eightenSegments);
              

                let  twntyfivSegments = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Nationwide/InternalProjects/MapServer/2", {
                    outFields: ["*"],
                    visible:false,
                    title: "25 Segments",
                    popupTemplate: {
                        title: "25 Segments",
                        content: [
                            {
            
                            type: "fields",
                            fieldInfos: [{
                                fieldName: "PO_Number",
                                label: "PO Number",
                                visible: true
                            }, {
                                fieldName: "Length",
                                label: "Length",
                                visible: true,
                                format: {
                                    digitSeparator: true,
                                    places: 0
                                }
                            },{
                                fieldName: "Status",
                                label: "Status",
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
                map.add(twntyfivSegments);

                let  sentyfivSegments = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Nationwide/InternalProjects/MapServer/1", {
                    outFields: ["*"],
                    visible:false,
                    title: "75 Segments",
                    popupTemplate: {
                        title: "75 Segments",
                        content: [
                            {
            
                            type: "fields",
                            fieldInfos: [{
                                fieldName: "PO_Number",
                                label: "PO Number",
                                visible: true
                            }, {
                                fieldName: "Length",
                                label: "Length",
                                visible: true,
                                format: {
                                    digitSeparator: true,
                                    places: 0
                                }
                            },{
                                fieldName: "Status",
                                label: "Status",
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
                map.add(sentyfivSegments);


                let  Internal_Projects = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Nationwide/InternalProjects/MapServer/0", {
                    outFields: ["*"],
                    visible:false,
                    title: "Internal Projects",
                    popupTemplate: {
                        title: "Internal Projects",
                        content: [
                            {
            
                            type: "fields",
                            fieldInfos: [{
                                fieldName: "Section_Name",
                                label: "Section Name",
                                visible: true
                            }, {
                                fieldName: "Length",
                                label: "Length",
                                visible: true,
                                format: {
                                    digitSeparator: true,
                                    places: 0
                                }
                            },{
                                fieldName: "Project_Name",
                                label: "Project Name",
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
                map.add(Internal_Projects);
             


                

            });  
    }

 
    render() {
        return (
            <div className='relate'>
                <div id="attribute"></div>  
                <div className="relateButton">
                   
                </div>
           </div>              
           
        )
                    
    }

}