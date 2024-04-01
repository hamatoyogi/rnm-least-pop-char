export const Heading = () => {
  return (
    <>
      <div className="rnm-portal"></div>
      <div className="w-full grid gap-4 place-items-center">
        <div className="w-full font-schwifty">
          <div className="rnm-title relative h-fit mt-10">
            Rick<span>and </span>Morty
          </div>
          <div className="rnm-title rnm-middle absolute mt-10">
            Rick<span>and </span>Morty
          </div>
          <div className="rnm-title rnm-bottom absolute mt-10">
            Rick<span>and </span>Morty
          </div>
        </div>
        <h1 className="my-10 text-6xl z-10 font-schwifty text-slate-700">
          Least popular character
        </h1>
      </div>
    </>
  );
};
