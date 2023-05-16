import './App.css'
import pokemon from './data.js'
import { PokeDex } from './components'

function App() {

console.log(pokemon)
  return (
    <>
      <h1 className='poke-title'>Pokedex</h1>
      <div className="cards">
        <PokeDex pokemon={pokemon}/>
      </div>
    </>
  )
}

export default App
