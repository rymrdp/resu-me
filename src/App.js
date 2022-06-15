import "./App.css";
import React, { Component } from "react";
import ResumeForm from "./components/ResumeForm";

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <a href="#default" className="logo">
            <img
              src="https://i.ibb.co/GFdpmW3/logo-res-0-33x.png"
              alt="logo"
            ></img>
          </a>
          <div className="header-right">
            <a className="active" href="#home">
              Home
            </a>
            <a href="https://github.com/rymrdp/resu-me" target="_blank">
              Contact
            </a>
            <a href="https://github.com/rymrdp/resu-me" target="_blank">
              About
            </a>
          </div>
        </div>
        <ResumeForm />
      </div>
    );
  }
}

export default App;
