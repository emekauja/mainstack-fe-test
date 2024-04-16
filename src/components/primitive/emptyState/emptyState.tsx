import React, { ReactElement } from 'react';
import { Text } from '../../typography/Text/text';

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
      <Text
        // className="mb-2"
        fontSize="text-3xl"
        fontWeight="font-semibold"
        textColor="text-black"
      >
        {title}
      </Text>
      <Text
        className="mb-6"
        // fontSize="text-sm"
        fontWeight="font-normal"
        textColor="text-gray-300"
      >
        {subTitle}
      </Text>
    </div>
  );
};
