import React, { Component } from "react";
import ReactDOM from "react-dom";
import Routes from "./js/Routes/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {

  function render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }

  return render();
}

const wrapper = document.getElementById("root");
ReactDOM.render(<App />, wrapper);