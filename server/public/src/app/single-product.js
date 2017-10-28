import React from 'react';
import ReactDOM from 'react-dom';

import { HeaderArea } from './components/HeaderArea';
import { SiteBrandingArea } from './components/SiteBrandingArea';
import { MainMenuArea } from './components/MainMenuArea';
import { ProductBigTitleArea } from './components/ProductBigTitleArea';
import { SingleSideBarZone } from './components/SingleSideBarZone';
import { ProductContentRightSingle } from './components/ProductContentRightSingle';
import { FooterTopArea } from './components/FooterTopArea';
import { FooterBottomArea } from './components/FooterBottomArea';

ReactDOM.render(<HeaderArea/>, document.getElementById('HeaderArea'));
ReactDOM.render(<SiteBrandingArea/>, document.getElementById('SiteBrandingArea'));
ReactDOM.render(<MainMenuArea/>, document.getElementById('MainMenuArea'));
ReactDOM.render(<ProductBigTitleArea/>, document.getElementById('ProductBigTitleArea'));
ReactDOM.render(<SingleSideBarZone/>, document.getElementById('SingleSideBarZone'));
ReactDOM.render(<ProductContentRightSingle/>, document.getElementById('ProductContentRightSingle'));
ReactDOM.render(<FooterTopArea/>, document.getElementById('FooterTopArea'));
ReactDOM.render(<FooterBottomArea/>, document.getElementById('FooterBottomArea'));
