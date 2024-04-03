import './heading.css';

export const Heading = ({ className }: { className?: string }) => {
  return (
    <header className={className}>
      <div className="rnm-portal slide-in-elliptic-top-fwd"></div>
      <div className="w-full grid gap-4 place-items-center">
        <div className="w-full font-schwifty transition-all will-change-auto animate-swirl-spin">
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
        <h1 className="my-10 text-3xl md:text-6xl z-10 font-schwifty text-pink-400 md:text-slate-700 transition-all animate-tracking-in-expand">
          Least popular character
        </h1>
      </div>
    </header>
  );
};
