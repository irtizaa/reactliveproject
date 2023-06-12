import React from 'react'
import { loadModules } from 'react-arcgis';

export default class extendZoom extends React.Component {

    componentDidMount() {
        let view = this.props.view;
        let map = this.props.map;
       
            
                
              

                let karCell = document.getElementById('InitaiveKar')
                karCell.addEventListener('click', function () {
                    view.goTo({
                        target: [67.06136, 24.81655],
                        zoom: 12
                    })
                })

                let multan = document.getElementById('InitaiveMul')
                multan.addEventListener('click', function () {
                    view.goTo({
                        target: [71.5249, 30.1575],
                        zoom: 12
                    })
                })

                let Abbotabad = document.getElementById('InitaiveAbbt')
                Abbotabad.addEventListener('click', function () {
                    view.goTo({
                        target: [73.2215, 34.1688],
                        zoom: 12
                    })
                })

                
                let Bahawalpur = document.getElementById('InitaiveBah')
                Bahawalpur.addEventListener('click', function () {
                    view.goTo({
                        target: [71.6911, 29.3544],
                        zoom: 12
                    })
                })

                
              


         

              

              
            
    }

    render() {
        return null
    }

}

