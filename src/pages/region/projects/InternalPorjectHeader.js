import React from 'react'
import { loadModules } from 'react-arcgis';
import './internalProject.css'


export default class InternalPorjectHeader extends React.Component {


    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
      }
       view = this.props.view;

    componentDidMount() {
        let view = this.props.view;
        let map = this.props.map;
        loadModules(["esri/tasks/support/Query", "esri/tasks/QueryTask",'esri/widgets/Expand', "esri/Graphic", "esri/layers/GraphicsLayer"
        ])
            .then(([Query, QueryTask,Expand, Graphic, GraphicsLayer]) => {

                let central = document.getElementById('central')
                // central.addEventListener('click', function () {
                //     view.goTo({
                //         target: [74.371348, 31.495086],
                //         zoom: 10
                //     })
                // })

                // let lahore = document.getElementById('Lahore')
                // lahore.addEventListener('click', function () {
                //     view.goTo({
                //         target: [74.301348, 31.558086],
                //         zoom: 12
                //     })
                // })
                
                let g, g1, g2;
                let layer, layer1, layer2
                let link = "http://103.31.82.102:6080/arcgis/rest/services/Nationwide/InternalProjects/MapServer/3"
                //*****QUERY AND QUERY TASK*****//
                let queryTask = new QueryTask({
                    url: link
                });

                var resultsLayer = new GraphicsLayer({
                    listMode: "hide"
                });
                map.add(resultsLayer)

             
            
                view.ui.add(
                    [
                      new Expand({
                        view: view,
                        content: document.getElementById("infoDiv4"),
                         group:  "top-right",  
                        expanded: false,  
                        expandIconClass: "fas fa-bookmark", 
                      })
                    ],
                    "top-right"
                  );
        
        
        
                  var KIA1 = document.getElementById("active-button");
                  var Islamabad = document.getElementById("I9");
                  var K3S = document.getElementById("K3S");
                  var KDA = document.getElementById("KDA");
                  var GTM = document.getElementById("GTM");
                  var kA= document.getElementById("KA4");
                  var PCM = document.getElementById("PCM");
                  var HF = document.getElementById("HonorFund");
                  var KIA_2 = document.getElementById("KIA_2");
                  var KDCDHA = document.getElementById("KDCDHA");
                  var BTKLEG = document.getElementById("BTKLEG");
                  var PQIF =document.getElementById("PQIF");
                  var KDCALAM = document.getElementById("KDCALAM")
                  var FerRaw = document.getElementById("FerRaw")
                  var KDAM = document.getElementById("KDAM")
        


                  

          KIA1.addEventListener("click", function () {
            KIA_1()
          });

          Islamabad.addEventListener("click", function () {
            IslamabadFunc()
          });

          K3S.addEventListener("click", function () {
            K3SFunc()
          });

          KDA.addEventListener("click", function() {
              KDAFunc()
          })
          
          GTM.addEventListener("click", function (){
              GTMFunc()
          })

          kA.addEventListener("click",function(){
              kAFunct()
          })


          PCM.addEventListener("click",function(){
              PCMFunc()
          })

          HF.addEventListener("click", function(){
              HFFunc()
          })

          KIA_2.addEventListener("click", function () {
            KIA_2Func()
          });
         
          KDCDHA.addEventListener("click", function () {
            KDCfunc()
          });

          BTKLEG.addEventListener("click",function(){
            BTKLEG_Func()
          })

          PQIF.addEventListener("click",function(){
            PQIF_Func()
          })

          KDCALAM.addEventListener("click", function(){
            KDCALAM_Func()
          })

          FerRaw.addEventListener("click", function(){
            FerRaw_Func()
          })

          KDAM.addEventListener("click", function(){
            KDAM_Func()
          })

        
          function KIA_1(){
           
            view.goTo({
                target: [67.14108, 24.84293],
                zoom: 14
            })
          }

          function IslamabadFunc(){
           
            view.goTo({
                target: [73.0675, 33.6846],
                zoom: 12
            })
          }

          function K3SFunc(){
           
            view.goTo({
                target: [67.06649, 24.9679],
                zoom: 13
            })
          }

          function KDAFunc(){

            view.goTo({
                target: [67.05164, 24.94724],
                zoom:14
            })
          }


          function GTMFunc(){

            view.goTo({
                target: [67.1004, 24.9299],
                zoom:15
            })
          }

          function kAFunct (){

            view.goTo({
                target: [67.09511, 25.00086],
                zoom:15
            })
          }

          function PCMFunc(){
            view.goTo({
                target: [73.0675, 33.6846],
                zoom:13
            })
          }

          function HFFunc(){

            view.goTo({
                target: [67.11990, 24.81449],
                zoom:15
            })
          }

          
          function KIA_2Func(){
            view.goTo({
                target: [67.08980, 24.84293],
                zoom: 15
            })
          }
          

          
          function KDCfunc(){
            view.goTo({
                target: [67.082188, 24.830178],
                zoom: 14
            })
          }
          
          function  BTKLEG_Func(){
            view.goTo({
                target: [67.16211, 24.88112],
                zoom: 14
            })
          }

          function  PQIF_Func(){
            view.goTo({
                target: [67.328038,24.837764],
                zoom: 14
            })
          }
          

          function KDCALAM_Func(){
            
            view.goTo({
              target: [67.098779, 24.839261],
              zoom: 14
            })
          }

          function FerRaw_Func(){
            view.goTo({
              // target:[74.226519, 31.303287],
             
              target:[ 74.244206 , 31.378354 ],
              zoom:12
            })
          }

          function KDAM_Func(){
            view.goTo({
              target:[67.066785, 24.964938],
              zoom:14
            })
          }

        //   Old Approach


                // let querytotal = new Query({
                //     returnGeometry: true,
                //     outFields: ["*"],
                //     where: "1=1"
                // })
                // queryTask.executeForCount(querytotal).then(function (results) {
                //     document.getElementById('centraltotal').innerHTML = results
              
                // });


  
                // let kia = document.getElementById('kia1')
                // kia.addEventListener('click', function () {
                //     view.goTo({
                //         target: [67.14108, 24.84293],
                //         zoom: 14
                //     })
                // })

                // let isl = document.getElementById('i9')
                // isl.addEventListener('click', function () {
                //     view.goTo({
                //         target: [73.0675, 33.6846],
                //         zoom: 12
                //     })
                // })


                // let k3s = document.getElementById('k3s')
                // k3s.addEventListener('click', function () {
                //     view.goTo({
                //         target: [67.06649, 24.9679],
                //         zoom: 13
                //     })
                // })
               
                // let ktn = document.getElementById('ktn')
                // ktn.addEventListener('click', function () {
                //     view.goTo({
                //         target: [67.05164, 24.94724],
                //         zoom: 14
                //     })
                // })

                // let gtm = document.getElementById('gtm')
                // gtm.addEventListener('click', function () {
                //     view.goTo({
                //         target: [67.1004, 24.9299],
                //         zoom: 15
                //     })
                // })

                // let ahsan = document.getElementById('4a')
                // ahsan.addEventListener('click', function () {
                //     view.goTo({
                //         target: [67.09511, 25.00086],
                //         zoom: 15
                //     })
                // })

                // let pcm = document.getElementById('3pcm')
                // pcm.addEventListener('click', function () {
                //     view.goTo({
                //         target: [73.0675, 33.6846],
                //         zoom: 11
                //     })
                // })

                // let HF = document.getElementById('HF')
                // HF.addEventListener('click', function () {
                //     view.goTo({
                //         target: [67.11990, 24.81449],
                //         zoom: 15
                //     })
                // })

                
                // let KIA2 = document.getElementById('KIA2')
                // KIA2.addEventListener('click', function () {
                //     view.goTo({
                //         target: [67.08980, 24.84293],
                //         zoom: 15
                //     })
                // })

                // let MRN = document.getElementById('MRN')
                // MRN.addEventListener('click', function () {
                //     view.goTo({
                //         target: [74.18427, 31.42856],
                //         zoom: 12
                //     })
                // })

                // let BTKL = document.getElementById('BTKL')
                // BTKL.addEventListener('click', function () {
                //     view.goTo({
                //         target: [67.16211, 24.88112],
                //         zoom: 14
                //     })
                // })
               
            })
    }

    render() {
        return (
            <div  id="infoDiv4" class="large ui buttons">
 {/* <button id="active-button" class="ui button">KIA</button> */}

   {/* <button class="ui button">Two</button>
  <button class="ui button active">Three</button> */}


<button id="GTM">GULSHAN TO MASKAN</button>
  <button id="KDA">KDA TO NAGAN</button>
 <button id="active-button">KIA 1</button>
 <button id="I9">I9</button>
 <button id="K3S">K3S</button> 
 <button id="KA4">4k TO AHSANABAD</button>
 <button id="PCM">3PCM</button>
 <button id="HonorFund">HONOR FOUNDATION</button>
 <button id="KIA_2">KIA 2</button>
 <button id="KDCDHA">KDC TO DHA</button>
 <button id="BTKLEG">BTK LEG 3</button>
 <button id="PQIF">Port Qasim Infra Expansion</button>
 <button id="KDCALAM">KDC TO ALAMGIR</button>
 <button id="FerRaw"> Ferozepur Road to Raiwind Road </button>
 <button id ="KDAM">KDA to Ahsanabad to M-9</button>
</div>
        )
    }

}