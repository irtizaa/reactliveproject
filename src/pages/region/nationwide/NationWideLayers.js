import React from 'react'
import { loadModules } from 'react-arcgis';
import { Row } from 'reactstrap';
import { queryRelated } from '@esri/arcgis-rest-feature-layer'
// import './south.css'


export default class NationWideLayers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',  
                  
        }
    }
    
    componentDidMount() {

        let map = this.props.map;
        let view = this.props.view;

        loadModules(["esri/layers/FeatureLayer", "esri/layers/GroupLayer", "esri/layers/MapImageLayer"
        ])
            .then(([FeatureLayer, GroupLayer, MapImageLayer]) => {
              
            
                //BaseMap

                var CustomerPop = {
                    title: "Customer",
                    content: [
                        {
                            // It is also possible to set the fieldInfos outside of the content
                            // directly in the popupTemplate. If no fieldInfos is specifically set
                            // in the content, it defaults to whatever may be set within the popupTemplate.
                            type: "fields",
                            fieldInfos: [{
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
                            },
                             {
                                fieldName: "City",
                                label: "City",
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
                            },{
                                fieldName: "Remarks",
                                label: "Remarks",
                                visible: true,
                                format: {
                                    digitSeparator: true,
                                    places: 0
                                }
                            },
    
                            {
                                fieldName: "Latitude",
                                label: "Latitude",
                                visible: true,
                                format: {
                                    digitSeparator: true,
                                    places: 0
                                }
                            }, {
                                fieldName: "Longitude",
                                label: "Longitude",
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
    
    
           
    
            var JointPop = {
                title: "Joint",
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
                        }
                        ]
                    }
                ]
            }
    
    
            var HHPop = {
                title: "HandHole",
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
                                fieldName: "HH_No",
                                label: "HH No",
                                visible: true,
                                formate: {
                                    digitSeperate: true,
                                    places: 0
                                }
                            }, {
                                fieldName: "No_Of_Cables",
                                label: "No Of Cables",
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
                                fieldName: "HH_Slab",
                                label: "HH Slab",
                                visible: true,
                                formate: {
                                    digitSeperate: true,
                                    places: 0
                                }
                            }, {
                                fieldName: "HH_Category",
                                label: "HH Category",
                                visible: true,
                                formate: {
                                    digitSeperate: true,
                                    places: 0
                                }
                            }, {
                                fieldName: "HH_Type",
                                label: "HH Type",
                                visible: true,
                                formate: {
                                    digitSeperate: true,
                                    places: 0
                                }
                            },  {
                                fieldName: "HH_Size",
                                label: "HH Size",
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
                            }
                            , {
                                fieldName: "Cable_Position",
                                label: "Cable Position",
                                visible: true,
                                formate: {
                                    digitSeperate: true,
                                    places: 0
                                }
                            },  {
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
                                label: "FOC Type",
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
                                label: "Ring Name",
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
                                fieldName: "HH_Longitude",
                                label: "HH Longitude",
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
    
            var BTKFiberPop = {
                title: "BTK Metro Fiber",
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
                                            }
                                                //, {
                                                //fieldName: "Installed_Date",
                                                //label: "Installed_Date",
                                                //visible: true,
                                                //format: {
                                                //    digitSeparator: true,
                                                //    places: 0
                                                //}
                                                //}
                                                , {
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

            var CentralFiberPop = {
                title: "Central Metro Fiber",
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
                                            }
                                                //, {
                                                //fieldName: "Installed_Date",
                                                //label: "Installed_Date",
                                                //visible: true,
                                                //format: {
                                                //    digitSeparator: true,
                                                //    places: 0
                                                //}
                                                //}
                                                , {
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


            var NorthFiberPop = {
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
                                            }
                                                //, {
                                                //fieldName: "Installed_Date",
                                                //label: "Installed_Date",
                                                //visible: true,
                                                //format: {
                                                //    digitSeparator: true,
                                                //    places: 0
                                                //}
                                                //}
                                                , {
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

            var SouthFiberPop = {
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
                                            }
                                                //, {
                                                //fieldName: "Installed_Date",
                                                //label: "Installed_Date",
                                                //visible: true,
                                                //format: {
                                                //    digitSeparator: true,
                                                //    places: 0
                                                //}
                                                //}
                                                , {
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
    
            var IRUInfraPop = {
                title: "IRU Infra",
                content: [
                                        {
    
                                            type: "fields",
                                            fieldInfos: [{
                                                fieldName: "FOC_ID",
                                                label: "FOC_ID",
                                                visible: true
                                            }, {
                                                fieldName: "Site_ID",
                                                label: "Site ID",
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
                                                fieldName: "Core_No",
                                                label: "Core No",
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
            }

            var  LHPop = {
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
    
            var ProjectLight_InfraPop = {
                title: "Project Light Infra",
                content: [
                                        {
    
                                            type: "fields",
                                            fieldInfos: [{
                                                fieldName: "FOC_ID",
                                                label: "FOC ID",
                                                visible: true
                                            },{
                                                fieldName: "Cell_ID",
                                                label: "Cell ID",
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
                                                fieldName: "Core_Number",
                                                label: "Core Number",
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
                                                fieldName: "StreetName",
                                                label: "StreetName",
                                                visible: true,
                                                format: {
                                                    digitSeparator: true,
                                                    places: 0
                                                }
                                            }, {
                                                fieldName: "Priority",
                                                label: "Priority",
                                                visible: true,
                                                format: {
                                                    digitSeparator: true,
                                                    places: 0
                                                }
                                            }, {
                                                fieldName: "Deployment_Month",
                                                label: "Deployment Month",
                                                visible: true,
                                                format: {
                                                    digitSeparator: true,
                                                    places: 0
                                                }
                                            },   {
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
    
            var NodePop = {
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
                        },  {
                            fieldName: "Remarks",
                            label: "Remarks",
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
                            fieldName: "Latitude",
                            label: "Lat",
                            visible: true,
                            format: {
                                digitSeparator: true,
                                places: 0
                            }
                        }, {
                            fieldName: "Longitude",
                            label: "Long",
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
                visible:false,
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


                var LH = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Nationwide/MPPLInfra/MapServer/5", {
                outFields: ["*"],
                title: "LongHaul",
                visible: false,
                popupTemplate: LHPop
            });
          //  map.add(LH);
            

                var ProjectLight_Infra = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Nationwide/MPPLInfra/MapServer/6", {
                    outFields: ["*"],
                    title: "Project Light Infra",
                    visible: false,
                    popupTemplate: ProjectLight_InfraPop
                });
              //  map.add(ProjectLight_Infra);
    
    
            var BTKFiber = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Nationwide/MPPLInfra/MapServer/0", {
                outFields: ["*"],
                title: "BTK Fiber",
                visible: false,
                popupTemplate: BTKFiberPop
            });
           // map.add(BTKFiber);

            var CentralFiber = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Nationwide/MPPLInfra/MapServer/1", {
                outFields: ["*"],
                title: "Central Fiber",
                visible: false,
                popupTemplate: CentralFiberPop
            });
           // map.add(CentralFiber);

            var NorthFiber = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Nationwide/MPPLInfra/MapServer/2", {
                outFields: ["*"],
                title: "North Fiber",
                visible: false,
                popupTemplate: NorthFiberPop
            });
           // map.add(NorthFiber);

            var Telenor_IRU_Infra = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Nationwide/MPPLInfra/MapServer/3", {
                outFields: ["*"],
                title: "IRU Infra",
                visible: false,
                popupTemplate: IRUInfraPop
            });
            //map.add(Telenor_IRU_Infra);

            var SouthFiber = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Nationwide/MPPLInfra/MapServer/4", {
                outFields: ["*"],
                title: "South Fiber",
                visible: false,
                popupTemplate: SouthFiberPop
            });
           // map.add(SouthFiber);
    
            


           
    
    
            var Node = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Projects/Nationwide/MapServer/0", {
                outFields: ["*"],
                title: "Node",
                popupTemplate: NodePop  
            });
           // map.add(Node);

           var BTK = new FeatureLayer("http://103.31.82.102:6080/arcgis/rest/services/Projects/MPPL2021/MapServer/17", {
            outFields: ["*"],
            title: "BTK",
            visible: false
            // popupTemplate: NodePop  
        });
       map.add(BTK);


           var ProjectLight = new MapImageLayer({
            
            url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/MPPL2021/MapServer",
            title: "Project Light Infra",
            sublayers: [

                {
                    id: 19,
                    title: "FTTT 2019",
                    visible: false
                }, {
                    id: 20,
                    title: "FTTT 2021",
                    visible: false
                },{
                    id: 18,
                    title: "All Project Light Infra",
                    visible: false
                }


            ]
        });

        map.add(ProjectLight);
           
          

     

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
                    visible: false,
                    
                }


            ]
        });

        map.add(CoreNetwork1);

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
       
        var MNSites = new MapImageLayer({
            url:"http://103.31.82.102:6080/arcgis/rest/services/Projects/MPPL2021/MapServer",
            title: "Sites",
            sublayers: [

                {
                    id: 1,
                    title: "South",
                    visible: false
                }, {
                    id: 2,
                    title: "Central",
                    visible: false
                }, {
                    id: 3,
                    title: "North",
                    visible: false
                }, {
                    id: 0,
                    title: "All Sites",
                    visible: true
                }
               
               
            ]
        });   

        map.add(MNSites);

            });
    }

    cancelTable = () => {
        return this.props.height('90vh', '0vh')
    }
    render() {
        return (
            <div className='relate'>
           </div>              
           
        )
                    
    }

}