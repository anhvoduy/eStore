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
                    title: 'iPhone',
                    title1: 'iPhone',
                    title2: '6',
                    title3: 'Plus',
                    subTitle: 'Dual SIM'
                },
                {
                    key: 2,
                    name: 'Slide',
                    path: 'img/h4-slide2.png',
                    title: 'Samsung',
                    title1: 'by one, get one',
                    title2: '50%',
                    title3: 'off',
                    subTitle: 'school supplies & backpacks.'
                },
                {
                    key: 3,
                    name: 'Slide',
                    path: 'img/h4-slide3.png',
                    title: 'Ipad',
                    title1: 'Apple',
                    title2: 'Store',
                    title3: 'Ipad',
                    subTitle: 'Select Item'
                },
                {
                    key: 4,
                    name: 'Slide',
                    path: 'img/h4-slide4.png',
                    title: 'Ipod',
                    title1: 'Apple',
                    title2: 'Store',
                    title3: 'Ipod',
                    subTitle: 'Phone'
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
            // need to verify css btnNext + btnPrev of bxslider
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