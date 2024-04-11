import './App.css';
import { Text } from './components/typography/Text/text';
import 'react-tippy/dist/tippy.css';
import { MainLayout } from './components/layouts/MainLayout';
import { useEffect } from 'react';
import { RevenueChart } from './components/primitive/revenue/chart';

const URL = 'https://fe-task-api.mainstack.io';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const result = (
        await Promise.all([
          fetch(`${URL}/user`),
          fetch(`${URL}/wallet`),
          fetch(`${URL}/transactions`),
        ])
      ).map((r) => r.json());

      const [user, walletData, transactions] = await Promise.all(result);

      console.log('user ===> ', user);
      console.log('walletData ===> ', walletData);
      console.log('transactions ===> ', transactions);
    };

    fetchData();
  }, []);
  return (
    <MainLayout>
      <RevenueChart startDate={new Date('7/11/24')} />

      <h1 className="text-7xl font-bold underline">Main stack</h1>

      {/* {Outlet} */}
    </MainLayout>
  );
}

export default App;
