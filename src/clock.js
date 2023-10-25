// import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
// // import ReactDOM from "react-dom/client";

class Clock extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount(){ // component 출력물이 DOM에 렌더링 후 실행
        this.timerID = setInterval(
            ()=> this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }


    render(){
        return(
            <div>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

// Clock 의 실행 순서
// constructor -> render -> componentDidMount -> tick(setState)
// -> render
export {Clock}
