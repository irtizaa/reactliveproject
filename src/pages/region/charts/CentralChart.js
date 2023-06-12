import React, { Component, Fragment }  from 'react';
import './test.css'
import Chart from "chart.js/dist/Chart.min.js"

const CentralCom = () => ( 

<Fragment>
    <div className="Central1">
    {/* <div style={{paddingTop: '60px',marginLeft:'35%'}}> */}
    <div style={{paddingTop: '12px',marginLeft:'35%'}}>
    <style dangerouslySetInnerHTML={{__html: "\n #Cenchart1 {\n  height: 300px;\n width: 700px;\n  }\n\n html,\n body,\n #viewDiv {\n padding: 0;\n margin: 0;\n height: 100%;\n width: 100%;\n }\n " }} />
      <h6 style={{color: 'dimgray', textAlign: 'center'}}><b>City Wise Infra Network in (Km)</b></h6>
        
      <div id="Cenchart1" />
      <div id="viewDiv" />
    </div>
  </div>


  <div className="Central2">
    {/* <div style={{paddingTop: '60px',marginLeft:'5%'}}> */}
    <div style={{paddingTop:'5%',marginLeft:'5%'}}>
     
    <style dangerouslySetInnerHTML={{__html: "\n #Cenchart2 {\n  height: 300px;\n width: 450px;\n  }\n\n html,\n body,\n #viewDiv {\n padding: 0;\n margin: 0;\n height: 100%;\n width: 100%;\n }\n " }} />
      <h6 style={{color: 'dimgray', textAlign: 'center'}}><b>City Wise Infra Network in (Km)</b></h6>
        
      <div id="Cenchart2" />
      <div id="viewDiv" />
    </div>
  </div>

  <div className="Central3">
    <div style={{paddingTop:'5%'}}>
    {/* <div style={{paddingTop: '60px',marginLeft:'5%'}}> */}
    <div >
     
    <style dangerouslySetInnerHTML={{__html: "\n #Cenchart3 {\n  height: 300px;\n width: 500px;\n  }\n\n html,\n body,\n #viewDiv {\n padding: 0;\n margin: 0;\n height: 100%;\n width: 100%;\n }\n " }} />
      <h6 style={{color: 'dimgray', textAlign: 'center'}}><b>City Wise Infra Network in (Km)</b></h6>
        
      <div id="Cenchart3" />
      <div id="viewDiv" />
    </div>
    </div>
  </div>


  {/* </div> */}

  
  </Fragment>
  
 );

export default CentralCom;