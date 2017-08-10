import React from 'react';

export class HeaderArea extends React.Component {
    constructor(){
        super();
        this.state = {
            header: {
                account: { title: 'My Account', url: '#' },
                wishList: { title: 'Wish List', url: '#' },
                cart: { title: 'My Cart', url: 'cart.html' },
                checkout: { title: 'Checkout', url: 'checkout.html' },
                login: { title: 'Login', url: '/admin' }
            },
            currencies: [
                {key: 1, name: 'USD'}, 
                {key: 2, name: 'INR'}, 
                {key: 3, name: 'GBP'}, 
                {key: 4, name: 'VND'}
            ],
            languages: [
                {key: 1, name: 'English'}, 
                {key: 2, name: 'French'}, 
                {key: 3, name: 'German'}, 
                {key: 4, name: 'Vietnam'}
            ]
        }
    }

    render() {
        return (            
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="user-menu">
                            <ul>
                                <li>
                                    <a href="#"><i className="fa fa-user"></i>{this.state.header.account.title}</a>
                                </li>
                                <li>
                                    <a href="#shop.html"><i className="fa fa-heart"></i>{this.state.header.wishList.title}</a>
                                </li>
                                <li>
                                    <a href="cart.html"><i className="fa fa-user"></i>{this.state.header.cart.title}</a>
                                </li>
                                <li>
                                    <a href="checkout.html"><i className="fa fa-user"></i>{this.state.header.checkout.title}</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-user"></i>{this.state.header.login.title}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="header-right">
                            <ul className="list-unstyled list-inline">
                                <li className="dropdown dropdown-small">
                                    <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#">
                                        <span className="key">currency :</span>
                                        <span className="value">USD </span>
                                        <b className="caret"></b>
                                    </a>
                                    <ul className="dropdown-menu">
                                        {
                                            this.state.currencies.map(function(cur)
                                            {
                                                return <li key={cur.key}><a href="#">{cur.name}</a></li>;                                                     
                                            })
                                        }
                                    </ul>
                                </li>
                                <li className="dropdown dropdown-small">
                                    <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#">
                                        <span className="key">language :</span>
                                        <span className="value">English </span>
                                        <b className="caret"></b>
                                    </a>
                                    <ul className="dropdown-menu">
                                        {
                                            this.state.languages.map(function(lan)
                                            {
                                                return <li key={lan.key}><a href="#">{lan.name}</a></li>;                                                     
                                            })
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>            
        );
    }
}
