import { ReactNode, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TBackgroundColor, TWidth } from 'tailwindcss-classnames';
import { CancelIcon } from '../../../assets/icons/icons';
import { clsx as classnames } from 'clsx';

interface IDrawerProps {
  show: boolean;
  contentWidth?: TWidth;
  children: ReactNode;
  onClose: () => void;
  contentBgColor?: TBackgroundColor;
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnEscPress?: boolean;
  position?: 'top' | 'left' | 'right' | 'bottom';
  headFragment?: ReactNode;
  footerFragment?: ReactNode;
  withOverlay?: boolean;
  withSpacing?: boolean;
  rounded?: boolean;
}

const drawerOverlayBase = classnames(
  'fixed',
  'flex',
  'justify-center',
  'overflow-hidden',
  'z-50',
  'bg-black',
  'bg-opacity-50',
  'left-0',
  'right-0',
  'top-0',
  'bottom-0',
  'transition',
  'delay-150',
  'duration-700',
  'ease-in-out'
);
const contentTop = classnames('top-0');
const contentLeft = classnames('left-0');
const contentRight = classnames('right-0', 'm-4');
const contentBottom = classnames('bottom-0');
const spaceAround = classnames('m-4');
const roundedClass = classnames('rounded-lg');
const modalContentBase = classnames(
  'flex',
  'flex-col',
  'shadow-xl',
  'absolute',
  'max-h-full',
  'max-w-full',
  'h-full',
  'min-w-sm'
);
const insetClass = classnames('inset-y-0', 'shadow', 'z-50');

export const Drawer = ({
  show,
  children,
  onClose,
  position,
  contentWidth,
  contentBgColor,
  headFragment,
  footerFragment,
  shouldCloseOnOverlayClick,
  shouldCloseOnEscPress,
  withOverlay,
  withSpacing,
  rounded,
}: IDrawerProps) => {
  const containerId = document.getElementsByTagName('body')[0];
  //when overlay is clicked
  const handleOverlayClick = useCallback(() => {
    if (shouldCloseOnOverlayClick && !!onClose) onClose();
  }, [onClose, shouldCloseOnOverlayClick]);
  //on ESC key pressed
  const closeOnEscapeKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key == 'Escape' && shouldCloseOnEscPress) {
        if (onClose) onClose();
      }
    },
    [onClose, shouldCloseOnEscPress]
  );
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeydown);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKeydown);
    };
  }, [closeOnEscapeKeydown]);

  const drawerOverlayClass = classnames(drawerOverlayBase);
  const modalContentClass = classnames(
    modalContentBase,
    contentBgColor,
    contentWidth,
    {
      [insetClass]: !withOverlay,
      [contentTop]: position == 'top',
      [contentLeft]: position == 'left',
      [contentRight]: position == 'right',
      [contentBottom]: position == 'bottom',
      [spaceAround]: withSpacing,
      [roundedClass]: rounded,
    }
  );
  if (!show) return null;
  return createPortal(
    <div
      role="dialog"
      className={withOverlay ? drawerOverlayClass : ''}
      onClick={handleOverlayClick}
    >
      <div className={modalContentClass} onClick={(e) => e.stopPropagation()}>
        {!!headFragment && (
          <div className="w-full p-4 flex items-center justify-between ">
            {headFragment}
            <CancelIcon
              width={24}
              height={24}
              onClick={onClose}
              className="text-grey-300 hover:text-black"
            />
          </div>
        )}
        <div className="w-full p-4 overflow-y-scroll flex-1">{children}</div>
        {!!footerFragment && <div className="w-full p-4">{footerFragment}</div>}
      </div>
    </div>,
    containerId
  );
};

Drawer.defaultProps = {
  contentWidth: 'w-max',
  position: 'right',
  contentBgColor: 'bg-white',
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEscPress: false,
  withOverlay: false,
};
