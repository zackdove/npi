import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      current_view: 0,
    }
  }
  handleClick(){
    alert("hello");
  }
  render(){
    return (
      <Front onClick={ () => this.handleClick() }/>
    );
  }

}

class Front extends React.Component {
  render() {
    return (
      <div className="page">
        <h1>
          narcissism
        </h1>
        <button onClick={ () => this.props.onClick() }>
          begin test
        </button>
      </div>
    );
  }
}

class Questions extends React.Component{
  render() {
    return (
      <div>
        Questions go here
      </div>
    );
  }
}



// ========================================

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
