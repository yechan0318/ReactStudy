import React, { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        error: false
    };
componentDidCatch(error, info){
    this.setState({
        error: true
    });
    console.log({error, info});
}
render(){
    if (this.state.error) return <div>에러가 발생핬습니다!</div>;
    return this.props.children;
    }
}

export default ErrorBoundary;
//import ErrorBoundary from "./ErrorBoundary";
/*//랜덤 색상을 생성합니디.
 function getRandomColor() {
   return '#' + Math.floor(Math.random() * 16777215).toString(16);
    class App extends Component{
    state ={
      color: '#000000'
    }

    handleClick = () => {
      this.setState({
        color: getRandomColor()
      });
    }
 }

         <div>
          <button onClick={this.handleClick}>랜덤 색상</button>
          <ErrorBoundary>
          <LifeCyclesSamle color={this.state.color}/>
          </ErrorBoundary>
        </div>
*/