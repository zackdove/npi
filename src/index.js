import React from 'react';
import ReactDOM from 'react-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';



import './index.css';


var g_rot = 17;
const a_questions = ["I have a natural talent for influencing people.",  "Modesty doesn't become me.",  "I would do almost anything on a dare.",  "When people compliment me I sometimes get embarrassed.",  "The thought of ruling the world frightens the hell out of me.",  "I can usually talk my way out of anything.",  "I prefer to blend in with the crowd.", "I will be a success.", "I am no better or worse than most people.",  "I am not sure if I would make a good leader.",  "I am assertive.", 	 "I like to have authority over other people.",  "I find it easy to manipulate people.",  "I insist upon getting the respect that is due me.",  "I don't particularly like to show off my body.",  "I can read people like a book.",   "If I feel competent I am willing to take responsibility for making decisions." , "I just want to be reasonably happy." , "My body is nothing special." 	, "I try not to be a show off." , "I always know what I am doing",  "I sometimes depend on people to get things done.",  "Sometimes I tell good stories." , "I expect a great deal from other people." , "I will never be satisfied until I get all that I deserve" , "Compliments embarrass me." , "I have a strong will to power." , "I don't care about new fads and fashions." , "I like to look at myself in the mirror." , "I really like to be the center of attention." , "I can live my life in any way I want to." , "Being an authority doesn't mean that much to me." , "I would prefer to be a leader." , "I am going to be a great person." , "People sometimes believe what I tell them." , "I am a born leader." , "I wish somebody would someday write my biography." , "I get upset when people don't notice how I look when I go out in public." , "I am more capable than other people." , "I am much like everybody else."];
const b_questions = ["I am not good at influencing people. ","I am essentially a modest person. ","I tend to be a fairly cautious person. ","I know that I am good because everybody keeps telling me so. ","If I ruled the world it would be a better place. ","I try to accept the consequences of my behavior. ","I like to be the center of attention. ","I am not too concerned about success. ","I think I am a special person. ","I see myself as a good leader. ","I wish I were more assertive. ","I don't mind following orders. ","I don't like it when I find myself manipulating people. ","I usually get the respect that I deserve. ","I like to show off my body. ","People are sometimes hard to understand. ","I like to take responsibility for making decisions. ","I want to amount to something in the eyes of the world. ","I like to look at my body. ","I will usually show off if I get the chance.  ","Sometimes I am not sure of what I am doing. ","I rarely depend on anyone else to get things done.  ","Everybody likes to hear my stories.  ","I like to do things for other people. ","I take my satisfactions as they come.  ","I like to be complimented.  ","Power for its own sake doesn't interest me. ","I like to start new fads and fashions.  ","I am not particularly interested in looking at myself in the mirror. ","It makes me uncomfortable to be the center of attention.  ","People can't always live their lives in terms of what they want.  ","People always seem to recognize my authority. ","It makes little difference to me whether I am a leader or not.  ","I hope I am going to be successful. ","I can make anybody believe anything I want them to. ","Leadership is a quality that takes a long time to develop. ","I don't like people to pry into my life for any reason. ","I don't mind blending into the crowd when I go out in public. ","There is a lot that I can learn from other people. ","I am an extraordinary person."]

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      current_view: 0,
      answers: Array(40).fill(null),
    }
  }
  handleNext(){
    // alert("hello");
    const next_view = this.state.current_view + 1;
    this.setState({current_view: next_view});
  }
  handleAnswer(i, a){
    const answers = this.state.answers.slice();
    answers[i-1] = a;
    this.setState({answers: answers});
    console.log(this.state.answers);
  }
  render(){
    var current_view = this.state.current_view;
    return (<div>
      <TransitionGroup id="transitionGroup">
      {(current_view === 0) && (<CSSTransition key={0} timeout={700} classNames="pageTransition" unmountOnExit><Front next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 1) && (<CSSTransition key={1} timeout={700} classNames="pageTransition" unmountOnExit><Questions value={1} answer={(a) => this.handleAnswer(1, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 2) && (<CSSTransition key={2} timeout={700} classNames="pageTransition" unmountOnExit><Questions value={2} answer={(a) => this.handleAnswer(2, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
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

  componentDidMount(){
    document.addEventListener("mousemove", this.moveEyes);
  }

  componentWillUnmount(){
    document.removeEventListener("mousemove", this.moveEyes);
  }

  moveEyes = (e) => {
    // console.log(e.pageX);
    let rect = document.getElementById("eyeContainer").getBoundingClientRect();
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
      <div id="eyeContainer" className='eyeContainer'>
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
      <button onClick={ () => this.props.next() }>
      begin test
      </button>
      </div>
    );
  }
}

class Questions extends React.Component{
  constructor(props){
    super(props);
    this.onChangeValue = this.onChangeValue.bind(this);
  }
  onChangeValue(event) {
    console.log(event.target.value);
    // this.props.answer = event.target.value;
    this.props.answer(event.target.value);
    this.handleNext();
  }
  getA = () => {
    // console.log(a_questions);
    return a_questions[this.props.value-1];
  }
  getB = () => {
    // console.log(a_questions);
    return b_questions[this.props.value-1];
  }
  handleNext(){
    this.props.next();
  }
  render() {
    return (
      <div className="page">
        <Eye value={g_rot}/>
        <h1>{this.props.value}.</h1>
        <div onChange={this.onChangeValue}>
          <input type="radio" value="A" name={this.props.value} required/>A. {this.getA()}
          <input type="radio" value="B" name={this.props.value}/>B. {this.getB()}
        </div>
        <button onClick={() => this.handleNext()}>submit</button>
      </div>
    );
  }
}



// ========================================

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
