import React from 'react';
import './PokeCell.css';
import pokeSprites from '../../../stubs/pokeSprites';

function PokeCell({poke, display}) {
  const pokePic = {
    backgroundImage: `url(${pokeSprites[poke.id - 1]})`,
    backgroundPosition: '5px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }

  const stringifyPoke = JSON.stringify(poke);

  return (
    <button onClick={display} style={pokePic} data-pokemon={stringifyPoke} className="PokeCell">{poke.name} </button>
  )
}



export default PokeCell;
