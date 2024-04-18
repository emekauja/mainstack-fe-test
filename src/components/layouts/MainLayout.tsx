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
    <div className="h-screen">
      <div className="relative sm:hidden md:hidden lg:block min-h-full">
        <Header user={user!} />
        <div className="container mx-auto mt-12 lg:w-[1160px]">{children}</div>
        <Sidebar />
      </div>
      <div className="lg:hidden md:flex md:items-center md:justify-center md:h-full">
        <h2 className="text-xl align-middle">
          App only available on larger screen, preferably a laptop :)
        </h2>
      </div>{' '}
    </div>
  );
};
