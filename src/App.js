import React, {useState} from 'react';
import './App.css';
import axios from "axios";
import Pokemon from "./components/Pokemon";

function App() {


    return (
        <>
        <Pokemon pokemon="growlithe"/>
        <Pokemon pokemon="ditto"/>


        </>
    );
}

export default App;
