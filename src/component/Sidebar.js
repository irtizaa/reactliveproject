import React from 'react';
import history from '../history'
import swal from "@sweetalert/with-react"
import { Link } from 'react-router-dom';
// import { mdiTransmissionTower } from '@mdi/js';
import './sidebar.css'


export default class Sidebar extends React.Component{
    // dashboard = () => {
    //     history.push("/")
    // }
     table = () => {
         history.push("/customer-table")
     }

    centralcustomertable = () => {
        history.push("/central-customer-table")
    } 
    btkcustomertable = () => {
        history.push("/btk-customer-table")
    }
     //Click Event of South tab
    south = () => {            
        history.push("/southregion")
    }
    southanalysis = () =>{
        history.push("southanalysis")
    }
    north = () => {
        history.push("/northregion")
    }
    bahria = () =>{
        history.push("bahriaregion")
    }
    central = () =>{
        history.push("centralregion")
    }
    centralanalysis = () =>{
        history.push("centralanalysis")
    }
    towernet = () =>{
        history.push("towernetregion")
    }
    jazz = () =>{
        history.push("jazzFTTS")
    }
    initiatives = () =>{
        history.push("initiatives")
    }
    projectlight = () =>{
        history.push("projectlightregion")
    }

    fttt2021 =() =>{
        history.push("fttt2021region")
    }


    iic = () =>{
        history.push("iic")
    }
    ktcc = () =>{
        history.push("ktcc")
    }
    internalProject = () =>{
        history.push("internalproject")
    }
    projectlightrelate =() =>{
        history.push("projectlightrelatetable")
    }
    customeranalysis = () =>{
        history.push("customeranalysis")
    }
    // longhaul = () =>{
    //     history.push("longhaulnetwork")
    // }
    longhaul = () =>{
        history.push("/")
    }
    relate = () =>{
        history.push("relatetable")
    }
    relatedtable = () =>{
       history.push("relatedtable")
    }
    bahriarelatedtable = () =>{
        history.push("bahriarelatedtable")
    }
    metrogrpah = () =>{
        history.push("metrogrpah")
    }
    centralrelatedtable = () =>{
        history.push("centralrelatedtable")
    }
    northrelatedtable = () =>{
        history.push("northrelatedtable")
    }
    northanalysis = () =>{
        history.push("northanalysis")
    }
    btkanalysis = () =>{
        history.push("btkanalysis")
    }
    
    
    maingraphs = () =>{
        history.push("maingraphs")
    }
    
    centralgraphs = () =>{
        history.push("centralgraphs")
    }

    btkgraphs = () =>{
        history.push("btkgraphs")
    }

    northgraphs= () =>{
        history.push("northgraphs")
    }



    centralchart = () =>{
        history.push("centralchart")
    }
    BtkChart = () =>{
        history.push("btkchart")
    }

    NationWide = () =>{
        history.push("nationwide")
    }

