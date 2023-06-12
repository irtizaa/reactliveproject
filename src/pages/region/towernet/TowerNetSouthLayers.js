import React from 'react'
import { loadModules } from 'react-arcgis';
import { queryRelated } from '@esri/arcgis-rest-feature-layer'
import './relate.css'



export default class TowerNetSouthLayers extends React.Component {

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

                let template = {  
                    title: "Metro Fiber",
                    // actions: [relatedTable, closeTable],  
                    actions: [relatedTable,closeTable],  
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

        
                 let South_Poles = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/7",
                    title:"South Poles",   //MN_Telenor_Sites
                    visible:false,  
                    popupTemplate:{
                        title: "South Poles",
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                    {
                                        fieldName: "Pole_ID",
                                        label: "Pole ID ",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Deployment_Month",
                                        label: "Deployment Month",
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
                                        fieldName: "Image_URL",
                                        label: "Image URL",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
                                        fieldName: "Pole_Images",
                                        label: "Pole Images",
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
                //  map.add(South_Poles)


                let Pak = new FeatureLayer({
                    url: "http://172.30.30.234:6080/arcgis/rest/services/Basemap/Basemap_Pak/MapServer/4",
                    title: 'Pak Boundary', //MN_Pak_Boundary
                    visible:true,
                })
                // map.add(Pak)

                
                let Regional = new FeatureLayer({
                    url: "http://172.30.30.234:6080/arcgis/rest/services/Basemap/Basemap_Pak/MapServer/3",
                    title: 'Regional Boundary',       //Regional_Boundary
                    visible:true
                })
                // map.add(Regional)


                let City = new FeatureLayer({
                    url: "http://172.30.30.234:6080/arcgis/rest/services/Basemap/Basemap_Pak/MapServer/2",
                    title: 'City', //City Boundary
                    visible:true,
                });
                // map.add(City)          
                
                
                let LH = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Long_Haul/MN_Longhaul/FeatureServer/7",
                    title:"LongHaul",       //Longhaul
                    visible:false,                 
                    
                })
                // map.add(LH)


                let LH_Existing = new FeatureLayer({
                    url: "http://172.30.30.234:6080/arcgis/rest/services/Long_Haul/LH/MapServer/2",
                    title: 'LH Existing Network',    //MN_LongHaul_Existing_Network
                    visible:false,                    
                });
                // map.add(LH_Existing)



                 let MetroFiber = new FeatureLayer({
                    url: "http://172.30.30.234:6080/arcgis/rest/services/MN_South/OFC/MapServer/1",
                    title: 'MetroFiber Network',     //MN_MetroFiber_Network
                    visible:false,
                }) 
                // map.add(MetroFiber)


                 let Fiber_Attac = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/MN_South/OFC/MapServer/2",  
                    title:"Fiber Attachment",     //MN_Fiber_Attachment
                    visible:false,                   
                })
                // map.add(Fiber_Attac)

    

                 let South_Phase_Boundary = new FeatureLayer({  
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/10",
                    title:"South Phase Boundary",   //MN_Telenor_Sites
                    visible:false,                
                    popupTemplate:{
                        title: "South Phase Boundary",
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                    {
                                        fieldName: "Aggregation_ID",
                                        label: "Aggregation ID",
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
                                        fieldName: "Deployment_Month",
                                        label: "Deployment Month",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Ring",
                                        label: "Ring",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
                                        fieldName: "OnNet_Infra",
                                        label: "OnNet Infra",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
                                        fieldName: "OffNet_Infra",
                                        label: "OffNet Infra",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
                                        fieldName: "New_Pole",
                                        label: "New Pole",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
                                        fieldName: "New_Handhole",
                                        label: "New Handhole",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
                                        fieldName: "No_of_CellSites",
                                        label: "No of CellSites",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
                                        fieldName: "OnNet_Aerial",
                                        label: "OnNet Aerial",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
                                        fieldName: "OnNet_Buried",
                                        label: "OnNet Buried",
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
                //  map.add(South_Phase_Boundary)


                 let South_Handholes = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/8",
                    title:"South Handholes",   //MN_Telenor_Sites
                    visible:false,          
                    popupTemplate:{
                        title: "South Poles",
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
                                        fieldName: "Deployment_Month",
                                        label: "Deployment Month",
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
                                    }                       
                                ]
                            }
                        ]

                    
                } 
                       
                 })
                //  map.add(South_Handholes)

                             

                let Route = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/3",
                    title:"Route",   //MN_Telenor_Sites
                    visible:false,                
                 })
                //  map.add(Route)

                        
                let South_TP_Infra = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/9",
                    title:"South TP Infra",   //MN_Telenor_Sites
                    visible:true,  
                    popupTemplate:template
                 })
                //  map.add(South_TP_Infra)



                 let South_Aggre_Sites = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/5",
                    title:"South Aggregation Sites",   //MN_Telenor_Sites
                    visible:true,       
                    popupTemplate:{
                        title: "South Aggregation Sites",
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
                                        fieldName: "Deployment_Month",
                                        label: "Deployment Month",
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
                                    },{
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
                 })
                //  map.add(South_Aggre_Sites)


                 let South_Cell_Sites = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/6",
                    title:"South Cell Sites",   //MN_Telenor_Sites
                    visible:false,                
                    // labelingInfo: [labelClass],
                    // labelsVisibleBoolean: true
                    popupTemplate:{
                        title: "South Cell Sites",
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
                                        fieldName: "Ring",
                                        label: "Ring",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Aggregation_ID",
                                        label: "Aggregation ID",
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
                                    },{
                                        fieldName: "Deployment_Month",
                                        label: "Deployment Month",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
                                        fieldName: "Image_URL",
                                        label: "Image URL",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
                                        fieldName: "Cell_Image",
                                        label: "Cell Image",
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
                //  map.add(South_Cell_Sites)



                    //New Work Beigns from here

                    var Bufferlayer = new MapImageLayer({
                        url:"http://103.31.82.102:6080/arcgis/rest/services/Projects/TowerFiberization/MapServer",
                        title:"Boundaries",
                        sublayers: [
                            {
                                id: 18,
                                title: "Province Boundary",
                                visible: true
                            },
                            {
                                id: 17,
                                title: "City Boundary",
                                visible: true,
                                outFields: ["*"],
                                popupTemplate: {
                                    title:"City Boundaries",
                                    content: [
                                        {
                                            type: "fields",
                                            fieldInfos: [
                                                {
                                                    fieldName: "NAME_3",
                                                    label: "City",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                },
                                                //{
                                                //    fieldName: "OnNet_Tower",
                                                //    label: "OnNet Tower",
                                                //    visible: true,
                                                //    formate: {
                                                //        digitSeperate: true,
                                                //        places: 0
                                                //    }
                                                //},
                                                {
                                                    fieldName: "Telenor_100m",
                                                    label: "Telenor 100m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "Telenor_500m",
                                                    label: "Telenor 500m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "Telenor_1000m",
                                                    label: "Telenor 1000m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "Telenor_2000m",
                                                    label: "Telenor 2000m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "Jazz_100m",
                                                    label: "Jazz 100m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "Jazz_500m",
                                                    label: "Jazz 500m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "Jazz_1000m",
                                                    label: "Jazz 1000m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "Jazz_2000m",
                                                    label: "Jazz 2000m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "Ufone_100m",
                                                    label: "Ufone 100m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "Ufone_500m",
                                                    label: "Ufone 500m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "Ufone_1000m",
                                                    label: "Ufone 1000m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "Ufone_2000m",
                                                    label: "Ufone 2000m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "Zong_100m",
                                                    label: "Zong 100m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "Zong_500m",
                                                    label: "Zong 500m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "Zong_1000m",
                                                    label: "Zong 1000m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "Zong_2000m",
                                                    label: "Zong 2000m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "OnNet_100m",
                                                    label: "OnNet 100m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "OnNet_500m",
                                                    label: "OnNet 500m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "OnNet_1000m",
                                                    label: "OnNet 1000m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "OnNet_2000m",
                                                    label: "OnNet 2000m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "OffNet_100m",
                                                    label: "OffNet 100m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "OffNet_500m",
                                                    label: "OffNet 500m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "OffNet_1000m",
                                                    label: "OffNet 1000m",
                                                    visible: true,
                                                    formate: {
                                                        digitSeperate: true,
                                                        places: 0
                                                    }
                                                }, {
                                                    fieldName: "OffNet_2000m",
                                                    label: "OffNet 2000m",
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
                            }
                        //     ,
                        //     {
                        //         id: 16,
                        //         title: "Buffer 2000",
                        //         visible: false
                        //     }, {
                        //         id: 15,
                        //         title: "Buffer 1000",
                        //         visible: false
                        //     }, {
                        //         id: 14,
                        //         title: "Buffer 500",
                        //         visible: false
                        //     },
                        //    {
                        //         id: 13,
                        //         title: "Buffer 100",
                        //         visible: false
                        //     }

                            //,
                            //{
                            //    id: 12,
                            //    title: "Visible All Buffers",
                            //    visible: false
                            //}
    
                        ]
                    });
    
                    map.add(Bufferlayer)

              


                
            

                var Attachment = new MapImageLayer({
                    url: "http://103.31.82.102:6080/arcgis/rest/services/TowerNet/23Cities/MapServer",
                    title: "Attachments",
                    sublayers: [

                        {
                            id: 20,
                            title: "Mobilink Attachment",
                            visible: false
                        }, {
                            id: 19,
                            title: "Zong Attachment",
                            visible: false
                        }, {
                            id: 18,
                            title: "Telenor Attachment",
                            visible: false
                        },
                        {
                            id: 17,
                            title: "Visible All Attachments",
                            visible: false
                        }
                    ]
                });

                map.add(Attachment);


                
                var Fiberlayer = new MapImageLayer({
                    url:
                    "http://103.31.82.102:6080/arcgis/rest/services/TowerNet/23Cities/MapServer",
                    title: "Excess (300, 500, 700)",
                    sublayers: [
                        {
                            id: 16,
                            title: "Zong OffNet Excess Infra 700",
                            visible: false
                        },
                        {
                            id: 15,
                            title: "Zong OffNet Excess Infra 500",
                            visible: false,

                        },
                        {
                            id: 14,
                            title: "Zong OffNet Excess Infra 300",
                            visible: false
                        },
                        {
                            id: 13,
                            title: "Telenor OffNet Excess Infra 700",
                            visible: false
                        },
                        {
                            id: 12,
                            title: "Telenor OffNet Excess Infra 500",
                            visible: false
                        },
                        {
                            id: 11,
                            title: "Telenor OffNet Excess Infra 300",
                            visible: false
                        },
                        {
                            id: 10,
                            title: "Mobilink OffNet Excess Infra 700",
                            visible: false
                        },
                        {
                            id: 9,
                            title: "Mobilink OffNet Excess Infra 500",
                            visible: false
                        },
                        {
                            id: 8,
                            title: "Mobilink OffNet Excess Infra 300",
                            visible: false
                        },  {
                            id: 7,
                            title: "MTZ OffNet Excess Infra 700",
                            visible: false
                        },  {
                            id: 6,
                            title: "MTZ OffNet Excess Infra 500",
                            visible: false
                        },
                        {
                            id: 5,
                            title: "MTZ OffNet Excess Infra 300",
                            visible: false
                        }, {
                            id: 4,
                            title: "Visible all Infra",
                            visible: false
                        }
                    ]
                });

                map.add(Fiberlayer)

                var AccessNetwork = new MapImageLayer({
                    url:"http://103.31.82.102:6080/arcgis/rest/services/TowerNet/23Cities/MapServer",
                    title: "Excess Network (All Buried)",
                    sublayers: [

                        {
                            id: 25,
                            title: "Zong OffNet Excess Network",
                            visible: false
                        }, {
                            id: 24,
                            title: "Telenor OffNet Excess Network",
                            visible: false
                        }, {
                            id: 23,
                            title: "Mobilink OffNet Excess Network",
                            visible: false
                        }, {
                            id: 22,
                            title: "MTZ OffNet Excess Network",
                            visible: false
                        }, {
                            id: 21,
                            title: "Visible all Access Network",
                            visible: false
                        }
                       
                       
                    ]
                });   

                map.add(AccessNetwork);


                var CoreNetwork = new MapImageLayer({
                    url: "http://103.31.82.102:6080/arcgis/rest/services/TowerNet/23Cities/MapServer",
                    title: "Core Network",
                    sublayers: [

                        {
                            id: 29,
                            title: "OnNet Core Infra",
                            visible: true
                        }, {
                            id: 28,
                            title: "OnNet LongHaul",
                            visible: true
                        }, {
                            id: 27,
                            title: "OffNet Core Network",
                            visible: true
                        }, {
                            id: 26,
                            title: "Visible All Core Network",
                            visible: false
                        }


                    ]
                });

                map.add(CoreNetwork);

                var layer = new MapImageLayer({  
                    url:
                    "http://103.31.82.102:6080/arcgis/rest/services/TowerNet/23CitiesTowers/MapServer",
                    title: "Nation Wide Towers",
                    sublayers: [

                        {
                            id: 1,
                            visible: false,
                            outFields: ["*"],
                            title: "Zong",
                            popupTemplate: {
                                title: "Zong Tower",
                                content: [
                                    {

                                        type: "fields",
                                        fieldInfos: [{
                                            fieldName: "Site_ID",
                                            label: "Site ID",
                                            visible: true
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
                        }, {
                            id: 0,
                            visible: false,
                            outFields: ["*"],
                            title: "Mobilink",
                            popupTemplate: { //MN_Cities_Boundary
                                title: "Mobilink Tower",
                                content: [
                                    {

                                        type: "fields",
                                        fieldInfos: [{
                                            fieldName: "Site_ID",
                                            label: "Site ID",
                                            visible: true
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

                        }, {
                            id: 2,
                            visible: false,
                            outFields: ["*"],
                            title: "Telenor",
                            popupTemplate: { // autocasts as new PopupTemplate()
                                title: "Telenor Tower",
                                content: [
                                    {
                                        type: "fields",
                                        fieldInfos: [{
                                            fieldName: "Site_ID",
                                            label: "Site ID",
                                            visible: true
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
                        }
                    ]
                });   
                map.add(layer)

               
                 
                view.on("click", function (event) {
                    var screenPoint = {
                        x: event.x,
                        y: event.y
                    };
                    
                    view.hitTest(screenPoint).then(function (response) {    

                        if (response.results.length) {
                            var graphic = response.results.filter(function (result) {
                                // check if the graphic belongs to the layer of interest
                                return result.graphic.layer === South_TP_Infra;  
                            })[0].graphic;
                            // do something with the result graphic     
                             console.log(graphic.attributes.OBJECTID);
                            _this.setState({  
                                id: graphic.attributes.OBJECTID
                            })

                        }

                        queryRelated({
                            url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/9",
                            objectIds: _this.state.id,
                            relationshipId: 0,
                            returnGeometry: true,   
                            outFields: ["FOC_ID","Tube","Colour","Core_No","Customer"]
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

                })   
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

