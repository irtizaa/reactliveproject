import React from 'react'
import { loadModules } from 'react-arcgis'
// import TowerNetLayer from './TowerNetLayers';


export default class ProjectLightWidgets extends React.Component{

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
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Jazz_FTTS/Jazz_FTTS/MapServer/0",
                    popupTemplate: { // autocasts as new popupTemplate()
                        title: "Cell Sites",
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
                                    },{
                                        fieldName: "Aggregation_ID",
                                        label: "Aggregation ID",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Ring_Tag",
                                        label: "Ring Tag",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
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
                                    },{
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
                searchFields: ["Site_ID"],
                displayField: "Site_ID",
                exactMatch: true,
                outFields: ["*"],
                name: "Cell Sites",
                placeholder: "Site ID",
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
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Jazz_FTTS/Jazz_FTTS/MapServer/1",
                    popupTemplate: { // autocasts as new popupTemplate()
                        title: "Aggregation",
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
                                        fieldName: "Region",
                                        label: "Region",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
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
                                    },{
                                        fieldName: "Longitude",
                                        label: "Longitude",
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
                }),
                searchFields: ["Site_ID"],
                displayField: "Site_ID",
                exactMatch: true,
                outFields: ["*"],    
                name: "Aggregation",
                placeholder: "Site_ID",
                scale: 1000,
                maxResults: 6,
                maxSuggestions: 6,
                enableSuggestions: true
            },{
                layer :  new FeatureLayer({			//MN_Soth_Infra.SDE.MN_Cities_Boundary
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Jazz_FTTS/Jazz_FTTS/MapServer/2",
                    popupTemplate: {
                        title: "Proposed Route",
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                    {
                                        fieldName: "Section_Name",
                                        label: "Section Name",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Ring_Tag",
                                        label: "Ring Tag",
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
                                    }, {
                                        fieldName: "Connectivity",
                                        label: "Connectivity",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    },  {
                                        fieldName: "Length_M",
                                        label: "Length_M",
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
                }),
                searchFields: ["Section_Name"],
                displayField: "Section_Name",
                exactMatch: true,
                outFields: ["*"],
                name: "Proposed Route",
                placeholder: "Section Name",
                scale: 1000,
                maxResults: 200,
                maxSuggestions: 200,
                enableSuggestions: true
            },{
                layer :  new FeatureLayer({			//MN_Soth_Infra.SDE.MN_Cities_Boundary
                    url: "http://103.31.82.102:6080/arcgis/rest/services/Jazz_FTTS/Jazz_FTTS/MapServer/3",
                    popupTemplate: {
                        title: "Rings",
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                    {
                                        fieldName: "Ring_Tag",
                                        label: "Ring Tag",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Cell_Sites_Count",
                                        label: "Cell Sites Count",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Aggregation_Sites_Count",
                                        label: "Aggregation Sites Count",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "Total_Sites_Count",
                                        label: "Total Sites Count",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "OFC_ON_Net",
                                        label: "OFC ON Net",
                                        visible: true,
                                        formate: {
                                            digitSeperate: true,
                                            places: 0
                                        }
                                    }, {
                                        fieldName: "OFC_OFF_Net",
                                        label: "OFC OFF Net",
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
                                    }
                                ]
                            }
                        ]
                    }
                }),
                searchFields: ["Ring_Tag"],
                displayField: "Ring_Tag",
                exactMatch: true,
                outFields: ["*"],
                name: "Ring",
                placeholder: "Ring Tag",
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