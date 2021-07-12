import { useContext } from 'react';
import "./Favorites.scss"

// components
import Card from "../Card/Card";

// Context
import { Favorites } from "../../App"

const FavoritesComponent = () => {
    const favorites = useContext(Favorites);

    return (
        <div className="card-list-container">
            {favorites.length > 0 ?
                favorites.map(fav => {
                    return <Card key={fav} info={fav} />
                })
                : <h1>No Favorites</h1>}
        </div>
    )
}

export default FavoritesComponent
