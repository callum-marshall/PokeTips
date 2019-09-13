import React, { Component } from 'react';
import ReactDOM from "react-dom"

const wrapper = document.getElementById("text-input")

const jsxForm = (
  <form>
    <label>FORM
      <input type="text"></input>
    </label>
    <input type="submit" value="Submit" />
  </form>
)

ReactDOM.render(jsxForm, wrapper)
