import { useState } from 'react';
import {
  ArrowIcon,
  BugIcon,
  MenuIcon,
  ReferIcon,
  SettingIcon,
  SignoutIcon,
  WidgetsIcon,
} from '../../../assets/icons/icons';
import { User } from '../../connected/header/header';
import { Avatar } from '../../primitive/avatar/avatar';
import { DropdownPopper } from '../dropdownpopper/dropdownpopper';
import clsx from 'clsx';
import {
  DashboardMenuButton,
  MenuButton,
  MenuItem,
} from '../../forms/button/items';
import { DropdownContainer } from '../dropdownpopper/options';
import { sidebarItems } from '../../../utils';

const iconClass = clsx(
  'inline-block',
  'text-xl',
  'shrink-0',
  'w-[1em]',
  'h-[1em]',
  'align-middle'
);
interface IUserDropdownProps {
  user?: User;
}

export const UserDropdown = ({ user }: IUserDropdownProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <DropdownPopper
      automatic={false}
      show={openDropdown}
      setShow={setOpenDropdown}
      reference={
        <div
          className="rounded-full space-x-2 flex items-center py-1 pr-3 pl-[5px] bg-gray-50 "
          onClick={() => setOpenDropdown((prev) => !prev)}
        >
          <Avatar name={`${user?.first_name} ${user?.last_name}`} />
          <MenuIcon />
        </div>
      }
      dropdown={
        <DropdownContainer fullHeight>
          <div className=" w-[23.125rem] p-[0.835rem]">
            <div className="flex space-x-2 items-center mb-4 mt-[0.625rem]">
              <Avatar name={`${user?.first_name} ${user?.last_name}`} />

              <div>
                <h2 className="text-xl font-semibold leading-[26px]">{`${user?.first_name} ${user?.last_name}`}</h2>
                <p className="text-sm font-degular font-medium leading-4 text-gray-400">
                  {user?.email}
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <MenuButton
                text="Account Settings"
                icon={
                  <SettingIcon width={24} height={24} className={iconClass} />
                }
                variant="base"
              />
              <MenuButton
                text="Refer & Earn"
                icon={<ReferIcon className={iconClass} />}
                variant="base"
              />
              <MenuButton
                text="Integrations"
                icon={<WidgetsIcon className={iconClass} />}
                variant="base"
              />
              <MenuButton
                text="Report bug"
                icon={<BugIcon className={iconClass} />}
                variant="base"
              />
              <MenuButton
                text="Sign out"
                icon={<SignoutIcon className={iconClass} />}
                variant="base"
              />
            </div>
          </div>
        </DropdownContainer>
      }
    />
  );
};

export const AppsDropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <DropdownPopper
      automatic={false}
      show={openDropdown}
      setShow={setOpenDropdown}
      reference={
        <DashboardMenuButton
          leftIcon={<WidgetsIcon />}
          text="Apps"
          rightIcon={<ArrowIcon />}
          rightText="Link in Bio"
          onClick={() => setOpenDropdown((prev) => !prev)}
          active={openDropdown}
        />
      }
      dropdown={
        <DropdownContainer fullHeight>
          <div className=" w-[26.125rem] p-[0.835rem] space-y-3">
            {sidebarItems.map(({ icon, tooltip }) => (
              <MenuItem
                key={tooltip}
                icon={
                  <img
                    src={`/src/assets/icons/${icon}.svg`}
                    alt={tooltip ? tooltip : ''}
                    className="w-6 h-6"
                  />
                }
                title={tooltip}
                text={`Manage your ${tooltip}`}
              />
            ))}
          </div>
        </DropdownContainer>
      }
    />
  );
};
