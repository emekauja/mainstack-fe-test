// import { clsx as classnames } from 'clsx';
import { MenuButton } from '../../forms/button/items';
import {
  BellIcon,
  GroupIcon,
  HomeIcon,
  InsertChartIcon,
  MainStackLogo,
  MenuIcon,
  MessageIcon,
  PaymentsIcon,
  WidgetsIcon,
} from '../../../assets/icons/icons';
import { Avatar } from '../../primitive/avatar/avatar';

type User = {
  name: string;
};

interface IHeaderProps {
  user?: User;
}

const navData = [
  {
    icon: <HomeIcon />,
    text: 'Home',
  },
  {
    icon: <InsertChartIcon />,
    text: 'Analytics',
  },
  {
    icon: <PaymentsIcon />,
    text: 'Revenue',
  },
  {
    icon: <GroupIcon />,
    text: 'CRM',
  },
  {
    icon: <WidgetsIcon />,
    text: 'Apps',
  },
];

export const Header = ({ user }: IHeaderProps) => {
  function Menu() {
    return (
      <nav className="flex space-x-1 items-center">
        {navData.map(({ text, icon }, idx) => (
          <MenuButton key={`nav-item-${idx}`} text={text} icon={icon} />
        ))}
      </nav>
    );
  }
  return (
    <div className="sticky top-0 block pt-4 pb-3 px-4 z-50 bg-white">
      <div className="relative flex items-center justify-between shadow-sec rounded-full border-2 border-white h-16 pr-2 pl-6 space-x-3">
        {/* <a href=""> */}
        <MainStackLogo />
        {/* </a> */}

        <div>
          <Menu />
        </div>

        <div className="flex items-center space-x-2">
          <MenuButton icon={<BellIcon />} variant="icon" />
          <MenuButton icon={<MessageIcon />} variant="icon" />

          <div className="rounded-full space-x-2 flex items-center py-1 pr-3 pl-[5px] bg-gray-50">
            <Avatar name={user?.name} />
            <MenuIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
