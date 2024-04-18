import { MenuButton } from '../../forms/button/items';
import {
  BellIcon,
  MainStackLogo,
  MessageIcon,
} from '../../../assets/icons/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutesType, navData, renderIcon } from '../../../utils';
import {
  AppsDropdown,
  UserDropdown,
} from '../../controls/userDropdown/userDropdown';

export type User = {
  email: string;
  first_name: string;
  last_name: string;
};

interface IHeaderProps {
  user?: User;
}

export const Header = ({ user }: IHeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  function Menu() {
    return (
      <nav className="flex space-x-3 items-center">
        {Object.keys(navData).map((key, idx) => {
          const element = renderIcon(key as RoutesType);
          const isActive =
            location && location.pathname.includes(key.toLowerCase());
          const icon =
            isActive && element?.iconActive
              ? element?.iconActive
              : element?.icon;

          if (navData[key as RoutesType].toLocaleLowerCase() === 'apps') {
            return <AppsDropdown key={`nav-item-${idx}`} />;
          }

          return (
            <MenuButton
              key={`nav-item-${idx}`}
              text={navData[key as RoutesType]}
              icon={icon}
              onClick={() => navigate(`/${key.toLowerCase()}`)}
              active={isActive}
            />
          );
        })}
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

          <UserDropdown user={user} />
        </div>
      </div>
    </div>
  );
};
