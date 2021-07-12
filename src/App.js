import { useState, createContext, useEffect } from "react";

import "./App.css"
// Pages
import Home from "./Pages/Home/Home";
import Pokemon from "./Pages/Pokemon/Pokemon";
// Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Global favorites to be passed to all components
export const Favorites = createContext();
export const SetFavorites = createContext();
function App() {
  // State to hold favorites, once updated, will push changes to local storage.
  // passed an iife to run to get local state on first page load.
  const [favorites, setFavorites] = useState((function () {
    const localData = localStorage.getItem("Favorites");
    return localData ? JSON.parse(localData) : []
  })());


  // Set Local Storage when favorites array updates
  useEffect(() => {
    // set new array in local storage when the favorites state updates to stay up to date.
    localStorage.setItem("Favorites", JSON.stringify(favorites));
  }, [favorites])

  return (
    <Router>
      <div className="App">
        <Favorites.Provider value={favorites}>
          <SetFavorites.Provider value={setFavorites}>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/:id' component={Pokemon} />
            </Switch>
          </SetFavorites.Provider>
        </Favorites.Provider>
      </div>
    </Router>

  );
}

export default App;
