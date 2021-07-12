import { useState, useEffect } from 'react';
import "./CommentsContainer.scss"
// Components
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList"

const CommentsContainer = () => {
    // State to hold the comment data to pass to local storage, no need for context as we are only passing state one component down.
    const [name, setName] = useState("");
    const [pokemonSeen, setPokemonSeen] = useState("");
    const [details, setDetails] = useState("");
    const [fullComment, setFullComment] = useState((function () {
        const localData = localStorage.getItem("Comments");
        return localData ? JSON.parse(localData) : []
    })());

    // Set Local Storage when favorites array updates
    useEffect(() => {
        // set new array in local storage when the favorites state updates to stay up to date.
        localStorage.setItem("Comments", JSON.stringify(fullComment));
    }, [fullComment])


    return (
        <div className="comments-container">
            <CommentForm
                name={name}
                setName={setName}
                pokemonSeen={pokemonSeen}
                setPokemonSeen={setPokemonSeen}
                details={details}
                setDetails={setDetails}
                fullComment={fullComment}
                setFullComment={setFullComment} />
            <CommentList fullComment={fullComment} />
        </div>
    )
}

export default CommentsContainer
