export const CharacterProfile = (props: { character: Character }) => {
  const { character } = props;
  return (
    <section className="h-full flex flex-col items-center justify-end pb-20">
      <article className="card lg:card-side glass shadow-xl text-white">
        <figure className="m-10">
          <img
            // width={768}
            // height={768}
            src={character.image}
            alt={character.name}
          />
        </figure>
        <div className="card-body">
          <div>
            <p className="font-schwifty">Name:</p>
            <h2 key={character.id} className="card-title">
              {character.name}
            </h2>
          </div>
          <div>
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
        </div>
      </article>
    </section>
  );
};
