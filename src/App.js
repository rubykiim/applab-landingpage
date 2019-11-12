import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <img
        className="image"
        src="https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      ></img>

      <div className="logo">
        <p className="EcoBox">EcoBox</p>
      </div>
      
      <div className="nav_bar">
        <h3>Contact Us</h3>
      </div>

      <div className="slogan_1">
        <p>Love to shop online,</p>
        <p>but still want to be eco-friendly?</p>
      </div>

      <div className="slogan_2">
        <p> <span>EcoBox</span>, your best choice for reusable packaging</p>
      </div>
      <Input></Input>
    </div>
  );
}

function Input() {
  return (
    <input placeholder=" Enter your email to learn more" type="text" />
  );
}

function Button() {
  return (
    <button></button>
  );
}

export default App;
