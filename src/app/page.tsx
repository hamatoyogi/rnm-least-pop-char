import { Heading } from './components/heading/heading';
import { CharacterProfile } from './components/character-profile';
import { getLeastPopularCharacter } from './utils';

export default async function Home() {
  const character = await getLeastPopularCharacter();
  return (
    <main className="flex h-dvh flex-col">
      <Heading />
      <CharacterProfile character={character} />
    </main>
  );
}
