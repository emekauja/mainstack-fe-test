import { useLoaderData, useNavigation } from 'react-router-dom';
import { RevenueChart } from '../../components/primitive/revenue/chart';
import { Balance } from '../../components/primitive/balance/balance';
import { Button } from '../../components/forms/button/button';
import {
  TransactionItem,
  TransactionType,
} from '../../components/primitive/transaction/transaction';
import { TagSelect } from '../../components/forms/taginput/tagselect';
import { useCallback, useState } from 'react';
import { Option } from '../../components/controls/dropdownpopper/options';
import { TextTag } from '../../components/forms/taginput/tag';
import { defaultDates, transactionTypeOptions } from '../../utils';
import { Drawer } from '../../components/primitive/drawer/drawer';
import { EmptyRevenue } from '../../components/primitive/emptyState/empty';
import { ArrowIcon, DownloadIcon } from '../../assets/icons/icons';
import { TWidth } from 'tailwindcss-classnames';
import { InputLabelWWrapper } from '../../components/forms/input/input';
import { TagInput } from '../../components/forms/taginput/taginput';
import { MenuButton } from '../../components/forms/button/items';

interface IRevenueProps {}

const rightBalanceMock = {
  ledger_balance: 'ledger_balance',
  pending_payout: 'pending_payout',
  total_payout: 'total_payout',
  total_revenue: 'total_revenue',
};

export const Revenue = ({}: IRevenueProps) => {
  const [transactionTypes, setTransactionTypes] = useState<Option[]>(
    () => transactionTypeOptions
  );
  const [value, setValue] = useState('');
  const [openDrawer, setOpen] = useState(false);
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

  const onTransactionTypeSelect = useCallback(
    (option: Option) => {
      if (transactionTypes.find((item) => item.value === option.value)) {
        return onTransactionTypeCancel(option);
      }
      setTransactionTypes((prev) => {
        return prev.concat(option);
      });
      setValue('');
    },
    [transactionTypes]
  );

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
          <RevenueChart
            data={[...transactions].reverse() as []}
            dataKey="amount"
            endDate={new Date(transactions[0].date || new Date().toString())}
            startDate={
              new Date(
                transactions[transactions.length - 1].date ||
                  new Date().toString()
              )
            }
          />
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
          <div className="flex justify-between pb-6">
            <div className="flex flex-col flex-1">
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

            <div className="flex space-x-3 h-max">
              <Button
                text="Filter"
                rightIcon={
                  <ArrowIcon
                    className={`transform transition-transform duration-500 ${
                      openDrawer ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                }
                variant="flat"
                onClick={() => setOpen(true)}
              />
              <Button
                text="Export list"
                rightIcon={<DownloadIcon />}
                variant="flat"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-6 pt-8 pb-[4rem]">
            {transactions.length > 0 ? (
              transactions.map((transaction, idx) => (
                <TransactionItem
                  key={`transaction_${idx}_${transaction.payment_reference}`}
                  transaction={transaction}
                  status={transaction.status}
                />
              ))
            ) : (
              <EmptyRevenue />
            )}
          </div>
        </div>
      </div>
      <Drawer
        headFragment={<h2 className="text-2xl leading-7 font-bold">Filter</h2>}
        footerFragment={
          <div className="flex space-x-3 h-max">
            <Button text="Clear" variant="border" isFull />
            <Button text="Apply" disabled isFull />
          </div>
        }
        show={openDrawer}
        onClose={() => setOpen(false)}
        contentWidth={'w-[25.75rem]' as TWidth}
        withOverlay
        withSpacing
        rounded
      >
        <div className="space-y-5 overflow-hidden">
          <div className="w-full flex space-x-3 overflow-x-scroll scroll-m-0 text-nowrap">
            {defaultDates.map((date, index) => (
              <MenuButton
                key={date}
                text={date}
                variant="outlined"
                active={defaultDates.length - 1 === index}
              />
            ))}
          </div>
          <InputLabelWWrapper label="Date Range">
            <div className="flex space-x-1">
              <TagInput
                placeholder="17 Jul 2023"
                tags={[]}
                onChange={() => {}}
                onConfirm={() => {}}
                onTagCancel={() => []}
                renderTag={(tag) => <>{tag}</>}
              />
              <TagInput
                placeholder="17 Aug 2023"
                tags={[]}
                onChange={() => {}}
                onConfirm={() => {}}
                onTagCancel={() => []}
                renderTag={(tag) => <>{tag}</>}
              />
            </div>
          </InputLabelWWrapper>
          <InputLabelWWrapper label="Transaction Type">
            <TagSelect
              value={value}
              placeholder="Add transaction status"
              onChange={(v) => setValue(v)}
              selected={transactionTypes}
              options={transactionTypeOptions}
              onTagCancel={onTransactionTypeSelect}
              onSelect={onTransactionTypeSelect}
              renderTag={(tag, onCancel) => (
                <TextTag tag={tag} onCancel={onCancel} key={tag.value} />
              )}
            />
          </InputLabelWWrapper>
          <InputLabelWWrapper label="Transaction Status">
            <TagSelect
              value={value}
              placeholder="Add transaction type"
              onChange={(v) => setValue(v)}
              selected={transactionTypes}
              options={transactionTypeOptions}
              onTagCancel={onTransactionTypeSelect}
              onSelect={onTransactionTypeSelect}
              renderTag={(tag, onCancel) => (
                <TextTag tag={tag} onCancel={onCancel} key={tag.value} />
              )}
            />
          </InputLabelWWrapper>
        </div>
      </Drawer>
    </div>
  );
};
