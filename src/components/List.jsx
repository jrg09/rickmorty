import { useEffect, useState } from "react";
import { Character } from "./Character";

export const List = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://rickandmortyapi.com/api/character");
      const { results } = await data.json();
      setCharacters(results);
      setIsLoading(false);
    };

    fetchData();
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
