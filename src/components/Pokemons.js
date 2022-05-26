import React, {useEffect, useState} from 'react';
import axios from "axios";
import Pokemon from "./Pokemon";
import Buttons from "./Buttons";

function PokemonS({amountPokemon, offsetPokemon}) {
    const [pokemonData, setPokemonData] = useState({});

    async function fetchData(URL) {
        try {
            const result = await axios.get(URL);
            setPokemonData(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchData(`https://pokeapi.co/api/v2/pokemon/?limit=${amountPokemon}&offset=${offsetPokemon}`);
    }, []);

    function nextPage() {
        fetchData(`${pokemonData.next}`);
    }

    function prevPage() {
        if (pokemonData.previous) {
            fetchData(`${pokemonData.previous}`);
        }
    }

    return (
        <>
            {Object.keys(pokemonData).length > 0 &&
                <div className="container">
                    <div className="next-prev-btn">
                        <Buttons onClickBtn={prevPage} isDisabled={!pokemonData.previous}>Vorige</Buttons>
                        <Buttons onClickBtn={nextPage} isDisabled={!pokemonData.next}>Volgende</Buttons>
                    </div>
                    <div className="pokemon-cards">
                        {pokemonData.results.map((pokemon) => {
                            return <Pokemon pokemon={pokemon.name} key={pokemon.url}/>
                        })}
                    </div>
                    <div className="next-prev-btn">
                        <Buttons onClickBtn={prevPage} isDisabled={!pokemonData.previous}>Vorige</Buttons>
                        <Buttons onClickBtn={nextPage} isDisabled={!pokemonData.next}>Volgende</Buttons>
                    </div>
                </div>
            }
        </>

    );
}

export default PokemonS;