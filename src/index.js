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
const authority_matches = [1, 8, 10, 11, 12, 32, 33, 36];
var authority_points = 0;
const self_sufficiency_matches = [17, 21, 22, 31, 34, 39];
var self_sufficiency_points = 0;
const superiority_matches = [4, 9, 26, 37, 40];
var superiority_points = 0;
const exhibitionism_matches = [2, 3, 7, 20, 28, 30, 38];
var exhibitionism_points = 0;
const exploitativeness_matches = [6, 13, 16, 23, 35];
var exploitativeness_points = 0;
const vanity_matches = [15, 19, 29];
var vanity_points = 0;
const entitlement_matches = [5, 14, 18, 24, 25, 27];
var entitlement_points = 0;
const points_matches = ["A", "A", "A", "B", "B", "A", "B", "A", "B", "B", "A", "A", "A", "A", "B", "A", " B", "B", "B", "B", "A", "B", "B", "A", "A", "B", "A", "B", "A", "A", "A", "B", "A", "A", "B", "A", "A", "A", "A", "B"];
var points = 0;

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
    if (this.state.current_view === 0){
      let eyeContainer = document.getElementById("eyeContainer");
      eyeContainer.classList.add("top");
    }
    this.setState({current_view: next_view});
  }
  handleAnswer(i, a){
    const answers = this.state.answers.slice();
    answers[i-1] = a;
    this.setState({answers: answers});
    console.log(this.state.answers);
  }

  render(){
    // This method is ugly, since CSSTransition plays weirdly - cannot loop.
    // This is a quick fix, will find a better way.
    var current_view = this.state.current_view;
    return (<div>
      <Eye value={g_rot}/>
      <TransitionGroup id="transitionGroup">
      {(current_view === 0) && (<CSSTransition key={0} timeout={1000} classNames="pageTransition" unmountOnExit><Front next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 1) && (<CSSTransition key={1} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={1} answer={(a) => this.handleAnswer(1, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 2) && (<CSSTransition key={2} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={2} answer={(a) => this.handleAnswer(2, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 3) && (<CSSTransition key={3} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={3} answer={(a) => this.handleAnswer(3, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 4) && (<CSSTransition key={4} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={4} answer={(a) => this.handleAnswer(4, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 5) && (<CSSTransition key={5} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={5} answer={(a) => this.handleAnswer(5, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 6) && (<CSSTransition key={6} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={6} answer={(a) => this.handleAnswer(6, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 7) && (<CSSTransition key={7} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={7} answer={(a) => this.handleAnswer(7, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 8) && (<CSSTransition key={8} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={8} answer={(a) => this.handleAnswer(8, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 9) && (<CSSTransition key={9} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={9} answer={(a) => this.handleAnswer(9, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 10) && (<CSSTransition key={10} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={10} answer={(a) => this.handleAnswer(10, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 11) && (<CSSTransition key={11} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={11} answer={(a) => this.handleAnswer(11, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 12) && (<CSSTransition key={12} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={12} answer={(a) => this.handleAnswer(12, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 13) && (<CSSTransition key={13} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={13} answer={(a) => this.handleAnswer(13, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 14) && (<CSSTransition key={14} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={14} answer={(a) => this.handleAnswer(14, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 15) && (<CSSTransition key={15} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={15} answer={(a) => this.handleAnswer(15, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 16) && (<CSSTransition key={16} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={16} answer={(a) => this.handleAnswer(16, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 17) && (<CSSTransition key={17} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={17} answer={(a) => this.handleAnswer(17, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 18) && (<CSSTransition key={18} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={18} answer={(a) => this.handleAnswer(18, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 19) && (<CSSTransition key={19} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={19} answer={(a) => this.handleAnswer(19, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 20) && (<CSSTransition key={20} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={20} answer={(a) => this.handleAnswer(20, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 21) && (<CSSTransition key={21} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={21} answer={(a) => this.handleAnswer(21, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 22) && (<CSSTransition key={22} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={22} answer={(a) => this.handleAnswer(22, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 23) && (<CSSTransition key={23} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={23} answer={(a) => this.handleAnswer(23, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 24) && (<CSSTransition key={24} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={24} answer={(a) => this.handleAnswer(24, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 25) && (<CSSTransition key={25} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={25} answer={(a) => this.handleAnswer(25, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 26) && (<CSSTransition key={26} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={26} answer={(a) => this.handleAnswer(26, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 27) && (<CSSTransition key={27} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={27} answer={(a) => this.handleAnswer(27, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 28) && (<CSSTransition key={28} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={28} answer={(a) => this.handleAnswer(28, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 29) && (<CSSTransition key={29} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={29} answer={(a) => this.handleAnswer(29, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 30) && (<CSSTransition key={30} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={30} answer={(a) => this.handleAnswer(30, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 31) && (<CSSTransition key={31} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={31} answer={(a) => this.handleAnswer(31, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 32) && (<CSSTransition key={32} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={32} answer={(a) => this.handleAnswer(32, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 33) && (<CSSTransition key={33} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={33} answer={(a) => this.handleAnswer(33, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 34) && (<CSSTransition key={34} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={34} answer={(a) => this.handleAnswer(34, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 35) && (<CSSTransition key={35} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={35} answer={(a) => this.handleAnswer(35, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 36) && (<CSSTransition key={36} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={36} answer={(a) => this.handleAnswer(36, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 37) && (<CSSTransition key={37} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={37} answer={(a) => this.handleAnswer(37, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 38) && (<CSSTransition key={38} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={38} answer={(a) => this.handleAnswer(38, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 39) && (<CSSTransition key={39} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={39} answer={(a) => this.handleAnswer(39, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 40) && (<CSSTransition key={40} timeout={1000} classNames="pageTransition" unmountOnExit><Questions value={40} answer={(a) => this.handleAnswer(40, a)} next = {()=> this.handleNext()}/></CSSTransition>)}
      {(current_view === 41) && (<CSSTransition key={41} timeout={1000} classNames="pageTransition" unmountOnExit><Results answers={this.state.answers}/></CSSTransition>)}
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
    if ( apparent_rot < 180 && (new_rot > (apparent_rot + 180)) ) { this.setState({rot: (this.state.rot - 360)})}
    if ( apparent_rot >= 180 && (new_rot <= (apparent_rot - 180)) ){ this.setState({rot: (this.state.rot + 360)})}
    this.setState({rot: (this.state.rot+ new_rot - apparent_rot)}   );
    g_rot = this.state.rot;
    // console.log(this.state.rot);
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
    if (event.target.value === "A"){
      let bLabel = document.getElementById("bLabel");
      bLabel.classList.add("fadeLabel");
    } else if (event.target.value === "B"){
      let aLabel = document.getElementById("aLabel");
      aLabel.classList.add("fadeLabel");
    }
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
        <h1>{this.props.value}</h1>
        <div onChange={this.onChangeValue} className="answerContainer">
          <label id="aLabel" className="answerLabel" htmlFor="A">
            <input className="hidden" type="radio" value="A" id="A" name={this.props.value} required/>{this.getA()}
          </label>
          <label id="bLabel" className="answerLabel" htmlFor="B">
            <input className="hidden" type="radio" value="B" id="B" name={this.props.value}/>{this.getB()}
          </label>
        </div>
        {/*<button onClick={() => this.handleNext()}>submit</button>*/}
      </div>
    );
  }
}

class Results extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loaded: 0,
    }
  }
  calculateResults(){
    for (var i = 1; i<41; i++){
      console.log(i);
      if (this.props.answers[i-1]===points_matches[i-1]){
        points++;
        if (authority_matches.includes(i)){
          authority_points++;
        }
        if (self_sufficiency_matches.includes(i)){
          self_sufficiency_points++;
        }
        if (superiority_matches.includes(i)){
          superiority_points++;
        }
        if (exhibitionism_matches.includes(i)){
          exhibitionism_points++;
        }
        if (exploitativeness_matches.includes(i)){
          exploitativeness_points++;
        }
        if (vanity_matches.includes(i)){
          vanity_points++;
        }
        if (entitlement_matches.includes(i)){
          entitlement_points++;
        }
      }
      console.log(points);
    }
    // Just to seem more natural
    setTimeout(() => {
      this.setState({loaded: 1});
    }, 3000);
  }
  componentDidMount(){
    this.calculateResults();
  }
  render(){
    return(
      <div className="page">
        {(this.state.loaded ===0) &&(
          <SplitText copy="calculating your results" role="heading" />
        )}
        {(this.state.loaded ===1) &&(
          <div>
            <div>narcissitic personality inventory scores</div>
            <div>total : {points} out of 40</div>
            <div>authority : {authority_points} out of 8</div>
            <div>self sufficiency: {self_sufficiency_points} out of 6</div>
            <div>superiority : {superiority_points} out of 5</div>
            <div>exhibitionism : {exhibitionism_points} out of 7</div>
            <div>exploitativeness : {exploitativeness_points} out of 5</div>
            <div>vanity : {vanity_points} out of 3</div>
            <div>entitlement : {entitlement_points} out of 6</div>
          </div>
        )}
      </div>
    );
  }
}

// From https://fossheim.io/writing/posts/react-text-splitting/
class SplitText extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <span aria-label={this.props.copy} role={this.props.role}>
        {this.props.copy.split("").map(function(char, index){
            return <span aria-hidden="true" key={index}>{char}</span>;
        })}
        </span>
    );
}
}


// ========================================

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
