import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import "./PokemonList.css"
function PokemonList() {

    const [pokeList, setPokeList] = useState({
        isLoading: true,
        PokemonList: [],
        prevUrl: "",
        nextUrl: "",
        currentUrl: "https://pokeapi.co/api/v2/pokemon"
    })


    useEffect(() => {
        async function downloadPokemon() {
            let response = await axios.get(pokeList.currentUrl);
            //response.data-->give the url of prev/next url
            const pokemonResults = response.data.results;
            //console.log(pokemonResults);
            const pokemonResultsPromise = pokemonResults.map(pokemon => axios.get(pokemon.url));
            const pokemonData = await axios.all(pokemonResultsPromise);


            // setPrevUrl(response.data.previous);
            // setNextUrl(response.data.next);
            setPokeList(pre => ({ ...pre, prevUrl: response.data.previous, nextUrl: response.data.next }))

            console.log(pokemonData);
            const res = pokemonData.map((pokemon) => (
                {
                    name: pokemon.data.name,
                    id: pokemon.data.id,
                    image: (pokemon.data.sprites.other?.dream_world?.front_default) ? pokemon.data.sprites.other.dream_world.front_default : pokemon.data.sprites.front_default

                }
            )
            )

            setPokeList((pre) => ({ ...pre, PokemonList: res, isLoading: false }));

        }
        downloadPokemon();
    }, [pokeList.currentUrl]);


    return (
        <div>
            <div className="pokemonlist-container">
                {pokeList.isLoading ? "Loading is ..." : pokeList.PokemonList.map((pokedata) => <Pokemon key={pokedata.id} name={pokedata.name} image={pokedata.image} id={pokedata.id} />)}
            </div>
            <div className="controls">
                <button disabled={!pokeList.prevUrl} onClick={() => setPokeList((pre => ({ ...pre, currentUrl: pre.prevUrl })))}>Prev</button>
                <button disabled={pokeList.nextUrl == ""} onClick={() => setPokeList(pre => ({ ...pre, currentUrl: pre.nextUrl }))}>Next</button>
            </div>
        </div>
    )
}
export default PokemonList;