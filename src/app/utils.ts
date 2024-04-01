const BASE_URL = 'https://rickandmortyapi.com/api';

export const getLeastPopularCharacter = async () => {
  // get all characters from Earth C-137
  const locationResponse = await fetch(`${BASE_URL}/location/1`);
  const location: LocationResponse = await locationResponse.json();

  const residents = location.residents;
  // get character ids from the residents' urls
  const characterIds = residents.map((url) => url.split('/character/').pop());

  // get all characters from Earth C-137 in one request
  const characterResponse = await fetch(
    `${BASE_URL}/character/${characterIds.join(',')}`
  );
  const charactersJson: CharactersResponse = await characterResponse.json();

  const leastPopularCharacters = charactersJson
    // least popular characters would be in only one episode
    .filter((character) => character.episode.length === 1)
    // If more than one character fits the least popular character definition
    // - sort the list by name in ascending alphabet order and show the last one.
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

  return leastPopularCharacters[leastPopularCharacters.length - 1];
};
