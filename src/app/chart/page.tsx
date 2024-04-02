import { Chart } from '../components/chart';
import { getChartCharacters } from '../utils';

const ChartPage = async () => {
  const data = await getChartCharacters();
  return (
    <main>
      <Chart data={data} />
    </main>
  );
};

export default ChartPage;
