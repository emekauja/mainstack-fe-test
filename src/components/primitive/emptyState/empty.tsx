import { EmptyState } from './emptyState';
import { RoutesType, renderIcon } from '../../../utils';

interface IEmptyProps {
  routeType?: RoutesType;
}

export const EmptyRevenue = ({ routeType = 'revenue' }: IEmptyProps) => {
  return (
    <div className="flex justify-center my-6">
      <EmptyState
        icon={renderIcon(routeType)?.icon}
        title="No transactions yet"
        subTitle="Your transactions will show up here once you start receiving payment and withdrawing into your preferred payout method."
      />
    </div>
  );
};

export const EmptyGeneric = ({ routeType = 'home' }: IEmptyProps) => {
  return (
    <div className="flex justify-center my-6">
      <EmptyState
        icon={renderIcon(routeType)?.icon}
        title={`No ${routeType!} page yet`}
        subTitle="Page not available, since this is for test purpose."
      />
    </div>
  );
};
