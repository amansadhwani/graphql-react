import React from "react";
import { useCharacter } from "./hooks/useCharacter";
import { useParams } from "react-router";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";
const Character = () => {
  const { id } = useParams()
  const { error, loading, data } = useCharacter(id);

  if (loading) return <Loader />

  if (error) return <div>Opps SOmething went wrong</div>


  return <div className="character">
    <Link to="/">Back</Link>
    <input type="image" img src={data.character.image} height={500} width={500} alt="image" />
    <div className="character-content">
      <h1>{data.character.name}</h1>
      <p>{data.character.gender}</p>
      <div className="character-episode">
        {data?.character?.episode.map((episode, index) => {
          return <div key={index} >
            {episode.name} <b>{episode.episode}</b>
          </div>
        })}
      </div>
    </div>
  </div>
}

export default Character;