import React from 'react';
import Mainpage from "./pages/main/Mainpage";
import MainpageCharts from "./pages/main/MainPageCharts";
import MainpageTest from "./pages/main/MainPageTest";
import MainpageTest2 from "./pages/main/MainPageTest02";
import SouthRegion from './pages/region/south/SouthRegion'
import SouthAnalysis from './pages/region/SouthAnalysis/SouthAnalysis'
import CentralRegion from './pages/region/central/CentralRegion'
import BahriaRegion from './pages/region/bahria/BahriaRegion'
import NorthRegion from './pages/region/north/NorthRegion'
// import RelateTable from './pages/region/relate/RelateTable'
import TowerNetRegion from './pages/region/towernet/TowerNetRegion'
import ProjectLightRegion from './pages/region/projectlight/ProjectLightRegion'
import CustomerAnalysis from './pages/region/customeranalysis/CustomerAnalysis'
// import LongHaulNetwork from './pages/region/longhaul/LongHaulNetwork'
import LongHaulNetwork from './pages/region/longhaul/LongHaulNetwork'
import GponSouth from './pages/gpon/south/GponSouth';
import GponNorth from './pages/gpon/north/GponNorth';
import CustomerTable from './pages/table/CustomerTable';
import CentralCustomerTable from './pages/table/CentralCustomerTable';
import BTKCustomerTable from './pages/table/BTKCustomerTable';
import DCTable from './pages/table/DCTable';
import RelateTable from './pages/relate/RelateTable';
import RelatedTable from './pages/relatedtable/RelatedTable';
import BahriaRelatedTable from './pages/bahriarelatedtable/BahriaRelatedTable';
import CentralRelatedTable from './pages/centralrelatedtable/CentralRelatedTable';
import CentralAnalysis from './pages/region/CentralAnalysis/CentralAnalysis'
import NorthRelatedTable from './pages/northrelatedtable/NorthRelatedTable';
import NorthAnalysis from './pages/region/NorthAnalysis/NorthAnalysis'
import BTKAnalysis from './pages/region/BTKAnalysis/BTKAnalysis'


import FTTT2021 from './pages/region/FTTT2021/FTTT2021Region'
import Iic from './pages/region/projects/Iic'
import Ktcc from './pages/region/projects/Ktcc'
import InternalProject from './pages/region/projects/InternalProject'

import JazzFTTS from './pages/region/FTTS/JazzFTTS'

import MainGraphs from './MainGraphs/MainGraphs'
import CentralGraphs from './MainGraphs/CentralMainGraphs'
import BTKGraphs from './MainGraphs/BTKMainGraphs'
import NorthGraphs from './MainGraphs/NorthMainGraphs'
  
import './routes.css'


import ProjectLightRelateTable from './pages/projectlightrelatedtable/ProjectLightRelateTable';  

import SouthChart from './pages/region/charts/SouthChart';  
import CentralChart from './pages/region/charts/CentralChart';   
import BtkChart from './pages/region/charts/BtkChart';
  
import NationWide from './pages/region/nationwide/NationWide';
import NationInfra from './pages/region/NationSummary/NationInfra'

import SouthInfra from './pages/region/southSummary/SouthInfra'
import BTKInfra from './pages/region/BTKSummary/BTKInfra'


import CentralInfra from './pages/region/centralSummary/CentralInfra'
import NorthInfra from './pages/region/NorthSummary/NorthInfra'
// import Aggregation from '../src/pages/region/aggregation/Aggregation';  

import Initiatives from './pages/region/Initiatives/Initiatives'

import Locate from './Locate'


