import React, {useState} from 'react';
import './App.css';
import axios from "axios";
import Pokemon from "./components/Pokemon";
import Pokemons from "./components/Pokemons";
import Buttons from "./components/Buttons";

function App() {


    return (
        <article className="page-container">
            <h1>Pokémon catalogus</h1>
            <Pokemons amountPokemon="20" offsetPokemon="0"/>
            <p>Met dank aan de toffe api: https://pokeapi.co</p>
        </article>
    );
}

export default App;
