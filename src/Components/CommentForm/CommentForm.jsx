import React from 'react';
import "./CommentForm.scss";

// NAME - text, number of pokemon seen and details.
const CommentForm = ({ name, setName, pokemonSeen, setPokemonSeen, details, setDetails, fullComment, setFullComment }) => {
    // functions to handle changes
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlePokemonSeen = (e) => {
        setPokemonSeen(e.target.value);
    }
    const handleDetails = (e) => {
        setDetails(e.target.value)
    };

    // handle submit, add to full comment array
    const handleSubmit = (event) => {
        event.preventDefault();
        let current = new Date().toLocaleString()
        setFullComment([...fullComment, { name: name, pokemonSeen: pokemonSeen, details: details, date: current }]);
        setName("")
        setPokemonSeen("");
        setDetails("")
    }
    return (
        <div className="form-container">
            <form action="" className="form">
                <h1 className="form-header">Seen Anything?</h1>
                <div className="name-container">
                    <input value={name} className="input-field" type="text" placeholder="My name is" onChange={handleNameChange} />
                </div>
                <div className="number-container">
                    <input value={pokemonSeen} onChange={handlePokemonSeen} type="number" className="input-field" placeholder="How many have you seen?" />
                </div>
                <div className="text-container">
                    <textarea value={details} onChange={handleDetails} name="text" className="input-field" placeholder="My message is" cols="30" rows="10"></textarea>
                </div>
                <button className="btn" onClick={handleSubmit}>Add Comment</button>
            </form>
        </div>
    )
}

export default CommentForm
