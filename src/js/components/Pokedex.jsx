import React from 'react'

export class Pokedex extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: '' }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(res => res.json())
    .then((data) => {
      this.setState({ name: data['types']['0']['type']['name'] })
      console.log(data.name)
    })
    .catch(console.log)
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
      </div>
    )
  }
}
