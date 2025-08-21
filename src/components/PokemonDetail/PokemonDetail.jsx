import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./PokemonDetail.css"
import axios from "axios";
import { Navigate } from "react-router-dom";

function PokemonDetail() {
    const { id } = useParams();
    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        async function downloadPokemonDetail() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            console.log(response.data);
            setPokemonData({
                name: response.data.name,
                id: response.data.id,
                image: (response.data.sprites.other?.dream_world?.front_default) ? response.data.sprites.other.dream_world.front_default : response.data.sprites.front_default,
                height: response.data.height,
                weight: response.data.weight,

            })
        }
        downloadPokemonDetail();
    }, [id]);

    const navigation = useNavigate();
    function back() {
        navigation("/");

    }
    return (
        <div className="pokemon-detail">
            <h1 className="pokemon-heading-detail">{pokemonData.name}</h1>
            <img className="pokemon-img-detail" src={pokemonData.image} />
            <p className="pokemon-id-detial animation-id">  id = {pokemonData.id}</p>
            <p className="pokemon-height-detial animation-height" > height = {pokemonData.height}</p>
            <p className="pokemon-weight-detial animation-width">  weight = {pokemonData.weight}</p>
            <button className="back" onClick={back}>Back</button>
        </div>
    )
}
export default PokemonDetail;