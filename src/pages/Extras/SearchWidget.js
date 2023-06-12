import React from 'react'
import { loadModules } from 'react-arcgis'
import TowerNetLayer from './TowerNetLayers';


export default class TowerNetWidget extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            height: this.props.height
        } 
    }

    componentDidMount(){
        let view = this.props.view;
        let map = this.props.map

        loadModules(["esri/widgets/Search", "esri/layers/FeatureLayer",'esri/widgets/Expand',
    ])
    .then(([Search, FeatureLayer,Expand]) =>{

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
            }
        ]
        var searchWidget = new Expand({
            content: new Search({
                view: view,
                popupEnabled: true,
                position: "fixed",
                includeDefaultSources: false,
                searchAllEnabled: false,
                sources: [],
            }),
            view: view,
            group: "bottom-right",
            expanded: false
        });
        view.ui.add(searchWidget, "top-right");
        searchWidget.content.sources = source

    })

    }
    render() {
        return (
            <TowerNetLayer
            map={this.props.map} 
            view= {this.props.view}
            height = {this.state.height}
            />
        )

    }

}