import React from 'react';
import ReactDOM from 'react-dom';

import { HeaderArea } from './components/HeaderArea';
import { SiteBrandingArea } from './components/SiteBrandingArea';
import { MainMenuArea } from './components/MainMenuArea';
import { PageTitleArea } from './components/PageTitleArea';
import { SingleSideBarZone } from './components/SingleSideBarZone';
import { ProductContentRightZone } from './components/ProductContentRightZone';
import { FooterTopArea } from './components/FooterTopArea';
import { FooterBottomArea } from './components/FooterBottomArea';

ReactDOM.render(<HeaderArea/>, document.getElementById('HeaderArea'));
ReactDOM.render(<SiteBrandingArea/>, document.getElementById('SiteBrandingArea'));
ReactDOM.render(<MainMenuArea/>, document.getElementById('MainMenuArea'));
ReactDOM.render(<PageTitleArea/>, document.getElementById('PageTitleArea'));
ReactDOM.render(<SingleSideBarZone/>, document.getElementById('SingleSideBarZone'));
ReactDOM.render(<ProductContentRightZone/>, document.getElementById('ProductContentRightZone'));
ReactDOM.render(<FooterTopArea/>, document.getElementById('FooterTopArea'));
ReactDOM.render(<FooterBottomArea/>, document.getElementById('FooterBottomArea'));