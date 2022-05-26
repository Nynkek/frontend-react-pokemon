import React, {useState} from 'react';
import './App.css';
import axios from "axios";
import Pokemon from "./components/Pokemon";
import Pokemons from "./components/Pokemons";

function App() {


    return (
        <div className="pokemon-cards">
            <Pokemon pokemon="growlithe"/>
            <Pokemon pokemon="ditto"/>
            <Pokemons amountPokemon="5" offsetPokemon="0" />
        </div>
    );
}

export default App;
