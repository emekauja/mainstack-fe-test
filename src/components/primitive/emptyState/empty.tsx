import { PaymentsIcon } from '../../../assets/icons/icons';
import { EmptyState } from './emptyState';

interface IEmptyProps {}

export const EmptyRevenue = ({}: IEmptyProps) => {
  return (
    <div className="flex justify-center my-6">
      <EmptyState
        icon={<PaymentsIcon />}
        title="No transactions yet"
        subTitle="Your transactions will show up here once you start receiving payment and withdrawing into your preferred payout method."
      />
    </div>
  );
};
