import React, { useState, useEffect } from "react";
import axios from 'axios';
var GeoJSON = require('geojson');

const Tracking = () => {

    const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://transloc-api-1-2.p.rapidapi.com/vehicles.json',
      params: {
        agencies: '12,16',
        routes: '4000421,4000592,4005122',
        geo_area: '35.80176,-78.64347|35.78061,-78.68218',
        callback: 'call'
      },
      headers: {
        'X-RapidAPI-Key': '5c40e35b8amshb654e3db31541eep1551edjsn34e46afbd8a4',
        'X-RapidAPI-Host': 'transloc-api-1-2.p.rapidapi.com'
      }
    };

    // axios.request(options).then(function (response) {
    //   setVehicles(response.data);
    //   console.log(response.data,"This is data")
    // }).catch(function (error) {
    //   console.error(error);
    // });
    const res = axios.request(options)
    const data = res.json();

    const { temp,pressure,humidity } = data.main
    const {name : cityName} = data
    const {speed} = data.wind
    const {country,sunset} = data.sys
    const {main : weatherMood} = data.weather[0]
     console.log(data,"Data is main")
    const weatherObj = {
        temp,
        pressure,
        cityName,
        country,
        sunset,
        humidity,
        speed,
        weatherMood
    };
    setVehicles(weatherObj);
  }, []);


    return(
        <>
        <div>
      <h1>Vehicle Tracking</h1>
      {/* <ul>
        {vehicles.map((vehicle,index) => (
          <li key={vehicle.expires_in}>{vehicle.rate_limit}</li>
        ))}
      </ul> */}
    </div>
        </>
    )
}

export default Tracking;