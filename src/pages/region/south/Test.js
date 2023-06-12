// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import { data, proxy } from "jquery"

// function App() {
//   const [data, setData] = useState([]);

//    // Using fetch approach

//   // useEffect(() => {
//   //   fetch('https://jsonplaceholder.typicode.com/posts')
//   //     .then(response => response.json())
//   //     .then(data => setData(data));
//   // }, []);

//   // Another Approach
//   // Using axios approach
  
//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <p>API Testing</p>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>
//             {item.userId}    
//            {' '}  
//             {item.title}
//             <br/>
//             {item.body}
//             </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


// Another Approach with Different API




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function ExampleComponent() {
//   const [price, setPrice] = useState(null);
//   const [gbp, setGbp] = useState(null);

//   useEffect(() => {
//     const instance = axios.create({
//       baseURL: 'https://api.coindesk.com/v1/bpi/currentprice.json',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     const interval = setInterval(() => {
//       instance.get()
//         .then(response => {
//           setPrice(response.data.bpi.USD.rate);
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     }, 10000);


//     const GBP = setInterval(() => {
//       instance.get()
//       .then(response => {
//         setGbp(response.data.bpi.GBP.rate)
//       })
//     },10000)

//     return () => clearInterval(interval,GBP);
//   }, []);

//   return (
//     <div>
//       {price && (
//         <div>
//           <h2>Bitcoin USD Price</h2>
//           <p>{price} USD</p>
//         </div>
//       )}

// {price && (
//         <div>
//           <h2>Bitcoin GBP Price</h2>
//           <p>{gbp} GBP</p>
//         </div>
//       )}
  
//     </div>
//   );
// }

// export default ExampleComponent;


// Fetching Smart_OLT Api


// import React from 'react';
// import axios from 'axios';

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);       
//     this.state = {
//       olts: [],
//       error: null
//     };
//   }

//   componentDidMount() {
//     const apiKey = 'b0baf32feb9347ce8d57833c0b0a0619';
//     const url = 'https://multinetpk.smartolt.com/api/system/get_olts';
//     const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

//     // fetch(proxyUrl + url, {    
//     fetch(proxyUrl + url, {
//       headers: {
//         'X-Token': apiKey,
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Request-Method': 'GET',
//         // 'Access-Control-Request-Headers': 'Content-Type',
//         "Content-Type": "application/json",
//         'mode': 'no-cors',
//         // method: "GET",
//         // headers: {
//         //      "Content-Type": "application/json"
//         // },
//         // body: JSON.stringify(ob)
//       }
//     })

// //     axios.get(proxyUrl + url, {
// //   headers: {
// //     'X-Token': apiKey,
// //     // 'Access-Control-Allow-Origin': '*'
// //   }
// // })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch olts');
//           console.log(Error,"This is error")
//         }
//         return response.json();
//     })
//       .then(data => {
//         this.setState({
//           olts: data,
//           error: null
//         });
//       })
//       .catch(error => {
//         this.setState({
//           olts: [],
//           error: error.message
//         });
//         console.log(error,"This is error")
//       });
//   }

//   render() {
//     const { olts, error } = this.state;

//     if (error) {
//       return <div>Error: {error}</div>;
//     }

//     return (
//       <div>
//         {/* <h1>OLTs:</h1> */}
//         <ul>
//           {olts.map(olt => (
//             <li key={olt.id}>{olt.name}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default MyComponent;




// import { error } from 'jquery';
// import React, { Component } from 'react';

// class ExampleComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null
//     };
//   }

//   async componentDidMount() {
//     try {
//       const myHeaders = new Headers();
//       myHeaders.append('X-Token', 'b0baf32feb9347ce8d57833c0b0a0619');
//       myHeaders.append('Access-Control-Allow-Origin','*')
//       // myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:3013/')
//       // myHeaders.append('Access-Control-Request-Headers', 'Content-Type')

