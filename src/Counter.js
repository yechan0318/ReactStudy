import React, { Component } from "react";

class Counter extends Component {
    /*constructor(props){
        super(props);
        //state의 초깃값 설정하기
        this.state = {
         number: 0 ,
         fixedNumber: 0
        };
    }*/
    state = {
        number: 0,
        fixedNumber: 0
    };

    render (){
        const {number, fixedNumber} = this.state; // state를 조회할 때는 this.state로 조회합니다.
        return(
            <div>
                <h1>{number}</h1>
                <h2>{fixedNumber}</h2>
                <button 
                //onClick을 통해 버튼이 클릭되었을 떄 호출할 함수를 지정합니다.
                onClick={() => {
                    //this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
                    //this.setState({number: number + 1});
                    //this.setState(prevState => {
                      //  return{
                        //    number: prevState.number + 1
                        //};
                    //});
                    //위 코드와 아래 코드는 완전히 똑같은 기능을 합니다.
                    //아래 코드는 함수에서 바로 객체를 반환한다는 의미입니다.
                    //</div>this.setState(prevState => ({
                      //  number: prevState.number + 1
                    //}));
                    this.setState(
                    {
                        number: number +1
                    },
                    () => {
                        console.log('방금 setState가 호출되었습니다.');
                        console.log(this.state);   
                    }                 
                        );
                }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;