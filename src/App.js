import React, {useState} from "react";
import "./App.css";
import bg1 from "../src/thisone.jpg";
import bg2 from "../src/landingpg-option2.jpg";
import Youtube from 'react-youtube';

function App() {
  return (
    <div>
      <div>
      <img
        id="image_1"
        src={bg1}
      ></img>
      <img
        id="image_2"
        src={bg2}
      ></img>
      </div>

      {/* <div className="logo">
        <p className="EcoBox">EcoBox</p>
      </div> */}

      <div className="slogan_1">
        <p>Love to <span>shop</span> online,</p>
        <p>but still want to stay <span>eco-friendly</span> <span id="qmark">?</span></p>
      </div>
      
      <div>
        <a href="#vid">
          <Button response="View solution" />
        </a>
      </div>

      <Youtube id="vid" videoId="ikXoU8VjyU0"></Youtube>

      <div className="problem">
        <p>While e-commerce shopping is convenient,
          it generates enormous amount of waste every second.
        </p>
      </div>

      <div className="solution">
        <p><span>EcoBox</span>, a reusable packaging service, 
        will be your best alternative for reducing the waste.
        </p>
      </div>

      <h1 id="instigator">Start with 1-month FREE Trial!</h1>
      <Input></Input>
      <button id="submit-btn">Submit</button>
      
    </div>
  );
}

function Input() {
  return (
    <input placeholder="Enter your email to learn more" type="text" />
  );
}

function Button(props) {
  return (
    <button className="button">{props.response}</button>
  );
}

export default App;