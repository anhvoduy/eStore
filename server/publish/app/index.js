
(function(){
  'use strict';
  var data = {
    title: 'Our Short Story',
    imageUrl: 'images/bg.jpg',
    desc: 'Lorem ipsum dolor sit amet.',
    moreInfo: 'More about info ...'
  } 

  var HeaderArea = React.createClass({
    getInitialState: function(){
      return this.props.data;
    },
    render: function(){
      return (
        <div>
          <h1>Hello, React!</h1>
          <h2>{this.state.title}</h2>
          <p>{this.state.desc}</p>
          <p>{this.state.desc}</p>
        </div>        
      );
    }
  });

  ReactDOM.render(<HeaderArea data={data} />, document.getElementById('root'));
})();