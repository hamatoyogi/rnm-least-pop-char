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
            loading="eager"
          />
        </figure>
        <div className="card-body">
          <div>
            <p>Name:</p>
            <h2 key={character.id} className="card-title">
              {character.name}
            </h2>
          </div>
          <div>
            <div>
              <p>
                <b>Origin:</b> {character.origin.name}
              </p>
              <p>
                <b>Dimension:</b>
                {character.location.name}
              </p>
              <p>
                <b>Status:</b> {character.status}
              </p>
              <p>
                <b>Species:</b> {character.species}
              </p>
              <p>
                <b>Gender:</b> {character.gender}
              </p>
              <p>
                <b>Popularity (episodes):</b> {character.episode.length}
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
