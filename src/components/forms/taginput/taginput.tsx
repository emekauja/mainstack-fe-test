import React, { KeyboardEvent, useRef } from 'react';
import { Input } from '../input/input';

// import { Input } from '../input/input';

export type OnTagCancel<T> = (tag: T, index?: number) => void;

interface ITagInputProps<T> {
  tags: T[];
  value?: string;
  placeholder?: string;
  onConfirm: (value: string) => void;
  onFocus?: () => void;
  onChange: (text: string) => void;
  onTagCancel: OnTagCancel<T>;
  renderTag: (tag: T, onTagCancel: OnTagCancel<T>) => React.ReactNode;
  rightElement?: React.ReactElement;
  leftElement?: React.ReactElement;
}

export const TagInput = <T extends object>({
  tags,
  value,
  placeholder,
  onTagCancel,
  onChange,
  onConfirm,
  onFocus,
  renderTag,
  leftElement,
  rightElement,
}: ITagInputProps<T>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const hasValues = tags && tags.length;
  const handleKeyChange = (e: KeyboardEvent<HTMLInputElement>) => {
    // when either of SemiColon, Enter or Comma keys are pressed, confirm the new tag and clear input
    if (['Semicolon', 'Enter', 'Comma'].includes(e.code)) {
      e.preventDefault();
      if (value) onConfirm(value);
    }
  };
  return (
    <div
      className="flex w-full flex-wrap space-x-2 overflow-hidden border border-gray-50 rounded-xl bg-gray-50 py-2 px-3 placeholder:text-gray-300 focus:border-black focus:ring-0 focus:ring-black"
      style={{ minHeight: 40 }}
      onClick={() => inputRef.current?.focus()}
    >
      {!!leftElement && leftElement}
      {hasValues
        ? tags.map((tag, index) => (
            <React.Fragment key={index}>
              {renderTag(tag, onTagCancel)}{' '}
              {index === tags.length - 1 ? '' : ', '}
            </React.Fragment>
          ))
        : null}
      <Input
        ref={inputRef}
        value={value}
        isFullWidth={false}
        onFocus={onFocus}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        bgColor="bg-gray-50"
        onKeyPress={handleKeyChange}
      />
      {!!rightElement && rightElement}
    </div>
  );
};

// (e) => {
// 	preventDefault(e);
// 	onTagCancel(tag, index);
// }
