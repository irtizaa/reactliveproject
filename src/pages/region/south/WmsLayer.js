import { func } from 'mdbreact';
import React from 'react';
import { loadModules } from 'react-arcgis';
// import './metronetwork.css'
import { usePosition } from 'use-position';



export default class WmsLayer extends React.Component {

  componentDidMount() {

    let map = this.props.map;
    let view = this.props.view;

     
        var table = document.createElement("table");
        table.setAttribute("id", "tdata");

        

    loadModules(['esri/widgets/Expand', "esri/layers/GraphicsLayer",
    "esri/layers/WMSLayer",
    "esri/Graphic",
    "esri/geometry/Point",
    "esri/symbols/SimpleMarkerSymbol"
    ])
      .then(([Expand, GraphicsLayer,WMSLayer, Graphic, Point, SimpleMarkerSymbol]) => {  
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

  const layer = new WMSLayer({
    url:"http://103.31.81.202:8080/geoserver/South_MPPL_Active_Circuits/wms",
    params: {'LAYERS': 'South_MPPL_Active_Circuits:mn_customers_evw', 'TILED': false},
    // url: 'https://ahocevar.com/geoserver/wms',
    // params: {'LAYERS': 'topp:states', 'TILED': true},
    serverType: 'geoserver',
  });
  map.add(layer);



 
})

  }

  render() {
    return (
      <div>
      
    
      </div>


    )
  }
}