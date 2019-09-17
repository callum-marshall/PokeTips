import React from 'react'
import { JsxForm } from './TextInput.jsx'
import { PokemonName } from './Name.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>PokeTips</h1>
        <JsxForm />
        <PokemonName />
      </div>
    )
  }
}

export default App
