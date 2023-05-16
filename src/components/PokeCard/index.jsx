import React from 'react'

const PokeCard = (p, index) => {
  return(
    <div key={index} className='pokecard'>
      <div className="pokemon-name">
        <h2>{p.p.name}</h2>
      </div>
      <div className="pokemon-img">
        <img src={p.p.image} alt="" />
      </div>
      <div className="pokemon-type">
        <p>type: {p.p.type}</p>
      </div>
    </div>
    )
}

export default PokeCard
