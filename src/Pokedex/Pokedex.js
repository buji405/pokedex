import React, { Component } from 'react';
import './Pokedex.css';
import pokeData from '../stubs/pokemon-data.json';
import Pokemon from '../model/Pokemon';
import PokeList from './Components/PokeList/PokeList';
import PokeCard from './Components/PokeCard/PokeCard';


let charmander = new Pokemon(pokeData[3])

class Pokedex extends Component {
  constructor(props){
    super(props);
    this.state = {
      monster: {}
    }
  }

displayInfo(event) {
  const poke = JSON.parse(event.target.dataset.pokemon);
  this.setState({
    monster: poke
  })
}

  render() {

    const allPokemon = pokeData.map(e => new Pokemon(e));
    return (
      <section className="Pokedex">
        <PokeList pokemon={allPokemon} handler={this.displayInfo.bind(this)}/>
        <PokeCard  pokemon={this.state.monster}/>
      </section>
    )
  }
}


export default Pokedex;
