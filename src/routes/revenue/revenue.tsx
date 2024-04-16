import { useLoaderData, useNavigation } from 'react-router-dom';
import { RevenueChart } from '../../components/primitive/revenue/chart';
import { Balance } from '../../components/primitive/balance/balance';
import { Button } from '../../components/forms/button/button';
import {
  TransactionItem,
  TransactionType,
} from '../../components/primitive/transaction/transaction';
import { Checkbox } from '../../components/forms/checkbox/checkbox';
import { TagSelect } from '../../components/forms/taginput/tagselect';
import { useCallback, useState } from 'react';
import { Option } from '../../components/controls/dropdownpopper/options';
import { Tag } from '../../components/forms/taginput/tag';
import { transactionTypeOptions } from '../../utils';
import { Drawer } from '../../components/primitive/drawer/drawer';

interface IRevenueProps {}

const rightBalanceMock = {
  ledger_balance: 'ledger_balance',
  pending_payout: 'pending_payout',
  total_payout: 'total_payout',
  total_revenue: 'total_revenue',
};

export const Revenue = ({}: IRevenueProps) => {
  const [transactionTypes, setTransactionTypes] = useState<Option[]>(() => []);
  const [value, setValue] = useState('');
  const data = useLoaderData();
  const navigation = useNavigation();

  const walletData = Array.isArray(data) ? data[1] : [];
  const transactions: TransactionType[] = Array.isArray(data) ? data[2] : [];

  const isLoading = navigation.state === 'loading';

  const onTransactionTypeCancel = useCallback((option: Option) => {
    setTransactionTypes((prev) => {
      const updatedTransactionTypes = prev.filter(
        (opt) => opt.value !== option.value
      );
      return updatedTransactionTypes;
    });
  }, []);

  const onTransactionTypeSelect = useCallback((option: Option) => {
    setTransactionTypes((prev) => {
      return prev.concat(option);
    });
    setValue('');
  }, []);

  console.debug('data ===> ', data, isLoading);
  console.debug('loading ===> ', isLoading);

  // console.log('user ===> ', user);
  // console.log('walletData ===> ', walletData);
  // console.log('transactions ===> ', transactions);
  return (
    <div>
      <div className="flex space-x-[7.5rem]">
        <div className="flex-1 space-y-[4rem]">
          <div className="flex space-x-16">
            <Balance
              title="Available balance"
              amount={walletData?.balance}
              size="lg"
            />
            <div className="align-top w-[169px]">
              <Button text="Withdraw" size="lg" isFull />
            </div>
          </div>
          <RevenueChart startDate={new Date('7/11/24')} />
        </div>

        <div className="min-w-72 lg:w-[30%] space-y-5">
          {Object.keys(rightBalanceMock).map((key) => (
            <Balance
              key={key}
              title={key.replace('_', ' ')}
              amount={walletData[key]}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="divide-y divide-gray-50">
          <div className="flex flex-col flex-1 pb-6">
            <h2 className="text-black font-bold text-2xl leading[32px]">
              {transactions.length > 0 ? transactions.length : 'No'}{' '}
              Transactions
            </h2>
            <p className="capitalize text-sm font-degular text-gray-400">
              {' '}
              {/* todo: make days count dynamic  */}
              Your transactions for the last 7 days
            </p>
          </div>
          <div className="flex flex-col space-y-6 py-8">
            {transactions.map((transaction, idx) => (
              <TransactionItem
                key={`transaction_${idx}_${transaction.payment_reference}`}
                transaction={transaction}
                status={transaction.status}
              />
            ))}
          </div>
        </div>
      </div>
      <Drawer
        headFragment={<h2 className="text-2xl leading-7 font-bold">Filter</h2>}
        show={false}
        onClose={() => {}}
      >
        <Checkbox />

        <TagSelect
          value={value}
          placeholder="Add transaction type"
          onChange={(v) => setValue(v)}
          selected={transactionTypes}
          options={transactionTypeOptions}
          onTagCancel={onTransactionTypeCancel}
          onSelect={onTransactionTypeSelect}
          renderTag={(tag, onCancel) => (
            <Tag tag={tag} onCancel={onCancel} key={tag.value} />
          )}
        />
      </Drawer>
    </div>
  );
};
