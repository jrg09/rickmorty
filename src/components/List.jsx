import { useEffect, useState } from "react";
import { getRickMortyCharactersAPI } from "../api/rmApi";
import { Character } from "./Character";

export const List = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRickMortyCharactersAPI()
      .then((resp) => {
        setCharacters(resp.results);
        setIsLoading(false);
      })
      .catch((err) => console.log);

    //fetchData();
  }, [characters.length]);

  return (
    <>
      <div className="row mt-3">
        {isLoading ? (
          <div>Cargando...</div>
        ) : (
          characters.map((character) => (
            <Character key={character.id} character={character} />
          ))
        )}
      </div>
    </>
  );
};
