import './heading.css';

export const Heading = ({ className }: { className?: string }) => {
  return (
    <header className={className}>
      <div className="rnm-portal slide-in-elliptic-top-fwd"></div>
      <div className="grid w-full place-items-center gap-4">
        <div className="w-full animate-swirl-spin font-schwifty transition-all will-change-auto">
          <div className="rnm-title relative mt-10 h-fit">
            Rick<span>and </span>Morty
          </div>
          <div className="rnm-title rnm-middle absolute mt-10">
            Rick<span>and </span>Morty
          </div>
          <div className="rnm-title rnm-bottom absolute mt-10">
            Rick<span>and </span>Morty
          </div>
        </div>
        <h1 className="z-10 my-10 animate-tracking-in-expand font-schwifty text-3xl text-pink-400 transition-all md:text-6xl md:text-slate-700">
          Least popular character
        </h1>
      </div>
    </header>
  );
};
