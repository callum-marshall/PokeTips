import React from 'react'

export class Pokedex extends React.Component {

  constructor(props) {
    super(props);
    this.state = { type: '' }
    this.name = this.props.pokemonName
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.name}`)
    .then(res => res.json())
    .then((data) => {
      this.setState({ type: data['types']['0']['type']['name'] })
    })
    .catch(console.log)
  }

  render() {
    return (
      <div>
        <p>{this.state.type}</p>
      </div>
    )
  }
}
