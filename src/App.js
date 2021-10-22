import React, {Component} from "react";
import LifeCyclesSamle from "./LifeCyclesSample";
import ErrorBoundary from "./ErrorBoundary";

//import MyComponent from "./MyComponent";
//import Counter from "./Counter";
//import Say from "./Say";
//import EventPractice from "./EventPractice";
//import EventPracticeClass from "./EventPracticeClass";
//import EventPracticeProto from "./EventPracticeProto";
//import VaildationSample from "./VaildationSample"; 
//import ScrollBox from "./ScrollBox";
//import IterationSamle from "./IterationSample";

//랜덤 색상을 생성합니디.
 function getRandomColor() {
   return '#' + Math.floor(Math.random() * 16777215).toString(16);
 }

//const App = () => { 함수형
  class App extends Component{
    state ={
      color: '#000000'
    }

    handleClick = () => {
      this.setState({
        color: getRandomColor()
      });
    }

    render(){
    return (
    //<MyComponent name={"혜원아 사랑해"} 
    //favoriteNumber={1}>
    //  리액트</MyComponent>,
    //  <Counter />,
    //  <Say />,
    //<EventPracticeClass />
    //<EventPractice />
    //<EventPracticeProto />
    //<VaildationSample />
    /*<div>
      <ScrollBox ref={(ref) => this.scrollBox=ref}/>
    </div>*/
      /*<div>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={()=> this.scrollBox.scrollToBottom()}>맨 밑으로</button>
      </div>*/
     // <IterationSamle />  

        <div>
          <button onClick={this.handleClick}>랜덤 색상</button>
          <ErrorBoundary>
          <LifeCyclesSamle color={this.state.color}/>
          </ErrorBoundary>
        </div>
      );
    }
  }

export default App;
