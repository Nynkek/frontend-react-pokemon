import React, {useEffect, useState} from 'react';
import axios from "axios";
import Pokemon from "./Pokemon";

function PokemonS({amountPokemon, offsetPokemon}) {

    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${amountPokemon}&offset=${offsetPokemon}`);
                setPokemonData(result.data);
                console.log(result.data.results[0].name);

            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, []);


    return (
        <>
            {Object.keys(pokemonData).length > 0 &&
                <>
                    {pokemonData.results.map((pokemon) => {
                        return <Pokemon pokemon={pokemon.name} key={pokemon.name}/>
                    })}
                </>
            }
        </>

    );
}

export default PokemonS;