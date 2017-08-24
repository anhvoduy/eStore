import React from 'react';
import { ReviewForm } from './ReviewForm';
import reviewService from './../services/reviewService';

export class ProductContentRightSingle extends React.Component {
    constructor(){
        super();

        // https://facebook.github.io/react/docs/forms.html
        this.state = {
            value: ''        
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }    
    
    render() {
        return (            
            <div className="product-content-right">
                <div className="product-breadcroumb">
                    <a href="">Home</a>
                    <a href="">Category Name</a>
                    <a href="">Sony Smart TV - 2015</a>
                </div>                
                <div className="row">
                    <div className="col-sm-6">
                        <div className="product-images">
                            <div className="product-main-img">
                                <img src="img/product-2.jpg" alt="" />
                            </div>
                            
                            <div className="product-gallery">
                                <img src="img/product-thumb-1.jpg" alt="" />
                                <img src="img/product-thumb-2.jpg" alt="" />
                                <img src="img/product-thumb-3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6">
                        <div className="product-inner">
                            <h2 className="product-name">Sony Smart TV - 2015</h2>
                            <div className="product-inner-price">
                                <ins>$700.00</ins><del>$100.00</del>
                            </div>    
                            
                            <form action="" className="cart">
                                <div className="quantity">
                                    <input  type="number" 
                                            size="4" 
                                            className="input-text qty text" 
                                            title="Qty"                                         
                                            name="quantity" 
                                            min="1" 
                                            step="1" 
                                            value={this.state.value}
                                            onChange={this.handleChange} />
                                </div>
                                <button className="add_to_cart_button" type="submit">Add to cart</button>
                            </form>   
                            
                            <div className="product-inner-category">
                                <p>Category: <a href="">Summer</a>. Tags: <a href="">awesome</a>, <a href="">best</a>, <a href="">sale</a>, <a href="">shoes</a>. </p>
                            </div> 
                            
                            <div role="tabpanel">
                                <ul className="product-tab" role="tablist">
                                    <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Description</a></li>
                                    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Reviews</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane fade in active" id="home">
                                        <h2>Product Description</h2>  
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.</p>

                                        <p>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.</p>
                                    </div>
                                    <div role="tabpanel" className="tab-pane fade" id="profile">
                                        <ReviewForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>               
                
                <div className="related-products-wrapper">
                    <h2 className="related-products-title">Related Products</h2>
                    <div className="related-products-carousel">
                        <div className="single-product">
                            <div className="product-f-image">
                                <img src="img/product-1.jpg" alt="" />
                                <div className="product-hover">
                                    <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                    <a href="" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                </div>
                            </div>

                            <h2><a href="">Sony Smart TV - 2015</a></h2>

                            <div className="product-carousel-price">
                                <ins>$700.00</ins> <del>$100.00</del>
                            </div> 
                        </div>
                        <div className="single-product">
                            <div className="product-f-image">
                                <img src="img/product-2.jpg" alt="" />
                                <div className="product-hover">
                                    <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                    <a href="" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                </div>
                            </div>

                            <h2><a href="">Apple new mac book 2015 March :P</a></h2>
                            <div className="product-carousel-price">
                                <ins>$899.00</ins> <del>$999.00</del>
                            </div> 
                        </div>
                        <div className="single-product">
                            <div className="product-f-image">
                                <img src="img/product-3.jpg" alt="" />
                                <div className="product-hover">
                                    <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                    <a href="" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                </div>
                            </div>

                            <h2><a href="">Apple new i phone 6</a></h2>

                            <div className="product-carousel-price">
                                <ins>$400.00</ins> <del>$425.00</del>
                            </div>                                 
                        </div>
                        <div className="single-product">
                            <div className="product-f-image">
                                <img src="img/product-4.jpg" alt="" />
                                <div className="product-hover">
                                    <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                    <a href="" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                </div>
                            </div>

                            <h2><a href="">Sony playstation microsoft</a></h2>

                            <div className="product-carousel-price">
                                <ins>$200.00</ins> <del>$225.00</del>
                            </div>                            
                        </div>
                        <div className="single-product">
                            <div className="product-f-image">
                                <img src="img/product-5.jpg" alt="" />
                                <div className="product-hover">
                                    <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                    <a href="" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                </div>
                            </div>

                            <h2><a href="">Sony Smart Air Condtion</a></h2>

                            <div className="product-carousel-price">
                                <ins>$1200.00</ins> <del>$1355.00</del>
                            </div>                                 
                        </div>
                        <div className="single-product">
                            <div className="product-f-image">
                                <img src="img/product-6.jpg" alt="" />
                                <div className="product-hover">
                                    <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                    <a href="" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                </div>
                            </div>
                            <h2>
                                <a href="">Samsung gallaxy note 4</a>
                            </h2>
                            <div className="product-carousel-price">
                                <ins>$400.00</ins>
                            </div>                            
                        </div>                                    
                    </div>
                </div>
            </div>
        );
    }
};
