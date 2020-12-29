import React from 'react';
import ReactDOM from 'react-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './index.css';


class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      current_view: 0,
    }
  }
  handleClick(){
    // alert("hello");
    this.setState({current_view: 1});
  }
  handleViews () {
    switch(this.state.current_view){
      case 0:
        return <Front onClick = {()=> this.handleClick()}/>
      case 1:
        return <Questions />
    }
  }
  render(){
    const current_view = this.state.current_view;
    return (
      <TransitionGroup component={null}>
        {this.handleViews()}
    </TransitionGroup>
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
