import Pokedex from './components/Pokedex/Pokedex'
import './App.css'
import Search from './components/Search/Search'
import PokemonList from './components/PokemonList/PokemonList'
import CustomRoutes from './components/Routes/CustomRoutes'
import { Link } from 'react-router-dom'

function App() {


  return (
    <>
      <Link to="/"> <h1 className="pokedex-heading">Pokedex</h1></Link>
      <CustomRoutes />
    </>
  )
}

export default App;
