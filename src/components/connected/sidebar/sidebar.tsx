import React, { ReactNode } from 'react';

interface ISidebarProps {}

const sidebarItems = [
  {
    icon: 'link',
    tooltip: 'Link in Bio',
  },
  {
    icon: 'store',
    tooltip: 'Store',
  },
  {
    icon: 'media-kit',
    tooltip: 'Media Kit',
  },
  {
    icon: 'invoicing',
    tooltip: 'Invoicing',
  },
];

export const Sidebar = ({}: ISidebarProps) => {
  function SidebarItem({ icon, tooltip }: { icon?: string; tooltip?: string }) {
    return (
      <div className="group flex items-center justify-center w-max p-2 max-h-[40px] rounded-full hover:bg-gray-50">
        <img
          src={`/src/assets/icons/${icon}.svg`}
          alt={tooltip ? tooltip : ''}
          className="w-6 h-6 grayscale group-hover:grayscale-0"
        />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-1 shadow-main w-max p-1 rounded-full">
      {sidebarItems.map((item, idx) => (
        <SidebarItem key={idx} icon={item.icon} tooltip={item.tooltip} />
      ))}
    </div>
  );
};
