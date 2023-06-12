import React from 'react';
import './table.css';
import { loadModules } from 'react-arcgis';
import Axios from 'axios';
import Loader from 'react-loader-spinner'
import { MDBSpinner } from 'mdbreact';

import { CSVLink, CSVDownload } from "react-csv"
var GeoJSON = require('geojson');

export default class CustomerTable extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            customer: [''],
            loading:true
        }
    }

    async componentDidMount(){
        // await Axios.get("http://172.30.30.237:2000/customer")
		  await Axios.get("http://103.31.82.102:2000/customers")
            .then(response => {
                this.setState({
                    loading: false,
                    customer: response.data
                })
                console.log(this.state.customer)
            })

        window.$('#example').DataTable();

        let geojson = GeoJSON.parse(this.state.customer, { Point: ['lat', 'lng'], include: ['Name', 'FAT', 'DC']});
        console.log(geojson)
    }
     
    render(){
        const {loading, customer} = this.state
        return(
            <div className="page-wrapper"> 
                <div className="container-fluid content">
                    <div className="row">
                        <div className="col-12">
                            <div className="cards">
                                <div className="card-body">
                                    <h5 className="card-title">South Customer Datatable</h5>
                                    <div className="table-responsive">
                                        
                                        <table id="example" className="table table-striped table-bordered">
                                           
                                            <thead>
                                                <tr>
                                                    <th><strong>Customer Name</strong></th>
                                                    <th><strong>Signup ID </strong></th>
                                                    <th><strong>Node Name</strong></th>
                                                    <th><strong>Circuit Owner</strong></th>
                                                    <th><strong>Vendor</strong></th>
                                                    <th><strong>City</strong></th>
                                                    {/* <th><strong>InActive</strong></th> */}
                                                    
                                                    {/* <th>Action</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.customer.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{item.Customer_Name}</td>
                                                                <td>{item.Signup_ID}</td>
                                                                <td>{item.Node_Name}</td>
                                                                <td>{item.Circuit_Owner}</td>
                                                                <td>{item.Vendor}</td>
                                                                <td>{item.City}</td>
                                                                {/* <td><button style={{fontSize:10, paddingRight:23, textAlign:"center" }} className="btn btn-danger">{item.City}</button></td> */}
                                                                
                                                                {/* <td> */}
                                                                    {/* <button style={{fontSize:10, paddingRight:23, textAlign:"center" }} className="btn btn-success">Active</button> */}
                                                                    {/* <button style={{ fontSize: 10, }} className="btn btn-danger" >In Active</button> */}
                                                                {/* </td> */}
                                                               
                                                            </tr>
                                                        )
                                                    })
                                                }
                                              
                                               
                                            </tbody>
                                         
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {loading ? 
                        <span style={{ paddingLeft: 700, display:'flex', flex:1, marginTop:0 }}><strong>Loading...</strong></span>
                              
                    : null
                    }
                </div>
                    
            </div>
          
        )
    }
}