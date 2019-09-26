import React from 'react'

export class Pokedex extends React.Component {

  constructor(props) {
    super(props);
    this.state = { type: '' }

    this.updatePokeType = this.updatePokeType.bind(this)
  }

  componentDidMount() {
    console.log("apple");
    console.log(this.props.pokemonName);
    console.log("apple");
  }

  componentDidUpdate() {
    console.log("banana");
    console.log(this.props.pokemonName);
    console.log("banana");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.pokemonName !== this.props.pokemonName || nextState.type !== this.state.type) {
        return true
      } else {
        return false
      }
  }

  updatePokeType() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
    .then(res => res.json())
    .then((data) => {
      console.log({pokedex1: this.props.pokemonName});
      this.setState({ type: data['types']['0']['type']['name'] })
    })
    .catch(console.log("ERROR"))
  }

  render() {
    // this.updatePokeType()
    console.log('POKEDEX RENDERED');
    if (this.state.type === '') { this.updatePokeType() }
    return (
      <div>
        <p>{this.state.type}</p>
      </div>
    )
  }
}
