import clsx from 'clsx';
import { InfoIcon } from '../../../assets/icons/icons';

interface IBalanceProps {
  title?: string;
  amount?: string;
  size?: 'md' | 'lg';
}

const amountBaseClass = clsx('text-black', 'font-bold');
const lgClass = clsx('text-4xl', 'leading-[48px]');
const mdClass = clsx('text-[28px]', 'leading-[38px]');

export const Balance = ({ title, amount, size = 'md' }: IBalanceProps) => {
  const amountClass = clsx(amountBaseClass, {
    [lgClass]: size === 'lg',
    [mdClass]: size === 'md',
  });
  return (
    <div className="flex flex-col space-y-2 ">
      <div className="flex justify-between">
        <p className="capitalize text-sm font-degular text-gray-400">{title}</p>
        {size === 'md' ? <InfoIcon /> : null}
      </div>
      <p className={amountClass}>NGN {amount}</p>
    </div>
  );
};
