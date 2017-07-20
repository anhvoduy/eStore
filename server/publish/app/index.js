(function(){
  'use strict';
  // var data = {
  //   title: 'Our Short Story',
  //   imageUrl: 'images/bg.jpg',
  //   desc: 'Lorem ipsum dolor sit amet.',
  //   moreInfo: 'More about info ...'
  // };  
    
  var HeaderArea = React.createClass({
    getInitialState: function(){
      return {};
    },
    componentDidMount: function(){
      var component = this;
      return $.get('http://localhost:8080/api/', function(data){
        //console.log(data);
        component.setState(data);
      });
    },
    render: function(){
      return (
        <div>
          <h1>Hello, React!</h1>
          <p>{this.state.message}</p>
        </div>        
      );
    }
  });

  ReactDOM.render(<HeaderArea />, document.getElementById('root'));
})();