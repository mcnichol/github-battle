var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');

class App extends React.Component{
   constructor(props){
      super(props);
   }

   render(){
      return (
         <div>
            <img
               src = {this.props.img}
               style = {{height: 100, width:100}}
            />
            <h1>Name: {this.props.name}</h1>
            <h3>Username: {this.props.username}</h3>
         </div>
      )
   }
}

ReactDOM.render(
   <App
      name='Michael McNichol'
      username = 'mcnichol'
      img={'https://www.gravatar.com/avatar/3336a482b27f2612f895cd9f55015661?r=PG&s=200'}
   />,
   document.getElementById('app'));
