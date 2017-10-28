import React from 'react';

export class FooterBottomArea extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="footer-bottom-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="copyright">
                                <p>&copy; 2015 uCommerce. All Rights Reserved. 
                                    <a href="http://www.freshdesignweb.com" target="_blank">freshDesignweb.com</a>
                                </p>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="footer-card-icon">
                                <i className="fa fa-cc-discover"></i>
                                <i className="fa fa-cc-mastercard"></i>
                                <i className="fa fa-cc-paypal"></i>
                                <i className="fa fa-cc-visa"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};