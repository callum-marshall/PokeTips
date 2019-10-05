import React from 'react';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: '' };
  }

  getPokeName = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ type: data['types']['0']['type']['name'] });
      });
  };

  render() {
    this.getPokeName();
    return (
      <div>
        <p>{this.state.type}</p>
      </div>
    );
  }
}

export default Pokedex;
