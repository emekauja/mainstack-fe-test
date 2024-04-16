import './App.css';
import 'react-tippy/dist/tippy.css';
import { MainLayout } from './components/layouts/MainLayout';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

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
      <Outlet />
    </MainLayout>
  );
}

export default App;
