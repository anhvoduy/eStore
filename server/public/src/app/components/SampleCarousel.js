import React from 'react';
import Slider from 'react-slick';

export class SampleCarousel extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,            
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <Slider {...settings}>                
                <div>
                    <img src='/img/sample/angular.png' className='max-width: 300px; max-height: 200px'/>
                </div>
                <div>                    
                    <img src='/img/sample/knockout.png' className='max-width: 300px; max-height: 200px'/>
                </div>
                <div>
                    <img src='/img/sample/react.png' className='max-width: 300px; max-height: 200px'/>
                </div>
                <div>
                    <img src='/img/sample/node.png' className='max-width: 300px; max-height: 200px'/>
                </div>
            </Slider>
        );
    }
}