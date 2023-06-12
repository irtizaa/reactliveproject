import React from 'react';
import { loadModules } from 'react-arcgis';
import './metronetwork.css'


export default class MetroNetwork extends React.Component {

  componentDidMount() {

    let map = this.props.map;
    let view = this.props.view;

     
        var table = document.createElement("table");
        table.setAttribute("id", "tdata");

    loadModules(["esri/layers/FeatureLayer","esri/widgets/Search", "esri/tasks/support/Query", "esri/tasks/QueryTask",
     "esri/layers/GraphicsLayer", "esri/geometry/geometryEngine", "esri/Graphic", 'esri/widgets/Expand', "esri/geometry/Extent"
    ])
      .then(([FeatureLayer, Search, Query, QueryTask, GraphicsLayer, geometryEngine, Graphic, Expand, Extent]) => {  

           view.ui.add(
          [
            new Expand({
              view: view,
              content: document.getElementById("infoDiv4"),
               group:  "top-right",  
              expanded: false,  
              expandIconClass: "fas fa-qrcode", 
            })
          ],
          "top-right"
        );

        var fiberurl =
          "http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/6"; 

        var nodeUrl = 
         "http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/0";          


        let TownBuffer, districtGeometries, queryCustomer, queryDC, selectionToolbar

        var ring = document.getElementById("MetroRingId");
        var distanceSlider = document.getElementById("distance");
        var fortyeightCore = document.getElementById("metro-fortyeight-Core");
        var ninghtysixCore = document.getElementById("metro-ninghtysix-Core");
        var twentyfourCore = document.getElementById('metro-twentyfour-Core');
        var twelveCore = document.getElementById('metro-twelve-Core');
        let result = document.getElementById('Metroresults');
        let attribute4 = document.getElementById('attribute4')

        var ringlayer = new FeatureLayer({
          url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/8",
          outFields: ["*"],
          visible: false
        });
        map.add(ringlayer)


        var fiber = new FeatureLayer({
          url: fiberurl,
          outFields: ["*"],
          visible: false
        });
        map.add(fiber)


        let queryFiber = new QueryTask({
          url: fiberurl
        });

        var resultsLayer = new GraphicsLayer({
          listMode: "show"
        });
        map.add(resultsLayer)

        view.ui.add("infoDiv4", "top-right");


        view.when(function () {
          return ringlayer.when(function () {
            var query = ringlayer.createQuery();
            return ringlayer.queryFeatures(query);
          });
        })
          .then(getValues)
          .then(getUniqueValues)
          .then(addToSelect)
          .then(createBuffer);

        function getValues(response) {
          var features = response.features;
          var values = features.map(function (feature) {
            return feature.attributes.Ring_Name;
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
            ring.add(option);

          });

          return setWellsDefinitionExpression(ring.value);
        }

        function setWellsDefinitionExpression(newValue) {
          ringlayer.definitionExpression = "Ring_Name = '" + newValue + "'";

          let queryRing = new Query({
            returnGeometry: true,
            outSpatialReference: { wkid: 4326 },
            where: ringlayer.definitionExpression

          });
          ringlayer.queryFeatures(queryRing).then(function (results) {  
            const features = results.features;  
            view.goTo({
              target: [features[0].geometry],  
              zoom: 12
            });
          })

          if (!ringlayer.visible) {
            ringlayer.visible = true;
          }

          return queryForWellGeometries();
        }

        function queryForWellGeometries() {
          var districtQuery = ringlayer.createQuery();

          return ringlayer.queryFeatures(districtQuery).then(function (response) {
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
                width: 1.5,
                color: [0, 255, 255, 0.5]
              },
              style: "none"
            }
          });
          view.graphics.removeAll();
          view.graphics.add(bufferGraphic);
        }


        ring.addEventListener("change", selectRing)
        
        function selectRing(event){
          let type = event.target.value;
          setWellsDefinitionExpression(type).then(createBuffer);
        }
       
        fortyeightCore.addEventListener("click", function () {
          fortyeightcore().then(displayfortyeightcore)
        });

        ninghtysixCore.addEventListener("click", function () {
          nightysixcore().then(displayquerynightysixcore)
        });

        twentyfourCore.addEventListener("click", function () {
          twentyfourcore().then(displayquerytwentyfourcore)
        });

        twelveCore.addEventListener("click", function () {
          twelvecore().then(displaytwelvecore)
        });

        function fortyeightcore() {
          queryDC = fiber.createQuery();
          queryDC.where = "Core_No= '48 Core' ";
          queryDC.geometry = TownBuffer;
          queryDC.outFields = ["FOC_ID","Name", "Calculated_Length", "Survey_Date", "Core_No","Ring_Name"];
          queryDC.spatialRelationship = "intersects";


          queryFiber.executeForCount(queryDC).then(function (results) {
            result.innerHTML = "No Of Pacthes In <b>48 Core:</b>  " + results;
          });

          queryFiber.execute(queryDC).then(function (response) {

            attribute4.innerHTML = ""

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
            attribute4.appendChild(table);

          });
          view.ui.add('attribute4', "bottom-left")

          return fiber.queryFeatures(queryDC)

        }

        function displayfortyeightcore(results) {
          resultsLayer.removeAll();

          var features = results.features.map(function (graphic) {
            graphic.symbol = {
              type: "simple-line",  // autocasts as new SimpleLineSymbol()
              color: "red",
              width: "2px",
              style: "solid",
              cap: "round"
            };
            return graphic;
          });
          resultsLayer.addMany(features);

        }

        function nightysixcore() {

          queryDC = fiber.createQuery();
          queryDC.where = "Core_No= '96 Core' ";
          queryDC.geometry = TownBuffer;
          queryDC.outFields = ["FOC_ID","Name", "Calculated_Length", "Survey_Date", "Core_No","Ring_Name"];
          queryDC.spatialRelationship = "intersects";


          queryFiber.executeForCount(queryDC).then(function (results) {
            result.innerHTML = "No Of Pacthes In <b>96 Core:</b> " + results;
          });

          queryFiber.execute(queryDC).then(function (response) {

            attribute4.innerHTML = ""

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
            attribute4.appendChild(table);

          });
          view.ui.add('attribute4', "bottom-left")

          return fiber.queryFeatures(queryDC)

        }

        function displayquerynightysixcore(results){
          resultsLayer.removeAll();
            
          var features = results.features.map(function (graphic) {
            graphic.symbol = {
              type: "simple-line",  // autocasts as new SimpleLineSymbol()
              color: "red",
              width: "2px",
              style: "solid",
              cap: "round"
            };
            return graphic;
          });

          resultsLayer.addMany(features);
        }

        function twentyfourcore() {

          queryDC = fiber.createQuery();
          queryDC.where = "Core_No= '24 Core' ";
          queryDC.geometry = TownBuffer;
          queryDC.outFields = ["FOC_ID","Name", "Calculated_Length", "Survey_Date", "Core_No","Ring_Name"];
          queryDC.spatialRelationship = "intersects";


          queryFiber.executeForCount(queryDC).then(function (results) {
            result.innerHTML = "No Of Pacthes In <b>24 Core:</b>  " + results;
          });

          queryFiber.execute(queryDC).then(function (response) {

            attribute4.innerHTML = ""

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
            attribute4.appendChild(table);

          });
          view.ui.add('attribute4', "bottom-left")

          return fiber.queryFeatures(queryDC)

        }

        function displayquerytwentyfourcore(results){
          resultsLayer.removeAll();
          var features = results.features.map(function (graphic) {
            graphic.symbol = {
              type: "simple-line",  // autocasts as new SimpleLineSymbol()
              color: "red",
              width: "2px",
              style: "solid",
              cap: "round"
            };
            return graphic;
          });
          resultsLayer.addMany(features);
        }

        function twelvecore() {

          queryDC = fiber.createQuery();
          queryDC.where = "Core_No= '12 Core' ";
          queryDC.geometry = TownBuffer;
          queryDC.outFields = ["FOC_ID","Name", "Calculated_Length", "Survey_Date", "Core_No","Ring_Name"];
          queryDC.spatialRelationship = "intersects";


          queryFiber.executeForCount(queryDC).then(function (results) {
            result.innerHTML = "No Of Pacthes In <b>12 Core</b>: " + results;
          });

          queryFiber.execute(queryDC).then(function (response) {

            attribute4.innerHTML = ""

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
            attribute4.appendChild(table);

          });
          view.ui.add('attribute4', "bottom-left")

          return fiber.queryFeatures(queryDC)

        }

        function displaytwelvecore(results){
          resultsLayer.removeAll();
          var features = results.features.map(function (graphic) {
            graphic.symbol = {
              type: "simple-line",  // autocasts as new SimpleLineSymbol()
              color: "red",
              width: "2px",
              style: "solid",
              cap: "round"
            };
            return graphic;
          });
          resultsLayer.addMany(features);
        }

        let clear = document.getElementById('metro-clear');
        clear.addEventListener('click', () => {
          return result.innerHTML = " ",
            attribute4.innerHTML = " ",
            resultsLayer.removeAll();
        })

        window.$("[id$=myButtonControlID]").click(function (e) {
          window.open('data:application/vnd.ms-excel,' + encodeURIComponent(window.$('div[id$=attribute4]').html()));
          e.preventDefault();
      });
      
      })
      
    //console.log(array)
  }

  render() {
    return (
      <div>
        <div id="infoDiv4">
          <b style = {{flex:1, textAlign: 'center'}}>Metro Network Analysis</b>
          <br/>
          <strong>Select Ring Name</strong>
          <select id="MetroRingId">
            <option id = 'selectoption' value=" ">...Uselect Result...</option>
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
          <strong>Click Target Feature</strong>
          <div id="buttons">
            <button id="metro-fortyeight-Core"><i className="fas fa-columns"></i>48 Core</button> <br />
            <button id="metro-ninghtysix-Core"><i className="fas fa-columns"></i>96 Core</button> <br />
           
          </div>

          <div id="buttons">
            <button id="metro-twentyfour-Core"><i className="fas fa-columns"></i> 24 Core</button> <br />
            <button id="metro-twelve-Core"><i className="fas fa-columns"></i> 12 Core</button> <br />
          </div><br />
       
          <button id="metro-clear">Clear Selection of Target Core</button> <br />

          <div>
            <div id="Metroresults"> </div><br />
            <button id="myButtonControlID">Export to Excel</button>   
          </div>
          
 

        </div>

 
          <div id="attribute4" />
        
    
      </div>


    )
  }
}