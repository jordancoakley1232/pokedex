import React from 'react'

const CommentList = ({ fullComment }) => {
    return (
        <div>
            <ul className="comment-list">
                {fullComment.length > 0 ?
                    fullComment.map(comment => {
                        return (
                            <li key={comment.date}>
                                <div className="user-info" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <h3>{comment.name.toUpperCase()}</h3>
                                    <p>Pokemon Seen: {comment.pokemonSeen}</p>
                                </div>
                                <p>Comment: {comment.details}</p>
                                <p>Comment Made On: {comment.date}</p>
                            </li>)
                    })
                    : <h1>No Comments</h1>}
            </ul>
        </div>
    )
}

export default CommentList
