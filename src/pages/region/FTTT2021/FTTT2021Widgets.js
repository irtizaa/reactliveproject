import React from 'react'
import { loadModules } from 'react-arcgis'
// import TowerNetLayer from './TowerNetLayers';


export default class FTTT2021Widget extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            height: this.props.height
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
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/FTTT_2021/MapServer/1",
                    popupTemplate: { // autocasts as new popupTemplate()
                        title: "Cell Sites",
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
                }),
                searchFields: ["SiteName"],
                displayField: "SiteName",
                exactMatch: true,
                outFields: ["*"],
                name: "Cell Sites",
                placeholder: "SiteName",
                scale: 1000,
                maxResults: 6,
                maxSuggestions: 6,
                enableSuggestions: true
                // resultSymbol: {
                //     type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
                //     color: [239, 25, 25],
                //     size: 10,
                //     width: 30,
                //     height: 30,
                //     xoffset: 0,
                //     yoffset: 0
                // }
            },{ 
                layer :  new FeatureLayer({	//MN_Soth_Infra.SDE.MN_LongHaul_Network
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/TP_Light/MapServer/0",
                    popupTemplate: { // autocasts as new popupTemplate()
                        title: "Aggregation",
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
                }),
                searchFields: ["Aggregation_ID"],
                displayField: "Aggregation_ID",
                exactMatch: true,
                outFields: ["*"],    
                name: "Aggregation",
                placeholder: "Aggregation_ID",
                scale: 1000,
                maxResults: 6,
                maxSuggestions: 6,
                enableSuggestions: true
            },{ 
                layer :new FeatureLayer({		//MN_LongHaul_Existing_Network
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/9",
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
            },{
                layer :  new FeatureLayer({			//MN_Soth_Infra.SDE.MN_Cities_Boundary
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/10",
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
                exactMatch: true,
                outFields: ["*"],
                name: "Regions",
                placeholder: "Region Name",
                scale: 1000,
                maxResults: 200,
                maxSuggestions: 200,
                enableSuggestions: true
            }
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
            // let layerlist = new Expand({
            //     content: new LayerList({
            //                  view: view,
            //                  style: "classic", //  styles include 'card' and 'classic'
            //                  statusIndicatorsVisible: false,
            //                  listItemCreatedFunction: function (event) {
            //                      let item = event.item
            //                      if (item.title !== "South Region")
            //                          item.panel = {
            //                              content: "legend",
            //                              open: false
            //                          };
            //                  }
            //              }),
            //              view: view,
            //              group: "bottom-right",
            //              expanded: false
            // })
            // view.ui.add(layerlist,'top-right')

            let layerlist = new Expand({
                content: new LayerList({
                view: view,
                style: "classic", 
                statusIndicatorsVisible: false,
                listItemCreatedFunction: function(event) {
                  const item = event.item;
                  if (item.title !=="South Region") {
                    // don't show legend twice
                    item.panel = {
                      content: "legend",
                      open: false,
                      //expanded: false
                    };
                  }
                }
              }),
              view: view,
                          group: "bottom-right",
                          expanded: false
            });
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
        return (
            null
            // <TowerNetLayer
            // map={this.props.map} 
            // view= {this.props.view}
            // height = {this.state.height}
            // />
        )

    }

}