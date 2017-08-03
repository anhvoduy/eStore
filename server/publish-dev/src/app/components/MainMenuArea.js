import React from 'react';

export class MainMenuArea extends React.Component {
    render() {
        return (
            <div className="mainmenu-area">
                <div className="container">
                    <div className="row">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div> 
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="index.html">Home</a></li>
                                <li><a href="shop.html">Shop page</a></li>
                                <li><a href="single-product.html">Single product</a></li>
                                <li><a href="cart.html">Cart</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                                <li><a href="#">Category</a></li>
                                <li><a href="#">Others</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>  
                    </div>
                </div>
            </div>
        );
    }
};