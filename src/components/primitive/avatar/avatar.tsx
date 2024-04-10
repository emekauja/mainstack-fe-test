import { Text } from '../../typography/Text/text';
import { getNameInitials } from '../../../utils';

interface IAvatarProps {
  name: string | undefined;
  size?: string;
}

export const Avatar = ({ name, size = '32' }: IAvatarProps) => {
  return (
    <div
      className={`rounded-full w-[${size}px] h-[${size}px] text-white grid place-items-center bg-gradient-to-r from-black-50 to-black-300 cursor-pointer`}
    >
      <Text>{getNameInitials({ name })}</Text>
    </div>
  );
};