    // relatedtable = () =>{
    //     history.push("relatedtablebahria")
    //  }
    gponsouth = () => {
        history.push("/GPON-South") 
   /*      swal(
            <div style={styles.login}>

                <form className="form-horizontal m-t-20" style={styles.loginform}>
                    <div className="row p-b-30">
                        <div className="col-12 formswal">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-success text-white" id="basic-addon1"><i className="ti-user" /></span>
                                </div>
                                <input type="text" className="form-control form-control-lg" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-warning text-white" id="basic-addon2"><i className="ti-pencil" /></span>
                                </div>
                                <input type="text" style={styles.password} className="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required />
                            </div>

                            <div className="col-12">
                                <div className="p-t-20">
                                    <button className="btn btn-success float-right">Login</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                  
                </form>

            </div>,
            {
                buttons:false
                
            }


        ) */
    }
   /*  gponnorth = () => {
        history.push("/GPON-North")
    } */
    render(){
        return(
            <aside className="left-sidebar" data-sidebarbg="skin5">
                {/* Sidebar scroll*/}
                <div className="scroll-sidebar">

                    <nav className="sidebar-nav">
                        <ul id="sidebarnav" className="p-t-30">  
                        <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => this.projectlight()}><i className="mdi mdi-access-point-network"></i><span className="hide-menu"> FTTT 2019 & 2021 </span></a></li>
 
                        {/* <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-application" /><span className="hide-menu">GIS PORTAL</span></a></li>            */}
                            {/* <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="javascript:void(0)"  onClick={()=> this.dashboard()} aria-expanded="false"><i className="mdi mdi-view-dashboard" /><span className="hide-menu">Dashboard</span></a></li> */}
                            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="javascript:void(0)"  onClick={()=> this.longhaul()} aria-expanded="false"><i className="mdi mdi-application" /><span className="hide-menu">LongHaul</span></a></li> 
                            
                            {/* <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => this.towernet()}><i className="mdi mdi-radio-tower"></i><span className="hide-menu"> Tower Net </span></a></li> */}
                           
                            {/* <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-city"></i><span className="hide-menu"> Project Light </span></a>
                            <ul aria-expanded="false" className="collapse  first-level">     
                            <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => this.initiatives()}><i className="mdi mdi-access-point-network"></i><span className="hide-menu"> Initiatives </span></a></li>
                            <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => this.projectlight()}><i className="mdi mdi-access-point-network"></i><span className="hide-menu"> FTTT 2019 & 2021 </span></a></li>
                            
                            
                            
                                   
                            <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => this.projectlightrelate()}><i className="mdi mdi-table"></i><span className="hide-menu"> Related Table Project Light </span></a></li>
                                         
                                </ul>       

                            </li> */}

                            {/* <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-city"></i><span className="hide-menu"> Projects </span></a>
                            <ul aria-expanded="false" className="collapse  first-level">     
                            <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => this.iic()}><i className="mdi mdi-access-point-network"></i><span className="hide-menu"> IRU  </span></a></li>
                            <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => this.ktcc()}><i className="mdi mdi-access-point-network"></i><span className="hide-menu"> KTCC  </span></a></li>
                            <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => this.internalProject()}><i className="mdi mdi-access-point-network"></i><span className="hide-menu"> Internal Projects  </span></a></li>
                            <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => this.jazz()}><i className="mdi mdi-radar"></i><span className="hide-menu"> Jazz FTTS </span></a></li>


                                                                
                            </ul>       

                            </li> */}


                            <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={()=> this.south()}><i className="mdi mdi-city"></i><span className="hide-menu">South Metro Network </span></a></li>

                            {/* <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-city"></i><span className="hide-menu"> South Region </span></a>
                                
                                <ul aria-expanded="false" className="collapse  first-level">     
                                    <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => this.relatedtable()}><i className="mdi mdi-table"></i><span className="hide-menu"> Related Table South </span></a></li>
                                    <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => this.southanalysis()}><i className="mdi mdi-table"></i><span className="hide-menu"> South Analysis</span></a></li>

                                    <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => history.push("/customer-table")}><i className="mdi mdi-library-books"></i><span className="hide-menu">South Customer Table </span></a></li>
                                      
                                </ul>                               
                                    
                            </li>     */}


                            <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={()=> this.central()}><i className="mdi mdi-access-point-network"></i><span className="hide-menu">Central Metro Network</span></a></li>
 

                            {/* <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-city"></i><span className="hide-menu"> Central Region </span></a>
                                <ul aria-expanded="false" className="collapse  first-level">  
                                    <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={()=> this.centralrelatedtable()}><i className="mdi mdi-table"></i><span className="hide-menu"> Related Table Central </span></a></li>
                                    <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={()=> this.centralanalysis()}><i className="mdi mdi-table"></i><span className="hide-menu"> Central Analysis </span></a></li>

                                    <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => history.push("/central-customer-table")}><i className="mdi mdi-library-books"></i><span className="hide-menu">Central Customer Table </span></a></li>

                                    
                                  

                                   
                                </ul>

                            </li> */}



                            <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={()=> this.north()}><i className="mdi mdi-radar"></i><span className="hide-menu">North Metro Network</span></a></li>   

                            {/* <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-city"></i><span className="hide-menu"> North Region </span></a>
                                <ul aria-expanded="false" className="collapse  first-level">  
                                    <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="javascript:void(0)"   aria-expanded="false" onClick={()=> this.northrelatedtable()}><i className="mdi mdi-table" /><span className="hide-menu">Related Table North</span></a></li>
                                    <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="javascript:void(0)"   aria-expanded="false" onClick={() => this.northanalysis()}><i  className="mdi mdi-library-books"></i><span className="hide-menu">North Analysis </span></a></li>
   
                                    
                                </ul>

                            </li> */}


                            <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => this.bahria()}><i className="mdi mdi-web"></i><span className="hide-menu"> BTK Network </span></a></li>     

                            {/* <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-city"></i><span className="hide-menu"> Bahria Town</span></a>
                                
                                <ul aria-expanded="false" className="collapse  first-level">    

                                    <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={()=> this.bahriarelatedtable()}><i className="mdi mdi-table"></i><span className="hide-menu"> Related Table Bahria</span></a></li>    
                                    <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={()=> this.btkanalysis()}><i className="mdi mdi-table"></i><span className="hide-menu"> BTK Analysis </span></a></li>
                                    <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => history.push("/btk-customer-table")}><i className="mdi mdi-library-books"></i><span className="hide-menu">BTK Customer Table </span></a></li>                          

                                </ul>     
                            </li>   */}

                            
                            {/* <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => this.NationWide()}><i className="mdi mdi-web"></i><span className="hide-menu"> Nation Wide</span></a></li> */}
    



                            {/* <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-chart-bar"></i><span className="hide-menu">Charts</span></a>
                                <ul aria-expanded="false" className="collapse  first-level">
                                    <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => this.maingraphs()}><i className="mdi mdi-chart-pie"></i><span className="hide-menu"> South Graph </span></a></li>
                                    <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => this.centralgraphs()}><i className="mdi mdi-chart-pie"></i><span className="hide-menu"> Central Graph </span></a></li>
                                    <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => this.btkgraphs()}><i className="mdi mdi-chart-pie"></i><span className="hide-menu"> BTK Graph </span></a></li>
                                    <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link" onClick={() => this.northgraphs()}><i className="mdi mdi-chart-pie"></i><span className="hide-menu"> North Graph </span></a></li>
                                   


                                    </ul>
                            </li> */}

                            <li className="sidebar-item"><Link  to ="/logout"  className="sidebar-link" ><i className="mdi mdi-logout"></i><span className="hide-menu"> logout</span></Link></li>


                         
                        </ul>
 
                 

                  
                    </nav>

                </div>

            </aside>
        )
    }
}

const styles = {
    login:{
        width: '26em',
        paddingLeft: 10,
        paddingTop: 10
    },
    loginform:{
        width: '25em',
        paddingLeft: 10,
        paddingTop: 10,
    }
}