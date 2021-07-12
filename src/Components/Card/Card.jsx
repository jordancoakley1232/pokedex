import React, { useContext } from 'react'
import "./Card.scss";

import { Link } from "react-router-dom";

// Context
import { Favorites, SetFavorites } from "../../App";


const Card = ({ info }) => {
    const favorites = useContext(Favorites);
    const setFavorites = useContext(SetFavorites);

    // function to save to save favorite state adn update local storage
    const saveFavorite = (name) => {
        // push pokemon name to FAvorite State in App component. Once updated, set state to local storage
        setFavorites([...favorites, name])
    }
    const removeFavorite = (name) => {
        // Remove pokemon
        setFavorites(favorites.filter(fav => fav !== name))
    }

    return (

        <div className="card-container">
            <Link to={`/${info}`} className="card-title">{info}</Link>
            {favorites.includes(info) ?
                <button className="remove-from-favorites btn" onClick={() => removeFavorite(info)}>
                    Release {info}
                </button> : <button className="add-to-favorites btn" onClick={() => saveFavorite(info)}>
                    Catch {info}
                </button>
            }
        </div>

    )
}

export default Card
