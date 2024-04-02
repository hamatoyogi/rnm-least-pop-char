import { Chart } from '../components/chart/chart';
import { getChartCharacters } from '../utils';

const ChartPage = async () => {
  const data = await getChartCharacters();
  console.log({ data });

  return (
    <main>
      <Chart data={data} />
    </main>
  );
};

export default ChartPage;
