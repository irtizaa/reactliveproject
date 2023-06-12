import React, { Component, Fragment }  from 'react';
import './test.css'
import Chart from "chart.js/dist/Chart.min.js"

const SouthCom = () => ( 

<Fragment>
    <div className="main1">
    <div style={{paddingTop: '30px'}}>
    {/* <div> */}
     
      <style dangerouslySetInnerHTML={{__html: "\n #chart1 {\n  height: 280px;\n width: 450px;\n  }\n\n html,\n body,\n #viewDiv {\n padding: 0;\n margin: 0;\n height: 100%;\n width: 100%;\n }\n " }} />
      <h6 style={{color: 'dimgray', textAlign: 'center'}}><b>City Wise Infra Network in (Km)</b></h6>
        
      <div id="chart1" />
      <div id="viewDiv" />
    </div>
  </div>

    <div className="main2">
    <div>
     
     
      <style dangerouslySetInnerHTML={{__html: "\n #chart2 {\n  height: 280px;\n width: 450px;\n  }\n\n html,\n body,\n #viewDiv {\n padding: 0;\n margin: 0;\n height: 100%;\n width: 100%;\n }\n " }} />
      <h6 style={{color: 'dimgray', textAlign: 'center'}}><b>City Wise Longhaul Network</b></h6>
        
      <div id="chart2" />
      <div id="viewDiv" />
    </div>
  </div>

  <div className="main3">
        
     
      <style dangerouslySetInnerHTML={{__html: "\n #chart3 {\n  height: 280px;\n width: 550px;\n  }\n\n html,\n body,\n #viewDiv {\n padding: 0;\n margin: 0;\n height: 100%;\n width: 100%;\n }\n " }} />
      <h6 style={{color: 'dimgray', textAlign: 'center'}}><b>Core Wise Network</b></h6>
        
      <div id="chart3" />
      <div id="viewDiv" />
    </div>


  <div className="main4">
    <div style={{paddingTop: '30px'}}>
     
     
      <style dangerouslySetInnerHTML={{__html: "\n #chart4 {\n  height: 280px;\n width: 450px;\n  }\n\n html,\n body,\n #viewDiv {\n padding: 0;\n margin: 0;\n height: 100%;\n width: 100%;\n }\n " }} />
      <h6 style={{color: 'dimgray', textAlign: 'center'}}><b>Node Wise Customers</b></h6>
        
      <div id="chart4" />
      <div id="viewDiv" />
    </div>
    </div>


    <div className="main5">
    {/* <div style={{paddingTop: '30px'}}> */}
     
     
      <style dangerouslySetInnerHTML={{__html: "\n #chart5 {\n  height: 280px;\n width: 415px;\n  }\n\n html,\n body,\n #viewDiv {\n padding: 0;\n margin: 0;\n height: 100%;\n width: 100%;\n }\n " }} />
      <h6 style={{color: 'dimgray', textAlign: 'center'}}><b>South Ring Core Network</b></h6>
        
      <div id="chart5" />
      <div id="viewDiv" />
    </div>


    <div className="main6">
    {/* <div style={{paddingTop: '30px'}}> */}
     
     
      <style dangerouslySetInnerHTML={{__html: "\n #chart6 {\n  height: 280px;\n width: 450px;\n  }\n\n html,\n body,\n #viewDiv {\n padding: 0;\n margin: 0;\n height: 100%;\n width: 100%;\n }\n " }} />
      <h6 style={{color: 'dimgray', textAlign: 'center'}}><b>City Wise Customers</b></h6>
        
      <div id="chart6" />
      <div id="viewDiv" />
    </div>
    
  {/* </div> */}  
  </Fragment>
  
 );

export default SouthCom;