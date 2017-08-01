import React from 'react';
import Slider from 'react-slick';

export class SliderAreaCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    key: 1,
                    name: 'Slide',
                    path: 'img/h4-slide.png'
                },
                {
                    key: 2,
                    name: 'Slide',
                    path: 'img/h4-slide2.png'
                },
                {
                    key: 3,
                    name: 'Slide',
                    path: 'img/h4-slide3.png'
                },
                {
                    key: 4,
                    name: 'Slide',
                    path: 'img/h4-slide4.png'
                }
            ]
        }        
    }
    
    componentWillMount() {        
    }

    render() {        
        var settings = {
            dots: true,
            infinite: true,            
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <Slider {...settings}>
                {
                    this.state.products.map(function(img)
                    {
                        return <div><img key={img.key} src={img.path} alt={img.name} /></div>
                    })
                }                
            </Slider>
        );        
    }

    componentDidMount(){        
    }
};