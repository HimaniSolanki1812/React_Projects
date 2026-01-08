import React,{ Component } from "react";

class RenderCond extends Component{
    constructor(props){
        super(props);
        this.state={
            textcolor: "black",
            backcolor:"Blue"
        };
    }

        toggle = () => {
            this.setState({isOn: !this.state.isOn});
        };

        setTextColor = (color) => {
            this.setState({ textcolor: color });
        };

        setBackColor = (color) => {
            this.setState({ backcolor: color });
        };

        render (){
            const { isOn, textcolor, backcolor } = this.state;
            const containerStyle = { color: textcolor, backgroundColor: backcolor, padding: '1rem' };

            return (
                <div style={containerStyle}>
                    <button onClick={this.toggle}>
                        {isOn ? "ON" : "OFF"}
                    </button>

                    {/* First row — change text color */}
                    <div style={{ marginTop: '1rem' }}>
                        <button onClick={() => this.setTextColor('green')}>Green</button>
                        <button onClick={() => this.setTextColor('blue')}>Blue</button>
                        <button onClick={() => this.setTextColor('yellow')}>Yellow</button>
                        <button onClick={() => this.setTextColor('red')}>Red</button>
                    </div>

                    {/* Second row — change background color */}
                    <div style={{ marginTop: '1rem' }}>
                        <button onClick={() => this.setBackColor('green')}>Green</button>
                        <button onClick={() => this.setBackColor('blue')}>Blue</button>
                        <button onClick={() => this.setBackColor('yellow')}>Yellow</button>
                        <button onClick={() => this.setBackColor('red')}>Red</button>
                    </div>

                    <p>Status : {isOn ? "Active" : "Inactive"}</p>
                </div>
            );
        };

    }


export default RenderCond;