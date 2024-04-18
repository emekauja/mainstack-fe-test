import { CancelIcon } from '../../../assets/icons/icons';
import { Option } from '../../controls/dropdownpopper/options';

interface ITagProps {
  tag: Option;
  onCancel: (tag: Option) => void;
}
export const Tag = ({ tag, onCancel }: ITagProps) => {
  return (
    <div className="inline-flex items-center space-x-2 rounded bg-gray-500 px-2">
      <span className="text-white">{tag.label}</span>
      <CancelIcon
        width={16}
        height={16}
        className="text-white"
        onClick={() => onCancel(tag)}
      />
    </div>
  );
};
export const TextTag = ({ tag }: ITagProps) => {
  return (
    <div className="inline-flex items-center ">
      <span className="text-black text-sm">{tag.label}</span>
    </div>
  );
};
