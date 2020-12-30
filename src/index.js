import React from 'react';
import ReactDOM from 'react-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';



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
    var current_view = this.state.current_view;
    return (<div>
      <TransitionGroup>
        {(current_view === 0) && (<CSSTransition key={1} timeout={700} classNames="pageTransition" unmountOnExit><Front onClick = {()=> this.handleClick()}/></CSSTransition>)}
        {(current_view === 1) && (<CSSTransition key={2} timeout={700} classNames="pageTransition" unmountOnExit><Questions /></CSSTransition>)}
      </TransitionGroup>
      </div>
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
      <div className="page">
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
