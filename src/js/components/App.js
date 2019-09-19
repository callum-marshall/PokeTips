import React from 'react'
import { NameForm } from './NameForm.jsx'
import { PokemonName } from './Name.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>PokeTips</h1>
        <NameForm />
        <PokemonName />
      </div>
    )
  }
}

export default App
