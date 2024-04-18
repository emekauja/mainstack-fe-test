import './App.css';
import 'react-tippy/dist/tippy.css';
import { MainLayout } from './components/layouts/MainLayout';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { User } from './components/connected/header/header';

const URL = 'https://fe-task-api.mainstack.io';

function App() {
  const [user, setUser] = useState<User>();
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
      setUser(user);
      console.log('user ===> ', user);
      console.log('walletData ===> ', walletData);
      console.log('transactions ===> ', transactions);
    };

    fetchData();
  }, []);
  return (
    <MainLayout user={user}>
      <Outlet />
    </MainLayout>
  );
}

export default App;
