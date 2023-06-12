import React from 'react';
import { loadModules } from 'react-arcgis';
import Axios from 'axios';
var GeoJSON = require('geojson');


export default class Query extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            customer: [],
            loading: true
        }
    }


      componentDidMount(){

     /*    await Axios.get("http://172.16.6.163:5000")
            .then(response => {
                this.setState({
                    loading: false,
                    customer: response.data
                })
                console.log(this.state.customer)
            })
          */
        let map = this.props.map;
        let view = this.props.view;

        loadModules(["esri/tasks/support/Query", "esri/tasks/QueryTask", "esri/layers/FeatureLayer", 'esri/widgets/Expand', "esri/layers/GraphicsLayer", "esri/geometry/geometryEngine",
            "esri/Graphic", "esri/geometry/support/webMercatorUtils", "esri/layers/GeoJSONLayer"
        ])
            .then(([Query, QueryTask, FeatureLayer, Expand, GraphicsLayer, geometryEngine, Graphic, webMercatorUtils, GeoJSONLayer]) => {
              
/* 
        let geojson = GeoJSON.parse(this.state.customer, { Point: ['lat', 'lng'], include: ['Name', 'FAT', 'DC'] });
        console.log(geojson)*/
            
                const template = {
                    title: "Customer {Customer_Name}",
                    // content: "Magnitude {Customer_Name}",
                   content : [
                       {
                    type: "fields",
                    fieldInfos: [
                        {
                            fieldName: "ComplaintStatus",
                            label:"Status",
                            visible: true,
                            // format: {
                            //     dateFormat: "short-date-short-time"
                            // }
                        }
                    ]
                }
                    ]
                };

                const renderer = {
                    type: "simple",
                    field: "DC",
                    symbol: {
                        type: "simple-marker",
                        color: "orange",
                        outline: {
                            color: "white"
                        }
                    },
                    visualVariables: [
                        {
                            type: "size",
                            field: "DC",
                            stops: [
                                {
                                    value: 2.5,
                                    size: "4px"
                                },
                                {
                                    value: 8,
                                    size: "40px"
                                }
                            ]
                        }
                    ]
                };

            // const geojsonLayer = new GeoJSONLayer({
            //     url: "http://103.31.82.102:1000/",
            //     //copyright: "USGS Earthquakes",
            //     popupTemplate: template,
            //     renderer: renderer //optional
            // })
            // map.add(geojsonLayer) 

        view.ui.add(
            [
                new Expand({
                    view: view,
                    content: document.getElementById("infoDiv2"),
                    group:  "top-right",
                    expanded: false,
                    expandIconClass: "fas fa-table" 
                })
            ],
            "top-right"
        );

        let OdbfromPOP = document.getElementById('odb-type');
        var attribute2 = document.getElementById("attribute2");
        let result = document.getElementById('results')
        
        const ODBRenderer = {
            type: "simple", // autocasts as new SimpleRenderer()
            symbol: {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                size: 6,
                color: [0, 255, 255],
                outline: null
            }
        };
/* 
        const FiberRenderer = {
            type: "simple", // autocasts as new SimpleRenderer()
            symbol: {
                type: "simple-line", // autocasts as new SimpleLineSymbol()
                width: "2px",
                color: [0, 255, 255],
                outline: null
            }
        };
*/

        // *********** ODB Query ***************
            let queryodb;
            let odburl = "http://103.31.82.102:6080/arcgis/rest/services/Projects/CentralRegion/MapServer/0";
            
            let ODB = new FeatureLayer({
                url: odburl,
                title: 'ODB/DC',
                renderer: ODBRenderer,
                listMode: "hide",
            })
            map.add(ODB)

            let queryTask = new QueryTask({
                url: odburl
            });


            var resultsLayer = new GraphicsLayer({
                listMode: "hide"
            });
            map.add(resultsLayer)

            view.when(() => {
                return ODB.when(function () {
                    var query = ODB.createQuery();
                    return ODB.queryFeatures(query);
                })

            })
            .then(getValues)
            .then(getUniqueValues)
            .then(addToSelect)

            function getValues(response) {
                var features = response.features;
                var values = features.map((feature, index) => {
                    return feature.attributes.Node_Name;
                });
                return values;
            }

            function getUniqueValues(values) {
                var uniqueValues = [];

                values.map((item, i) => {
                    if (
                        (uniqueValues.length < 1 || uniqueValues.indexOf(item) === -1) &&
                        item !== ""
                    ) {
                        uniqueValues.push(item);
                    }
                });
                return uniqueValues;
            }

            function addToSelect(values) {
                values.sort();
                values.map((value, index) => {
                    var option = document.createElement("option");
                    option.text = value;
                    OdbfromPOP.add(option);
                });
                
                return setODBExpression(OdbfromPOP.value);
            }

            function setODBExpression(newValue) {
                
                ODB.definitionExpression = "Node_Name = '" + newValue + "'";

                 queryodb = new Query({
                    returnGeometry: true,
                    outFields: ["Node_Name", "Node_No", "Node_ID", "Building", "Name_2", "Installed_Switches", "No_of_Links"],
                     outSpatialReference: { wkid: 4326 },
                    where: ODB.definitionExpression
                    
                })
                ODB.queryFeatures(queryodb).then(function (results) {
                    const features = results.features;
                    view.goTo({
                        target: [features[0].geometry],
                        zoom: 14
                    });
                })

                queryTask.executeForCount(queryodb).then(function (results) {
                    result.innerHTML = " Selected Nodes : " + results;
                                    
                });
                
            }

            OdbfromPOP.addEventListener("change", function (event) {
                document.getElementById('pop').innerHTML = event.target.value

                let btn = document.getElementById('query-button');    
                    btn.addEventListener('click', () => { 
                        let type = event.target.value;    
                        setODBExpression(type)

                        view.ui.add('attribute2', "bottom-left")   
                       
                    })                
            });
            document.getElementById('table').addEventListener('click', () => {  
                queryTask.execute(queryodb).then(function (response) {

                    queryTask.executeForCount(queryodb).then(function (results) {
                        result.innerHTML = " Selected Nodes : " + results;

                    });  

                    attribute2.innerHTML = ""

                    var table = document.createElement("table");  
                    var header = document.createElement("tr");
                    table.appendChild(header);

                    response.fields.forEach(element => {
                        var column = document.createElement("th");
                        column.textContent = element.alias;
                        header.appendChild(column);
                        //alert(element.fields.alias);
                    });

                    response.features.forEach(res => {
                        var row = document.createElement("tr");
                        table.appendChild(row);


                        response.fields.forEach(e => {
                            //console.log(response.fields[i])    
                            var columns = document.createElement("td");
                            columns.textContent = res.attributes[e.name];
                            row.appendChild(columns);

                        })

                    })
                    attribute2.appendChild(table);

                });
            })
            document.getElementById('cancel').addEventListener('click', () => {
                return attribute2.innerHTML = "",
                    result.innerHTML = "",
                    resultsLayer.removeAll();

            })
            
    })

        window.$("[id$=myButtonControlID]").click(function (e) {
            window.open('data:application/vnd.ms-excel,' + encodeURIComponent(window.$('div[id$=attribute2]').html()));
            e.preventDefault();
        });

}
    render(){
        return (
            <div>
                <div id="infoDiv2">

                    {/* SELECT * FROM Layer WHERE: */}
                    Select Desire Node
                    <div> <strong>Node = <span id="pop"></span></strong></div>
                    <select id="odb-type">
                        <option value = " ">...Unselect Node...</option>
                    </select><br />

                    <div id = 'buttons'>
                        <button id="query-button"> Query</button><br />
                        <button id="table"><i class="fas fa-table"></i></button>
                        <button id="cancel"><i class="fas fa-backspace"></i></button><br />
                    </div><br />
                    
                    <div id="results"></div>
                    <div id="textArea" style={{display:"none"}}></div>
                    <button id="myButtonControlID">Export to Excel</button>         
                </div>
                <div id="attribute2"></div>
            </div>
        )
    }
}