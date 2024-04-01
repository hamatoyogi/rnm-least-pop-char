import Image from 'next/image';
import { Background } from './components/background';

const BASE_URL = 'https://rickandmortyapi.com/api';

// Todo use types
// Todo use URL search params to build the URL

const getLeastPopularCharacter = async () => {
  // get all characters from Earth C-137
  const locationResponse = await fetch(`${BASE_URL}/location/1`);
  const location: LocationResponse = await locationResponse.json();

  const residents = location.residents;
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

export default async function Home() {
  const character = await getLeastPopularCharacter();
  return (
    <main className="h-dvh">
      <Background />
      <section className="h-full flex flex-col items-center justify-end pb-20">
        {/* <h1 className="text-4xl font-bold m-10">Least Popular Character</h1> */}
        <article className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="m-10">
            <img
              // width={768}
              // height={768}
              src={character.image}
              alt={character.name}
            />
          </figure>
          <div className="card-body">
            <h2 key={character.id} className="card-title">
              {character.name}
            </h2>
            <div>
              <p>
                <b>Origin:</b> {character.origin.name}
              </p>
              <p>Dimension: {character.location.name}</p>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Gender: {character.gender}</p>
              <p>Popularity (episodes): {character.episode.length}</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
