import React from 'react';

export class ProductContentAreaCheckout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    componentWillMount() {        
    }

    render() {                
        return (                        
            <div className="product-content-right">
                <div className="woocommerce">
                    <div className="woocommerce-info">Returning customer? 
                        <a  className="showlogin" 
                            data-toggle="collapse" 
                            href="#login-form-wrap" 
                            aria-expanded="false" 
                            aria-controls="login-form-wrap">Click here to login</a>
                    </div>
                    <form id="login-form-wrap" className="login collapse" method="post">
                        <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing &amp; Shipping section.</p>
                        <p className="form-row form-row-first">
                            <label htmlFor="username">Username or email<span className="required">*</span></label>
                            <input  type="text" 
                                    id="username" 
                                    name="username" 
                                    className="input-text" />
                        </p>
                        <p className="form-row form-row-last">
                            <label htmlFor="password">Password <span className="required">*</span></label>
                            <input type="password" id="password" name="password" className="input-text" />
                        </p>
                        <div className="clear"></div>
                        <p className="form-row">
                            <input type="submit" value="Login" name="login" className="button" />
                            <label className="inline" htmlFor="rememberme">
                                <input type="checkbox" value="forever" id="rememberme" name="rememberme" /> Remember me 
                            </label>
                        </p>
                        <p className="lost_password">
                            <a href="#">Lost your password?</a>
                        </p>
                        <div className="clear"></div>
                    </form>
                    <div className="woocommerce-info">Have a coupon? 
                        <a  className="showcoupon" 
                            data-toggle="collapse" 
                            href="#coupon-collapse-wrap" 
                            aria-expanded="false" 
                            aria-controls="coupon-collapse-wrap">
                        Click here to enter your code
                        </a>
                    </div>
                    <form id="coupon-collapse-wrap" method="post" className="checkout_coupon collapse">
                        <p className="form-row form-row-first">
                            <input  id="coupon_code"
                                    type="text" 
                                    value="" 
                                    placeholder="Coupon code" 
                                    className="input-text" 
                                    name="coupon_code" />
                        </p>
                        <p className="form-row form-row-last">
                            <input  type="submit" 
                                    value="Apply Coupon" 
                                    name="apply_coupon" 
                                    className="button" />
                        </p>
                        <div className="clear"></div>
                    </form>

                    <BillingDetailCheckout />
                </div>                       
            </div>            
        );
    }

    componentDidMount(){        
    }
};


class BillingDetailCheckout extends React.Component {
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

