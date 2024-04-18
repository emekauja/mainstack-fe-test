import React from 'react';
import { Header, User } from '../connected/header/header';
import { Sidebar } from '../connected/sidebar/sidebar';

interface IMainLayoutProps {
  user?: User;
}

export const MainLayout = ({
  user,
  children,
}: React.PropsWithChildren<IMainLayoutProps>) => {
  return (
    <div className="relative">
      <Header user={user!} />
      <div className="container mx-auto mt-12 lg:w-[1160px]">{children}</div>
      <Sidebar />
    </div>
  );
};
