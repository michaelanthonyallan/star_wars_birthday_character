import React from 'react'

const CharacterComponent = (props) => {

    return(
        <div>
            <h1>You are... {props.character.name} </h1>
        </div>
    )
};

export default CharacterComponent