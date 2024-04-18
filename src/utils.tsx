import {
  GroupIcon,
  HomeIcon,
  HomeIconActive,
  InsertChartIcon,
  // InsertChartIconActive,
  PaymentsIcon,
  PaymentsIconActive,
  WidgetsIcon,
  // WidgetsIconActive,
} from './assets/icons/icons';
import linkIcon from './assets/icons/link.svg';
import storeIcon from './assets/icons/store.svg';
import mediaKitIcon from './assets/icons/media-kit.svg';
import invoicingIcon from './assets/icons/invoicing.svg';

interface INameInitialsProps {
  name: string | undefined;
  maxInitials?: number;
}

export type RoutesType = 'revenue' | 'home' | 'apps' | 'CRM' | 'analytics';

export type IconKeys = 'icon' | 'iconActive';

export const getNameInitials = ({
  name,
  maxInitials = 2,
}: INameInitialsProps) => {
  if (!name) return '';
  return name
    .split(/\s/)
    .map((part) => part.substring(0, 1).toUpperCase())
    .filter((value) => !!value)
    .slice(0, maxInitials)
    .join('')
    .toUpperCase();
};

export const transactionTypeOptions = [
  { label: 'Charge backs', value: 'charge-backs' },
  { label: 'Withdraw', value: 'withdraw' },
  { label: 'Deposit', value: 'deposit' },
];

export const defaultDates = [
  'Today',
  'Last 7 days',
  'This month',
  'Last 3 months',
  'This year',
  'Last year',
  'All time',
];

export const navData: Record<RoutesType, string> = {
  home: 'Home',
  analytics: 'Analytics',
  revenue: 'Revenue',
  CRM: 'CRM',
  apps: 'Apps',
};

export function renderIcon(
  type: RoutesType
): Record<IconKeys, React.ReactElement> | undefined {
  switch (type) {
    case 'home':
      return {
        icon: <HomeIcon />,
        iconActive: <HomeIconActive />,
      };
    case 'analytics':
      return {
        icon: <InsertChartIcon />,
        iconActive: <InsertChartIcon />,
        // iconActive: <InsertChartIconActive />,
      };
    case 'revenue':
      return {
        iconActive: <PaymentsIconActive />,
        icon: <PaymentsIcon />,
      };
    case 'CRM':
      return {
        icon: <GroupIcon />,
        iconActive: <GroupIcon />,
      };
    case 'apps':
      return {
        icon: <WidgetsIcon />,
        iconActive: <WidgetsIcon />,
        // iconActive: <WidgetsIconActive />,
      };
    default:
      return undefined;
  }
}

export const sidebarItems = [
  {
    icon: 'link',
    tooltip: 'Link in Bio',
    imageUrl: linkIcon,
  },
  {
    icon: 'store',
    tooltip: 'Store',
    imageUrl: storeIcon,
  },
  {
    icon: 'media-kit',
    tooltip: 'Media Kit',
    imageUrl: mediaKitIcon,
  },
  {
    icon: 'invoicing',
    tooltip: 'Invoicing',
    imageUrl: invoicingIcon,
  },
];
