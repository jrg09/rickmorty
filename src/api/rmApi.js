export const getRickMortyCharactersAPI = () => {
  return fetch("https://rickandmortyapi.com/api/character").then((resp) => {
    if (resp.status === 200) return resp.json();
    else throw new Error("Call to RickAndMorty API was wrong");
  });
};
