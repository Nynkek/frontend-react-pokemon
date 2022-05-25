import React, {useState} from 'react';
import axios from "axios";

function Pokemon({pokemon}) {

    const [pokemonData, setPokemonData] = useState({});

    async function fetchData() {
        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            setPokemonData(result.data);
        } catch (e) {
            console.error(e);
        }
    }


    function showAbility(array) {
        let newArray = array.map((abilities) => {
            return <li key={abilities.ability.name}>{abilities.ability.name}</li>;
        });
        return newArray;
    }

    return (
        <>

            {Object.keys(pokemonData).length > 0 &&
                <div>
                    <h1 key={pokemonData.species.name}>{pokemonData.species.name}</h1>
                    <img src={pokemonData.sprites.front_default}/>
                    <p><strong>Moves:</strong> {pokemonData.moves.length} </p>
                    <p><strong>Weigth</strong>:{pokemonData.weight}</p>
                    <p><strong>Abilities:</strong>
                        {showAbility(pokemonData.abilities)}
                    </p>
                </div>
            }
            <button type="button" onClick={fetchData}>haal data op</button>


        </>
    );
}

export default Pokemon;