import React from "react"
import Pokedex from 'pokedex-promise-v2'

// let P = new Pokedex()
//
// let name = P.getPokemonByName('weepinbell')
//             .then(function(response) {
//               return response.name
//             })
//             .catch(function(error) {
//               return "ERROR"
//             });

export class PokemonName extends React.Component {
  render () {
    return <div>Pokemon Name: {name}</div>
  }
}
