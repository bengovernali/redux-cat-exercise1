import React, { Component } from "react";
import "./App.css";

/*
import NapButton from "./components/napButton";
import EatButton from "./components/eatButton";
import PlayButton from "./components/playButton";
*/
import { actionNap, actionEat, actionPlay } from "./redux/actions";

class App extends Component {
  /*
  handleNap = () => {
    actionNap();
  };

  handleEat = () => {
    actionEat();
  };

  handlePlay = () => {
    actionPlay();
  };
*/
  render() {
    return (
      <div className="App">
        <button onClick={() => actionNap}>Nap</button>
        <button onClick={() => actionEat}>Eat</button>
        <button onClick={() => actionPlay}>Play</button>
      </div>
    );
  }
}

export default App;
