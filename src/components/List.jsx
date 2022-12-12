import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Character } from "./Character";

export const List = () => {
  const items = ["uno", "dos", "tres"];

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetch("https://rickandmortyapi.com/api/character");
      const { results } = await data.json();
      setCharacters(results);
    };

    fetchAPI();
  }, [characters.length]);

  return (
    <>
      <div className="row mt-3">
        {characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </>
  );
};
