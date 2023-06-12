import React, { Component, Fragment }  from 'react';
import './test.css'
import Chart from "chart.js/dist/Chart.min.js"

const BTKCom = () => ( 

<Fragment>

<div className="Btk1">
    {/* <div style={{paddingTop: '60px'}}> */}
    <div>
     
      <style dangerouslySetInnerHTML={{__html: "\n #Btkchart1 {\n  height: 300px;\n width: 480px;\n  }\n\n html,\n body,\n #viewDiv {\n padding: 0;\n margin: 0;\n height: 100%;\n width: 100%;\n }\n " }} />
      <h6 style={{color: 'dimgray', textAlign: 'center'}}><b>Core Wise Network</b></h6>
        
      <div id="Btkchart1" />
      <div id="viewDiv" />
    </div>
  </div>

  <div className="Btk2">
    {/* <div style={{paddingTop: '60px'}}> */}
    <div>
     
      <style dangerouslySetInnerHTML={{__html: "\n #Btkchart2 {\n  height: 300px;\n width: 580px;\n  }\n\n html,\n body,\n #viewDiv {\n padding: 0;\n margin: 0;\n height: 100%;\n width: 100%;\n }\n " }} />
      <h6 style={{color: 'dimgray', textAlign: 'center'}}><b>Precinct Wise Network</b></h6>
        
      <div id="Btkchart2" />
      <div id="viewDiv" />
    </div>
  </div>

  <div className="Btk3">
    {/* <div style={{paddingTop: '60px'}}> */}
    <div>
     
      <style dangerouslySetInnerHTML={{__html: "\n #Btkchart3 {\n  height: 300px;\n width: 580px;\n  }\n\n html,\n body,\n #viewDiv {\n padding: 0;\n margin: 0;\n height: 100%;\n width: 100%;\n }\n " }} />
      <h6 style={{color: 'dimgray', textAlign: 'center'}}><b>Precinct Wise Network</b></h6>
        
      <div id="Btkchart3" />
      <div id="viewDiv" />
    </div>
  </div>

  <div className="Btk4">
    {/* <div style={{paddingTop: '60px'}}> */}
    <div>
     
      <style dangerouslySetInnerHTML={{__html: "\n #Btkchart4 {\n  height: 300px;\n width: 580px;\n  }\n\n html,\n body,\n #viewDiv {\n padding: 0;\n margin: 0;\n height: 100%;\n width: 100%;\n }\n " }} />
      <h6 style={{color: 'dimgray', textAlign: 'center'}}><b>Precinct Wise Network</b></h6>
        
      <div id="Btkchart4" />
      <div id="viewDiv" />
    </div>
  </div>

</Fragment>

)
export default BTKCom;