import React from 'react';
import { loadModules } from 'react-arcgis';
import FiberAttachment from './FiberAttachmentNetwork'


export default class SpatialQuery extends React.Component{
    componentDidMount(){
        let map = this.props.map;
        let view = this.props.view;

        loadModules(["esri/layers/FeatureLayer", "esri/tasks/support/Query", "esri/tasks/QueryTask", "esri/layers/GraphicsLayer", 
            "esri/geometry/geometryEngine", "esri/Graphic", 'esri/widgets/Expand', "esri/geometry/Extent"
        ])
        .then(([FeatureLayer, Query, QueryTask, GraphicsLayer, geometryEngine, Graphic, Expand, Extent]) => {

        view.ui.add(
            [
                new Expand({
                    view: view, 
                    content: document.getElementById("infoDiv1"),
                    group: "top-right",
                    expanded: false,
                    expandIconClass: "fas fa-object-group", 
                })
            ],
            "top-right"
        );
        var FDT =
            "http://103.31.82.102:6080/arcgis/rest/services/Projects/BahriaTown/MapServer/5";

        var Customerurl =
            "http://103.31.82.102:6080/arcgis/rest/services/Projects/BahriaTown/MapServer/0";

            let TownBuffer, districtGeometries, queryCustomer, queryNode

        var district = document.getElementById("Town");
        var distanceSlider = document.getElementById("distance");
        var queryNodeButton = document.getElementById("query-DC");
        var querycustomerButton = document.getElementById('query-customer');
        let result = document.getElementById('results1');
        let attribute1 = document.getElementById('attribute1')

        var districtlayer = new FeatureLayer({
            url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/BahriaTown/MapServer/9",
            outFields: ["*"],
            visible: false,
            listMode: "hide"
        });
        map.add(districtlayer)

     
        var Node = new FeatureLayer({              
            url: FDT,
            outFields: ["*"],
            visible: false,
            listMode: "hide"
        });
        map.add(Node)

        var customer = new FeatureLayer({
            url: Customerurl,
            outFields: ["*"],
            visible: false,
            // listMode: "hide"
        });
        map.add(customer)

        let queryTaskNode = new QueryTask({
            url: FDT
        });

        let queryTaskcustomer = new QueryTask({
            url: Customerurl
        });

        var resultsLayer = new GraphicsLayer({
            listMode: "hide"
        });
        map.add(resultsLayer)

        view.ui.add("infoDiv1", "top-left");
        

        view.when(function () {
            return districtlayer.when(function () {
                var query = districtlayer.createQuery();
                return districtlayer.queryFeatures(query);
            });
        })
        .then(getValues)
        .then(getUniqueValues)
        .then(addToSelect)
        .then(createBuffer);

        function getValues(response) {
            var features = response.features;
            var values = features.map(function (feature) {
                return feature.attributes.Pre_No;
            });
            return values;
        }

        function getUniqueValues(values) {
            var uniqueValues = [];

            values.forEach(function (item, i) {
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
                district.add(option);

            });

            return setWellsDefinitionExpression(district.value);
        }

        function setWellsDefinitionExpression(newValue) {
            districtlayer.definitionExpression = "Pre_No = '" + newValue + "'";

            let queryodb = new Query({
                returnGeometry: true,
                outSpatialReference: { wkid: 4326 },
                where: districtlayer.definitionExpression

            });
            districtlayer.queryFeatures(queryodb).then(function (results) {
                const features = results.features;
                view.goTo({
                    target: [features[0].geometry],
                    zoom: 13
                });
            })

            if (!districtlayer.visible) {
                districtlayer.visible = true;
            }
            
            return queryForWellGeometries();
        }

        function queryForWellGeometries() {
            var districtQuery = districtlayer.createQuery();

            return districtlayer.queryFeatures(districtQuery).then(function (response) {
                districtGeometries = response.features.map(function (feature) {
                    return feature.geometry;
                });

                return districtGeometries;
            });
        }

        function createBuffer(Points) {
            var bufferDistance = parseInt(distanceSlider.value);
            var districtBuffer = geometryEngine.geodesicBuffer(
                Points,
                [bufferDistance],
                "meters",
                true
            );
            TownBuffer = districtBuffer[0];

            // add the buffer to the view as a graphic
            var bufferGraphic = new Graphic({
                geometry: TownBuffer,
                symbol: {
                    type: "simple-fill", // autocasts as new SimpleFillSymbol()
                    outline: {
                        width: 3.5,
                        color: [0, 255, 255, 0.5]
                    },
                    style: "none"
                }
            });
            view.graphics.removeAll();
            view.graphics.add(bufferGraphic);
        }


        district.addEventListener("change", function (event) {
            let type = event.target.value;
            setWellsDefinitionExpression(type).then(createBuffer);
            
        });

        queryNodeButton.addEventListener("click", function () {
            queryNodetotal().then(displayDCstotal);
        });

        querycustomerButton.addEventListener("click", function () {
            queryCustomertotal().then(displayCustomertotal);
        });
        

        function queryNodetotal() {
            queryNode= Node.createQuery();
            queryNode.where = "1=1 ";
            queryNode.geometry = TownBuffer;
            queryNode.outFields = ["FDT_ID", "Street_Name", "No_Of_Cores", "OLT_Name"];
            queryNode.spatialRelationship = "intersects";


            queryTaskNode.executeForCount(queryNode).then(function (results) {
                result.innerHTML = " Total FDTs are : " + results;

            });

            queryTaskNode.execute(queryNode).then(function (response) {

                attribute1.innerHTML = ""

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
                attribute1.appendChild(table);

            });
 
            view.ui.add('attribute1', "bottom-left")
            

            return Node.queryFeatures(queryNode)

        }

        function displayDCstotal(results) {
            resultsLayer.removeAll();
            var features = results.features.map(function (graphic) {
                graphic.symbol = {
                    type: "simple-marker",
                    size: 5,
                    color: [128,0,0],
                    outline: null
                };
                return graphic;
            });

            /*  var numCrime = features.length;
                document.getElementById("results").innerHTML = " Total Crimes are " + numCrime;*/
            resultsLayer.addMany(features);

            let querytotal = new Query({
                returnGeometry: true,
                geometry: TownBuffer,
                outFields: ["*"],
                where: "1=1 ",
                spatialRelationship: "intersects"
            })

            queryTaskNode.executeForCount(querytotal).then(function (results) {
                result.innerHTML = " Total FDTs are : " + results;
            });
        }

            function queryCustomertotal() {
                queryCustomer = customer.createQuery();
                queryCustomer.where = "1=1 ";
                queryCustomer.outFields = ["Customer_ID","Customer_Name","SP_ID","Precinct_No","Phase_No","Street_Name","Core_Colour","FDT_ID"];
                queryCustomer.geometry = TownBuffer;
                queryCustomer.spatialRelationship = "intersects";  


                queryTaskcustomer.executeForCount(queryCustomer).then(function (results) {
                    result.innerHTML = " Total Customers are : " + results;

                });

                queryTaskcustomer.execute(queryCustomer).then(function (response) {

                    attribute1.innerHTML = ""
    
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
                    attribute1.appendChild(table);

                });
         
                view.ui.add('attribute1', "bottom-left")

                return customer.queryFeatures(queryCustomer)

                

            }

            function displayCustomertotal(results) {
                resultsLayer.removeAll();
                var features = results.features.map(function (graphic) {
                    graphic.symbol = {
                        type: "simple-marker",
                        size: 5,
                        color: [0,191,255],
                        outline: null
                    };
                    return graphic;
                });

                /*  var numCrime = features.length;
                  document.getElementById("results").innerHTML = " Total Crimes are " + numCrime;*/
                resultsLayer.addMany(features);

                let querytotal = new Query({
                    returnGeometry: true,
                    geometry: TownBuffer,
                    outFields: ["*"],
                    where: "1=1 ",
                    spatialRelationship: "intersects"
                })
                
                queryTaskcustomer.executeForCount(querytotal).then(function (results) {
                    result.innerHTML = " Total Customers are : " + results;
                });

            }
        
            let unselect = document.getElementById('unselect');
            unselect.addEventListener('click', () => {
                return result.innerHTML = " ",
                        attribute1.innerHTML = " ",
                        resultsLayer.removeAll();
            })

        })
        window.$("[id$=myButtonControlID]").click(function (e) {
            window.open('data:application/vnd.ms-excel,' + encodeURIComponent(window.$('div[id$=attribute1]').html()));
            e.preventDefault();
        });
    }
    

    render(){
        return (
            <div>
                 
                <div id="infoDiv1">
                <strong >Ring Wise Analysis</strong>
                    <strong>Select Ring</strong>
                    <select id="Town">
                        <option value=" ">...Uselect Result...</option>
                    </select>
                    {/* <button id = 'query-button1'> Town Result</button>  */}
                    <br />
                    <input
                        id="distance"
                        type="range"
                        min="0"
                        max="0"
                        step="5"
                        value="100"
                    />
                    <strong>Click Target layer</strong>
                <div id="buttons">
                        <button id="query-DC"><i className="fas fa-columns"></i>FDT</button> <br />
                        <button id="query-customer"><i className="fas fa-columns"></i>Customer</button> <br />
                    </div><br />
                    <button id="unselect">Clear Selection of Target Layer</button> <br />

                    <div id="results1"></div><br />
                    <button id="myButtonControlID">Export to Excel</button>   

                </div>
                <div id="attribute1"></div>
            </div>
           

        )
    }
}