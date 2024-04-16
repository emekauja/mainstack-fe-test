import React, { ReactElement } from 'react';

interface IEmptyStateProps {
  icon?: ReactElement;
  title?: string;
  subTitle?: string;
}

export const EmptyState = ({ icon, title, subTitle }: IEmptyStateProps) => {
  return (
    <div className="flex flex-col py-4 space-y-3 max-w-[369px]">
      {icon ? (
        <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-gray-50">
          {React.cloneElement(icon, { color: 'text-gray' })}
        </div>
      ) : null}
      <p className="text-3xl font-semibold text-black"> {title}</p>
      <p className="mb-6 font-normal text-gray-300 font-degular">{subTitle}</p>
    </div>
  );
};
