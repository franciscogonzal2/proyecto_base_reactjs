import React, { Component } from "react";
import "./Home.scss";
import Menu from "../../components/Menu/Menu";
import PropTypes from "prop-types";

//init props
Home.propTypes = {};

export default function Home(props = {}) {
  function render() {
    return (
      <div className="mainWrapper">
        <Menu />
      </div>
    );
  }

  return render();
}
