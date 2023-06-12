import React from 'react'
import { loadModules } from 'react-arcgis';
import { queryRelated } from '@esri/arcgis-rest-feature-layer'
import './longhaul.css'


export default class LongHaulLayers extends React.Component {
    
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

        loadModules(["esri/layers/FeatureLayer","esri/layers/MapImageLayer","esri/layers/GroupLayer", "esri/tasks/support/Query", "esri/tasks/QueryTask",
        "esri/tasks/support/LengthsParameters","esri/layers/support/Relationship", 'esri/widgets/Expand'
        ])
            .then(([FeatureLayer, MapImageLayer, GroupLayer,Query, QueryTask, LengthsParameters,Relationship,Expand]) => {
              
                let expand = new Expand({
                    view: view,
                    content: myTableDiv,
                    group: "bottom-right",
                    expanded: false,
                    expandIconClass:"fas fa-info"
                })
                

                var L1 = { // autocasts as new PopupTemplate()
                    title: "Sites",
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


                var L3 = { // autocasts as new PopupTemplate()
                    title: "Existing Network",
                    content: [
                        {
                            type: "fields",
                            fieldInfos: [
                                {
                                    fieldName: "Section_ID",
                                    label: "Section_ID",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Core_No",
                                    label: "Core_No",
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
                                    fieldName: "StreetName",
                                    label: "StreetName",
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
                };
                var L4 = { // autocasts as new PopupTemplate()
                    title: "LH Rings",
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
                                    fieldName: "Region",
                                    label: "Region",
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
                };


                var L5 = { // autocasts as new PopupTemplate()
                    title: "Regional Boundary",
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
                        },
                    ]
                };


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

                var L2 = { ////MN_LongHaul_Network
                    title: "LongHaul Network",
                   //  actions: [relatedTable, closeTable], 
                        content: [
                        {
                            type: "fields",
                            fieldInfos: [
                                {
                                    fieldName: "FOC_ID",
                                    label: "FOC_ID",
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
                                    fieldName: "Name",
                                    label: "Name",
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
                                }, {
                                    fieldName: "Installed_Date",
                                    label: "Installed_Date",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
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
                    };


                        //Layers


                    let L6 = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/11", {
                            title: 'Pak Boundary',
                        outFields: ["*"],				//MN_Pak_Boundary
        
                    });
                    map.add(L6);
        
        
                    var L5 = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/10", {
                            outFields: ["*"],               //Regional Boundary
                            title: 'Regional Boundary',
                        popupTemplate: L5
                    });
                    map.add(L5);
        
                        L4 = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Long_Haul/LH/MapServer/2", {
                            outFields: ["*"],
                            title: 'LongHaul Rings',
                         popupTemplate: L4		//MN_LongHaul_SDE.MN_LH_Rings
                    });
                    map.add(L4);
        
                    L3 = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Projects/LH/MapServer/2", {  
                            outFields: ["*"],
                            title: 'LongHaul Existing Network',
                        popupTemplate: L3,		//MN_LongHaul_Existing_Network 
                        //minScale: 1500
                    });
                  //  map.add(L3);
        
        
                    // let LongHaul = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Projects/LH/MapServer/1", {
                    //     let LongHaul = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Long_Haul/LH/MapServer/1", {
                    //         outFields: ["*"],
                    //         title: 'LongHaul Network',                                
                    //         popupTemplate: L2		//MN_Soth_Infra.SDE.MN_LongHaul_Network
                    // });
                    // map.add(LongHaul);

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
                            
                    var Rehab = new FeatureLayer({
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/LH_Rehab_2021/MapServer/0",
                        title: "LH Rehab",
                        visible:false,
                        popupTemplate: { //POP/OLT
                            title: "LH Rehab",
                            content: [{                          
                                type: "fields",
                                fieldInfos: [{
                                    fieldName: "Multinet_S",
                                    label: "Multinet Section",
                                    visible: true
                                }, {
                                    fieldName: "Telenor_Se",
                                    label: "Telenor Section",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Civil_Work",
                                    label: "Civil Work",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Year",
                                    label: "Year",
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
            
                    map.add(Rehab);
        
                    var L1 = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Long_Haul/LH/MapServer/0", {
                    outFields: ["*"],               //Sites
                    title: 'Sites',
                    popupTemplate: L1
                    });
                    map.add(L1);
                    
                   
 

                    var Motorways = new MapImageLayer({
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/LHProposedRoutes/MapServer",
                        title: "Motorways",
                        sublayers: [
            
                          {
                                id: 7,
                                title: "Sukkut To Hyderabad",
                                visible: false
                            }, {
                                id: 6,
                                title: "New Proposed Mortoway Paths",
                                visible: false
                            }, {
                                id: 5,
                                title: "All Paths",
                                visible: true
                            }
            
            
                        ]
                    });
            
                  //  map.add(Motorways);

                    var Proposed_Route = new FeatureLayer({
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/LHProposedRoutes/MapServer/4",
                        title: "Proposed Route",
                      
                    });
            
                 //   map.add(Proposed_Route);


                    var Tapping_Sites = new MapImageLayer({
                        url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/LHProposedRoutes/MapServer",
                        title: "Proposed Tapping Sites",
                        sublayers: [
            
                            {
                                id: 3,
                                title: "ADM 03",
                                visible: false
                            }, {
                                id: 2,
                                title: "OLA 13",
                                visible: false
                            }, {
                                id: 1,
                                title: "Mortoway",
                                visible: false
                            }, {
                                id: 0,
                                title: "All Sites",
                                visible: true
                            }
            
            
                        ]
                    });
            
                  //  map.add(Tapping_Sites);
            

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
                        // return _this.props.height('60vh', '30vh')  
                        return _this.props.height('70vh', '30vh') 
                    }  
                    if (event.action.id === "related-close") {
                        //expand.expanded = true
                        return _this.props.height('90vh', '0vh')
                    }
                });  

               

                
                view.on("click", function (event) {
                    var screenPoint = {
                        x: event.x,
                        y: event.y
                    };
                    
                    // Search for graphics at the clicked location
                    view.hitTest(screenPoint).then(function (response) {    

                        if (response.results.length) {
                            var graphic = response.results.filter(function (result) {
                                // check if the graphic belongs to the layer of interest
                                return result.graphic.layer === LHInfra;
                            })[0].graphic;
                            // do something with the result graphic
                             console.log(graphic.attributes.OBJECTID);
                            _this.setState({
                                id: graphic.attributes.OBJECTID
                            })

                        }

                        queryRelated({
                            url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/LH/MapServer/3",
                            objectIds: _this.state.id,
                            relationshipId: 0,
                            returnGeometry: true,
                            outFields: ["Section_ID", "Colour", "Tube", "Customer","Core_No "]
                            /*  params: { returnCountOnly: true } */
                        })
                        .then(response => {
                            console.log(response)
                            // myTableDiv.innerHTML = ''

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

