import { Fragment } from 'react';
import './chart.css';

const colors = ['#08bae3', '#fff765', '#448c3f', 'rebeccapurple', 'hotpink'];

export const Chart = ({
  data,
}: {
  data: Array<{ name: string; episodeCount: number }>;
}) => {
  const colorMap = data.reduce((acc, { name }, idx) => {
    acc[name] = colors[idx];
    return acc;
  }, {} as Record<string, string>);

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="font-schwifty text-7xl my-20">Popularity Chart</h1>
      <section className="flex">
        <div className="h-[60vh] grid grid-cols-5 gap-4">
          {data.map((entry) => (
            <Fragment key={entry.name}>
              <div
                className="h-full flex flex-col justify-end"
                style={{ gridRow: 1 }}
              >
                <div
                  key={entry.name}
                  className="w-full"
                  style={{
                    height: `${entry.episodeCount}%`,
                    backgroundColor: colorMap[entry.name],
                  }}
                ></div>
              </div>
              <h3 className="text-center h-fit">{entry.name}</h3>
            </Fragment>
          ))}
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl">Legend</h2>
          <ul>
            {data.map((entry) => (
              <li key={entry.name}>
                <span
                  className="inline-block w-4 h-4 mr-2"
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
