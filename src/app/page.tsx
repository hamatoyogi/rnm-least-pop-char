import { Heading } from './components/background/background';
import { CharacterProfile } from './components/character-profile';
import { getLeastPopularCharacter } from './utils';

export default async function Home() {
  const character = await getLeastPopularCharacter();
  return (
    <main className="h-dvh">
      <Heading />
      <CharacterProfile character={character} />
    </main>
  );
}
