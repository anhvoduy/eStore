(function(){
  'use strict';  
  var HeaderArea = React.createClass({
    getInitialState: function(){
      console.log('... getInitialState() ...');
      return {};
    },
    componentDidMount: function(){
      var component = this;      
      ProfileService.getData().then(function(data){
        component.setState(data);
      });
    },
    render: function(){
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
  });

  ReactDOM.render(<HeaderArea />, document.getElementById('root'));
})();