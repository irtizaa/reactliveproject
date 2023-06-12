import React from 'react'
import { loadModules } from 'react-arcgis';
import { queryRelated } from '@esri/arcgis-rest-feature-layer'
import './relate.css'



export default class TowerNetLayer extends React.Component {

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
                    actions: [relatedTable, closeTable],  
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
                        view.ui.add('attribute', 'bottom-right')
                        // return _this.props.height('70vh', '30vh')  

                    }  
                    if (event.action.id === "related-close") {
                        //expand.expanded = true
                        // return _this.props.height('90vh', '0vh')
                        view.ui.remove('attribute', 'bottom-right')
                    }
                }); 


                let City = new FeatureLayer({
                    url: "http://172.30.30.234:6080/arcgis/rest/services/Basemap/Basemap_Pak/MapServer/2",
                    title: 'City', //City Boundary
                    visible:true,
                });
                map.add(City)             

                let Pak = new FeatureLayer({
                    url: "http://172.30.30.234:6080/arcgis/rest/services/Basemap/Basemap_Pak/MapServer/4",
                    title: 'Pak Boundary', //MN_Pak_Boundary
                    visible:true,
                })
                map.add(Pak)

               

                let Regional = new FeatureLayer({
                    url: "http://172.30.30.234:6080/arcgis/rest/services/Basemap/Basemap_Pak/MapServer/3",
                    title: 'Regional Boundary',       //Regional_Boundary
                    visible:true
                })
                map.add(Regional)

                let LH_Existing = new FeatureLayer({
                    url: "http://172.30.30.234:6080/arcgis/rest/services/Long_Haul/LH/MapServer/2",
                    title: 'LH Existing Network',    //MN_LongHaul_Existing_Network
                    visible:false,                    

                });
                map.add(LH_Existing)


                let LH = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Long_Haul/MN_Longhaul/FeatureServer/7",
                    title:"LongHaul",       //Longhaul
                    visible:false,                 
                    
                })
                map.add(LH)

                let Fiber_Attac = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/MN_South/OFC/MapServer/2",
                    title:"Fiber Attachment",     //MN_Fiber_Attachment
                    visible:false,
                 
                })
                map.add(Fiber_Attac)

                            
                let Tel_Attac = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TP/MapServer/0",
                    title:"Telenor Attachment",  // MN_Telenor_Attachment
                    visible:false,                

                })
                map.add(Tel_Attac)
           

                let MetroFiber = new FeatureLayer({
                    url: "http://172.30.30.234:6080/arcgis/rest/services/MN_South/OFC/MapServer/1",
                    title: 'MetroFiber Network',     //MN_MetroFiber_Network
                    visible:false,
                

                })
                map.add(MetroFiber)

                let Cell_Sites = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/1",
                    title:"Cell Sites",   //MN_Telenor_Sites
                    visible:false,
         

                 })
                 map.add(Cell_Sites)



                 let Aggre_Sites = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/2",
                    title:"Aggregation Sites",   //MN_Telenor_Sites
                    visible:false,
           

                 })
                 map.add(Aggre_Sites)


                 let Route = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/3",
                    title:"Route",   //MN_Telenor_Sites
                    visible:false,                
                 })
                 map.add(Route)

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
                 map.add(South_Aggre_Sites)


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
                 map.add(South_Poles)

            
                 let South_TP_Infra = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/9",
                    title:"South TP Infra",   //MN_Telenor_Sites
                    visible:true,  
                    popupTemplate:template
                 })
                 map.add(South_TP_Infra)

                 let South_Phase_Boundary = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/10",
                    title:"South Phase Boundary",   //MN_Telenor_Sites
                    visible:false,                
                    popupTemplate:{
                        title: "South TP Infra",
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
                 map.add(South_Phase_Boundary)


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
                 map.add(South_Handholes)


                 let South_Cell_Sites = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/6",
                    title:"South Cell Sites",   //MN_Telenor_Sites
                    visible:true,                
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
                 map.add(South_Cell_Sites)

                 
                 let Central_Aggregation_Sites = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/12",
                    title:"Central Aggregation Sites",   //MN_Telenor_Sites
                    visible:false,                
                 })
                 map.add(Central_Aggregation_Sites)

                 let Central_Cell_Sites = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/13",
                    title:"Central Cell Sites",   //MN_Telenor_Sites
                    visible:false,                
                 })    
                 map.add(Central_Cell_Sites)

                 let Central_Handholes = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/14",
                    title:"Central Handholes",   //MN_Telenor_Sites
                    visible:false,                
                 })
                 map.add(Central_Handholes)

                 let Central_Poles = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/15",
                    title:"Central Poles",   //MN_Telenor_Sites
                    visible:false,                
                 })
                 map.add(Central_Poles)

                 let Central_Infra = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/16",
                    title:"Central Infra",   //MN_Telenor_Sites
                    visible:false,                
                 })
                 map.add(Central_Infra)

                 let Central_Boundary = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/17",
                    title:"Central Phase Boundary",   //MN_Telenor_Sites
                    visible:false,                
                 })
                 map.add(Central_Boundary)

                 let North_Aggregation_Sites = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/19",
                    title:"North Aggregation Sites",   //MN_Telenor_Sites
                    // visible:true,                
                    visible:false,                
                 })
                 map.add(North_Aggregation_Sites)

                 let North_Cell_Sites = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/20",
                    title:"North Cell Sites",   //MN_Telenor_Sites
                    // visible:true,                
                    visible:false,                
                 })
                 map.add(North_Cell_Sites)

                 let North_Handholes = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/21",
                    title:"North Handholes",   //MN_Telenor_Sites
                    visible:false,                
                 })
                 map.add(North_Handholes)

                 let North_Poles = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/22",
                    title:"North Poles",   //MN_Telenor_Sites
                    visible:false,                
                 })
                 map.add(North_Poles)

                 let North_Infra = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/23",
                    title:"North Infra",   //MN_Telenor_Sites
                    // visible:true,                
                    visible:false,                
                 })
                 map.add(North_Infra)

                 let North_Boundary = new FeatureLayer({
                    url:"http://172.30.30.234:6080/arcgis/rest/services/Telenor/TPLite/MapServer/24",
                    title:"North Phase Boundary",   //MN_Telenor_Sites
                    visible:false,                
                 })
                 map.add(North_Boundary)


                 
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
                    {/* <div className="fat-customer">+
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

