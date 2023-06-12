import React from "react";
import { useGeolocated } from "react-geolocated";

const Demo = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <table>
            <tbody>
                <tr>
                    <td>latitude</td>
                    <td>{coords.latitude}</td>
                </tr>
                <tr>
                    <td>longitude</td>
                    <td>{coords.longitude}</td>
                </tr>
                <tr>
                    <td>altitude</td>
                    <td>{coords.altitude}</td>
                </tr>
                <tr>
                    <td>heading</td>
                    <td>{coords.heading}</td>
                </tr>
                <tr>
                    <td>speed</td>
                    <td>{coords.speed}</td>
                </tr>
            </tbody>
        </table>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
};

export default Demo;


// import React from 'react';
// import { usePosition } from 'use-position';

// export const Demo = () => {
//   const watch = true;
//   const {
//     latitude,
//     longitude,
//     speed,
//     timestamp,
//     accuracy,
//     heading,
//     error,
//   } = usePosition(watch);

//   return (
//     <code>
//       latitude: {latitude}<br/>
//       longitude: {longitude}<br/>
//       speed: {speed}<br/>
//       timestamp: {timestamp}<br/>
//       accuracy: {accuracy && `${accuracy} meters`}<br/>
//       heading: {heading && `${heading} degrees`}<br/>
//       error: {error}
//     </code>
//   );
// };

// export default Demo;