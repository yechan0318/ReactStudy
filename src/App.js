import React, {Component} from "react";
import ScrollBox from "./ScrollBox";

//import MyComponent from "./MyComponent";
//import Counter from "./Counter";
//import Say from "./Say";
//import EventPractice from "./EventPractice";
//import EventPracticeClass from "./EventPracticeClass";
//import EventPracticeProto from "./EventPracticeProto";
//import VaildationSample from "./VaildationSample"; 


//const App = () => { 함수형
  class App extends Component{
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
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={()=> this.scrollBox.scrollToBottom()}>맨 밑으로</button>
      </div>
      );
    };
  }

export default App;
