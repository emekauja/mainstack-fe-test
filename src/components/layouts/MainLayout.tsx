import React from 'react';
import { Header } from '../connected/header/header';
import { Sidebar } from '../connected/sidebar/sidebar';

interface IMainLayoutProps {}

export const MainLayout = ({
  children,
}: React.PropsWithChildren<IMainLayoutProps>) => {
  return (
    <div className="relative">
      <Header />
      <div className="container mx-auto mt-12 lg:w-[1160px]">{children}</div>
      <Sidebar />
    </div>
  );
};
