import React from 'react'
import { loadModules } from 'react-arcgis';


export default class BahriaLayer extends React.Component {

    componentDidMount() {

        let map = this.props.map;
        let view = this.props.view;

        loadModules(["esri/layers/FeatureLayer", "esri/layers/GroupLayer"
        ])
            .then(([FeatureLayer, GroupLayer]) => {
              
                let phase = new FeatureLayer({
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/Bahria/FeatureServer/10",
                    title: 'Phase', //Phase
                    popupTemplate: {
                        title: "Phase",
                        content: [ 
                            {
    
                            type: "fields",
                            fieldInfos: [
                                {
                                    fieldName: "Phase_Number",
                                    label: "Phase Number",
                                    visible: true,
                                    format: {
                                        digitSeparator: true,
                                        places: 0
                                    }
                                }, {
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
                map.add(phase)

                let precinct = new FeatureLayer({
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/Bahria/FeatureServer/9",
                    title: 'Precincts',    //Precincts_Boundry
                    popupTemplate: {
                        title: "Precincts Boundry",
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                    {
                                        fieldName: "Pre_No",
                                        label: "Pre No",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Precincts",
                                        label: "Precincts",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "No_of_Customers",
                                        label: "No of Customers",
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
                map.add(precinct)

                let parcels = new FeatureLayer({
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/Bahria/FeatureServer/8",
                    title: 'Parcels', //BTK_Parcels
                    popupTemplate: {
                        title: "Parcels",
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                    {
                                        fieldName: "Plot_Number",
                                        label: "Plot_Number",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Customer_Name",
                                        label: "Customer_Name",
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
                                        fieldName: "Block_Name",
                                        label: "Block_Name",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Precinct_No",
                                        label: "Precinct_No",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Phase_No",
                                        label: "Phase_No",
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
                                    }, {
                                        fieldName: "BTK_Employee",
                                        label: "BTK_Employee",
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
                                        fieldName: "State",
                                        label: "State",
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
                                        fieldName: "Customer_ID",
                                        label: "Customer_ID",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
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
                map.add(parcels)

              

                let fiberAttach = new FeatureLayer({
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/Bahria/FeatureServer/6",
                    title: 'Fiber Attachment',    //BTK_Fiber_Attachment
                    popupTemplate: {
                        title: "BTK Fiber Attachment",
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                    {
                                        fieldName: "OBJECTID",
                                        label: "OBJECTID",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "OFC_Type",
                                        label: "OFC Type",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Tube",
                                        label: "Tube",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Core_Colour",
                                        label: "Core Colour",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "CalculatedLength",
                                        label: "CalculatedLength",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "HH_ID",
                                        label: "HH ID",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Joint",
                                        label: "Joint",
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
                                        fieldName: "FDT_Tray",
                                        label: "FDT Tray",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "FDT_Port",
                                        label: "FDT Port",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },{
                                        fieldName: "House_Number",
                                        label: "House Number",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "FDT_ID",
                                        label: "FDT ID",
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
                map.add(fiberAttach)


                let fiber = new FeatureLayer({
                    // url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/BahriaTown/MapServer/7",
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/Bahria/FeatureServer/7",
                    title: "Fiber",   //BTK_Fiber
                    popupTemplate: {
                        title: "BTK Fiber",
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
                                        fieldName: "Core_No",
                                        label: "Core_No",
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
                                        fieldName: "CalculatedLength",
                                        label: "CalculatedLength",
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
                                        fieldName: "State",
                                        label: "State",
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
                                        fieldName: "Town",
                                        label: "Town",
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
                                    }
                                ]
                            }
                        ]
                    }
                })
                map.add(fiber)

                let fdt = new FeatureLayer({
                    url:"http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/Bahria/FeatureServer/5",
                    title:"FDT",     //BTK_FDT
                    popupTemplate: {
                        title:"BTK FDT",
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                    {
                                        fieldName: "FDT_ID",
                                        label: "FDT_ID",
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
                                        fieldName: "Street_Name",
                                        label: "Street_Name",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "No_Of_Cores",
                                        label: "No_Of_Cores",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "OLT_Name",
                                        label: "OLT_Name",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Area_Name",
                                        label: "Area_Name",
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
                                        fieldName: "State",
                                        label: "State",
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
                })
                map.add(fdt)

            
                let sp = new FeatureLayer({
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/Bahria/FeatureServer/4",
                    title: 'Sp',       //Sp
                    popupTemplate: {
                        title: "SP",
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
                                        fieldName: "JointCounts",
                                        label: "JointCounts",
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
                                        fieldName: "Regions",
                                        label: "Regions",
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
                                        fieldName: "State",
                                        label: "State",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Splitter_Type",
                                        label: "Splitter_Type",
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
                map.add(sp)


                let joints = new FeatureLayer({
                    url:"http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/Bahria/FeatureServer/3",
                    title:"Joints",  //BTK_Joints
                    popupTemplate:{
                        title: "BTK Joints",
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
                                        fieldName: "JointCounts",
                                        label: "JointCounts",
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
                                        fieldName: "State",
                                        label: "State",
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
                map.add(joints)

                
                let hh = new FeatureLayer({
                    url:"http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/Bahria/FeatureServer/2",
                    title:"HandHoles",  // BTK_HandHoles
                    popupTemplate:{
                        title: "BTK HandHoles",
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
                                        fieldName: "No_Of_Cables",
                                        label: "No_Of_Cables",
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
                                        fieldName: "Street_Name",
                                        label: "Street_Name",
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
                                        fieldName: "Town",
                                        label: "Town",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Precinct_No",
                                        label: "Precinct_No",
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
                                        fieldName: "Trench_Alignment",
                                        label: "Trench_Alignment",
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
                                        fieldName: "HH_Longitude",
                                        label: "HH_Longitude",
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
                                        fieldName: "State",
                                        label: "State",
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
                map.add(hh)

                let sites = new FeatureLayer({
                    url:"http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/Bahria/FeatureServer/1",
                    title:"Sites",  // //BTK_Sites
                    popupTemplate:{
                        title: "BTK Sites",    
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                    {
                                        fieldName: "Site_Name",
                                        label: "Site_Name",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Site_No",
                                        label: "Site_No",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Site_Status",
                                        label: "Site_Status",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Precinct_No",
                                        label: "Precinct_No",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Area_Name",
                                        label: "Area_Name",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "No__of_Switches",
                                        label: "No__of_Switches",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "EDFA",
                                        label: "EDFA",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "ODF",
                                        label: "ODF",
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
                                        fieldName: "State",
                                        label: "State",
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
            map.add(sites)

            let customer = new FeatureLayer({
                url:"http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/Bahria/FeatureServer/0",
                // url:"http://103.31.82.102:6080/arcgis/rest/services/Feature_Service/Bahria/FeatureServer",
                title:"Customers",      //BTK_Customers
                popupTemplate:{
                    title: "BTK Customers",
                    content: [
                        {
                            type: "fields",
                            fieldInfos: [
                                {
                                    fieldName: "Customer_Name",
                                    label: "Customer_Name",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Customer_ID",
                                    label: "Customer_ID",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Plot_Number",
                                    label: "Plot_Number",
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
                                    fieldName: "FDT_ID",
                                    label: "FDT_ID",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Block_Name",
                                    label: "Block_Name",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Precinct_No",
                                    label: "Precinct_No",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Phase_No",
                                    label: "Phase_No",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Package",
                                    label: "Package",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "BTK_Employee",
                                    label: "BTK_Employee",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Services",
                                    label: "Services",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "PON_No",
                                    label: "PON_No",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Card_No",
                                    label: "Card_No",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "OLT_No",
                                    label: "OLT_No",
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
                                    fieldName: "Regions",
                                    label: "Regions",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "OFC",
                                    label: "OFC",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Tube",
                                    label: "Tube",
                                    visible: true,
                                    formate: {
                                        digitSeperate: true,
                                        places: 0
                                    }
                                }, {
                                    fieldName: "Core_Colour",
                                    label: "Core_Colour",
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
                                    fieldName: "State",
                                    label: "State",
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
            map.add(customer)

            });


    }

    render() {
        return null

    }

}

