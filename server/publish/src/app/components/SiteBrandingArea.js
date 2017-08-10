import React from 'react';

export class SiteBrandingArea extends React.Component {
    render() {
        return (            
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="logo">
                            <h1>
                                <a href="./"><img src="img/logo.png" /></a>
                            </h1>
                        </div>
                    </div>
                    
                    <div className="col-sm-6">
                        <div className="shopping-item">
                            <a href="cart.html">
                                Cart - <span className="cart-amunt">$100</span> 
                                <i className="fa fa-shopping-cart"></i> 
                                <span className="product-count">5</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>            
        );
    }
};