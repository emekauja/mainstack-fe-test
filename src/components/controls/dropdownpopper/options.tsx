import React, { HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';
import { Checkbox } from '../../forms/checkbox/checkbox';

export interface Option {
  value: string;
  label: string;
}
export interface IDropdownOptionsProps {
  options: Option[];
  renderOption: (option: Option, index: number) => ReactNode;
}

const optClass = classNames('flex', 'flex-col', 'text-left', 'p-2');

export const DropdownOptions = ({
  options,
  renderOption,
}: IDropdownOptionsProps) => {
  const baseClass = classNames(optClass);
  return (
    <div className={baseClass}>
      {options.map((option, index) => (
        <React.Fragment key={index}>
          {renderOption(option, index)}
        </React.Fragment>
      ))}
    </div>
  );
};

const containerBase = classNames(
  'flex',
  'flex-col',
  'overflow-auto',
  'rounded-lg',
  'border',
  'border-gray-50',
  'bg-white',
  'text-left',
  'shadow-xl'
);
const maxHeightClass = classNames('max-h-40');
const heightFullContent = classNames('h-max');
// Dropdown Container
interface DropdownContainerProps extends HTMLAttributes<HTMLDivElement> {
  fullHeight?: boolean;
  children?: ReactNode;
}
export const DropdownContainer = ({
  fullHeight,
  children,
}: DropdownContainerProps) => {
  const mainClass = classNames(containerBase, {
    [maxHeightClass]: !fullHeight,
    [heightFullContent]: !!fullHeight,
  });
  return <div className={mainClass}>{children}</div>;
};

interface IOptionProps {
  option: Option;
  isSelected?: boolean;
  onSelect: (option: Option) => void;
}

export const DefaultOption = ({ option, onSelect }: IOptionProps) => {
  return (
    <span
      key={option.value}
      onClick={() => onSelect(option)}
      className={`text-sm text-black hover:bg-red hover:text-white py-1 px-4 cursor-default`}
    >
      {option.label}
    </span>
  );
};

export const TagInputOption = ({
  option,
  onSelect,
  isSelected,
}: IOptionProps) => {
  // const isSelectedClass = classNames('opacity-20', 'pointer-events-none');
  const optionClass = classNames(
    'flex',
    'items-center',
    'space-x-2',
    'text-sm',
    'text-black',
    'hover:bg-gray-50',
    'rounded-md',
    // 'hover:text-white',
    'py-2',
    'px-4',
    'cursor-default',
    {
      // [isSelectedClass]: isSelected,
    }
  );
  return (
    <div
      key={option.value}
      onClick={() => onSelect(option)}
      className={optionClass}
    >
      <Checkbox checked={isSelected} />
      <span>{option.label}</span>
    </div>
  );
};
