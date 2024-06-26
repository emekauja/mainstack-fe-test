import { sidebarItems } from '../../../utils';
import { MainTooltip } from '../../primitive/tooltip/tooltip';

interface ISidebarProps {}

export const Sidebar = ({}: ISidebarProps) => {
  function SidebarItem({
    tooltip,
    imageUrl,
  }: {
    icon?: string;
    tooltip: string | undefined;
    imageUrl: string | undefined;
  }) {
    return (
      <div className="group relative flex items-center justify-center w-max p-2 max-h-[40px] rounded-full hover:bg-gray-50 cursor-pointer">
        <MainTooltip title={tooltip}>
          <img
            // src={`src/assets/icons/${icon}.svg`}
            src={imageUrl}
            alt={tooltip ? tooltip : ''}
            className="w-6 h-6 grayscale group-hover:grayscale-0"
          />
        </MainTooltip>
      </div>
    );
  }
  return (
    <div className="fixed left-4 top-56 flex flex-col gap-1 shadow-main w-max p-1 rounded-full">
      {sidebarItems.map((item, idx) => (
        <SidebarItem
          key={idx}
          icon={item.icon}
          tooltip={item.tooltip}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};
