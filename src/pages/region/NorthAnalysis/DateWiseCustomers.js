import React from 'react';
import { loadModules } from 'react-arcgis';
import './datewidget.css'


export default class DateWiseCustomer extends React.Component {

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
              content: document.getElementById("infoDiv7"),
               group: "top-right",
              expanded: false,
              expandIconClass: "far fa-calendar-alt",
            })
          ],
          "top-right"
        );

        var fiber =
        "http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/1"


    let TownBuffer, boundaryGeometries, querytotal, fibergeometry

    var boundary = document.getElementById("Select_Ring01");
    let crimedrop1 = document.getElementById("dates01");
    let crimedrop2 = document.getElementById("dates02");
    let queryButton = document.getElementById("Customer-query-button");
    var distanceSlider = document.getElementById("distance");
    let result = document.getElementById("total");
    let attribute7 = document.getElementById('attribute7')
    
    let fiberResult = document.getElementById('fiberRslt')

     var table = document.createElement("table");
    table.setAttribute("id", "tdata"); 

    var Ring = new FeatureLayer({
          url: "http://103.31.82.102:6080/arcgis/rest/services/Projects/NorthRegion/MapServer/8",
        outFields: ["*"],
        visible: true
    });
    map.add(Ring)

    var FiberLayer = new FeatureLayer({
        url: fiber,
        outFields: ["*"],
        visible: false,
        popupTemplate:{
            title: "Sites",
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
                }, {
                    fieldName: "Deployment_Date",
                    label: "Deployment_Date",
                    visible: true,
                    format: {
                        digitSeparator: true,
                        places: 0
                    }
                }, {
                    fieldName: "Survey_Date",
                    label: "Survey_Date",
                    visible: true,
                    format: {
                        digitSeparator: true,
                        places: 0
                    }
                }
                    , {
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
    });
    map.add(FiberLayer)

    let FiberqueryTask = new QueryTask({
        url: fiber
    });


    var resultsLayer = new GraphicsLayer({
        listMode: "hide"
    });
    map.add(resultsLayer)

     view.when(function () {
        return Ring.when(function () {
            var query = Ring.createQuery();
            return Ring.queryFeatures(query);
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
            boundary.add(option);

        });

        return setWellsDefinitionExpression(boundary.value);
    }

      function setWellsDefinitionExpression(newValue) {
        Ring.definitionExpression = "Ring_Name = '" + newValue + "'";

        let queryodb = new Query({
            returnGeometry: true,
            outSpatialReference: { wkid: 4326 },
            where: Ring.definitionExpression

        });
        Ring.queryFeatures(queryodb).then(function (results) {
            const features = results.features;
            view.goTo({
                target: [features[0].geometry],
                zoom: 12
            });
        })

        if (!Ring.visible) {
            Ring.visible = true;
        }

        return queryForWellGeometries();
    }

      function queryForWellGeometries() {
        var boundaryQuery = Ring.createQuery();

        return Ring.queryFeatures(boundaryQuery).then(function (response) {
           boundaryGeometries = response.features.map(function (feature) {
                return feature.geometry;
            });

            return boundaryGeometries;
        });
    }

     function createBuffer(Points) {
        var bufferDistance = parseInt(distanceSlider.value);
        var boundaryBuffer = geometryEngine.geodesicBuffer(
            Points,
            [bufferDistance],
            "meters",
            true
        );
        TownBuffer = boundaryBuffer[0];

        // add the buffer to the view as a graphic
        var bufferGraphic = new Graphic({
            geometry: TownBuffer,
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 2.5,
                    color: [0, 255, 255, 0.5]
                },
                style: "none"
            }
        });
        view.graphics.removeAll();
        view.graphics.add(bufferGraphic);
    }

     boundary.addEventListener("change", function (event) {
        let type = event.target.value;
        setWellsDefinitionExpression(type).then(createBuffer);

    });

       queryButton.addEventListener("click", function(){
      //   total().then(displayTotal)
        total().then(displayFiber)
        resultsLayer.removeAll()
    })
    
  //   fiberResult.addEventListener("click",function(){ 
  //     total().then(displayFiber) 
  //       resultsLayer.removeAll() 
  //  }) 

 function total(){

    querytotal = new Query({
        returnGeometry: true,
        geometry: TownBuffer,
        outFields: ["Signup_ID","Customer_Name","Node_Name", "Vendor","City"],
        where: "Deployment_Date BETWEEN  (DATE' " + crimedrop1.value + "') AND (DATE' " + crimedrop2.value + "') ",
        spatialRelationship: "intersects"
        //dateFormat:'DD/MM/Y'
        // dateFormat: "short-date-short-time"
    });

    FiberqueryTask.executeForCount(querytotal).then(function (results) {    
        result.innerHTML = " Total:  " + results;    
        });
    
    // Attribute Table
      FiberqueryTask.execute(querytotal).then(function (response) {  

        attribute7.innerHTML = ""  

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
        attribute7.appendChild(table);

      });
      view.ui.add('attribute7', "bottom-left")

      return FiberLayer.queryFeatures(querytotal)
    }

     function displayTotal(results){
        resultsLayer.removeAll();

        var features = results.features.map(function (graphic) {
            graphic.symbol = {
                type: "simple-line-height",
                size: 5,
                color: [0, 255, 255],
                outline: null 
            };

            return graphic;
        });

        resultsLayer.addMany(features);
    }
        //Display FiberLayer
        function displayFiber(results){
        resultsLayer.removeAll();
        

        var features = results.features.map(function (graphic) {
            graphic.symbol = {
                type: "simple-marker",
                color: "aqua",
                width: "2px",
                style: "solid",
                cap: "round"
            };

            return graphic;
        });

        resultsLayer.addMany(features);
    }

     let unselect = document.getElementById('unselect01');
    unselect.addEventListener('click', () => {
    return result.innerHTML = " ",
        attribute7.innerHTML = " ",       
        resultsLayer.removeAll();
})
      
      })
      window.$("[id$=myButtonControlID]").click(function (e) {
        window.open('data:application/vnd.ms-excel,' + encodeURIComponent(window.$('div[id$=attribute7]').html()));
        e.preventDefault();
    });
      
    //console.log(array)
  }

  render() {
    return (
      <div>
        
        <div id="infoDiv7">
      <b>  Select Ring</b>
        <select id="Select_Ring01">
            <option value=" ">...Uselect Result...</option>
        </select>
		
		
		<br />

        Start Date<input type="date"  id="dates01" /><br />
        End Date<input type="date"  id="dates02" /><br />

        <input
            id="distance"
            type="range"
            min="0"
            max="0"
            step="5"
            value="100"
        />

        <div id="buttons">
            <button id="Customer-query-button">Apply Query For Customers</button><br />
            <button id="unselect01">Cancel Query</button>
        </div><br />

        <div>
            <div id="results7">
                <div id="total"></div>
                
            </div>
            
        </div>             


    </div>
    <div id="attribute7">
      </div>
      </div>


    )
  }
}