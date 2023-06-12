import React from 'react'
import { loadModules } from 'react-arcgis';
import { queryRelated } from '@esri/arcgis-rest-feature-layer'
// import './relate.css'



export default class FTTT2021Layers extends React.Component {

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

        loadModules(["esri/tasks/support/Query", "esri/tasks/QueryTask", "esri/tasks/support/LengthsParameters",
            "esri/layers/FeatureLayer", "esri/layers/MapImageLayer", "esri/layers/support/Relationship", 'esri/widgets/Expand'
        ])
            .then(([Query, QueryTask, LengthsParameters, FeatureLayer, MapImageLayer, Relationship, Expand]) => {
                // view.popup.autoOpenEnabled = false;
              

                let expand = new Expand({
                    view: view,
                    content: myTableDiv,
                    group: "bottom-right",
                    expanded: false,
                    expandIconClass:"fas fa-info"
                })


                
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
                var s10 = { //MN_LongHaul_Network
                    title: "LongHaul Network",
                    // actions: [measureThisAction],
                    content: [
                        {
                            type: "fields",
                            fieldInfos: [
                                {
                                    fieldName: "FOC_ID",
                                    label: "FOC ID ",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Core_Number",
                                    label: "Core Number",
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
                                    fieldName: "Remarks",
                                    label: "Remarks",
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
                                }
                            ]
                        }
                    ]
                };

                var s6 = { // MN_Fiber_Attachment
                    title: "Fiber Attachment",
                    // actions: [measureThisAction],
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
                                }, {
                                    fieldName: "Remarks",
                                    label: "Remarks",
                                    visible: true
                                }
                            ]
                        }
                    ]
                };

                let template = {  
                    title: "Metro Fiber",
                    // actions: [relatedTable, closeTable],  
                     
                    content: [
                        {
                            type: "fields",
                            fieldInfos: [
                                {
                                    fieldName: "FOC_ID",
                                    label: "FOC ID",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Cell_ID",
                                    label: "Cell ID ",
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
                                }, {
                                    fieldName: "Core_Number",
                                    label: "Core Number",
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
                                },{
                                    fieldName: "Survey_Date",
                                    label: "Survey Date",
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
                                },{
                                    fieldName: "Priority",
                                    label: "Priority",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                },{
                                    fieldName: "Deployment_Month",
                                    label: "Deployment Month",
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
                        // view.ui.add('attribute', 'bottom-right')
                        return _this.props.height('55vh', '30vh')  

                    }  
                    if (event.action.id === "related-close") {
                        //expand.expanded = true
                        return _this.props.height('90vh', '0vh')
                        // view.ui.remove('attribute', 'bottom-right')
                        // view.ui.remove('attribute', 'bottom-right')
                    }
                }); 

   

                            
                let Tel_Attac = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TP/MapServer/0",
                    title:"Telenor Attachment",  // MN_Telenor_Attachment
                    visible:false,                

                })
                // map.add(Tel_Attac)
           

               

                let Cell_Sites = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/1",
                    title:"Cell Sites",   //MN_Telenor_Sites
                    visible:false,
         

                 })
                //  map.add(Cell_Sites)



                //  let Aggre_Sites = new FeatureLayer({
                //     url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/2",
                //     title:"Aggregation Sites",   //MN_Telenor_Sites
                //     visible:false,
           

                //  })
                //  map.add(Aggre_Sites)


                              

                //  const labelClass = { // autocasts as new LabelClass()
                //     symbol: {
                //       type: "text", // autocasts as new TextSymbol()
                //       color: "green",
                //       haloColor: "white",
                //       font: { // autocast as new Font()
                //         family: "playfair-display",
                //         size: 12,
                //         weight: "bold"
                        
                //       }
                //     },
                //     labelExpressionInfo: {
                //       expression: "$feature.condition"
                //     }
                //   };

        
                    //New Work Beigns from here



                    var s20 = { ////MN_Soth_Infra.SDE.MN_Cities_Boundary
                        title: "City",
                        //actions: [measureThisAction],
                        // actions: [RelatedTable],
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
                    };


                    
                    var TpNetwork = { // autocasts as new PopupTemplate()
                        title: "Tp Network (Cell ID {Cell_ID})",
                        content: [{
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
                    };

                    var FTTT2019 = { // autocasts as new PopupTemplate()
                        title: "FTTT 2019 (FOC ID {FOC_ID})",
                        content: [{
                            type: "fields",
                            fieldInfos: [
                                {
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
                    };
        
        
                    var pol = { // autocasts as new popupTemplate()
                        title: "Poles",
                        content: [
                            {
                                // It is also possible to set the fieldInfos outside of the content
                                // directly in the popupTemplate. If no fieldInfos is specifically set
                                // in the content, it defaults to whatever may be set within the popupTemplate.
                                type: "fields",
                                fieldInfos: [{
                                    fieldName: "Pole_ID",
                                    label: "Pole ID",
                                    visible: true
                                }, {
                                    fieldName: "Loop",
                                    label: "Loop",
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
                                    fieldName: "Field_ID",
                                    label: "Field ID",
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
                                        fieldName: "Image_URL",
                                        label: "Image URL",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Pole_Images",
                                        label: "Pole Images",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    }
                                ]
                            }
                        ]
                    };
        
                    var SurveyedRoutePop = { // MN_HandHole
                        title: "Surveyed Route",
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                    {
                                        fieldName: "FOC_ID",
                                        label: "FOC ID",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Cell_Site",
                                        label: "Cell Site",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
                                        fieldName: "Connectivity",
                                        label: "Connectivity",
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
                                    }, {
                                        fieldName: "Calculated_Length",
                                        label: "Calculated Length",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
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
                                        fieldName: "Core_No",
                                        label: "Core No",
                                        visible: true,
                                        format: {
                                            digitSeparator: true,
                                            places: 0
                                        }
                                    },
                                    {
                                        fieldName: "Street_Name",
                                        label: "Street Name",
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
                    };
        
                    var joint = { // autocasts as new popupTemplate()
                        title: "Joints",
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
        
                    var cellSit = { // autocasts as new popupTemplate()
                        title: "Cell Sites  ({SiteName})",
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                    {
                                        fieldName: "SiteName",
                                        label: "Site Name ",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
                                        fieldName: "Signup_ID",
                                        label: "Signup ID ",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Aggregation_Site",
                                        label: "Aggregation Site ",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Town_Name",
                                        label: "Town Name",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "OnNet_Infra",
                                        label: "OnNet Infra",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "OffNet_Infra",
                                        label: "OffNet Infra",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Ring_OnNet_Infra",
                                        label: "Ring OnNet Infra",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Ring_OffNet_Infra",
                                        label: "Ring OffNet Infra",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Imgae_URL",
                                        label: "Imgae URL",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
                                        fieldName: "Cell_Image",
                                        label: "Cell Side Image",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
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
                                        fieldName: "City",
                                        label: "City",
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
                                    }
                                ]
                            }
                        ]
                    }
        
                    var aggregation = { // autocasts as new popupTemplate()
                        title: "Aggregation  ({Aggregation_ID})",
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                    {
                                        fieldName: "Aggregation_ID",
                                        label: "Aggregation ID ",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
                                        fieldName: "Signup_ID",
                                        label: "Signup ID ",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Town_Name",
                                        label: "Town Name",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "OnNet_Infra",
                                        label: "OnNet Infra",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "OffNet_Infra",
                                        label: "OffNet Infra",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Ring_OnNet_Infra",
                                        label: "Ring OnNet Infra",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Ring_OffNet_Infra",
                                        label: "Ring OffNet Infra",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Imgae_URL",
                                        label: "Imgae URL",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
                                        fieldName: "Aggregation_Image",
                                        label: "Aggregation Image",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
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
                                        fieldName: "City",
                                        label: "City",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Regions",
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
        
                    var phas = { // autocasts as new popupTemplate()
                        title: "Phase",
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                    {
                                        fieldName: "Aggregation_ID",
                                        label: "Aggregation ID ",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "New_Pole",
                                        label: "New Pole",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "New_Handhole",
                                        label: "New Handhole",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "OnNet_Infra",
                                        label: "OnNet Infra",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "OffNet_Infra",
                                        label: "OffNet Infra",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "No_of_CellSites",
                                        label: "No of CellSites",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "OnNet_Aerial",
                                        label: "OnNet Aerial",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "OnNet_Buried",
                                        label: "OnNet Buried",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "OffNet_Aerial",
                                        label: "OffNet Aerial",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "OffNet_Buried",
                                        label: "OffNet Buried",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Priority",
                                        label: "Priority",
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
                                    }
                                ]
                            }
                        ]
                    }
        
        
                    //Layer for Project Light
        
                 
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
        
                    var MetroAccess = new MapImageLayer({
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/MPPL2021/MapServer",
                        title: "Metro Access Network",
                        sublayers: [
            
                            {
                                id: 16,
                                title: "North",
                                visible: false
                            }, {
                                id: 15,
                                title: "Central",
                                visible: false
                            }, {
                                id: 14,
                                title: "South",
                                visible: false
                            }, {
                                id: 13,
                                title: "All Network Access Network",
                                visible: false
                            }
            
            
                        ]
                    });
            
                    map.add(MetroAccess);
                  
                    var CoreNetwork1 = new MapImageLayer({
                        // url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/MNInfra2021/MapServer",
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/MPPL2021/MapServer",
                        title: "Metro Core Infra",
                        sublayers: [
            
                            {
                                id: 12,
                                title: "North",
                                visible: false
                            }, {
                                id: 11,
                                title: "Central",
                                visible: false
                            }, {
                                id: 10,
                                title: "South",
                                visible: false
                            }, {
                                id: 9,
                                title: "All Metro Core Infra",
                                visible: false
                            }
            
            
                        ]
                    });
            
                    map.add(CoreNetwork1);


                       
                    var TpNet = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Projects/MPPL2021/MapServer/19", {
        
                        //  outFields: ["*"],				//Tp Network
                        title: 'FTTT 2019',
                        visible: true,
                        popupTemplate: FTTT2019
        
                    });
                    map.add(TpNet); 


                    var ProposedRoute = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Projects/FTTT_2021/MapServer/3", {
        
                        //  outFields: ["*"],				//Joints
                        title: 'Proposed Route',
                        visible: false,
                        popupTemplate:  { // autocasts as new popupTemplate()
                            title: "Proposed Route",
                            content: [
                                {
                                    type: "fields",
                                    fieldInfos: [
                                        {
                                            fieldName: "Aggregation_Site",
                                            label: "Aggregation Site",
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
                                        },{
                                            fieldName: "Connectivity",
                                            label: "Connectivity",
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
                                        },  {
                                            fieldName: "Town",
                                            label: "Town",
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
                    map.add(ProposedRoute); 
        
                    var SurveyedRoute = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Projects/FTTT_2021/MapServer/2", {
        
                        //  outFields: ["*"],				//HandHoles
                        title: 'Surveyed Route',
                        visible: false,
                        popupTemplate: SurveyedRoutePop
        
                    });
                    //map.add(SurveyedRoute); 
        
                  
                   
        
                    var cellSite = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Projects/FTTT_2021/MapServer/1", {
        
                        //  outFields: ["*"],				//Cell Sites
                        title: 'Cell Sites',
                        visible: true,
                        //popupTemplate: cellSit
        
                    });
                    map.add(cellSite); 
        
        
                    var aggre = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Projects/FTTT_2021/MapServer/0", {
        
                        //  outFields: ["*"],				//Aggregation Sites  
                        title: 'Aggregation Sites',
                        visible: true,
                       /// popupTemplate: aggregation  
        
                    });  
                    map.add(aggre); 

                    var FTTTNetwork = new MapImageLayer({
                        url:"http://103.31.82.102:6080/arcgis/rest/services/Projects/MPPL2021/MapServer",
                        title: "Project Light Infra",
                        sublayers: [
    
                            {
                                id: 19,
                                title: "FTTT-2019",
                                visible: false
                            }, {  
                                id: 20,
                                title: "FTTT-2020",
                                visible: false
                            },{
                                id: 20,
                                title: "Visible all Access Network",
                                visible: false
                            }
                           
                           
                        ]
                    });   
    
                   // map.add(FTTTNetwork);
                   
             
            });
    }
    cancelTable = () => {
        return this.props.height('8vh', '0vh')
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

