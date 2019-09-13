import React, { Component } from "react"
import ReactDOM from "react-dom"

import Pokedex from 'pokedex-promise-v2'

let P = new Pokedex()

const wrapper = document.getElementById("pokemon-type-2")

P.getPokemonByName('weepinbell')
  .then(function(response) {
    console.log(response)
    let pokemonInfo = [response['types']['1']['type']['name']]
    ReactDOM.render(pokemonInfo, wrapper)
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error)
    ReactDOM.render("ERROR", wrapper)
  });
