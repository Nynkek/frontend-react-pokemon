import React, {useEffect, useState} from 'react';
import axios from "axios";

function Pokemon({pokemon}) {

    const [pokemonData, setPokemonData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setError('');
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                setPokemonData(result.data);
            } catch (e) {
                console.error(e);
                setError("er is iets mis gegaan bij het ophalen van de data. Probeer opnieuw.");
            }
        }
        fetchData();
    }, []);


    function showAbility(array) {
        let newArray = array.map((abilities) => {
            return <li key={abilities.ability.name}>{abilities.ability.name}</li>;
        });
        return newArray;
    }

    return (
        <>
            {error && <p>{error}</p>}

            {Object.keys(pokemonData).length > 0 &&
                <div className="pokemon-card">
                    <h2 key={pokemonData.id}>{pokemonData.id} <br/>{pokemonData.species.name}</h2>
                    {pokemonData.sprites.front_default && <img src={pokemonData.sprites.front_default} alt={pokemonData.species.name}/>}
                    <p><strong>Moves</strong>: {pokemonData.moves.length} </p>
                    <p><strong>Weight</strong>: {pokemonData.weight}</p>
                    <p><strong>Abilities</strong>:
                        {showAbility(pokemonData.abilities)}
                    </p>
                </div>
            }
        </>
    );
}

export default Pokemon;