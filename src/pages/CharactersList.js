import React from "react";
import Loader from "../loader/Loader";
import { useCharacters } from "./hooks/useCharacters";
import { Link } from "react-router-dom";

const CharactersList = () => {

    const { error, loading, data } = useCharacters();

    if (loading) return <Loader />

    if (error) return <div>Opps SOmething went wrong</div>
    return (
        <>
            <Link to="/search">Search</Link>
            <div className="chr-list">

                {data?.characters?.results?.map(character => {
                    return <Link to={character.id}>
                        <div>
                            <input type="image" img src={character.image} alt="image" />
                            <h2>{character.name}</h2>
                        </div>
                    </Link>
                })}

            </div>
        </>
    )
}

export default CharactersList;