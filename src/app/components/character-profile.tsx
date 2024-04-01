export const CharacterProfile = (props: { character: Character }) => {
  const { character } = props;
  return (
    <section className="flex flex-col items-center pb-20">
      <article className="card md:card-side glass shadow-xl text-purple-700">
        <figure>
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
                <b className="font-schwifty">Origin:</b> {character.origin.name}
              </p>
              <p>
                <b className="font-schwifty">Dimension:</b>
                {character.location.name}
              </p>
              <p>
                <b className="font-schwifty">Status:</b> {character.status}
              </p>
              <p>
                <b className="font-schwifty">Species:</b> {character.species}
              </p>
              <p>
                <b className="font-schwifty">Gender:</b> {character.gender}
              </p>
              <p>
                <b className="font-schwifty">Popularity (episodes):</b>{' '}
                {character.episode.length}
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
