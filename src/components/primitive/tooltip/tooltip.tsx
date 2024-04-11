import { Tooltip, TooltipProps } from 'react-tippy';

export const MainTooltip: React.FC<React.PropsWithChildren<TooltipProps>> = ({
  title,
  ...props
}) => {
  return (
    <Tooltip
      {...props}
      disabled={props.disabled || !title}
      html={<span className="text-sm text-white">{title}</span>}
    />
  );
};

MainTooltip.defaultProps = {
  arrow: true,
  position: 'right',
};
