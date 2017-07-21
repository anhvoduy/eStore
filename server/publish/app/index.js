(function(){
  'use strict';
  
  function Welcome (){
    return (
      <div>
        <h1>Hello, React!</h1>
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.club}</p>
        <p>{this.state.age}</p>
      </div>        
    );
  }

  function HeaderArea () {
    return (
      <div className="header-area">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="user-menu">
                        <ul>
                            <li><a href="#"><i className="fa fa-user"></i> My Account</a></li>
                            <li><a href="#"><i className="fa fa-heart"></i> Wishlist</a></li>
                            <li><a href="cart.html"><i className="fa fa-user"></i> My Cart</a></li>
                            <li><a href="checkout.html"><i className="fa fa-user"></i> Checkout</a></li>
                            <li><a href="#"><i className="fa fa-user"></i> Login</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="header-right">
                        <ul className="list-unstyled list-inline">
                            <li className="dropdown dropdown-small">
                                <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#">
                                  <span className="key">currency :</span>
                                  <span className="value">USD </span><b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu">
                                  <li><a href="#">USD</a></li>
                                  <li><a href="#">INR</a></li>
                                  <li><a href="#">GBP</a></li>
                                </ul>
                            </li>

                            <li className="dropdown dropdown-small">
                                <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#">
                                  <span className="key">language :</span>
                                  <span className="value">English </span><b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu">
                                  <li><a href="#">English</a></li>
                                  <li><a href="#">French</a></li>
                                  <li><a href="#">German</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  };

  var IndexPage = React.createClass({
    getInitialState: function(){
      console.log('... getInitialState() ...');
      return {};
    },
    componentWillMount: function(){
      console.log('... componentWillMount() ...');
    },
    componentDidMount: function(){
      console.log('... componentDidMount() ...');
      var component = this;      
      ProfileService.getData().then(function(data){
        component.setState(data);
      });
    },    
    render: HeaderArea //Welcome
  });

  ReactDOM.render(<IndexPage />, document.getElementById('root'));
})();