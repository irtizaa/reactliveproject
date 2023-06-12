import React from 'react';
import './table.css';
import { loadModules } from 'react-arcgis';
import Axios from 'axios';
import test from 'tape';
import { arcgisToGeoJSON, geojsonToArcGIS } from '@esri/arcgis-to-geojson-utils';


export default class CustomerTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: [],
            dc:[]
        }
    }
    
    async componentWillMount() {
        await Axios.get("http://172.16.6.159:5000/dc")
            .then(response => {
                this.setState({
                    customer: response.data
                })
               
            })
        console.log(this.state.customer)
        //console.log(this.state.customer[0].Shape.points[0].y) 

        window.$('#example').DataTable();   
    }

    render() {
        return (
            <div className="page-wrapper">
                <div className="container-fluid content">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">DC Datatable</h5>
                                    <div className="table-responsive">
                                        <table id="example" className="table table-striped table-bordered">

                                            <thead>
                                                <tr>
                                                    <th><strong>Name</strong></th>
                                                    <th><strong>ID</strong></th>
                                                    <th><strong>POP</strong></th>
                                              
                                                    <th><strong>Splitter</strong></th>
                                                    <th><strong>City</strong></th>
                                                    <th><strong>Location</strong></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.customer.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{item.Name}</td>
                                                                <td>{item.ID}</td>
                                                                <td>{item.POP}</td>
                                                                <td>{item.Splitter}</td>                                                  
                                                                <td>{item.City}</td>
                                                                <td>{item.Comment}</td>
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
                </div>

            </div>

        )
    }
}