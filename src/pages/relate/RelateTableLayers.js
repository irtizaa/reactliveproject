import React from 'react'
import { loadModules } from 'react-arcgis';
import { queryRelated } from '@esri/arcgis-rest-feature-layer'
import './relate.css'




export default class RelateTableLayers extends React.Component{


    constructor(props){
        super(props);
        this.setState ={
            id:'',
        }
    }

    componentDidMount(){
        let _this = this;
        let map =this.props.map;
        let view =this.props.view;
        
        var myTableDiv = document.getElementById("attribute");  

        
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


            let fiber = new FeatureLayer({
                url: "http://172.30.30.234:6080/arcgis/rest/services/MN_South/OFC_South/FeatureServer/1",
                title: 'Metro Fiber',
                minScale: 150000,            //MN_MetroFiber_Network
                popupTemplate: template,

            })
            map.add(fiber)    

         

            let LH = new FeatureLayer({
                url:"http://172.30.30.234:6080/arcgis/rest/services/Long_Haul/MN_Longhaul/FeatureServer/7",
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
                
            })
            map.add(LH)

          

            let fiber_Attach = new FeatureLayer({
                url :"http://172.30.30.234:6080/arcgis/rest/services/MN_South/OFC/MapServer/2",
                title:"Fiber Attachment",   //MN_Soth_Infra.SDE.MN_Fiber_Attachment
                popupTemplate: Attachment_template,

            })  
            map.add(fiber_Attach)

            


            view.on("click", function (event) {
                var screenPoint = {
                    x: event.x,
                    y: event.y
                };
                
                // Search for graphics at the clicked location
                     
            
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
                //  view.hitTest(screenPoint).then(function (response) {   
                //              if (response.results.length) {
                //                  var graphic = response.results.filter(function (result) {
                //                      // check if the graphic belongs to the layer of interest
                //                      return result.graphic.layer === LH;
                //                  })[0].graphic;
                //                  // do something with the result graphic
                //                   console.log(graphic.attributes.OBJECTID);
                //                  _this.setState({
                //                      id: graphic.attributes.OBJECTID
                //                  })

                //              }

                //              queryRelated({
                //                  url: "http://172.30.30.234:6080/arcgis/rest/services/Long_Haul/MN_Longhaul/FeatureServer/7",
                //                  objectIds: _this.state.id,
                //                  relationshipId: 0,
                //                  returnGeometry: true,
                //                  outFields: ["Section_ID", "Colour", "Tube", "Customer","Core_No "]
                //                  /*  params: { returnCountOnly: true } */
                //              })
                //              .then(response => {
                //                  console.log(response)
                //                  myTableDiv.innerHTML = ''

                //                  var table = document.createElement('TABLE');
                //                  table.setAttribute('id', 'table')

                //                  //table.appendChild(close)


                //                  var header = document.createElement("tr");
                //                  table.appendChild(header)
                          
                //                  if (response.fields) {   
                //                      response.fields.forEach(j => { 
                //                          var column = document.createElement("th");
                //                          column.textContent = j.alias;  
                //                          header.appendChild(column);  
                //                          // console.log(j)
                //                      }) 
                //                  }  
                //                  else{
                //                      return null  
                //                  }
                            

                //                  response.relatedRecordGroups.forEach(e => {

                //                      e.relatedRecords.forEach(i => {  

                //                          var row = document.createElement("tr");
                //                          table.appendChild(row);
                                  
                //                          response.fields.forEach(k => {
                //                              //console.log(response.fields[i])    
                //                              var columns = document.createElement("td");
                //                              columns.textContent = i.attributes[k.name];
                //                              row.appendChild(columns);

                //                          })

                //                          /* console.log(i.attributes.Name)
                //                          console.log(i.attributes.FAT)
                //                          console.log(i.attributes.DC)
                //                          console.log(i.attributes.POP)  */
                          
                //                      })
                //                  }) //console.log(response.relatedRecordGroups)
                //                  myTableDiv.appendChild(table);
                //                  //view.ui.add(expand, 'top-left')
                       
                          
                         
                //              })

                //              console.log(_this.state.id)
                //    });
                        
                
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
                <div className="relateClose">
                    <sapn className="closeRelate" onClick={this.cancelTable}><img src="https://img.icons8.com/color/48/000000/delete-sign.png" style={{ height: 25 }} /></sapn>

                </div>  

            </div>
       </div>              
       
    )

}

}