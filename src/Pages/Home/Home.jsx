import { useState } from 'react';
import "./Home.scss"

// Components
import CardList from "../../Components/CardList/CardList";
import FavoritesComponent from "../../Components/Favorites/Favorites"

const Home = () => {
    // display all or favorites component with boolean
    const [display, setDisplay] = useState(false);
    return (
        <div className="home">
            <div className="header-container">
                <h1 className="header">Pokedex</h1>
                <span onClick={() => setDisplay(!display)} style={{ cursor: "pointer", fontWeight: "600" }}>
                    {!display ? "Favorites ->" : "<- All Pokemon"}
                </span>
            </div>
            {/* CARD LIST */}
            {!display ? <CardList /> : <FavoritesComponent />}
        </div>
    )
}

export default Home
