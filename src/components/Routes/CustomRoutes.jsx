import { Routes, Route } from "react-router-dom";
import Pokedex from "../Pokedex/Pokedex";
import PokemonDetail from "../PokemonDetail/PokemonDetail";

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
    )
}
export default CustomRoutes;