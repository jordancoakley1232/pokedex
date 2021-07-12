import { useState, useEffect } from 'react'
import "./CardList.scss";
import axios from "axios";

// Import card
import Card from "../Card/Card"

const CardList = () => {
    // Get Pokemon data
    const [pokemon, setPokemon] = useState([]);
    // current, next and previous pages
    const [nextPage, setNextPage] = useState('');
    const [prevPage, setPrevPage] = useState('');

    // first url to fetch for first 20 pokemon
    const firstUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`

    useEffect(() => {
        getPokemon(firstUrl);
    }, []);

    // functiont to get pokemon data
    const getPokemon = async (url) => {
        const req = await axios.get(url);
        setPokemon(req.data.results);
        // Set next and previous url based on current request response.
        req.data.next ? setNextPage(req.data.next) : setNextPage("")
        req.data.previous ? setPrevPage(req.data.previous) : setPrevPage(firstUrl)
    }


    return (
        <>
            <div className="card-list-container" style={{ border: "2px solid white" }}>
                {pokemon.length > 0 ? pokemon.map(item => {
                    return <Card key={item.name} info={item.name} />
                }) : <h3>Catching Pokemon</h3>}
            </div>
            <div className="nav-btn-container" style={{ display: "flex", justifyContent: "space-between" }}>
                <button className="nav-btn" onClick={() => getPokemon(prevPage)}>Prev</button>
                <button className="nav-btn" onClick={() => getPokemon(nextPage)}>Next</button>
            </div>
        </>
    )
}

export default CardList
