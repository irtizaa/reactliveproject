import React from 'react'
import { loadModules } from 'react-arcgis';
// import SouthLayers from './SouthLayers';


export default class NationWideWidget extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            height : this.props.height
        }
    }

    componentDidMount(){
        let view = this.props.view;
        let map = this.props.map

        loadModules(["esri/widgets/Search", "esri/layers/FeatureLayer",'esri/widgets/Expand','esri/widgets/Home',
        'esri/widgets/LayerList','esri/widgets/BasemapGallery'
    ])
    .then(([Search, FeatureLayer,Expand,Home,LayerList,BasemapGallery]) => {

        let source = [
            {
                layer: new FeatureLayer({
                    url: "http://172.30.30.234:6080/arcgis/rest/services/Basemap/Basemap_Pak/MapServer/3",
                    popupTemplate: {
                        title: "Regions",
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
                }),
                searchFields: ["R_Name"],
                displayField: "R_Name",
                exactMatch: false,
                outFields: ["*"],
                name: "Regions",  
                placeholder: "Region Name",
                scale: 10,
                maxResults: 6,
                maxSuggestions: 6,
                minSuggestCharacters: 0,  
                // resultSymbol: {
                //     type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
                //     color: [239, 25, 25],
                //     size: 10,
                //     width: 30,
                //     height: 30,
                //     xoffset: 0,
                //     yoffset: 0
                // }
            },
            // { 
            //     layer :  new FeatureLayer({	//MN_Soth_Infra.SDE.MN_LongHaul_Network
            //        // url: "http://172.30.30.234:6080/arcgis/rest/services/MN_South/MultiGIS/MapServer/7",
            //        url: "http://172.30.30.234:6080/arcgis/rest/services/Long_Haul/MN_Longhaul/FeatureServer/7",
            //         popupTemplate: { 
            //             title: "LongHaul Network",
            //             content: [
            //                 {
            //                     type: "fields",
            //                     fieldInfos: [
            //                         {
            //                             fieldName: "FOC_ID",
            //                             label: "FOC_ID ",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Core_Number",
            //                             label: "Core_Number",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Name",
            //                             label: "Name",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Calculated_Length",
            //                             label: "Calculated_Length",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "No_of_Joints",
            //                             label: "No_of_Joints",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "StreetName",
            //                             label: "StreetName",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Name",
            //                             label: "Name",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Section",
            //                             label: "Section",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Remarks",
            //                             label: "Remarks",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Trench_Alignment",
            //                             label: "Trench_Alignment",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Road_Crossing_Fiber",
            //                             label: "Road_Crossing_Fiber",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Attach_Conduit_Fiber",
            //                             label: "Attach_Conduit_Fiber",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Attach_Conduit_Dia",
            //                             label: "Attach_Conduit_Dia",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Connectivity_Type",
            //                             label: "Connectivity_Type",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Installed_Date",
            //                             label: "Installed_Date",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Survey_Date",
            //                             label: "Survey_Date",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "City",
            //                             label: "City",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Province",
            //                             label: "Province",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Regions",
            //                             label: "Regions",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }
            //                     ]
            //                 }
            //             ]
            //         }
            //     }),
            //     searchFields: ["FOC_ID"],
            //     displayField: "FOC_ID",
            //     exactMatch: true,
            //     outFields: ["*"],
            //     name: "LongHaul Network",
            //     placeholder: "FOC ID",
            //     scale: 1000,
            //     maxResults: 200,
            //     maxSuggestions: 200,
            //     enableSuggestions: true
            // },{ 
            //     layer :new FeatureLayer({		//MN_LongHaul_Existing_Network
            //                 url: "http://172.30.30.234:6080/arcgis/rest/services/Long_Haul/LH/MapServer/2",
            //                 popupTemplate: { // autocasts as new popupTemplate()
            //                     title: "Existing Network",
            //                     content: [
            //                         {
            //                             type: "fields",
            //                             fieldInfos: [
            //                                 {
            //                                     fieldName: "Section_ID",
            //                                     label: "Section_ID",
            //                                     visible: true,
            //                                     formate: {
            //                                         digitSeperate: true,
            //                                         places: 0
            //                                     }
            //                                 }, {
            //                                     fieldName: "Core_No",
            //                                     label: "Core_No",
            //                                     visible: true,
            //                                     formate: {
            //                                         digitSeperate: true,
            //                                         places: 0
            //                                     }
            //                                 }, {
            //                                     fieldName: "Calculated_Length",
            //                                     label: "Calculated_Length",
            //                                     visible: true,
            //                                     formate: {
            //                                         digitSeperate: true,
            //                                         places: 0
            //                                     }
            //                                 }, {
            //                                     fieldName: "Connectivity_Type",
            //                                     label: "Connectivity_Type",
            //                                     visible: true,
            //                                     formate: {
            //                                         digitSeperate: true,
            //                                         places: 0
            //                                     }
            //                                 }, {
            //                                     fieldName: "Section",
            //                                     label: "Section",
            //                                     visible: true,
            //                                     formate: {
            //                                         digitSeperate: true,
            //                                         places: 0
            //                                     }
            //                                 }, {
            //                                     fieldName: "StreetName",
            //                                     label: "StreetName",
            //                                     visible: true,
            //                                     formate: {
            //                                         digitSeperate: true,
            //                                         places: 0
            //                                     }
            //                                 }, {
            //                                     fieldName: "City",
            //                                     label: "City",
            //                                     visible: true,
            //                                     formate: {
            //                                         digitSeperate: true,
            //                                         places: 0
            //                                     }
            //                                 }, {
            //                                     fieldName: "Regions",
            //                                     label: "Regions",
            //                                     visible: true,
            //                                     formate: {
            //                                         digitSeperate: true,
            //                                         places: 0
            //                                     }
            //                                 }, {
            //                                     fieldName: "Province",
            //                                     label: "Province",
            //                                     visible: true,
            //                                     formate: {
            //                                         digitSeperate: true,
            //                                         places: 0
            //                                     }
            //                                 }
            //                             ]
            //                         }
            //                     ]
            //                 }
            //             }),
            //                 searchFields: ["Section_ID"],
            //                 displayField: "Section_ID",
            //             exactMatch: true,
            //             outFields: ["*"],
            //                 name: "Existing_Network",
            //                 placeholder: "Section ID",
            //             scale: 1000,
            //             maxResults: 200,
            //             maxSuggestions: 200,
            //             enableSuggestions: true
            // },
            {
                layer :  new FeatureLayer({			//MN_Soth_Infra.SDE.MN_Cities_Boundary
                    url: "http://172.30.30.234:6080/arcgis/rest/services/Basemap/Basemap_Pak/MapServer/2",
                    popupTemplate: { // autocasts as new popupTemplate()
                        title: "Cities",
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                    {
                                        fieldName: "ID",
                                        label: "ID",
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
                                        fieldName: "R_Name",
                                        label: "R_Name",
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
                }),
                searchFields: ["City"],
                displayField: "City",
                exactMatch: true,
                outFields: ["*"],
                name: "Cities",
                placeholder: "City",
                scale: 1000,
                maxResults: 6,
                maxSuggestions: 6,
                enableSuggestions: true
            }
            // ,{
            //     layer : new FeatureLayer({		//MN_MetroFiber_Network
            //         url: "http://172.30.30.234:6080/arcgis/rest/services/MN_South/OFC/MapServer/1",
            //         popupTemplate: { // autocasts 0as new popupTemplate()
            //             title: "Metro Network",
            //             content: [
            //                 {

            //                 type: "fields",
            //                 fieldInfos: [{
            //                     fieldName: "FOC_ID",
            //                     label: "FOC_ID",
            //                     visible: true
            //                 }, {
            //                     fieldName: "Core_Number",
            //                     label: "Core_Number",
            //                     visible: true,
            //                     format: {
            //                         digitSeparator: true,
            //                         places: 0
            //                     }
            //                 }, {
            //                     fieldName: "Name",
            //                     label: "Name",
            //                     visible: true,
            //                     format: {
            //                         digitSeparator: true,
            //                         places: 0
            //                     }
            //                 }, {
            //                     fieldName: "Calculated_Length",
            //                     label: "Calculated_Length",
            //                     visible: true,
            //                     format: {
            //                         digitSeparator: true,
            //                         places: 0
            //                     }
            //                 }, {
            //                     fieldName: "Connectivity_Type",
            //                     label: "Connectivity_Type",
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
            //                     fieldName: "Ring_Name",
            //                     label: "Ring_Name",
            //                     visible: true,
            //                     format: {
            //                         digitSeparator: true,
            //                         places: 0
            //                     }
            //                 }, {
            //                     fieldName: "StreetName",
            //                     label: "StreetName",
            //                     visible: true,
            //                     format: {
            //                         digitSeparator: true,
            //                         places: 0
            //                     }
            //                 }, {
            //                     fieldName: "Trench_Alignment",
            //                     label: "Trench_Alignment",
            //                     visible: true,
            //                     format: {
            //                         digitSeparator: true,
            //                         places: 0
            //                     }
            //                 }, {
            //                     fieldName: "Road_Crossing_Fiber",
            //                     label: "Road_Crossing_Fiber",
            //                     visible: true,
            //                     format: {
            //                         digitSeparator: true,
            //                         places: 0
            //                     }
            //                 }, {
            //                     fieldName: "Installed_Date",
            //                     label: "Installed_Date",
            //                     visible: true,
            //                     format: {
            //                         digitSeparator: true,
            //                         places: 0
            //                     }
            //                 }, {
            //                     fieldName: "Survey_Date",
            //                     label: "Survey_Date",
            //                     visible: true,
            //                     format: {
            //                         digitSeparator: true,
            //                         places: 0
            //                     }
            //                 }, {
            //                     fieldName: "Attach_Conduit_Fiber",
            //                     label: "Attach_Conduit_Fiber",
            //                     visible: true,
            //                     format: {
            //                         digitSeparator: true,
            //                         places: 0
            //                     }
            //                 }, {
            //                     fieldName: "Attach_Conduit_Dia",
            //                     label: "Attach_Conduit_Dia",
            //                     visible: true,
            //                     format: {
            //                         digitSeparator: true,
            //                         places: 0
            //                     }
            //                 }, {
            //                     fieldName: "Installed_Date",
            //                     label: "Installed_Date",
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
            //                 }, {
            //                     fieldName: "Province",
            //                     label: "Province",
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
            //                 }
            //                 ]
            //             }
            //             ]
            //         }
            //     }),
            //     searchFields: ["FOC_ID"],
            //     displayField: "FOC_ID",
            //     exactMatch: true,
            //     outFields: ["*"],
            //     name: "Metro Network",
            //     placeholder: "FOC ID",
            //     scale: 100000,
            //     maxResults: 200,
            //     maxSuggestions: 200,
            //     enableSuggestions: true
            // },{
            //     layer:  new FeatureLayer({		//MN_Telenor_Sites
            //         url: "http://172.30.30.234:6080/arcgis/rest/services/Telenor/TP/MapServer/1",
            //         popupTemplate: { // autocasts 0as new popupTemplate()
            //             title: "Telenor_Sites",
            //             content: [
            //                 {
            //                     type: "fields",
            //                     fieldInfos: [
            //                         {
            //                             fieldName: "Site_Name",
            //                             label: "Site_Name ",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Node_Name",
            //                             label: "Node_Name",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Site_ID",
            //                             label: "Site_ID",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Switch_IP",
            //                             label: "Switch_IP",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Port_No",
            //                             label: "Port_No",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Survey_Date",
            //                             label: "Survey_Date",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "City",
            //                             label: "City",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Latitude",
            //                             label: "Latitude",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Longitude",
            //                             label: "Longitude",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Circuit_Type",
            //                             label: "Circuit_Type",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }
            //                     ]
            //                 }
            //             ]
            //         }
            //     }),
            //     searchFields: ["Site_ID"],
            //     displayField: "Site_ID",
            //     exactMatch: true,
            //     outFields: ["*"],
            //     name: "Telenor_Sites",
            //     placeholder: "Site ID",  
            //     scale: 100000,
            //     maxResults: 200,  
            //     maxSuggestions: 200,
            //     enableSuggestions: true  
            // },{
            //     layer :  new FeatureLayer({		//MN_Telenor_Attachment 
            //         url: "http://172.30.30.234:6080/arcgis/rest/services/Telenor/TP/MapServer/0",
            //         popupTemplate: { // autocasts 0as new popupTemplate()
            //             title: "Telenor_Attachment",
            //             content: [
            //                 {
            //                     type: "fields",
            //                     fieldInfos: [
            //                         {
            //                             fieldName: "Tube",
            //                             label: "Tube ",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Core_Colour",
            //                             label: "Core_Colour",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Site_ID",
            //                             label: "Site_ID",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Connectivity_Type",
            //                             label: "Connectivity_Type",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "HH_ID",
            //                             label: "HH_ID",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Ring_Name",
            //                             label: "Ring_Name",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Joint_ID",
            //                             label: "Joint_ID",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "FA_ID",
            //                             label: "FA_ID",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Core_No",
            //                             label: "Core_No",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Region",
            //                             label: "Region",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Installed_Date",
            //                             label: "Installed_Date",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "City",
            //                             label: "City",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Calculated_Length",
            //                             label: "Calculated_Length",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }
            //                     ]
            //                 }
            //             ]
            //         }
            //     }),
            //     searchFields: ["Site_ID"],
            //     displayField: "Site_ID",
            //     exactMatch: true,
            //     outFields: ["*"],
            //     name: "Telenor_Attachment",
            //     placeholder: "Site ID",
            //     scale: 100000,
            //     maxResults: 200,
            //     maxSuggestions: 200,
            //     enableSuggestions: true
            // },{
            //     layer : new FeatureLayer({			//MN_Joints
            //         url: "http://172.30.30.234:6080/arcgis/rest/services/MN_South/MultiGIS/MapServer/11",
            //         popupTemplate: { // autocasts as new popupTemplate()
            //             title: "Joints",
            //             content: [
            //                 {
            //                     type: "fields",
            //                     fieldInfos: [
            //                         {
            //                             fieldName: "Joint_ID",
            //                             label: "Joint_ID ",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "JointNo",
            //                             label: "JointNo",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "JointType",
            //                             label: "JointType",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Street_Name",
            //                             label: "Street_Name",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Regions",
            //                             label: "Regions",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Connectivity_Type",
            //                             label: "Connectivity_Type",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Section",
            //                             label: "Section",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Ring_Name",
            //                             label: "Ring_Name",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "City",
            //                             label: "City",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Province",
            //                             label: "Province",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Remarks",
            //                             label: "Remarks",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }
            //                     ]
            //                 }
            //             ]
            //         }
            //     }),
            //     searchFields: ["Joint_ID"],
            //     displayField: "Joint_ID",
            //     exactMatch: true,
            //     outFields: ["*"],
            //     name: "Joints",
            //     placeholder: "Joint ID",
            //     scale: 100000,
            //     maxResults: 1000,
            //     maxSuggestions: 1000,
            //     enableSuggestions: true
            // },{
            //     layer: new FeatureLayer({		//MN_Soth_Infra.SDE.MN_Fiber_Attachment
            //         url: "http://172.30.30.234:6080/arcgis/rest/services/MN_South/OFC/MapServer/2",
            //         popupTemplate: { // autocasts as new popupTemplate()
            //             title: "Fiber Attachment",
            //             content: [
            //                 {
            //                     // It is also possible to set the fieldInfos outside of the content
            //                     // directly in the popupTemplate. If no fieldInfos is specifically set
            //                     // in the content, it defaults to whatever may be set within the popupTemplate.
            //                     type: "fields",
            //                     fieldInfos: [{
            //                         fieldName: "FA_ID",
            //                         label: "FA_ID",
            //                         visible: true,
            //                         format: {
            //                             digitSeparator: true,
            //                             places: 0
            //                         }
            //                     }, {
            //                         fieldName: "Joint_ID",
            //                         label: "Joint_ID",
            //                         visible: true,
            //                         format: {
            //                             digitSeparator: true,
            //                             places: 0
            //                         }
            //                     }, {
            //                         fieldName: "Client_Name",
            //                         label: "Client_Name",
            //                         visible: true,
            //                         format: {
            //                             digitSeparator: true,
            //                             places: 0
            //                         }
            //                     }, {
            //                         fieldName: "Connectivity_Type",
            //                         label: "Connectivity_Type",
            //                         visible: true,
            //                         format: {
            //                             digitSeparator: true,
            //                             places: 0
            //                         }
            //                     }, {
            //                         fieldName: "OFC_Type",
            //                         label: "OFC_Type",
            //                         visible: true,
            //                         format: {
            //                             digitSeparator: true,
            //                             places: 0
            //                         }
            //                     }, {
            //                         fieldName: "HH_ID",
            //                         label: "HH_ID",
            //                         visible: true,
            //                         format: {
            //                             digitSeparator: true,
            //                             places: 0
            //                         }
            //                     }, {
            //                         fieldName: "Ring_Name",
            //                         label: "Ring_Name",
            //                         visible: true,
            //                         format: {
            //                             digitSeparator: true,
            //                             places: 0
            //                         }
            //                     }, {
            //                         fieldName: "Tube",
            //                         label: "Tube",
            //                         visible: true
            //                     }, {
            //                         fieldName: "Core_Colour",
            //                         label: "Core Colour",
            //                         visible: true,
            //                         format: {
            //                             digitSeparator: true,
            //                             places: 0
            //                         }
            //                     }, {
            //                         fieldName: "Remarks",
            //                         label: "Remarks",
            //                         visible: true
            //                     }
            //                     ]
            //                 }
            //             ]
            //         }
            //     }),
            //     searchFields: ["FA_ID"],
            //     displayField: "FA_ID",
            //     exactMatch: true,
            //     outFields: ["*"],
            //     name: "Fiber Attachment",
            //     placeholder: "FA ID",
            //     scale: 100000,
            //     maxResults: 200,
            //     maxSuggestions: 200,
            //     enableSuggestions: true
            // },{
            //     layer:new FeatureLayer({		//MN_HandHole
            //         url: "http://172.30.30.234:6080/arcgis/rest/services/MN_South/OFC/MapServer/0",
            //         popupTemplate: { // autocasts as new popupTemplate()
            //             title: "HandHole",
            //             content: [
            //                 {
            //                     type: "fields",
            //                     fieldInfos: [
            //                         {
            //                             fieldName: "HH_ID",
            //                             label: "HH_ID",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "HH_No",
            //                             label: "HH_No",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "No_Of_Cables",
            //                             label: "No_Of_Cables",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Street_Name",
            //                             label: "Street_Name",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Landmark",
            //                             label: "Landmark",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "HH_Slab",
            //                             label: "HH_Slab",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "HH_Category",
            //                             label: "HH_Category",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "HH_Type",
            //                             label: "HH_Type",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "HH_Condition",
            //                             label: "HH_Condition",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "HH_Size",
            //                             label: "HH_Size",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Trench_Alignment",
            //                             label: "Trench_Alignment",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }
            //                         , {
            //                             fieldName: "Cable_Position",
            //                             label: "Cable_Position",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "No_Of_Core",
            //                             label: "No_Of_Core",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Regions",
            //                             label: "Regions",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Attachment",
            //                             label: "Attachment",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "FOC_Type",
            //                             label: "FOC_Type",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Section",
            //                             label: "Section",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Ring_Name",
            //                             label: "Ring_Name",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "City",
            //                             label: "City",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Province",
            //                             label: "Province",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Installed_Date",
            //                             label: "Installed_Date",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Survey_Date",
            //                             label: "Survey_Date",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "HH_Longitude",
            //                             label: "HH_Longitude",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "HH_Latitude",
            //                             label: "HH_Latitude",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Remarks",
            //                             label: "Remarks",
            //                             visible: true,
            //                             format: {
            //                                 digitSeparator: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "Image_URL",
            //                             label: "Image_URL",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }, {
            //                             fieldName: "HandHole_Image",
            //                             label: "HandHole_Image",
            //                             visible: true,
            //                             formate: {
            //                                 digitSeperate: true,
            //                                 places: 0
            //                             }
            //                         }
            //                     ]

            //                 }
            //             ]
            //         }
            //     }),
            //     searchFields: ["HH_ID"],
            //     displayField: "HH_ID",
            //     exactMatch: false,
            //     outFields: ["*"],
            //     name: "HandHole",
            //     placeholder: "HH ID",
            //     scale: 1000,
            //     maxResults: 1000,
            //     maxSuggestions: 1000,
            //     enableSuggestions: false,
            // }
            
        ]
        var searchWidget = new Expand({
            content: new Search({
                view: view,
                popupEnabled: true,
                position: "fixed",
                includeDefaultSources: true,
                searchAllEnabled: true,
                sources: [],
            }),
            view: view,
            group: "bottom-right",
            expanded: false
        });
        view.ui.add(searchWidget, "top-right");
        searchWidget.content.sources = source


             //home
            let home = new Home({
                view:view
            });
            view.ui.add(home, 'top-left')


            //layerlist
            let layerlist = new Expand({
                content: new LayerList({
                             view: view,
                             style: "classic", //  styles include 'card' and 'classic'
                             statusIndicatorsVisible: false,
                             listItemCreatedFunction: function (event) {
                                 let item = event.item
                                 if (item.title !== "South Region")
                                     item.panel = {
                                         content: "legend",
                                         open: false
                                     };
                             }
                         }),
                         view: view,
                         group: "bottom-right",
                         expanded: false
            })
            view.ui.add(layerlist,'top-right')


            //basemapGallery
            var galery = new BasemapGallery({
                view: view,
                expanded: false
                
            })
            view.ui.add(galery, "top-right");

            var expandgallery = new Expand({
                view: view,
                content: galery.container,
                expandIconClass: "esri-icon-basemap"
            });
            view.ui.add(expandgallery, "top-right");

    })

    }

    render() {
        return null
        // (
        //     <SouthLayers
        //     map={this.props.map} 
        //     view= {this.props.view}
        //     height = {this.state.height}
        //     />
        // )

    }

}

