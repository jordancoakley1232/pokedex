import { useState, useEffect, useContext } from 'react';

import "./Pokemon.scss"
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Components
import CommentsContainer from "../../Components/CommentsContainer/CommentsContainer"

// Context
import { Favorites, SetFavorites } from "../../App";



const Pokemon = () => {
    let { id } = useParams();
    const [currentPokemon, setCurrentPokemon] = useState();
    const favorites = useContext(Favorites);
    const setFavorites = useContext(SetFavorites);


    // fetch current pokemon on initial render
    useEffect(() => {
        getPokemon();
    }, [])

    // function to get current pokemon data
    const getPokemon = async () => {
        let url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const req = await axios.get(url);
        setCurrentPokemon(req.data);
    }
    // function to find first image if front is not available.
    const firstImage = (arr) => {
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] !== null) {
                return arr[i]
            }
        }
    }

    // note: same logic as in other component, could simply create higher up and pass it down to all components
    // function to save to favorites, on update it updates the local storage in App component
    const saveFavorite = (name) => {
        // push pokemon name to FAvorite State in App component. Once updated, set state to local storage
        setFavorites([...favorites, name])
    }
    const removeFavorite = (name) => {
        // Remove pokemon based on name
        setFavorites(favorites.filter(fav => fav !== name))
    }


    return (

        <div className="pokemon-info-container">
            <h1><Link to="./">Back</Link></h1>
            {currentPokemon ? <><h1>{id.toUpperCase()}</h1>
                <img src={currentPokemon.sprites ? currentPokemon.sprites.front_default : firstImage(currentPokemon.sprites)}

                    alt="https://www.clipartmax.com/png/middle/129-1298427_pokeball-pokemon-and-want-image-pixelmon-pokeball-png.png" />

                <table className="pokemon-info-table">
                    <caption className="pokemon-info-title">Pokemon Info</caption>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Weight</th>
                            <th>Height</th>
                            <th>Stats</th>
                            <th>Moves</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{id.toUpperCase()}</td>
                            <td>{currentPokemon.weight} lbs.</td>
                            <td>{currentPokemon.height} ft.</td>
                            <td style={{ overflow: "auto" }}>{currentPokemon.stats.map(stat => [`${stat.stat.name} ${stat.base_stat}, `])}</td>
                            <td tyle={{ overflow: "auto" }}>
                                {currentPokemon.moves[0].move.name}, {currentPokemon.moves[1].move.name}, {currentPokemon.moves[2].move.name}
                            </td>
                        </tr>
                    </tbody>
                </table> </> :
                <h1>Catching {id.toUpperCase()}</h1>}
            <div className="button-container">
                {favorites.includes(id) ?
                    <> <h3>Would you like to release {id.toUpperCase()}?</h3>
                        <button className="remove-from-favorites btn" onClick={() => removeFavorite(currentPokemon.name)}>Release {id.toUpperCase()}</button> </>
                    : <>
                        <h3>Would you like to catch {id.toUpperCase()}?</h3>
                        <button className="add-to-favorites btn" onClick={() => saveFavorite(currentPokemon.name)}>Catch!</button>
                    </>
                }

            </div>
            <CommentsContainer />
        </div>
    )
}


export default Pokemon