//       const requestOptions = {
        
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow',
//       };
//    const   headers = {
//         // 'X-Token': apiKey,
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Request-Method': 'GET',
//         // 'Access-Control-Request-Headers': 'Content-Type',
//         "Content-Type": "application/json",
//         'mode': 'no-cors',
//         // method: "GET",
//         // headers: {
//         //      "Content-Type": "application/json"
//         // },
//         // body: JSON.stringify(ob)
//       }
//       const response = await fetch(
//         'https://multinetpk.smartolt.com/api/system/get_olts',
//         requestOptions,
//         headers
        
//       );
//       const result = await response.text();
//       this.setState({ data: result });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   render() {
//     return (
//       <div>
//         {this.state.data ? (
//           <p>{this.state.data}</p>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     );
//   }
// }


// export default ExampleComponent;





// Another Method

// import React, { Component } from 'react'; 

// class MyComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       olts: [],
//     };
//   }

//   componentDidMount() {
//     const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//     // const url ='https://multientpk.smartolt.com/api/system/get_olts'
//     const url ='http://localhost:3000/olts'
//     const apiKey = 'b0baf32feb9347ce8d57833c0b0a0619';
//     fetch( url , {
//       headers: {
//         'X-Token': apiKey,
//         'Access-Control-Allow-Origin': '*'
//       },
//     })
//       .then(response => response.json())
//       .then(data => this.setState({ olts: data }));
//   }

//   render() {
//     const { olts } = this.state;

//     return (
//       <div>
        
//         <p>Check</p>
//         <ul>
//           {olts.map(olt => (
//             <li key={olt.id}>{olt.name}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default MyComponent;



// SMart OLT Website Code

// import React, { Component } from 'react';

// class MyComponent extends Component {             
//   componentDidMount() {
//     this.getData();
//   }

//   getData() {
//     var myHeaders = new Headers();
//     myHeaders.append("X-Token", "b0baf32feb9347ce8d57833c0b0a0619");

//     var requestOptions = {
//       // origin:'Access-Control-Allow-Origin',
//       // mode: 'no-cors',
//       method: 'GET',
//       headers: myHeaders,
//       redirect: 'follow'
//     };

//     fetch("https://multientpk.smartolt.com/api/system/get_olts", requestOptions)
//       .then(response => response.text())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));
//   }

//   render() {
//     return (
//       <div>
//         <p>Test data</p>
//       </div>
//     );
//   }
// }

// export default MyComponent;



// SMart OLT Website Code With proxy


// import React, { Component } from 'react';

// class MyComponent extends Component {
//   componentDidMount() {
//     this.getData();
//   }

//   getData() {
//     const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//         // const apiUrl ='https://multinetpk.smartolt.com/api/system/get_olts'
//         const apiUrl ='http://localhost:3000/olts'

//     var myHeaders = new Headers();
//     myHeaders.append("X-Token", "b0baf32feb9347ce8d57833c0b0a0619");

//     var requestOptions = {
//       method: 'GET',
//       headers: myHeaders,
//       redirect: 'follow'
//     };

//     fetch(apiUrl, requestOptions)
//       .then(response => response.text())
//       .then(result => console.log(result,"This is Result"))
//       .then(result => this.setState({ olts: result }))
   
//       .catch(error => console.log('error', error));
//       // const olts = this.result;
//       // console.log(olts, "This is olts")
      
//   }

//   render() {
//     const olts = this.result;
//     console.log(olts, "This is olts")
//     return (
//       <div>
//         <p>Test API</p>
//       </div>
//     );
//   }
// }

// export default MyComponent;




import React, { Component } from 'react';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/olts', {
          headers: {
            'X-Token': 'b0baf32feb9347ce8d57833c0b0a0619'
          }
        });
        const jsonData = await response.json();
        setData(jsonData);
        console.log(setData,"This is SetData")
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div>
        <h1>OLT Data</h1>
        <ul>
          {data.map((olt) => (
            <li key={olt.id}>
              <p>ID: {olt.id}</p>
              <p>Name: {olt.name}</p>
              <p>IP Address: {olt.ip_address}</p>
              <p>Status: {olt.status}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;