import { Fragment } from 'react';

const colors = ['#08bae3', '#fff765', '#448c3f', 'rebeccapurple', 'hotpink'];

export const Chart = ({
  data,
}: {
  data: Array<{ name: string; episodeCount: number }>;
}) => {
  const colorMap = data.reduce(
    (acc, { name }, idx) => {
      acc[name] = colors[idx];
      return acc;
    },
    {} as Record<string, string>
  );

  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="my-20 font-schwifty text-7xl">Popularity Chart</h1>
      <section className="flex items-end gap-20">
        <div
          className="grid h-full grid-cols-5 gap-4"
          style={{ gridTemplateRows: '300px 1rem' }}
        >
          {data.map((entry) => (
            <Fragment key={entry.name}>
              <div
                className="flex h-full flex-col justify-end"
                style={{ gridRow: 1 }}
              >
                <div
                  key={entry.name}
                  className="tooltip w-full hover:cursor-pointer hover:opacity-80"
                  style={{
                    height: `${entry.episodeCount}%`,
                    backgroundColor: colorMap[entry.name],
                  }}
                  data-tip={`${entry.name}: ${entry.episodeCount}`}
                ></div>
              </div>
              <h3 className="h-fit text-center">{entry.name}</h3>
            </Fragment>
          ))}
        </div>
        <div className="flex flex-col gap-10 rounded-md border border-gray-400 p-4">
          <h2 className="text-3xl">Legend</h2>
          <ul>
            {data.map((entry) => (
              <li key={entry.name}>
                <span
                  className="mr-2 inline-block h-4 w-4"
                  style={{ backgroundColor: colorMap[entry.name] }}
                ></span>
                {entry.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