export default [  
    {
        component: LongHaulNetwork,
        path: "/",
        exact: true,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b>LongHaul Network</b></div>
    },
    {
        component: Locate,
        path: "/Locate",
        exact: true,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b>LongHaul Network</b></div>
    },
    // {
    //     component: Mainpage,
    //     path: "/",  
    //     exact: true,
    //     head: () => <div className="page-breadcrumb" style={styles.crumb}><b>Dashboard</b></div>
        
    // },    
    // {
    //     component: Mainpage,
    //     path: "",    
    //     exact: true,
    //     head: () => <div className="page-breadcrumb" style={styles.crumb}><b>Dashboard</b></div>
          
    // },
    {
        component: TowerNetRegion,
        path: "/towernetregion",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b>Tower Net</b></div>
    }, 
    
    {
        component: JazzFTTS,
        path: "/jazzFTTS",
        exact: false,
        head: () =><div className="page-breadcrumb" style={styles.crumb}>  
        <button className="JazzFTTS" id="Sial">   
        <b style={{ textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Sialkot </strong><br/></b>
        <div className="row" style={{float:"left", padding:1}}>
   
         <b style={{ textAlign:"center", color:"lightblue", fontSize:12 }}>Aggregation</b>  
         &nbsp;
        <b><div  className="column3" id="Jazz_S_Agg" style={{ color:"LightGray", fontSize:14}}></div></b> 
        &nbsp;&nbsp;
        <b style={{ textAlign:"center", color:"lightblue", fontSize:12 }}>Cell Site</b>  
         &nbsp;  
        <b><div  className="column3" id="Jazz_S_Cell" style={{ color:"LightGray", fontSize:14}}></div></b> 
       
    </div>
    
    </button>
    <button className="JazzFTTS" id="Okara">   
        <b style={{ textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Okara </strong><br/></b>
        <div className="row" style={{float:"left", padding:1}}>
   
         <b style={{ textAlign:"center", color:"lightblue", fontSize:12 }}>Aggregation</b>  
         &nbsp;
        <b><div  className="column3" id="Jazz_O_Agg" style={{ color:"LightGray", fontSize:14}}></div></b> 
        &nbsp;&nbsp;
        <b style={{ textAlign:"center", color:"lightblue", fontSize:12 }}>Cell Site</b>  
         &nbsp;  
        <b><div  className="column3" id="Jazz_O_Cell" style={{ color:"LightGray", fontSize:14}}></div></b> 
       
    </div>
    </button>
    </div>
    },
    {
        component: Initiatives,
        path: "/initiatives",
        exact: false,
        head: () => 
        <div className="asd">
            <div className="btn-group">   
        {/* // <div className="page-breadcrumb" style={styles.crumb}><b>Initiatives</b></div> */}
        <button className="divButton1" id ="InitaiveKar" style={{ cursor: "pointer", textColor:"White"}}>    
        <b style={{textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Karachi </strong><br/></b>      
      </button> 

      <button className="divButton1" id ="InitaiveMul" style={{ cursor: "pointer", textColor:"White"}}>    
        <b style={{textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Multan </strong><br/></b>      
      </button> 

      <button className="divButton1" id ="InitaiveAbbt" style={{ cursor: "pointer", textColor:"White"}}>    
        <b style={{textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Abbotabad </strong><br/></b>      
      </button> 

      <button className="divButton1" id ="InitaiveBah" style={{ cursor: "pointer", textColor:"White"}}>    
        <b style={{textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Bahwalpur </strong><br/></b>      
      </button> 
      </div>
      </div>
      
    }, 
    {
        // FTTT 2019
        component: ProjectLightRegion,  
        path: "/projectlightregion", 
        exact: false,           
        head: () =><div className="page-breadcrumb" style={styles.crumb}><b>Project Light</b>
        {/* // <div className="asd"> */}
      
    
      <div className="btn-group">     
                    {/* <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> */}
 
                    {/* Karachi */}
                {/* <div className="dropdown"> 
                    <div id="DDdiv">
                                <button  type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  KHI                            
                                </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                               <h6  id="kar" style={{ cursor: "pointer"}}>Zoom</h6>
                        <a className="dropdown-item" >
                             <b  style={{ textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Karachi 2019</strong><br/></b>

                             <br/>
                             <div className="row" style={{float:"left", padding:1}}>
                             <b style={{ marginLeft:4,textAlign:"center", color:"GreenYellow",  fontSize:12 }}><strong>Cell Sites</strong><br/></b>
                             &nbsp; &nbsp;
                              <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Litup</b>  
                              &nbsp;  
                             <b><div  className="column3" id="KlitUp" style={{ color:"LightGray", fontSize:13}}></div></b> 
                             &nbsp;  &nbsp;
                             <b style={{ textAlign:"center", color:"lightblue", fontSize:12 }}>Pending</b>
                             &nbsp;
                              <b>  <div  className="column3" id="Kpending" style={{ color:"LightGray", fontSize:13}}></div></b> 
                              </div>
                      </a>
           
                        <a className="dropdown-item">
                                <div className="row" style={{float:"left", padding:1}}>
                                 <b style={{  marginLeft:4,textAlign:"center", color:"lightpink",  fontSize:12 }}><strong>Agg Sites</strong><br/></b>
                                 &nbsp;  &nbsp;
                                  <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Litup</b> 
                                  &nbsp;
                                  <b><div className="column3" id="KLitUpAgg" style={{ color:"LightGray", fontSize:13}}></div></b>
                                  &nbsp;  &nbsp;
                                 <b style={{ textAlign:"center", color:"lightblue", fontSize:12 }}>Pending</b>
                                 &nbsp;
                                 <b><div  className="column3" id="KPandingAgg" style={{ color:"LightGray", fontSize:13}}></div></b>
                                 </div><br/>
                        </a>

                        <a className="dropdown-item">
                                <b style={{ textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Karachi 2021</strong><br/></b>
                                <br/>
                                <div className="row" style={{float:"left", padding:1}}>
                                <b style={{ marginLeft:4,textAlign:"center", color:"GreenYellow",  fontSize:11 }}><strong>Cell Sites</strong><br/></b>
                                &nbsp; &nbsp;
                                 <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b>  
                                 &nbsp;  
                                <b><div  className="column3" id="FTTT_K_LitUpCellSite" style={{ color:"LightGray", fontSize:11}}></div></b> 
                                &nbsp;  &nbsp;
                                <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
                                &nbsp;
                                <b><div  className="column3" id="FTTT_K_PendingCellSite" style={{ color:"LightGray", fontSize:11}}></div></b> 
                                </div>
                        </a>
                 
                 
                        <a className="dropdown-item"  id="kar">
      
                                <div className="row" style={{float:"left", padding:1}}>
                                <b style={{  marginLeft:4,textAlign:"center", color:"lightpink",  fontSize:11 }}><strong>Agg Sites</strong><br/></b>
                                &nbsp;  &nbsp;
                                <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
                                &nbsp;
                                <b><div className="column3" id="FTTT_K_LitUpAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
                                &nbsp;  &nbsp;
                                <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
                                &nbsp;
                                <b><div  className="column3" id="FTTT_K_PendingAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
                                </div>  
                         </a>  

                        </div>
                    </div>
                </div> */}



                    {/* Bahwalpur */}

                {/* <div className="dropdown">
                    <div id="DDdiv">
                            <button className="btnasc" type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                           Bahwalpur 
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <h6  id="Bah" style={{ cursor: "pointer"}}>Zoom</h6>

                        <a className="dropdown-item" >
                             <b  style={{ textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Bahwalpur 2019</strong><br/></b>

                             <br/>
                                     <div className="row" style={{float:"left", padding:1}}>
                                     <b style={{ marginLeft:4,textAlign:"center", color:"GreenYellow",  fontSize:12 }}><strong>Cell Sites</strong><br/></b>
                                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Litup</b>  
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                     <b><div  className="column3" id="B_LitUpCellSite" style={{ color:"LightGray", fontSize:13}}></div></b> 
                                     &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;
                                     <b style={{ textAlign:"center", color:"lightblue", fontSize:12 }}>Pending</b>
                                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   <b>  <div  className="column3" id="B_PendingCellSite" style={{ color:"LightGray", fontSize:13}}></div></b> 
                                 </div>
                        </a>

    
                        <a className="dropdown-item">
                                <div className="row" style={{float:"left", padding:1}}>
                                <b style={{marginLeft:4, textAlign:"center", color:"lightpink",  fontSize:12 }}><strong>Agg Sites</strong><br/></b>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Litup</b> 
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                 <b> <div  className="column3" id="B_LitUpAgg" style={{ color:"LightGray", fontSize:13}}></div></b>
                                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                 <b style={{ textAlign:"center", color:"lightblue", fontSize:12 }}>Pending</b>
                                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                 <b><div  className="column3" id="B_PendingAgg" style={{ color:"LightGray", fontSize:13}}></div></b>
                                 </div><br/>
                        </a>
    </div>
</div>

                </div> */}


                    {/* Multan */}
                {/* <div className="dropdown">
                    <div id="DDdiv">
                            <button className="btnasc" type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                            Multan 
                            </button>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <h6  id="Mul" style={{ cursor: "pointer"}}>Zoom</h6>
        
                        <a className="dropdown-item" >
                        <b  style={{ textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Multan 2019</strong><br/></b>

                                 <br/>
                                    <div className="row" style={{float:"left", padding:1}}>
                                      <b style={{ marginLeft:4,textAlign:"center", color:"GreenYellow",  fontSize:12 }}><strong>Cell Sites</strong><br/></b>
                                      &nbsp; &nbsp;
                                       <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Litup</b>  
                                       &nbsp;  
                                      <b><div  className="column3" id="M_LitUpCellSite" style={{ color:"LightGray", fontSize:13}}></div></b> 
                                      &nbsp;  &nbsp;
                                      <b style={{ textAlign:"center", color:"lightblue", fontSize:12 }}>Pending</b>
                                      &nbsp;
                                    <b>  <div  className="column3" id="M_PendingCellSite" style={{ color:"LightGray", fontSize:13}}></div></b> 
                                  </div>
                        </a>


                        <a className="dropdown-item">
                                <div className="row" style={{float:"left", padding:1}}>
                                <b style={{marginLeft:4, textAlign:"center", color:"lightpink",  fontSize:12 }}><strong>Agg Sites</strong><br/></b>
                                &nbsp;  &nbsp;
                                 <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Litup</b> 
                                 &nbsp;
                                <b> <div  className="column3" id="M_LitUpAgg" style={{ color:"LightGray", fontSize:13}}></div></b>
                                 &nbsp;   &nbsp;
                                <b style={{ textAlign:"center", color:"lightblue", fontSize:12 }}>Pending</b>
                                &nbsp;
                                <b><div  className="column3" id="M_PendingAgg" style={{ color:"LightGray", fontSize:13}}></div></b>
                                </div><br/>
                         </a>
                        
                        
                    
                        <a className="dropdown-item">
                        
                        <b style={{ textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Multan 2021</strong><br/></b>
                        <br/>
                            <div className="row" style={{float:"left", padding:1}}>
                              <b style={{ marginLeft:4, textAlign:"center", color:"GreenYellow",  fontSize:12 }}><strong>Cell Sites</strong><br/></b>
                              &nbsp; &nbsp;
                               <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Litup</b> 
                               &nbsp;
                              <b><div  className="column3" id="FTTT_M_LitUpCellSite" style={{ color:"LightGray", fontSize:13}}></div></b>
                              &nbsp;  &nbsp;
                              <b style={{ textAlign:"center", color:"lightblue", fontSize:12 }}>Pending</b>
                              &nbsp;
                              <b><div  className="column3" id="FTTT_M_PendingCellSite" style={{ color:"LightGray", fontSize:13}}></div></b>
                            </div>
                        </a>

                        <a className="dropdown-item">
                            <div className="row" style={{float:"left", padding:1}}>
                               <b style={{marginLeft:3, textAlign:"center", color:"lightpink",  fontSize:12 }}><strong>Agg Sites</strong><br/></b>
                               &nbsp;  &nbsp;
                                <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Litup</b> 
                                &nbsp;
                                <b><div  className="column3" id="FTTT_M_LitUpAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
                                &nbsp;   &nbsp;
                               <b style={{ textAlign:"center", color:"lightblue", fontSize:12 }}>Pending</b>
                               &nbsp;
                               <b><div  className="column3" id="FTTT_M_PendingAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
                            </div>
                        </a>
                    </div>
                </div>
                </div> */}



                        {/* Abbotabad */}

                {/* <div className="dropdown">
                    <div id="DDdiv">
                            <button className="btnasc" type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                            Abbotabad 
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <h6  id="Abat" style={{ cursor: "pointer"}}>Zoom</h6>


                        <a className="dropdown-item" >

                          <b  style={{ textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Abbotabad 2019</strong><br/></b>

                             <br/>
                                     <div className="row" style={{float:"left", padding:1}}>
                                     <b style={{ marginLeft:4,textAlign:"center", color:"GreenYellow",  fontSize:12 }}><strong>Cell Sites</strong><br/></b>
                                     &nbsp; &nbsp; &nbsp;
                                      <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Litup</b>  
                                      &nbsp;   &nbsp; &nbsp;
                                     <b><div  className="column3" id="A_LitUpCellSite" style={{ color:"LightGray", fontSize:13}}></div></b> 
                                     &nbsp;  &nbsp; &nbsp;
                                     <b style={{ textAlign:"center", color:"lightblue", fontSize:12 }}>Pending</b>
                                     &nbsp; &nbsp; &nbsp;
                                   <b>  <div  className="column3" id="A_PendingCellSite" style={{ color:"LightGray", fontSize:13}}></div></b> 
                                 </div>
                        </a>

    
                        <a className="dropdown-item">
                                <div className="row" style={{float:"left", padding:1}}>
                                <b style={{marginLeft:4, textAlign:"center", color:"lightpink",  fontSize:12 }}><strong>Agg Sites</strong><br/></b>
                                 &nbsp;  &nbsp; &nbsp;
                                  <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Litup</b> 
                                  &nbsp; &nbsp; &nbsp;
                                 <b> <div  className="column3" id="A_LitUpAgg" style={{ color:"LightGray", fontSize:13}}></div></b>
                                  &nbsp;   &nbsp; &nbsp;
                                 <b style={{ textAlign:"center", color:"lightblue", fontSize:12 }}>Pending</b>
                                 &nbsp; &nbsp; &nbsp;
                                 <b><div  className="column3" id="A_PendingAgg" style={{ color:"LightGray", fontSize:13}}></div></b>
                                 </div><br/>
                        </a>



                       <a className="dropdown-item">

                                               <b  style={{ textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Abbotabad 2021</strong><br/></b>
                                               <br/>
                             <div className="row" style={{float:"left", padding:1}}>
                               <b style={{ marginLeft:4, textAlign:"center", color:"GreenYellow",  fontSize:11 }}><strong>Cell Sites</strong><br/></b>
                               &nbsp; &nbsp; &nbsp;
                                <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
                                &nbsp; &nbsp; &nbsp;
                               <b><div  className="column3" id="FTTT_A_LitUpCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
                               &nbsp;  &nbsp; &nbsp;
                               <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
                               &nbsp; &nbsp; &nbsp;
                               <b><div  className="column3" id="FTTT_A_PendingCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
                            </div>
                       </a>

                        <a className="dropdown-item">
                            <div className="row" style={{float:"left", padding:1}}>
                                <b style={{marginLeft:4, textAlign:"center", color:"lightpink",  fontSize:11 }}><strong>Agg Sites</strong><br/></b>
                                &nbsp; &nbsp; &nbsp;
                                 <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
                                 &nbsp; &nbsp; &nbsp;
                                 <b><div  className="column3" id="FTTT_A_LitUpAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
                                 &nbsp;  &nbsp; &nbsp;
                                <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
                                &nbsp; &nbsp; &nbsp;
                                <b><div  className="column3" id="FTTT_A_PendingAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
                            </div>
                        </a>


    </div>
</div>

                </div> */}


                       {/* Sukkur */}

                {/* <div className="dropdown">
                    <div id="DDdiv">
                            <button className="btnasc" type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                            Sukkur 
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <h6  id="Sukkur" style={{ cursor: "pointer"}}>Zoom</h6>

                        <a className="dropdown-item" >
                             <b  style={{ textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Sukkur 2021</strong><br/></b>

                             <br/>
                                     <div className="row" style={{float:"left", padding:1}}>
                                     <b style={{ marginLeft:4,textAlign:"center", color:"GreenYellow",  fontSize:12 }}><strong>Cell Sites</strong><br/></b>
                                     &nbsp; &nbsp;
                                      <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Litup</b>  
                                      &nbsp;&nbsp;&nbsp;
                                     <b><div  className="column3" id="FTTT_S_LitUpCellSite" style={{ color:"LightGray", fontSize:13}}></div></b> 
                                     &nbsp;&nbsp;
                                     <b style={{ textAlign:"center", color:"lightblue", fontSize:12 }}>Pending</b>
                                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   <b>  <div  className="column3" id="FTTT_S_PendingCellSite" style={{ color:"LightGray", fontSize:13}}></div></b> 
                                 </div>
                        </a>

    
                        <a className="dropdown-item">
                                <div className="row" style={{float:"left", padding:1}}>
                                <b style={{marginLeft:4, textAlign:"center", color:"lightpink",  fontSize:12 }}><strong>Agg Sites</strong><br/></b>
                                &nbsp; &nbsp;
                                  <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Litup</b> 
                                  &nbsp; &nbsp; 
                                 <b> <div  className="column3" id="FTTT_S_LitUpAgg" style={{ color:"LightGray", fontSize:13}}></div></b>
                                  &nbsp;&nbsp;
                                 <b style={{ textAlign:"center", color:"lightblue", fontSize:12 }}>Pending</b>
                                 &nbsp; &nbsp; &nbsp;
                                 <b><div  className="column3" id="FTTT_S_PendingAgg" style={{ color:"LightGray", fontSize:13}}></div></b>
                                 </div><br/>
                        </a>
                     </div>
</div>

                </div> */}

                           {/* Sahiwal */}

                {/* <div className="dropdown">
                        <div id="DDdiv">
                            <button className="btnasc" type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                            Sahiwal 
                              </button>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <h6  id="Sahiwal" style={{ cursor: "pointer"}}>Zoom</h6>

                        <a className="dropdown-item" >
                             <b  style={{ textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Sahiwal 2021</strong><br/></b>

                             <br/>
                             <div className="row" style={{float:"left", padding:1}}>
                               <b style={{ marginLeft:4, textAlign:"center", color:"GreenYellow",  fontSize:11 }}><strong>Cell Sites</strong><br/></b>
                                   &nbsp; &nbsp; &nbsp;
                                    <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
                                    &nbsp; &nbsp; &nbsp;
                                   <b><div  className="column3" id="FTTT_Sahiwal_LitUpCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
                                   &nbsp;  &nbsp; &nbsp;
                                   <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
                                   &nbsp; &nbsp; &nbsp;
                                   <b><div  className="column3" id="FTTT_Sahiwal_PendingCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
                             </div><br/>
                            </a>

    
                        <a className="dropdown-item">
                                <div className="row" style={{float:"left", padding:1}}>
                                    <b style={{marginLeft:4, textAlign:"center", color:"lightpink",  fontSize:11 }}><strong>Agg Sites</strong><br/></b>
                                    &nbsp; &nbsp; &nbsp;
                                     <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
                                     &nbsp; &nbsp; &nbsp;
                                     <b><div  className="column3" id="FTTT_Sahiwl_LitUpAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
                                     &nbsp;  &nbsp; &nbsp;
                                    <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
                                    &nbsp; &nbsp; &nbsp;
                                    <b><div  className="column3" id="FTTT_Sahiwl_PendingAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
                                </div>
                        </a>
                    </div>
</div>

                </div> */}

                           {/* Mardan */}

                {/* <div className="dropdown">
                        <div id="DDdiv">
                            <button className="btnasc" type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                            Mardan 
                              </button>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <h6  id="Mardan" style={{ cursor: "pointer"}}>Zoom</h6>

                        <a className="dropdown-item" >
                             <b  style={{ textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Mardan 2021</strong><br/></b>

                             <br/>
                             <div className="row" style={{float:"left", padding:1}}>
                                <b style={{ marginLeft:4, textAlign:"center", color:"GreenYellow",  fontSize:11 }}><strong>Cell Sites</strong><br/></b>
                                &nbsp; &nbsp; &nbsp;
                                 <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
                                 &nbsp; &nbsp; &nbsp;
                                <b><div  className="column3" id="FTTT_Mardan_LitUpCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
                                &nbsp;  &nbsp; &nbsp;
                                <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
                                &nbsp; &nbsp; &nbsp;
                                <b><div  className="column3" id="FTTT_Mardan_PendingCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
                           </div><br/>
                            </a>

    
                        <a className="dropdown-item">
                            <div className="row" style={{float:"left", padding:1}}>
                                 <b style={{marginLeft:4, textAlign:"center", color:"lightpink",  fontSize:11 }}><strong>Agg Sites</strong><br/></b>
                                 &nbsp; &nbsp; &nbsp;
                                  <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
                                  &nbsp; &nbsp; &nbsp;
                                  <b><div  className="column3" id="FTTT_Mardan_LitUpAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
                                  &nbsp;  &nbsp; &nbsp;
                                 <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
                                 &nbsp; &nbsp; &nbsp;
                                 <b><div  className="column3" id="FTTT_Mardan_PendingAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
                            </div>
                        </a>
                    </div>
</div>
                </div> */}

                {/* Total*/}
                  {/* <div className="dropdown">
                        <div id="DDdiv">
                            <button className="btnasc" type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                            Total 
                              </button>
                              <div className="dropdown-menu" id ="Total" aria-labelledby="dropdownMenuButton">
                              <h6  id="Tot" style={{ cursor: "pointer"}}>Zoom</h6>

                         <a className="dropdown-item" >
                             <b  style={{ textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Total 2019</strong><br/></b>

                             <br/>
                             <div className="row" style={{float:"left", padding:1}}>
                                <b style={{ marginLeft:4, textAlign:"center", color:"GreenYellow",  fontSize:12 }}><strong>Cell Sites</strong><br/></b>
                                &nbsp;&nbsp;
                                 <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
                                 &nbsp;
                                <b><div  className="column3" id="T_LitUpCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
                                &nbsp; 
                                <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
                                &nbsp;
                                <b><div  className="column3" id="T_PendingCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
                           </div><br/>
                            </a>

    
                        <a className="dropdown-item">
                            <div className="row" style={{float:"left", padding:1}}>
                                 <b style={{marginLeft:4, textAlign:"center", color:"lightpink",  fontSize:12 }}><strong>Agg Sites</strong><br/></b>
                                 &nbsp;&nbsp;
                                  <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
                                  &nbsp;
                                  <b><div  className="column3" id="T_LitUpAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
                                  &nbsp; 
                                 <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
                                 &nbsp;
                                 <b><div  className="column3" id="T_PendingAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
                            </div>
                        </a>
                        <br/>


                        <a className="dropdown-item" >
                             <b  style={{ textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Total 2021</strong><br/></b>

                             <br/>
                             <div className="row" style={{float:"left", padding:1}}>
                                <b style={{ marginLeft:4, textAlign:"center", color:"GreenYellow",  fontSize:12 }}><strong>Cell Sites</strong><br/></b>
                                &nbsp;&nbsp;
                                 <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
                                 &nbsp;
                                <b><div  className="column3" id="FTTT_T_LitUpCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
                                &nbsp; 
                                <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
                                &nbsp;
                                <b><div  className="column3" id="FTTT_T_PendingCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
                           </div><br/>
                            </a>

    
                        <a className="dropdown-item">
                            <div className="row" style={{float:"left", padding:1}}>
                                 <b style={{marginLeft:4, textAlign:"center", color:"lightpink",  fontSize:12 }}><strong>Agg Sites</strong><br/></b>
                                 &nbsp;&nbsp;
                                  <b style={{ textAlign:"center", color:"lightgreen", fontSize:13 }}>Litup</b> 
                                  &nbsp;
                                  <b><div  className="column3" id="FTTT_T_LitUpAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
                                  &nbsp; 
                                 <b style={{ textAlign:"center", color:"lightblue", fontSize:13 }}>Pending</b>
                                 &nbsp;
                                 <b><div  className="column3" id="FTTT_T_PendingAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
                            </div>
                        </a>
                       


                    </div>
                </div>
                </div> */}
        </div>      
     

        </div>
    },

  //  {
//         component: FTTT2021,
//         path: "/fttt2021region",
//         exact: false,
//         head: () => <div className="asd" > 
//                                      FTTT Karachi
//         <button className="FTT_divButton1" id="karAgg">   
//         <b style={{ textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Karachi </strong><br/></b>
//         <div className="row" style={{float:"left", padding:1}}>
//         <b style={{ marginLeft:4,textAlign:"center", color:"GreenYellow",  fontSize:11 }}><strong>Cell Sites</strong><br/></b>
//         &nbsp;
//          <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b>  
//          &nbsp;  
//         <b><div  className="column3" id="FTTT_K_LitUpCellSite" style={{ color:"LightGray", fontSize:11}}></div></b> 
//         &nbsp; 
//         <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
//         &nbsp;
//       <b>  <div  className="column3" id="FTTT_K_PendingCellSite" style={{ color:"LightGray", fontSize:11}}></div></b> 
//     </div><br/>

//     <div className="row" style={{float:"left", padding:1}}>
//         <b style={{  marginLeft:4,textAlign:"center", color:"lightpink",  fontSize:11 }}><strong>Agg Sites</strong><br/></b>
//         &nbsp; 
//          <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
//          &nbsp;
//          <b><div className="column3" id="FTTT_K_LitUpAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
//          &nbsp; 
//         <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
//         &nbsp;
//         <b><div  className="column3" id="FTTT_K_PendingAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
//    </div>
    
// </button>


//                                 FTTT Sukkur
// <button className="FTT_divButton2" id="Sukkur" style={{}}> 

//        <b style={{textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Sukkur </strong><br/></b>
//     <div className="row" style={{float:"left", padding:1}}>
//          <b style={{marginLeft:4, textAlign:"center", color:"GreenYellow",  fontSize:11 }}><strong>Cell Sites</strong><br/></b>
//          &nbsp;
//          <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
//          &nbsp;
//       <b><div  className="column3" id="FTTT_S_LitUpCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
//          &nbsp;  
//          <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
//          &nbsp;
//          <b><div  className="column3" id="FTTT_S_PendingCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
//      </div><br/>

//      <div className="row" style={{float:"left", padding:1}}>
//          <b style={{marginLeft:4, textAlign:"center", color:"lightpink",  fontSize:11 }}><strong>Agg Sites</strong><br/></b>
//          &nbsp; 
//           <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
//           &nbsp;
//          <b> <div  className="column3" id="FTTT_S_LitUpAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
//           &nbsp;  
//          <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
//          &nbsp;
//          <b><div  className="column3" id="FTTT_S_PendingAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
//     </div>
     
// // </div>         
// </button>



//                                       FTTT Multan 
// <button className="FTT_divButton3"  id="Mul" style={{}}> 
//              <b style={{marginLeft:1, textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Multan </strong><br/></b>
//              <div className="row" style={{float:"left", padding:1}}>
//              <b style={{marginLeft:4,textAlign:"center", color:"GreenYellow",  fontSize:11 }}><strong>Cell Sites</strong><br/></b>
//              &nbsp;
//               <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
//               &nbsp;
//             <b> <div  className="column3" id="FTTT_M_LitUpCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
//              &nbsp;  
//              <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
//              &nbsp;
//              <b><div  className="column3" id="FTTT_M_PendingCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
//          </div><br/>

//          <div className="row" style={{float:"left", padding:1}}>
//              <b style={{marginLeft:3, textAlign:"center", color:"lightpink",  fontSize:10 }}><strong>Agg Sites</strong><br/></b>
//              &nbsp; 
//               <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
//               &nbsp;
//               <b><div  className="column3" id="FTTT_M_LitUpAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
//               &nbsp;  
//              <b style={{ textAlign:"center", color:"lightblue", fontSize:12 }}>Pending</b>
//              &nbsp;
//              <b><div  className="column3" id="FTTT_M_PendingAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
//         </div>
         
// </button>  



//                                              FTTT Abbottabad 

// <button className="FTT_divButton4" id="Abat" style={{}}> 
//       <b style={{marginLeft:1, textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Abbottabad </strong><br/></b>
//         <div className="row" style={{float:"left", padding:1}}>
//              <b style={{ marginLeft:4, textAlign:"center", color:"GreenYellow",  fontSize:11 }}><strong>Cell Sites</strong><br/></b>
//              &nbsp;
//               <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
//               &nbsp;
//              <b><div  className="column3" id="FTTT_A_LitUpCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
//              &nbsp; 
//              <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
//              &nbsp;
//              <b><div  className="column3" id="FTTT_A_PendingCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
//         </div><br/>

//         <div className="row" style={{float:"left", padding:1}}>
//              <b style={{marginLeft:4, textAlign:"center", color:"lightpink",  fontSize:11 }}><strong>Agg Sites</strong><br/></b>
//              &nbsp;
//               <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
//               &nbsp;
//               <b><div  className="column3" id="FTTT_A_LitUpAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
//               &nbsp; 
//              <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
//              &nbsp;
//              <b><div  className="column3" id="FTTT_A_PendingAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
//         </div>
         
         
// </button>   

//                  FTTT Sahiwal 
// <button className="FTT_divButton5" id="Sahiwal" style={{}}> 
//       <b style={{marginLeft:1, textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Sahiwal </strong><br/></b>
//         <div className="row" style={{float:"left", padding:1}}>
//              <b style={{ marginLeft:4, textAlign:"center", color:"GreenYellow",  fontSize:11 }}><strong>Cell Sites</strong><br/></b>
//              &nbsp;
//               <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
//               &nbsp;
//              <b><div  className="column3" id="FTTT_Sahiwal_LitUpCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
//              &nbsp; 
//              <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
//              &nbsp;
//              <b><div  className="column3" id="FTTT_Sahiwal_PendingCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
//         </div><br/>

//         <div className="row" style={{float:"left", padding:1}}>
//              <b style={{marginLeft:4, textAlign:"center", color:"lightpink",  fontSize:11 }}><strong>Agg Sites</strong><br/></b>
//              &nbsp;
//               <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
//               &nbsp;
//               <b><div  className="column3" id="FTTT_Sahiwl_LitUpAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
//               &nbsp; 
//              <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
//              &nbsp;
//              <b><div  className="column3" id="FTTT_Sahiwl_PendingAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
//         </div>
         
         
// </button> 

//                     {/* Mardan */}
// <button className="FTT_divButton6" id="Mardan" style={{}}> 
//       <b style={{marginLeft:1, textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Mardan </strong><br/></b>
//         <div className="row" style={{float:"left", padding:1}}>
//              <b style={{ marginLeft:4, textAlign:"center", color:"GreenYellow",  fontSize:11 }}><strong>Cell Sites</strong><br/></b>
//              &nbsp;
//               <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
//               &nbsp;
//              <b><div  className="column3" id="FTTT_Mardan_LitUpCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
//              &nbsp; 
//              <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
//              &nbsp;
//              <b><div  className="column3" id="FTTT_Mardan_PendingCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
//         </div><br/>

//         <div className="row" style={{float:"left", padding:1}}>
//              <b style={{marginLeft:4, textAlign:"center", color:"lightpink",  fontSize:11 }}><strong>Agg Sites</strong><br/></b>
//              &nbsp;
//               <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
//               &nbsp;
//               <b><div  className="column3" id="FTTT_Mardan_LitUpAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
//               &nbsp; 
//              <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
//              &nbsp;
//              <b><div  className="column3" id="FTTT_Mardan_PendingAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
//         </div>
         
         
// </button> 
  
//                                      {/*FTTT Total */}  


//      <button className="FTT_divButton7" id="Tot" style={{}}>   
//              <b style={{marginLeft:1, textAlign:"center", color:"SpringGreen",  fontSize:17 }}><strong>Total</strong><br/></b>
//              <div className="row" style={{float:"left", padding:1}}>
//              <b style={{ marginLeft:4, textAlign:"center", color:"GreenYellow",  fontSize:11 }}><strong>Cell Sites</strong><br/></b>
//              &nbsp;
//               <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
//               &nbsp;
//              <b><div  className="column3" id="FTTT_T_LitUpCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
//              &nbsp; 
//              <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
//              &nbsp;
//              <b><div  className="column3" id="FTTT_T_PendingCellSite" style={{ color:"LightGray", fontSize:11}}></div></b>
//         </div><br/>

//         <div className="row" style={{float:"left", padding:1}}>
//              <b style={{marginLeft:4, textAlign:"center", color:"lightpink",  fontSize:11 }}><strong>Agg Sites</strong><br/></b>
//              &nbsp;
//               <b style={{ textAlign:"center", color:"lightgreen", fontSize:10 }}>Litup</b> 
//               &nbsp;
//               <b><div  className="column3" id="FTTT_T_LitUpAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
//               &nbsp; 
//              <b style={{ textAlign:"center", color:"lightblue", fontSize:10 }}>Pending</b>
//              &nbsp;
//              <b><div  className="column3" id="FTTT_T_PendingAgg" style={{ color:"LightGray", fontSize:11}}></div></b>
//         </div>
         
// </button>  

// </div>
    //}, 

    {
        component: Iic,
        path: "/iru",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}>
            <button className="IRUdivButton">     

                <div className="row" style={{float:"left", padding:1}}>
                    &nbsp; &nbsp; &nbsp;  
                             <b style={{ marginLeft:4,textAlign:"center", color:"GreenYellow",  fontSize:20 }}><strong>Total Sites</strong><br/></b>
                             &nbsp; &nbsp;
                             &nbsp; &nbsp; &nbsp; 
                              <b style={{ textAlign:"center", color:"red", fontSize:16 }}>Jazz</b>  
                              &nbsp;  &nbsp; &nbsp;
                             <b><div  className="column3" id="Jazz_IRU_Count" style={{ color:"LightGray", fontSize:14}}></div></b> 
                             &nbsp;  &nbsp;&nbsp;
                             <b style={{ textAlign:"center", color:"lightblue", fontSize:16 }}>Telenor</b>
                             &nbsp;&nbsp; &nbsp;
                              <b>  <div  className="column3" id="Tel_IRU_Count" style={{ color:"LightGray", fontSize:14}}></div></b> 
                </div>
  
            </button>
   
        </div>
    }, 
    {
        component: Ktcc,
        path: "/ktcc",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b>KTCC</b></div>
    }, 
    {
        component: InternalProject,
        path: "/internalproject",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b>Internal Project</b></div>
//         <div className="btn-group">
            
//         <button className="Button1" id="kia1">     
//         <b style={{textAlign:"center", color:"SpringGreen",  fontSize:13 }}><strong>KIA 1 </strong><br/></b>         
//         </button>      

//         <button className="Button2" id="i9" style={{}}> 
//         <b style={{textAlign:"center", color:"SpringGreen",  fontSize:13 }}><strong>I9 </strong><br/></b>
//         </button>    

//          <button className="Button3" id="k3s" style={{}}> 
//         <b style={{textAlign:"center", color:"SpringGreen",  fontSize:13 }}><strong>K3S </strong><br/></b>
//         </button>   

//         <button className="Button4" id="ktn" style={{}}> 
//         <b style={{textAlign:"center", color:"SpringGreen",  fontSize:13 }}><strong>KDA TO Nagan </strong><br/></b>
//         </button> 

//         <button className="Button5" id="gtm" style={{}}> 
//         <b style={{textAlign:"center", color:"SpringGreen",  fontSize:13 }}><strong>Gulshan To Maskan </strong><br/></b>
//         </button> 

//         <button className="Button6" id="4a" style={{}}> 
//         <b style={{textAlign:"center", color:"SpringGreen",  fontSize:13 }}><strong>4K To Ahsanabad</strong><br/></b>
//         </button> 

//         <button className="Button7" id="3pcm" style={{}}> 
//         <b style={{textAlign:"center", color:"SpringGreen",  fontSize:13 }}><strong>3PCM </strong><br/></b>
//         </button>     
 
//         <button className="Button8" id="HF" style={{}}> 
//         <b style={{textAlign:"center", color:"SpringGreen",  fontSize:13 }}><strong>Honor Foundation </strong><br/></b>
//         </button> 

//         <button className="Button9" id="KIA2" style={{}}> 
//         <b style={{textAlign:"center", color:"SpringGreen",  fontSize:13 }}><strong>KIA2 </strong><br/></b>
//         </button> 

//         <button className="Button10" id="MRN" style={{}}> 
//         <b style={{textAlign:"center", color:"SpringGreen",  fontSize:13 }}><strong>Multan Road Network </strong><br/></b>
//         </button> 

//         <button className="Button10" id="BTKL" style={{}}> 
//             <b style={{textAlign:"center", color:"SpringGreen",  fontSize:13 }}><strong>BTK Leg 3</strong><br/></b>
//         </button> 
// </div>
    }, 
    
    {
        component: SouthRegion,
        path:"/southregion",
        exact: false,
        head: () =>  
        <div className="page-breadcrumb" style={styles.crumb}><b>South Region</b>
        {/*  <div className="asd" >               */}

             {/* <button className="SouthdivButton1" id="southCustomers">     
             <b style={{ textAlign:"center", color:"SkyBlue",  fontSize:17 }}><strong>Customers </strong><br/></b>
             <div className="row" style={{float:"left", padding:1}}>
             &nbsp;
              <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>OnNet</b>  
              &nbsp;  
              &nbsp;  
             <b><div  className="column3" id="S_CustomersCount" style={{ color:"LightGray", fontSize:13}}></div></b> 
             &nbsp; 
             &nbsp; 
             <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Third Party</b>
             &nbsp;
           <b>  <div  className="column3" id="S_NodesCount" style={{ color:"LightGray", fontSize:13}}></div></b> 
         </div><br/>
  
         <div className="row" style={{float:"left", padding:1}}>
             
             &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
              <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Total</b> 
              &nbsp;
              <b><div className="column3" id="S_T_CustomersCount" style={{ color:"LightGray", fontSize:13, float:"left", textAlign:"center", marginLeft:13}}></div></b>
              &nbsp; 
         
        </div>
         
    </button>   */}




    {/* <button className="SouthdivButton2" id="southNodes">     
             <b style={{ textAlign:"center", color:"SkyBlue",  fontSize:17 }}><strong>Total Nodes </strong><br/></b>
             <div className="row" style={{float:"left", padding:1}}>
             
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
           <b>  <div  className="column3" id="S_NodeCount" style={{ textAlign:"center", color:"LightGray", fontSize:29.5 }}></div></b> 
         </div><br/>
  
        
         
    </button> */}
    {/* <button className="SouthdivButton3">        
          
  
         <h10> <SouthInfra/></h10>
       
          </button> */}
        </div>
    },
    {
        component: RelatedTable,    //South
        path: "/relatedtable",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b>South Region </b> <i className="mdi mdi-chevron-right"/> <b>Relate Table </b></div>
    },
    {
        component: SouthAnalysis,
        path:"/southanalysis",
        exact: false,
        head: () =>  <div className="page-breadcrumb" style={styles.crumb} ><b>South Region</b> <i className="mdi mdi-chevron-right"/><b>SouthAnalysis</b></div>
    },
    {
        component: CustomerTable,
        path: "/customer-table",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b>South Region </b><i className="mdi mdi-chevron-right"/> <b>South Customer Table</b></div>

    }, 
    {       
        component: BahriaRegion,        
        path: "/bahriaregion",
        exact: false,
        head: () =>  <div className="page-breadcrumb" style={styles.crumb}><b>Bahria Town </b>
        {/* <div className="asd" >    
         <button className="BTKdivButton1" id="southCustomers">     
        <b style={{ textAlign:"center", color:"SkyBlue",  fontSize:17 }}><strong>Customers </strong><br/></b>
      

        <div className="row" style={{float:"left", padding:1}}>
        &nbsp;
         <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Deployed</b>  
        
         &nbsp;  
        <b><div  className="column3" id="BTK_DepCust" style={{ color:"LightGray", fontSize:13}}></div></b> 
        &nbsp; 
        &nbsp; 
        <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Suspended</b>
        &nbsp;
      <b>  <div  className="column3" id="BTK_SusCust" style={{ color:"LightGray", fontSize:13}}></div></b> 

      &nbsp; 
        &nbsp; 
        <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>OnHold</b>
        &nbsp;
      <b>  <div  className="column3" id="BTK_OnhldCust" style={{ color:"LightGray", fontSize:13}}></div></b> 
    </div><br/>

    


    <div className="row" style={{float:"left", padding:1}}>
         &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;   &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
         <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Total</b>
      
         <b><div className="column3" id="BTK_T_CustomersCount" style={{ color:"LightGray", fontSize:15, float:"left", textAlign:"center", marginLeft:13}}></div></b>

         &nbsp; 
      
   </div>     

</button>   */}

{/* <button className="BTKdivButton2" id="BTKSites">     
             <b style={{ textAlign:"center", color:"SkyBlue",  fontSize:17 }}><strong>Total Sites </strong><br/></b>
             <div className="row" style={{float:"left", padding:1}}>
             
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  &nbsp;   &nbsp; 
           <b>  <div  className="column3" id="BTK_SitesCount" style={{ textAlign:"center", color:"LightGray", fontSize:29.5 }}></div></b> 
         </div><br/>
  
        
         
    </button> */}
      {/* <button className="BTKdivButton3">        
          
  
          <h10> <BTKInfra/></h10>
        
           </button> */}
        </div>
    },
    // {
    //     component: BahriaRelatedTable,      //Bahria
    //     path: "/BahriaRelatedTable",
    //     exact: false,
    //     head: () => <div className="page-breadcrumb" style={styles.crumb}><b>Bahria Town </b> <i className="mdi mdi-chevron-right" /> <b>Related Table </b></div>
    // },
    {
        component: BahriaRelatedTable,
        path: "/bahriarelatedtable",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b>Bahria Town</b> <i className="mdi mdi-chevron-right"/> <b>Relate Table</b></div>
    }, 
    {
        component: BTKCustomerTable,
        path: "/btk-customer-table",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b>Bahria Town </b><i className="mdi mdi-chevron-right"/><b>BTK Customer Table</b></div>

    },
    {
        component: CentralRegion,
        path:"/centralregion",
        exact: false,
        head: () =>    <div className="page-breadcrumb" style={styles.crumb}><b>Central Region </b>
        {/* <div className="asd">
        <button className="CentraldivButton1" id="centralNodes">     
                   <b style={{ textAlign:"center", color:"SkyBlue",  fontSize:17 }}><strong>Customers </strong><br/></b>
                   <div className="row" style={{float:"left", padding:1}}>
                   &nbsp;
                    <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>OnNet</b>  
                    &nbsp;  
                    &nbsp;  
                   <b><div  className="column3" id="C_onNetCustomerCount" style={{ color:"LightGray", fontSize:13}}></div></b> 
                   &nbsp; 
                   &nbsp;  &nbsp; 
                   <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Third Party</b>
                   &nbsp;
                 <b>  <div  className="column3" id="C_ThirdPartyCustomerCount" style={{ color:"LightGray", fontSize:13}}></div></b> 
               
                    </div><br/>
        
               <div className="row" style={{float:"left", padding:1}}>
                   &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Total</b> 
                    &nbsp;
                    <b><div className="column3" id="C_T_CustomerCount" style={{ color:"LightGray", fontSize:13, float:"left", textAlign:"center", marginLeft:13}}></div></b>
                    &nbsp; 
               
              </div>
               
          </button>   */}
      
      
          {/* <button className="CentraldivButton2" id="centralNodes">     
                   <b style={{ textAlign:"center", color:"SkyBlue",  fontSize:17 }}><strong>Total Nodes </strong><br/></b>
                   <div className="row" style={{float:"left", padding:1}}>
                   
                   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                 <b>  <div  className="column3" id="C_T_NodeCount" style={{ textAlign:"center", color:"LightGray", fontSize:29.5 }}></div></b> 
               </div><br/>
        
              
               
          </button>  */}
          {/* <button className="CentraldivButton3"> 
    <h10><CentralInfra/></h10>  
    </button> */}
        
        </div>
    },
        
    {
        component: CentralRelatedTable,      //Central
        path: "/CentralRelatedTable",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b>Central Region </b> <i className="mdi mdi-chevron-right"/> <b>Related Table </b></div>
    },
    {
        component: CentralAnalysis,
        path:"/centralanalysis",
        exact: false,
        head: () =>  <div className="page-breadcrumb" style={styles.crumb} ><b>Central Region</b> <i className="mdi mdi-chevron-right"/><b>CentralAnalysis</b></div>
    },
    {
        component: ProjectLightRelateTable,
        path: "/ProjectLightRelateTable",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b>Project Light</b> <i className="mdi mdi-chevron-right"/><b> Relate Tables<b></b></b></div>

    },
    {
        component: CentralCustomerTable,
        path: "/central-customer-table",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b>Central Region</b> <i className="mdi mdi-chevron-right"/><b>Central Customer Table<b></b></b></div>

    },
    {
        component: NorthRegion,
        path:"/NorthRegion",
        exact: false,
        head: () =>   <div className="page-breadcrumb" style={styles.crumb}><b>North Region </b>
        {/* <div className="asd" >    
        <button className="NorthdivButton1" id="southCustomers">     
        <b style={{ textAlign:"center", color:"SkyBlue",  fontSize:17 }}><strong>Customers </strong><br/></b>
        <div className="row" style={{float:"left", padding:1}}>
        &nbsp;
         <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>OnNet</b>  
         &nbsp;  
         &nbsp;  
        <b><div  className="column3" id="N_CustomersCount" style={{ color:"LightGray", fontSize:13}}></div></b> 
        &nbsp; 
        &nbsp; 
        <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Third Party</b>
        &nbsp;
      <b>  <div  className="column3" id="N_NodesCount" style={{ color:"LightGray", fontSize:13}}></div></b> 
    </div><br/>

    <div className="row" style={{float:"left", padding:1}}>
        &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
         <b style={{ textAlign:"center", color:"lightgreen", fontSize:12 }}>Total</b> 
         &nbsp;
         <b><div className="column3" id="N_T_CustomersCount" style={{ color:"LightGray", fontSize:13, float:"left", textAlign:"center", marginLeft:13}}></div></b>
         &nbsp; 
    
   </div>
    
</button>   */}
        {/* <button className="NorthdivButton2" id="NorthNodes">     
        <b style={{ textAlign:"center", color:"SkyBlue",  fontSize:17 }}><strong>Total Nodes </strong><br/></b>
        <div className="row" style={{float:"left", padding:1}}>
        
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
      <b>  <div  className="column3" id="N_NodeCount" style={{ textAlign:"center", color:"LightGray", fontSize:29.5 }}></div></b> 
    </div><br/>

   
    
</button> */}

{/* <button className="NorthdivButton3"> 
    <h10><NorthInfra/></h10>  
    </button> */}
   </div>
    },
    {
        component: NorthRelatedTable,      //North
        path: "/NorthRelatedTable",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b>North Region </b> <i className="mdi mdi-chevron-right"/> <b>Related Table </b></div>
    },
    {
        component: NorthAnalysis,      //North
        path: "/NorthAnalysis",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b>North Region </b> <i className="mdi mdi-chevron-right"/> <b>North Analysis </b></div>
    },
    {
        component: BTKAnalysis,      //BTK
        path: "/BTKAnalysis",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b>BTK Region </b> <i className="mdi mdi-chevron-right"/> <b>BTK Analysis </b></div>
    },
    // ,{
    //     component: CentralRegion,
    //     path: "/centralregion",
    //     exact: false,
    //     head: () => <div className="page-breadcrumb" style={styles.crumb}>South Region  <i className="mdi mdi-chevron-right" /> Bahria</div>
    // }

   
     {
        component: CustomerAnalysis,
        path: "/customeranalysis",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b> Customers Analysis</b> </div>
    },
    {
        component: NationWide,
        path: "/nationwide",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b> Nation Wide Network</b> </div>
        // <div className="page-breadcrumb" style={styles.crumb}>
        // <NationInfra/> </div>
    },
    // {
    //     component: SouthChart,
    //     path: "/southchart",
    //     exact: false,
    //     head: () => <div className="page-breadcrumb" style={styles.crumb}><b> Graphical Representation Of South Region</b> </div>
    // },
    // {
    //     component: CentralChart,
    //     path: "/CentralChart",
    //     exact: false,
    //     head: () => <div className="page-breadcrumb" style={styles.crumb}><b> Graphical Representation Of South Region</b> </div>
    // },
    // {      
    //     component: BtkChart,
    //     path: "/btkchart",
    //     exact: false,
    //     head: () => <div className="page-breadcrumb" style={styles.crumb}><b>Graphical Representation Of BTK Region</b></div>
    // },
    {      
        component: MainGraphs,
        path: "/maingraphs",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b>Graphical Representation Of South Region</b></div>
    },
    {      
        component: CentralGraphs,
        path: "/centralgraphs",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b>Graphical Representation Of Central Region</b></div>
    },
    {      
        component: BTKGraphs,
        path: "/btkgraphs",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b>Graphical Representation Of Bahria Town</b></div>
    },
    {      
        component: NorthGraphs,
        path: "/northgraphs",
        exact: false,
        head: () => <div className="page-breadcrumb" style={styles.crumb}><b>Graphical Representation Of North Region</b></div>
    },
    // {      
    //     component: Mainpage,
    //     path: "/*",
    //     exact: false,
    //     head: () => <div className="page-breadcrumb" style={styles.crumb}><b>Graphical Representation Of North Region</b></div>
    // },

    
    // {
    //     component: GponSouth,
    //     path: "/GPON-South",
    //     exact: false,
    //     head: () => <div className="page-breadcrumb" style={styles.crumb}>GPON <i className="mdi mdi-chevron-right" /> GPON South</div>
        
    // },
          
    // {
    //     component: DCTable,
    //     path: "/Dc-table",
    //     exact: false,
    //     head: () => <div className="page-breadcrumb" style={styles.crumb}>Table <i className="mdi mdi-chevron-right" /> DC Table</div>

    // }

]
let rgb = [110,110,110]

let styles = {
    crumb: {
        color: `rgb(${rgb})`
    }
}
