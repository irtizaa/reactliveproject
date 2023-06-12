import React from 'react'
import { loadModules } from 'react-arcgis'
import { queryRelated } from '@esri/arcgis-rest-feature-layer'
import './customeranalysis.css'

export default class CustomerAnalysisLayer extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            id:'',
                
        }
    }

    componentDidMount(){
        let _this = this;
        let map = this.props.map;
        let view = this.props.view;

        var myTableDiv = document.getElementById("attribute");


    loadModules(["esri/layers/FeatureLayer", "esri/tasks/support/Query", "esri/tasks/QueryTask", "esri/layers/support/Relationship"
])
    .then (([FeatureLayer,Query, QueryTask,Relationship]) =>{
   

        // let Parcels =  new FeatureLayer({			//Parcels
        //     url: "http://172.30.30.234:6080/arcgis/rest/services/Basemap/Basemap_Pak/MapServer/0",
        //     popupTemplate: { // autocasts as new popupTemplate()
        //         title: "Parcels",
        //         content: [
        //             {
        //             // It is also possible to set the fieldInfos outside of the content
        //             // directly in the popupTemplate. If no fieldInfos is specifically set
        //             // in the content, it defaults to whatever may be set within the popupTemplate.
        //             type: "fields",
        //             fieldInfos: [
        //                 {
        //                     fieldName: "Building_Name",
        //                     label: "Building_Name",
        //                     visible: true,
        //                     format: {
        //                         digitSeparator: true,
        //                         places: 0
        //                     }
        //                 }, {
        //                     fieldName: "Customer_Status",
        //                     label: "Customer_Status",
        //                     visible: true,
        //                     format: {
        //                         digitSeparator: true,
        //                         places: 0
        //                     }
        //                 }, {
        //                     fieldName: "Ring_Name",
        //                     label: "Ring_Name",
        //                     visible: true,
        //                     format: {
        //                         digitSeparator: true,
        //                         places: 0
        //                     }
        //                 }, {
        //                     fieldName: "Remarks",
        //                     label: "Remarks",
        //                     visible: true,
        //                     format: {
        //                         digitSeparator: true,
        //                         places: 0
        //                     }
        //                 }, {
        //                     fieldName: "Street_Name_",
        //                     label: "Street_Name_",
        //                     visible: true,
        //                     format: {
        //                         digitSeparator: true,
        //                         places: 0
        //                     }
        //                 }, {
        //                     fieldName: "Address",
        //                     label: "Address",
        //                     visible: true,
        //                     format: {
        //                         digitSeparator: true,
        //                         places: 0
        //                     }
        //                 }, {
        //                     fieldName: "Regions",
        //                     label: "Regions",
        //                     visible: true,
        //                     format: {
        //                         digitSeparator: true,
        //                         places: 0
        //                     }
        //                 }, {
        //                     fieldName: "Province",
        //                     label: "Province",
        //                     visible: true,
        //                     format: {
        //                         digitSeparator: true,
        //                         places: 0
        //                     }
        //                 }, {
        //                     fieldName: "City",
        //                     label: "City",
        //                     visible: true,
        //                     format: {
        //                         digitSeparator: true,
        //                         places: 0
        //                     }
        //                 }
        //             ]
        //         }
        //         ]
        //     }
        // });
        // map.add(Parcels)


      

        let LH =  new FeatureLayer({	  
            url:"http://103.31.82.102:6080/arcgis/rest/services/Projects/LH/MapServer/1",
            title: "LongHaul",
            popupTemplate: {        //MN_LongHaul_Network 
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
        }
    	});
        map.add(LH)

        let POP =  new FeatureLayer({	 
            url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/0",
            visible:false,
            title: "Nodes",
            popupTemplate: {        //POP/OLT
                title: "POP/OLT",
                content: [{
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
        map.add(POP)

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
            content: [{

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
                        return result.graphic.layer === LH;
                    })[0].graphic;
                    // do something with the result graphic
                     console.log(graphic.attributes.OBJECTID);
                    _this.setState({
                        id: graphic.attributes.OBJECTID
                    })
                }

                queryRelated({
                    url: "http://172.30.30.234:6080/arcgis/rest/services/MN_South/MultiGIS/MapServer/7",
                    objectIds: _this.state.id,
                    relationshipId: 1,
                    returnGeometry: true,
                    outFields: ["Tube", "Colour", "FOC_ID", "Customer","OBJECTID"]
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

render() {
    return (
        <div className='relate'>
            <div id="attribute"></div>  
       </div>
         
       
    )

}

}
