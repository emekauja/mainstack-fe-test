import { ButtonHTMLAttributes, ReactNode } from 'react';
//  import { classnames, TBoxShadow, TBorderRadius } from 'tailwindcss-classnames';
// import classnames from 'classnames';
import { clsx as classnames } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  variant?: 'filled' | 'outlined' | 'icon';
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
const rounded = classnames('rounded-full');
const defaultClass = classnames(
  'text-gray',
  // '',
  'hover:bg-gray-50',
  'focus:bg-gray-50'
);
const filled = classnames('py-2', 'pr-[18px]', 'pl-3.5', defaultClass);
const iconClass = classnames('p-2', defaultClass);

const outlinedClass = classnames(
  'bg-black',
  'py-2',
  'pr-[18px]',
  'pl-3.5',
  'text-white',
  'hover:bg-black'
);

const filledActiveClass = classnames(
  'bg-black',
  'text-white',
  'hover:bg-current'
);
// const outlinedActiveClass = classnames('bg-black', 'text-white')

const disabledBtn = classnames('opacity-50');
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
    [outlinedClass]: variant === 'outlined',
    [iconClass]: variant === 'icon',
    [disabledBtn]: disabled,
    [filledActiveClass]:
      (variant === 'filled' && !!active) || (variant === 'icon' && !!active),
    // [outlinedActiveClass]: variant === 'outlined' && active,
  });

  return (
    <button disabled={disabled} {...props} className={twMerge(btnClass)}>
      {icon && icon}
      {text ? <span>{text}</span> : null}
    </button>
  );
};

MenuButton.defaultProps = {
  variant: 'filled',
};
