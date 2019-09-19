import React from 'react'
import { NameForm } from './NameForm.jsx'
import { PokemonName } from './Name.jsx'
import { Pokedex } from './Pokedex.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1>PokeTips</h1>
        <NameForm />
        <PokemonName />
        <Pokedex />
      </div>
    )
  }
}

export default App
