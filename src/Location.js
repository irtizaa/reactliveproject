import { func } from 'mdbreact';
import React from 'react';
import { loadModules } from 'react-arcgis';
// import './metronetwork.css'
import { usePosition } from 'use-position';



export default class CustomerNetwork extends React.Component {

  componentDidMount() {

    let map = this.props.map;
    let view = this.props.view;

     
        var table = document.createElement("table");
        table.setAttribute("id", "tdata");

        

    loadModules(['esri/widgets/Expand', "esri/layers/GraphicsLayer",
    "esri/Graphic",
    "esri/geometry/Point",
    "esri/symbols/SimpleMarkerSymbol"
    ])
      .then(([Expand, GraphicsLayer, Graphic, Point, SimpleMarkerSymbol]) => {  
        let centerLat;

        let curnt;

           view.ui.add(
          [
            new Expand({
              view: view,
              content: document.getElementById("infoDiv8"),
               group:  "top-right",  
              expanded: false,  
              expandIconClass: "fas fa-qrcode", 
            })
          ],
          "top-right"
        );



  // Create a new graphics layer to display the user's location
  const graphicsLayer = new GraphicsLayer();

  // Add the graphics layer to the map
  map.add(graphicsLayer);



  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { longitude, latitude } = position.coords;

      // Create a new point geometry at the user's current location
      const point = new Point({
        longitude,
        latitude
      });

      // Create a new simple marker symbol to display the user's location
      const symbol = new SimpleMarkerSymbol({
        color: [226, 119, 40],
        outline: {
          color: [255, 255, 255],
          width: 1
        }
      });

      // Create a new graphic with the point geometry and simple marker symbol
      const graphic = new Graphic({
        geometry: point,
        symbol
      });

      // Add the graphic to the graphics layer
      graphicsLayer.add(graphic);

      console.log(point.latitude,"Point")
      console.log(point.longitude,"Point")
      // Set the view to center on the user's location
      view.goTo({
        target: point,
        zoom: 15
      });
    });
  }
})

  }

  render() {
    return (
      <div>
      
    
      </div>


    )
  }
}