import React, { Component } from "react"
import ReactDOM from "react-dom"

import Pokedex from 'pokedex-promise-v2'

let P = new Pokedex()

// const times = 100
//
// const test = <li> TEST </li>
//
// let testArray = []
//
// for(var i=0; i < times; i++){
//     testArray.push(test)
// }
//
// const testJSX = <ul>{testArray}</ul>
//
// const wrapper = document.getElementById("test-element");
//
// ReactDOM.render(testJSX, wrapper)

const wrapper = document.getElementById("test-element")

P.getPokemonByName('eevee')
  .then(function(response) {
    console.log(response)
    let pokemonInfo = [response.name, response['types']['0']['type']['name']]
    ReactDOM.render(pokemonInfo, wrapper)
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error)
    ReactDOM.render("ERROR", wrapper)
  });
