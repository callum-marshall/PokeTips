import React from 'react';
import { NameForm } from './NameForm.jsx';
import { PokemonName } from './Name.jsx';
import Pokedex from './Pokedex.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nameFormInput: '' };

    this.formCallback = this.formCallback.bind(this);
  }

  formCallback(formValue) {
    this.setState({ nameFormInput: formValue });
  }

  render() {
    return (
      <div className="wrapper">
        <h1>PokeTips</h1>
        <NameForm nameFormCallback={this.formCallback} />
        <Pokedex pokemonName={this.state.nameFormInput} />
      </div>
    );
  }
}

export default App;
