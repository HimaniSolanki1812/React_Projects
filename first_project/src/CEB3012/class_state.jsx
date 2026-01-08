import React,{ Component } from "react";
class StateExample extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            counter:10,
        };
    }
    incrementCount=()=>{
        this.setState({count:this.state.count+1});
    }
    decrementCounter=()=>{
        this.setState((prevstate)=>({
            counter:prevstate.counter-1,
        }));
    };
    render(){
        return(
            <>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.incrementCount}>Increment Count</button>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.decrementCounter}>Decrement Counter</button>
            </>
        );
    }





}
export default StateExample;
