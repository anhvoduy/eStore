import React from 'react';
//import Slider from 'react-slick';
//import $ from 'jquery';

export class BrandsAreaCarousel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            brands: [
                {
                    key: 4,
                    name: 'brand4',
                    path: 'img/brand4.png'
                }, // apple no.1
                {
                    key: 1,
                    name: 'brand1',
                    path: 'img/brand1.png'
                },
                {
                    key: 2,
                    name: 'brand2',
                    path: 'img/brand2.png'
                },
                {
                    key: 3,
                    name: 'brand3',
                    path: 'img/brand3.png'
                },                
                {
                    key: 5,
                    name: 'brand5',
                    path: 'img/brand5.png'
                },
                {
                    key: 6,
                    name: 'brand6',
                    path: 'img/brand6.png'
                }
            ]
        };        
    }

    componentWillMount() {
        //console.log('- componentWillMount()');        
    }
    
    render() {
        //console.log('- render()');
        return (            
            <div className="brand-wrapper">
                <div className="brand-list">
                    {
                        this.state.brands.map(function(img)
                        {
                            return <img key={img.key} src={img.path} alt="" />
                        })
                    }
                </div>
            </div>
        );
    }

    componentDidMount(){
        //console.log('- componentDidMount()');        
    }

    componentWillReceiveProps(){
        //console.log('- componentWillReceiveProps()');
    }

    shouldComponentUpdate(nextProps, nextState){
        //console.log('- shouldComponentUpdate()');
        return true; //false
    }
    
    componentWillUpdate(nextProps, nextState){     
        //console.log('- componentWillUpdate()');
    }

    componentDidUpdate(prevProps, prevState){
        //console.log('- componentDidUpdate()');        
    }

    componentWillUnMount(){
        //console.log('- componentWillUnMount()');
    }
}