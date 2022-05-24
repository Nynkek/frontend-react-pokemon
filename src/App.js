import React, {useState} from 'react';
import './App.css';
import axios from "axios";

function App({}) {
    const [pokemonData, setPokemonData] = useState({});

    async function fetchData() {
        try {
            const result = await axios.get('https://pokeapi.co/api/v2/pokemon/growlithe');
            console.log(result.data.species.name);
            setPokemonData(result.data);
        } catch (e) {
            console.error(e);
        }
    }


    function showAbility(array) {
        let newArray = array.map((pokemon) => {
            return <li key={pokemon.ability.name}>{pokemon.ability.name}</li>;
        });
        return newArray;
    }


    return (
                <>

                    {Object.keys(pokemonData).length > 0 &&
                        <div>
                            <h1 key="growlit">{pokemonData.species.name}</h1>
                            <img/>
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

                export default App;
