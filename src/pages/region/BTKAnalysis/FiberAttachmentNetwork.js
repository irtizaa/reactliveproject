import React from 'react';
import { loadModules } from 'react-arcgis';
import './metronetwork.css'


export default class FiberAttachment extends React.Component {

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
              content: document.getElementById("infoDiv5"),
               group:  "top-right",
              expanded: false,
              expandIconClass: "fas fa-globe",
            })
          ],
          "top-right"
        );

        var fiberAttachurl =
          "http://103.31.82.102:6080/arcgis/rest/services/Projects/BahriaTown/MapServer/6";

        var nodeUrl = 
         "http://103.31.82.102:6080/arcgis/rest/services/Projects/SouthRegion/MapServer/0";

          


        let TownBuffer, districtGeometries, queryCustomer, queryFAttachment, selectionToolbar

        var ring = document.getElementById("RingId");
        var distanceSlider = document.getElementById("distance");
        var fortyeightCore = document.getElementById("fortyeight-Core");
        var ninghtysixCore = document.getElementById("ninghtysix-Core");
        var twentyfourCore = document.getElementById('twentyfour-Core');
        var twelveCore = document.getElementById('twelve-Core');
        let result = document.getElementById('FAresults');
        let attribute5 = document.getElementById('attribute5')

        var ringlayer = new FeatureLayer({
          url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/BahriaTown/MapServer/10",
          outFields: ["*"],
          visible: false
        });
        map.add(ringlayer)


        var fiber = new FeatureLayer({
          url: fiberAttachurl,
          outFields: ["*"],
          visible: false
        });
        map.add(fiber)


        let queryFA = new QueryTask({
          url: fiberAttachurl
        });

        var resultsLayer = new GraphicsLayer({
          listMode: "show"
        });
        map.add(resultsLayer)

        view.ui.add("infoDiv5", "bottom-left");


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
            return feature.attributes.Phase_Number;
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
          ringlayer.definitionExpression = "Phase_Number = '" + newValue + "'";

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

        // ninghtysixCore.addEventListener("click", function () {
        //   nightysixcore().then(displayquerynightysixcore)
        // });

        // twentyfourCore.addEventListener("click", function () {
        //   twentyfourcore().then(displayquerytwentyfourcore)
        // });

        twelveCore.addEventListener("click", function () {
          twelvecore().then(displaytwelvecore)
        });

        function fortyeightcore() {   
          queryFAttachment = fiber.createQuery();  
          queryFAttachment.where = "Core_No= '2 Core' ";
          queryFAttachment.geometry = TownBuffer;
          queryFAttachment.outFields = ["FA_ID","CalculatedLength", "Core_No","FDT_ID"];  
          queryFAttachment.spatialRelationship = "intersects";


          queryFA.executeForCount(queryFAttachment).then(function (results) {
            result.innerHTML = "No Of Pacthes In <b>48 Core : </b>" + results;
          });

          queryFA.execute(queryFAttachment).then(function (response) {

            attribute5.innerHTML = ""

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
            attribute5.appendChild(table);

          });
          view.ui.add('attribute5', "bottom-left")

          return fiber.queryFeatures(queryFAttachment)

        }

        function displayfortyeightcore(results) {
          resultsLayer.removeAll();

          var features = results.features.map(function (graphic) {
            graphic.symbol = {
              type: "simple-line",  // autocasts as new SimpleLineSymbol()
              color:"blue",
              width: "2px",
              style: "solid",
              cap: "round"
            };
            return graphic;
          });
          resultsLayer.addMany(features);

        }

        function nightysixcore() {

          queryFAttachment = fiber.createQuery();
          queryFAttachment.where = "Core_No= '96 Core' ";
          queryFAttachment.geometry = TownBuffer;
          queryFAttachment.outFields = ["FA_ID","CalculatedLength", "Core_No","FDT_ID"];  
          queryFAttachment.spatialRelationship = "intersects";


          queryFA.executeForCount(queryFAttachment).then(function (results) {
            result.innerHTML = "No Of Pacthes In <b> 96 Core : </b>" + results;
          });

          queryFA.execute(queryFAttachment).then(function (response) {

            attribute5.innerHTML = ""

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
            attribute5.appendChild(table);

          });
          view.ui.add('attribute5', "bottom-left")

          return fiber.queryFeatures(queryFAttachment)

        }

        function displayquerynightysixcore(results){
          resultsLayer.removeAll();
            
          var features = results.features.map(function (graphic) {
            graphic.symbol = {
              type: "simple-line",  // autocasts as new SimpleLineSymbol()
              color: "blue",
              width: "2px",
              style: "solid",
              cap: "round"
            };
            return graphic;
          });

          resultsLayer.addMany(features);
        }

        function twentyfourcore() {

          queryFAttachment = fiber.createQuery();
          queryFAttachment.where = "Core_No= '24 Core' ";
          queryFAttachment.geometry = TownBuffer;
          queryFAttachment.outFields = ["FA_ID","CalculatedLength", "Core_No","FDT_ID"];  
          queryFAttachment.spatialRelationship = "intersects";


          queryFA.executeForCount(queryFAttachment).then(function (results) {
            result.innerHTML = "No Of Pacthes In <b> 24 Core : </b>" + results;
          });

          queryFA.execute(queryFAttachment).then(function (response) {

            attribute5.innerHTML = ""

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
            attribute5.appendChild(table);

          });
          view.ui.add('attribute5', "bottom-left")

          return fiber.queryFeatures(queryFAttachment)

        }

        function displayquerytwentyfourcore(results){
          resultsLayer.removeAll();
          var features = results.features.map(function (graphic) {
            graphic.symbol = {
              type: "simple-line",  // autocasts as new SimpleLineSymbol()
              color: "blue",
              width: "2px",
              style: "solid",
              cap: "round"
            };
            return graphic;
          });
          resultsLayer.addMany(features);
        }

        function twelvecore() {

          queryFAttachment = fiber.createQuery();
          queryFAttachment.where = "Core_No= '12 Core' ";
          queryFAttachment.geometry = TownBuffer;
          queryFAttachment.outFields = ["FA_ID","CalculatedLength", "Core_No","FDT_ID"];  
          queryFAttachment.spatialRelationship = "intersects";


          queryFA.executeForCount(queryFAttachment).then(function (results) {
            result.innerHTML = "No Of Pacthes In <b> 12 Core : </b>" + results;
          });

          queryFA.execute(queryFAttachment).then(function (response) {

            attribute5.innerHTML = ""

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
            attribute5.appendChild(table);

          });
          view.ui.add('attribute5', "bottom-left")

          return fiber.queryFeatures(queryFAttachment)

        }

        function displaytwelvecore(results){
          resultsLayer.removeAll();
          var features = results.features.map(function (graphic) {
            graphic.symbol = {
              type: "simple-line",  // autocasts as new SimpleLineSymbol()
              color: "blue",
              width: "2px",
              style: "solid",
              cap: "round"
            };
            return graphic;
          });
          resultsLayer.addMany(features);
        }

        let clear = document.getElementById('clear');
        clear.addEventListener('click', () => {
          return result.innerHTML = " ",
            attribute5.innerHTML = " ",
            resultsLayer.removeAll();
        })

        window.$("[id$=myButtonControlID]").click(function (e) {
          window.open('data:application/vnd.ms-excel,' + encodeURIComponent(window.$('div[id$=attribute5]').html()));
          e.preventDefault();
      });
      
      })
      
    //console.log(array)
  }

  render() {
    return (
      <div>
        <div id="infoDiv5">
          <b style = {{flex:1, textAlign: 'center'}}>FiberAttachment Network Analysis</b>
          <br/>
          <strong>Select Ring Name</strong>
          <select id="RingId">
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
            <button id="fortyeight-Core"><i className="fas fa-columns"></i>2 Core</button> <br />
            <button id="twelve-Core"><i className="fas fa-columns"></i> 12 Core</button> <br />

           
          </div>

          {/* <div id="buttons">
          <button id="ninghtysix-Core"><i className="fas fa-columns"></i>96 Core</button> <br />
            <button id="twelve-Core"><i className="fas fa-columns"></i> 12 Core</button> <br />
          </div><br /> */}
          <br /> 
          <button id="clear">Clear Selection of Target Core</button> <br />

          <div>
            <div id="FAresults"> </div><br />
            <button id="myButtonControlID">Export to Excel</button>   
          </div>
          
 

        </div>

 
          <div id="attribute5" />
        
    
      </div>


    )
  }
}