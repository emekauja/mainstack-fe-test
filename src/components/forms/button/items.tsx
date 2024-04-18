import { AnchorHTMLAttributes, ReactElement, ReactNode } from 'react';
import { clsx as classnames } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ArrowIcon } from '../../../assets/icons/icons';

interface MenuButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode;
  variant?: 'filled' | 'outlined' | 'icon' | 'base';
  text?: string;
  disabled?: boolean;
  active?: boolean;
}

//Style
const baseClass = classnames(
  'flex',
  'items-center',
  'space-x-1',
  'text-base',
  'cursor-pointer'
);

const baseSpacing = classnames('space-x-3');
const rounded = classnames('rounded-full');
const defaultClass = classnames(
  'text-gray',
  // '',
  'hover:bg-gray-50',
  'focus:bg-gray-50'
);
const filled = classnames(defaultClass, 'focus:bg-black', 'focus:text-white');
const filledSpacing = classnames('py-2', 'pr-[18px]', 'pl-3.5');
const iconClass = classnames('p-2', defaultClass);

const outlinedClass = classnames(
  'bg-black',
  'py-2.5',
  'px-[18px]',
  'text-black',
  'border',
  'border-gray-50',
  'bg-white'
);

const activeOutlineClass = classnames('bg-black', 'text-white', 'border-black');

const filledActiveClass = classnames(
  'bg-black',
  'text-white',
  'hover:bg-current',
  'divide-gray-50'
);
const aActiveClass = classnames(
  [...filledActiveClass.split(' ')]
    .filter((name) => {
      return name !== 'hover:bg-current';
    })
    .join(' '),
  'hover:bg-black'
);
const aInactiveClass = classnames(
  [...filled.split(' ')]
    .filter((name) => {
      return name !== 'hover:bg-gray-50';
    })
    .join(' ')
);
const disabledBtn = classnames('opacity-50', 'pointer-events-none');

export const MenuButton = ({
  variant = 'filled',
  icon,
  text,
  active = false,
  disabled = false,
  ...props
}: MenuButtonProps) => {
  const btnClass = classnames(baseClass, rounded, {
    [filled]: variant === 'filled',
    [filledSpacing]: variant === 'filled',
    [outlinedClass]: variant === 'outlined',
    [baseSpacing]: variant === 'base',
    [iconClass]: variant === 'icon',
    [disabledBtn]: disabled,
    [filledActiveClass]:
      (variant === 'filled' && !!active) || (variant === 'icon' && !!active),
    [activeOutlineClass]: variant === 'outlined' && !!active,
    // [outlinedActiveClass]: variant === 'outlined' && active,
  });

  return (
    <a className={twMerge(btnClass)} {...props}>
      {icon && icon}
      {text ? <span>{text}</span> : null}
    </a>
  );
};

MenuButton.defaultProps = {
  variant: 'filled',
};

interface DashboardMenuButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  rightIcon?: ReactElement;
  leftIcon?: ReactElement;
  text: string;
  rightText?: string;
  active?: boolean;
}

export const DashboardMenuButton = ({
  leftIcon,
  text,
  rightIcon,
  rightText,
  active,
  ...props
}: DashboardMenuButtonProps) => {
  const aClass = classnames(
    'flex',
    'relative',
    'divide-x',
    'divide-gray-50',
    'rounded-full',
    'cursor-pointer',
    'focus:hover:bg-blue',
    {
      [aActiveClass]: !!active,
      'hover:bg-gray-50': !active,
    },
    aInactiveClass
  );
  return (
    <a className={aClass} {...props}>
      <div className="flex items-center space-x-1 py-2.5 px-[18px]">
        {' '}
        {leftIcon && leftIcon}
        {text ? <span>{text}</span> : null}
      </div>
      {active ? (
        <div className="flex items-center space-x-1 py-2.5 px-[18px]">
          {' '}
          {text ? <span>{rightText}</span> : null}
          {rightIcon && rightIcon}
        </div>
      ) : null}
    </a>
  );
};

interface MenuItemProps {
  icon?: ReactNode;
  title: string;
  text?: string;
}

export const MenuItem = ({ icon, title, text }: MenuItemProps) => {
  return (
    <div className="group w-full h-[5rem] p-4 rounded-[1rem] hover:shadow-sec border-2 border-white hover:border-gray-100 flex justify-between items-center text-gray-300 cursor-pointer">
      <div className="space-x-3 flex items-center">
        {icon && (
          <div className="border border-gray-50 w-12 h-12 flex justify-center items-center rounded-[1rem]">
            {icon}
          </div>
        )}
        <div className="">
          <h2 className="font-semibold text-lg text-black">{title}</h2>
          <p className="text-gray-400 text-sm font-medium">{text}</p>
        </div>
      </div>

      <ArrowIcon className="hidden group-hover:block -rotate-90" />
    </div>
  );
};
