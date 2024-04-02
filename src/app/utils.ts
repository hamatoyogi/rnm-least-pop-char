const BASE_URL = 'https://rickandmortyapi.com/api';

export const getLeastPopularCharacter = async () => {
  // get all characters from Earth C-137
  const locationResponse = await fetch(`${BASE_URL}/location/1`).catch(
    (error) => {
      throw new Error('error fetching from RnM API!!!');
    }
  );
  const location: LocationResponse = await locationResponse.json();

  const residents = location.residents;
  // get character ids from the residents' urls
  const characterIds = residents.map((url) => url.split('/character/').pop());

  // get all characters from Earth C-137 in one request
  const characterResponse = await fetch(
    `${BASE_URL}/character/${characterIds.join(',')}`
  ).catch((error) => {
    throw new Error('error fetching from RnM API!!!');
  });
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

const getCharacterByName = async (name: string) => {
  return fetch(`${BASE_URL}/character/?name=${name}`).catch((error) => {
    throw new Error('error fetching from RnM API!!!');
  });
};

export const getChartCharacters = async () => {
  const characterNames = [
    'Abradolf Lincler',
    'Arcade Alien',
    'Morty Smith',
    'Birdperson',
    'Mr. Meeseeks',
  ];
  const charectersRes = await Promise.all(
    characterNames.map((name) =>
      getCharacterByName(name).then((res) => res.json())
    )
  );

  return parseCharacterResToChartData(charectersRes);
};

const parseCharacterResToChartData = (res: Array<APIResponse>) => {
  return res.map(({ results }) => {
    const allUniqueEpisodes = [
      ...new Set<string>(
        results.reduce((acc: Array<string>, { episode }) => {
          acc = [...acc, ...episode];
          return acc;
        }, [])
      ),
    ];

    return {
      name: results[0].name,
      episodeCount: allUniqueEpisodes.length,
    };
  });
};
