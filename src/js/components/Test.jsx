import React, { Component } from "react";
import ReactDOM from "react-dom";

const times = 100

const test = <li> TEST </li>

let testArray = []

for(var i=0; i < times; i++){
    testArray.push(test)
}

const testJSX = <ul>{testArray}</ul>

const wrapper = document.getElementById("test-element");

ReactDOM.render(testJSX, wrapper)
