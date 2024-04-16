import { TBackgroundColor } from 'tailwindcss-classnames';
import { FailedIcon, SuccessIcon } from '../../../assets/icons/icons';
import clsx from 'clsx';

export type TransactionType = {
  amount: string;
  metadata?: {
    name?: string;
    type?: string;
    email?: string;
    quantity?: number;
    country?: string;
    product_name?: string;
  };
  payment_reference: string;
  status: StatusType;
  type?: string;
  date: string;
};

type StatusType = 'successful' | 'failed' | 'pending';
interface ITransactionProps {
  status?: StatusType;
  transaction: TransactionType;
}

export const TransactionItem = ({ status, transaction }: ITransactionProps) => {
  function IconWrapper({
    color,
    children,
  }: React.PropsWithChildren<{ color?: TBackgroundColor }>) {
    const iconClass = clsx(
      'flex',
      'items-center',
      'justify-center',
      'h-12',
      'w-12',
      'rounded-full',
      {
        color: color,
        ['bg-[#E3FCF2]']: !color,
      }
    );
    return <div className={iconClass}>{children}</div>;
  }

  return (
    <div
      className="flex justify-between w-full"
      key={transaction.payment_reference}
    >
      <div className="flex space-x-2">
        {status === 'successful' ? (
          <IconWrapper>
            <SuccessIcon />
          </IconWrapper>
        ) : (
          <IconWrapper color={'bg-[#961100]' as TBackgroundColor}>
            <FailedIcon />
          </IconWrapper>
        )}
        <div className="flex flex-col">
          <p className="font-degular text-base">
            {transaction?.metadata?.product_name ?? transaction.type}
          </p>
          {status === 'successful' &&
          transaction.metadata &&
          transaction.metadata.name ? (
            <p className="font-degular text-sm text-gray-400">
              {transaction.metadata.name}
            </p>
          ) : (
            <p
              className={`${status === 'successful' ? 'text-[#0EA163]' : status === 'pending' ? 'text-[#A77A07]' : 'text-[#961100]'}`}
            >
              {transaction.status!}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <p className="font-bold text-base">NGN{transaction.amount ?? 0}</p>
        <p className="font-degular text-sm text-gray-400">
          {new Date(transaction.date).toDateString()}
        </p>
      </div>
    </div>
  );
};
