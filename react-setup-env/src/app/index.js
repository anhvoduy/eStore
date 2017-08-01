import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

import { HeaderArea } from './components/HeaderArea';
import { SiteBrandingArea } from './components/SiteBrandingArea';
import { MainMenuArea } from './components/MainMenuArea';
import { SliderAreaCarousel } from './components/SliderAreaCarousel';
import { BrandsAreaCarousel } from './components/BrandsAreaCarousel';
import { PromoArea } from './components/PromoArea';
import { FooterTopArea } from './components/FooterTopArea';
import { FooterBottomArea } from './components/FooterBottomArea';

//import { className } from './style.css';

ReactDOM.render(<HeaderArea/>, document.getElementById('HeaderArea'));
ReactDOM.render(<MainMenuArea/>, document.getElementById('MainMenuArea'));
ReactDOM.render(<SiteBrandingArea/>, document.getElementById('SiteBrandingArea'));

//ReactDOM.render(<SliderAreaCarousel/>, document.getElementById('SliderAreaCarousel'));
ReactDOM.render(<BrandsAreaCarousel/>, document.getElementById('BrandsAreaCarousel'));

ReactDOM.render(<FooterTopArea/>, document.getElementById('FooterTopArea'));
ReactDOM.render(<FooterBottomArea/>, document.getElementById('FooterBottomArea'));
