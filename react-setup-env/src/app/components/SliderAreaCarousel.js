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
                    path: 'img/h4-slide.png',
                    title: 'Iphone'
                },
                {
                    key: 2,
                    name: 'Slide',
                    path: 'img/h4-slide2.png',
                    title: 'Sony'
                },
                {
                    key: 3,
                    name: 'Slide',
                    path: 'img/h4-slide3.png',
                    title: 'Samsung'
                },
                {
                    key: 4,
                    name: 'Slide',
                    path: 'img/h4-slide4.png',
                    title: 'Ipad'
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
            autoplaySpeed: 200000
        };
        return (
            <Slider {...settings}>
                {
                    this.state.products.map(function(img)
                    {
                        return (
                            <div key={img.key} className="block-slider">
                                <img src={img.path} alt={img.name} />
                                <div className="caption-group">
                                    <h2 className="caption title">
                                        {img.title} <span className="primary">6 <strong>Plus</strong></span>
                                    </h2>
                                    <h4 className="caption subtitle">Dual SIM</h4>
                                    <a className="caption button-radius" href="#">
                                        <span className="icon"></span>Shop now
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        );        
    }

    componentDidMount(){        
    }
};