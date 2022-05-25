import React, {useState} from 'react';
import './App.css';
import axios from "axios";
import Pokemon from "./components/Pokemon";

function App() {


    return (
        <div className="pokemon-cards">
            <Pokemon pokemon="growlithe"/>
            <Pokemon pokemon="ditto"/>
        </div>
    );
}

export default App;
