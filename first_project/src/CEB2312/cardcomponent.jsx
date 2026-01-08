import React,{ Component } from "react";
import "./card.css";

class CardComponent extends Component{
    render(){
        return (
        <>
        <div className="user-card">
            <img src="/images/doll.jpg" alt="User"/>
            <h1 className="user-title">Jane Doe</h1>
            <h2 className="user-subtitle">Frontend Developer</h2>
            <button className="follow-btn">Follow</button>
            <p>This is paragraph</p>
        </div>
        </>


    );
    }
}

export default CardComponent;