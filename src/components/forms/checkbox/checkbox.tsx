import { forwardRef, InputHTMLAttributes, ReactNode, RefObject } from 'react';
import { TAlignItems } from 'tailwindcss-classnames';
import { clsx as classnames } from 'clsx';
interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  //variant?: 'filled' | 'transparent';
}

const baseClass = classnames('h-4', 'w-4', 'border-gray-50', 'rounded');
const blackColor = classnames('focus:ring-black', 'bg-black', 'accent-black');

export const Checkbox = forwardRef<unknown, ICheckboxProps>(
  ({ ...props }, ref) => {
    const checkboxClass = classnames(baseClass, blackColor);
    return (
      <input
        {...props}
        type="checkbox"
        className={checkboxClass}
        ref={ref as RefObject<HTMLInputElement>}
      />
    );
  }
);

//Form checkbox with label
interface IFormCheckboxProps extends ICheckboxProps {
  label: ReactNode;
  alignItems?: TAlignItems;
}
export const FormCheckbox = forwardRef<unknown, IFormCheckboxProps>(
  ({ label, alignItems = 'items-center', ...props }, ref) => {
    return (
      <label
        className={classnames('inline-flex', 'flex-1', 'space-x-2', alignItems)}
      >
        <Checkbox {...props} ref={ref} />
        <span className="ml-3">{label}</span>
      </label>
    );
  }
);
