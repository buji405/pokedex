import React from 'react';
import './PokeCard.css';
import pokeSprites from '../../../stubs/pokeSprites';

function PokeCard({pokemon}) {
  const pokePic = {
    backgroundImage: `url(${pokeSprites[pokemon.id - 1]})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <section className="PokeCard">
      <div style={pokePic} className='picture'></div>
      <div className='info'>
        <h1>{pokemon.name}</h1>
        <p>{pokemon.type}</p>
        <p>{pokemon.attack}</p>
      </div>

    </section>
  )
}

export default PokeCard;
