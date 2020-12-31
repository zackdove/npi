import React from 'react';
import ReactDOM from 'react-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';



import './index.css';
import './eyes.js';

var g_rot = 90;

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
      <TransitionGroup id="transitionGroup">
      {(current_view === 0) && (<CSSTransition key={1} timeout={700} classNames="pageTransition" unmountOnExit><Front onClick = {()=> this.handleClick()}/></CSSTransition>)}
      {(current_view === 1) && (<CSSTransition key={2} timeout={700} classNames="pageTransition" unmountOnExit><Questions /></CSSTransition>)}
      </TransitionGroup>
      </div>
    );
  }
}



class Eye extends React.Component{
  constructor(props){
    super(props);
    this.state = {rot: g_rot};
    this.containerRef = React.createRef();
  }

  handleMouseMove(e){
    // console.log(e.pageX);
    let rect = this.containerRef.current.getBoundingClientRect();
    // console.log(rect.width)
    let x = (rect.left) + (rect.width/2);
    let y = (rect.top) + (rect.height/2);
    var rad = Math.atan2(e.pageX - x, e.pageY - y);
    let new_rot = ((rad * (180 / Math.PI) * -1) + 180 -45);
    new_rot = ((new_rot % 360) + 360) % 360;
    var apparent_rot;
    // this.rot = this.rot || 0;
    apparent_rot = this.state.rot % 360;
    if ( apparent_rot < 0 ) { apparent_rot += 360; }
    if ( apparent_rot < 180 && (new_rot > (apparent_rot + 180)) ) { this.state.rot -= 360; }
    if ( apparent_rot >= 180 && (new_rot <= (apparent_rot - 180)) ) { this.state.rot += 360; }
    this.setState({rot: (this.state.rot+ new_rot - apparent_rot)}   );
    g_rot = this.state.rot;
    console.log(this.state.rot);
  }
  render(){
    // var {rot} = this.state;
    return(
      <div id="eyeContainer" className='eyeContainer' ref={this.containerRef} onMouseMove={this.handleMouseMove.bind(this)}>
        <div className='eye'>
          <div className='pupil' id='pupil' style={{transform: "rotate("+this.state.rot+"deg)"}}></div>
        </div>
      </div>
    );
  }
}

class Front extends React.Component {
  render() {
    return (
      <div className="page">
        <Eye value={g_rot}/>
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
      <Eye value={g_rot}/>
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
