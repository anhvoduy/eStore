import React from 'react';

export class MainMenuArea extends React.Component {
    constructor(){
        super();
        this.state = {
            location: window.location,
            menu: [
                {id: 1, title: 'Home', url: 'index.html', active: false},                
                {id: 2, title: 'Shop page', url: 'shop.html', active: false},
                {id: 3, title: 'Single product', url: 'single-product.html', active: false},
                {id: 4, title: 'Cart', url: 'cart.html', active: false},
                {id: 5, title: 'Checkout', url: 'checkout.html', active: false},
                {id: 6, title: 'Category', url: 'category.html', active: false},
                {id: 7, title: 'Others', url: 'other.html', active: false},
                {id: 8, title: 'Contact', url: 'contact.html', active: false}
            ]
        }
    }

    componentWillMount() {
        console.log('- componentWillMount()');
        this.state.menu.forEach(function(item, index) {
            if(this.state.location.href.indexOf(item.url)>=0){                
                item.active = true;
            }
        }, this);
    }
    
    render() {        
        //debugger
        return (
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
                            {
                                this.state.menu.map(function(item)
                                {
                                    return <li key={item.id} className={item.active == true ? 'active': ''}><a href={item.url}>{item.title}</a></li>;
                                })
                            }

                            {/* <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="shop.html">Shop page</a></li>
                            <li><a href="single-product.html">Single product</a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="#">Category</a></li>
                            <li><a href="#">Others</a></li>
                            <li><a href="#">Contact</a></li> */}
                        </ul>
                    </div>  
                </div>
            </div>
        );
    }
};