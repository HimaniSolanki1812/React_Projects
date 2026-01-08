import React,{ Component } from "react";
class StringState extends Component{
    constructor(){
        super();
        this.state={
            name: "",
            email: "",
            age: ""
        };
    }

    handleNameChange=(e)=>{
        this.setState({name:e.target.value});
};
handleEmailChange=(e)=>{
    this.setState({email:e.target.value});
};
handleAgeChange = (e) => {
    this.setState({ age: e.target.value });
};

consolelog = () => {
    console.log(this.state);
};

    render(){
        const { name, email, age } = this.state;
        return (
            <>
                <input type="text"
                value={name}
                onChange={this.handleNameChange} />
                <input type="text"
                value={email}
                onChange={this.handleEmailChange} />
                <input type="text"
                value={age}
                onChange={this.handleAgeChange} />
                <button onClick={this.consolelog}>Click me</button>
                <h2>Name: {name}</h2>
                <h2>Email: {email}</h2>
                <h2>Age: {age}</h2>
            </>
        );
    }


}
export default StringState;