    render(){
        return (
        <form encType="multipart/form-data" action="#" className="checkout" method="post" name="checkout">
            <div id="customer_details" className="col2-set">
                <div className="col-1">
                    <div className="woocommerce-billing-fields">
                        <h3>Billing Details</h3>
                        <p id="billing_country_field" className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated">
                            <label className="" htmlFor="billing_country">Country 
                                <abbr title="required" className="required">*</abbr>
                            </label>
                            <select className="country_to_state country_select" id="billing_country" name="billing_country">
                                <option value="">Select a country…</option>                                    
                                <option value="BS">Bahamas</option>                                    
                                <option value="GB">United Kingdom (UK)</option>
                                <option value="US">United States (US)</option>
                                <option value="UY">Uruguay</option>
                                <option value="UZ">Uzbekistan</option>
                                <option value="VU">Vanuatu</option>
                                <option value="VA">Vatican</option>
                                <option value="VE">Venezuela</option>
                                <option value="VN">Vietnam</option>                                
                                <option value="ZM">Zambia</option>
                                <option value="ZW">Zimbabwe</option>
                            </select>
                        </p>
        
                        <p id="billing_first_name_field" className="form-row form-row-first validate-required">
                            <label className="" htmlFor="billing_first_name">First Name <abbr title="required" className="required">*</abbr>
                            </label>
                            <input type="text" value="" placeholder="" id="billing_first_name" name="billing_first_name" className="input-text" />
                        </p>
        
                        <p id="billing_last_name_field" className="form-row form-row-last validate-required">
                            <label className="" htmlFor="billing_last_name">Last Name <abbr title="required" className="required">*</abbr>
                            </label>
                            <input type="text" value="" placeholder="" id="billing_last_name" name="billing_last_name" className="input-text" />
                        </p>
                        <div className="clear"></div>
        
                        <p id="billing_company_field" className="form-row form-row-wide">
                            <label className="" htmlFor="billing_company">Company Name</label>
                            <input type="text" value="" placeholder="" id="billing_company" name="billing_company" className="input-text" />
                        </p>
        
                        <p id="billing_address_1_field" className="form-row form-row-wide address-field validate-required">
                            <label className="" htmlFor="billing_address_1">Address <abbr title="required" className="required">*</abbr>
                            </label>
                            <input type="text" value="" placeholder="Street address" id="billing_address_1" name="billing_address_1" className="input-text" />
                        </p>
        
                        <p id="billing_address_2_field" className="form-row form-row-wide address-field">
                            <input type="text" value="" placeholder="Apartment, suite, unit etc. (optional)" id="billing_address_2" name="billing_address_2" className="input-text" />
                        </p>
        
                        <p id="billing_city_field" className="form-row form-row-wide address-field validate-required" data-o_className="form-row form-row-wide address-field validate-required">
                            <label className="" htmlFor="billing_city">Town / City <abbr title="required" className="required">*</abbr>
                            </label>
                            <input type="text" value="" placeholder="Town / City" id="billing_city" name="billing_city" className="input-text" />
                        </p>
        
                        <p id="billing_state_field" className="form-row form-row-first address-field validate-state" data-o_className="form-row form-row-first address-field validate-state">
                            <label className="" htmlFor="billing_state">County</label>
                            <input type="text" id="billing_state" name="billing_state" placeholder="State / County" value="" className="input-text" />
                        </p>
                        <p id="billing_postcode_field" className="form-row form-row-last address-field validate-required validate-postcode" data-o_className="form-row form-row-last address-field validate-required validate-postcode">
                            <label className="" htmlFor="billing_postcode">Postcode <abbr title="required" className="required">*</abbr>
                            </label>
                            <input type="text" value="" placeholder="Postcode / Zip" id="billing_postcode" name="billing_postcode" className="input-text " />
                        </p>
        
                        <div className="clear"></div>
        
                        <p id="billing_email_field" className="form-row form-row-first validate-required validate-email">
                            <label className="" htmlFor="billing_email">Email Address <abbr title="required" className="required">*</abbr>
                            </label>
                            <input type="text" value="" placeholder="" id="billing_email" name="billing_email" className="input-text " />
                        </p>
        
                        <p id="billing_phone_field" className="form-row form-row-last validate-required validate-phone">
                            <label className="" htmlFor="billing_phone">Phone <abbr title="required" className="required">*</abbr>
                            </label>
                            <input type="text" value="" placeholder="" id="billing_phone" name="billing_phone" className="input-text " />
                        </p>
                        <div className="clear"></div>
        
                        <div className="create-account">
                            <p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                            <p id="account_password_field" className="form-row validate-required">
                                <label className="" htmlFor="account_password">Account password <abbr title="required" className="required">*</abbr>
                                </label>
                                <input type="password" value="" placeholder="Password" id="account_password" name="account_password" className="input-text" />
                            </p>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
        
                <div className="col-2">
                    <div className="woocommerce-shipping-fields">
                        <h3 id="ship-to-different-address">
                            <label className="checkbox" htmlFor="ship-to-different-address-checkbox">Ship to a different address?</label>
                            <input  id="ship-to-different-address-checkbox"
                                    type="checkbox" 
                                    name="ship_to_different_address" 
                                    checked="checked" 
                                    className="input-checkbox"  
                                    value={this.state.value} 
                                    onChange={this.handleChange} />
                        </h3>
                        <div className="shipping_address" style={{ display: 'block' }}>
                            <p id="shipping_country_field" className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated">
                                <label className="" htmlFor="shipping_country">Country <abbr title="required" className="required">*</abbr>
                                </label>
                                <select className="country_to_state country_select" id="shipping_country" name="shipping_country">
                                    <option value="">Select a country…</option>                                    
                                    <option value="BS">Bahamas</option>                                    
                                    <option value="GB">United Kingdom (UK)</option>
                                    <option value="US">United States (US)</option>
                                    <option value="UY">Uruguay</option>
                                    <option value="UZ">Uzbekistan</option>
                                    <option value="VU">Vanuatu</option>
                                    <option value="VA">Vatican</option>
                                    <option value="VE">Venezuela</option>
                                    <option value="VN">Vietnam</option>                                    
                                    <option value="ZM">Zambia</option>
                                    <option value="ZW">Zimbabwe</option>
                                </select>
                            </p>

                            <p id="shipping_first_name_field" className="form-row form-row-first validate-required">
                                <label className="" htmlFor="shipping_first_name">First Name <abbr title="required" className="required">*</abbr>
                                </label>
                                <input type="text" value="" placeholder="" id="shipping_first_name" name="shipping_first_name" className="input-text " />
                            </p>
        
                            <p id="shipping_last_name_field" className="form-row form-row-last validate-required">
                                <label className="" htmlFor="shipping_last_name">Last Name <abbr title="required" className="required">*</abbr>
                                </label>
                                <input type="text" value="" placeholder="" id="shipping_last_name" name="shipping_last_name" className="input-text " />
                            </p>
                            <div className="clear"></div>
        
                            <p id="shipping_company_field" className="form-row form-row-wide">
                                <label className="" htmlFor="shipping_company">Company Name</label>
                                <input type="text" value="" placeholder="" id="shipping_company" name="shipping_company" className="input-text " />
                            </p>
        
                            <p id="shipping_address_1_field" className="form-row form-row-wide address-field validate-required">
                                <label className="" htmlFor="shipping_address_1">Address <abbr title="required" className="required">*</abbr>
                                </label>
                                <input type="text" value="" placeholder="Street address" id="shipping_address_1" name="shipping_address_1" className="input-text " />
                            </p>
        
                            <p id="shipping_address_2_field" className="form-row form-row-wide address-field">
                                <input type="text" value="" placeholder="Apartment, suite, unit etc. (optional)" id="shipping_address_2" name="shipping_address_2" className="input-text " />
                            </p>
        
                            <p id="shipping_city_field" className="form-row form-row-wide address-field validate-required" data-o_className="form-row form-row-wide address-field validate-required">
                                <label className="" htmlFor="shipping_city">Town / City <abbr title="required" className="required">*</abbr>
                                </label>
                                <input type="text" value="" placeholder="Town / City" id="shipping_city" name="shipping_city" className="input-text " />
                            </p>
        
                            <p id="shipping_state_field" className="form-row form-row-first address-field validate-state" data-o_className="form-row form-row-first address-field validate-state">
                                <label className="" htmlFor="shipping_state">County</label>
                                <input type="text" id="shipping_state" name="shipping_state" placeholder="State / County" value="" className="input-text " />
                            </p>
                            <p id="shipping_postcode_field" className="form-row form-row-last address-field validate-required validate-postcode" data-o_className="form-row form-row-last address-field validate-required validate-postcode">
                                <label className="" htmlFor="shipping_postcode">Postcode <abbr title="required" className="required">*</abbr>
                                </label>
                                <input type="text" value="" placeholder="Postcode / Zip" id="shipping_postcode" name="shipping_postcode" className="input-text " />
                            </p>
                            <div className="clear"></div>
                        </div>                                            
                        <p id="order_comments_field" className="form-row notes">
                            <label className="" htmlFor="order_comments">Order Notes</label>
                            <textarea cols="5" rows="2" placeholder="Notes about your order, e.g. special notes for delivery." id="order_comments" className="input-text " name="order_comments"></textarea>
                        </p>
                    </div>
                </div>
            </div>
        
            <h3 id="order_review_heading">Your order</h3>
            <div id="order_review" style={{ position: "relative" }}>
                <table className="shop_table">
                    <thead>
                        <tr>
                            <th className="product-name">Product</th>
                            <th className="product-total">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="cart_item">
                            <td className="product-name">
                                Ship Your Idea <strong className="product-quantity">× 1</strong> </td>
                            <td className="product-total">
                                <span className="amount">£15.00</span> 
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className="cart-subtotal">
                            <th>Cart Subtotal</th>
                            <td>
                                <span className="amount">£15.00</span>
                            </td>
                        </tr>
                        <tr className="shipping">
                            <th>Shipping and Handling</th>
                            <td>Free Shipping
                                <input  id="shipping_method_0" 
                                        type="hidden" 
                                        className="shipping_method" 
                                        value="free_shipping" 
                                        data-index="0" 
                                        name="shipping_method[0]" />
                            </td>
                        </tr>
                        <tr className="order-total">
                            <th>Order Total</th>
                            <td><strong><span className="amount">£15.00</span></strong> </td>
                        </tr>
                    </tfoot>
                </table>
        
                <div id="payment">
                    <ul className="payment_methods methods">
                        <li className="payment_method_bacs">
                            <input  id="payment_method_bacs"
                                    type="radio" 
                                    data-order_button_text="" 
                                    checked="checked"                                     
                                    name="payment_method" 
                                    className="input-radio"
                                    style={{ marginRight: '5px' }}
                                    value="bacs"                                    
                                    onChange={this.handleChange} />
                            <label htmlFor="payment_method_bacs">Direct Bank Transfer </label>
                            <div className="payment_box payment_method_bacs">
                                <p> Make your payment directly into our bank account. 
                                    Please use your Order ID as the payment reference. 
                                    Your order won’t be shipped until the funds have cleared in our account.</p>
                            </div>
                        </li>
                        <li className="payment_method_cheque">
                            <input  id="payment_method_cheque" 
                                    type="radio" 
                                    data-order_button_text=""                                     
                                    name="payment_method" 
                                    className="input-radio"
                                    style={{ marginRight: '5px' }}
                                    value="cheque"
                                    onChange={this.handleChange} />
                            <label htmlFor="payment_method_cheque">Cheque Payment </label>
                            <div style={{ display: "none" }} className="payment_box payment_method_cheque">
                                <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                            </div>
                        </li>
                        <li className="payment_method_paypal">
                            <input  id="payment_method_paypal"
                                    type="radio" 
                                    data-order_button_text="Proceed to PayPal"                                     
                                    name="payment_method" 
                                    className="input-radio"
                                    style={{ marginRight: '5px' }}
                                    value="paypal" 
                                    onChange={this.handleChange} />
                            <label htmlFor="payment_method_paypal">PayPal 
                                <img alt="PayPal Acceptance Mark"                                      
                                     src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png"
                                     style={{ marginLeft: '5px' }} />
                                {/* <a  title="What is PayPal?" 
                                    onClick="javascript:window.open('https://www.paypal.com/gb/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"
                                    className="about_paypal" 
                                    href="https://www.paypal.com/gb/webapps/mpp/paypal-popup">What is PayPal?</a> */}
                                <a  title="What is PayPal?"                                     
                                    className="about_paypal" 
                                    href="https://www.paypal.com/gb/webapps/mpp/paypal-popup">What is PayPal?</a>
                            </label>
                            <div style={{ display: "none" }} className="payment_box payment_method_paypal">
                                <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                            </div>
                        </li>
                    </ul>
        
                    <div className="form-row place-order">
                        <input  id="place_order"
                                type="submit" 
                                data-value="Place order" 
                                value="Place order"  
                                name="woocommerce_checkout_place_order" 
                                className="button alt" />
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        </form>
        )
    }
}