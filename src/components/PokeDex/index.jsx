import React from 'react'
import PokeCard from '../PokeCard'

const PokeDex = (props) => {
  return (
    <>
      {
        props.pokemon.map((p, index) => {
          return(
            <PokeCard p={p} key={index}/>
          )
        })
      }
    </>
  )
}

export default PokeDex
