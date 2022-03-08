import React, { useState } from "react";
import { useLazyQuery, gql } from '@apollo/client'
import Loader from "../loader/Loader";

const GET_CHARACTER_LOCATIONS = gql`
query GetCharacterLocations($name:String!){
    characters(filter:{name:$name}) {
        results {
          location {
            name
          }
        }
      }
  }`


const Search = () => {
    const [name, setName] = useState("");

    const [getLocations, { loading, error, data }] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name
        }
    })

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => getLocations()}>Search</button>
            {loading && <Loader />}
            {error && <div>Opps SOmething went wrong</div>}
            <ul>
                {data?.characters?.results?.map(character => {
                    return <li>
                        {character.location.name}
                    </li>
                })}

            </ul>

        </div>
    )
}

export default Search;