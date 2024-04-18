import {
  forwardRef,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from 'react';
import {
  // classnames,
  TFontSize,
  TTextDecoration,
  TTextColor,
  TTextTransform,
  TFontWeight,
  TFontStyle,
  TFontFamily,
} from 'tailwindcss-classnames';
import classNamesJoinder from 'classnames';
import { TWordBreak } from 'tailwindcss-classnames';
import { TWhitespace } from 'tailwindcss-classnames';

// Redecalare forwardRef
//https://fettblog.eu/typescript-react-generic-forward-refs/
declare module 'react' {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

export type ITextProps<T extends ElementType> = {
  asComp?: T;
  children: ReactNode;
  isTruncated?: boolean;
  fontSize?: TFontSize;
  noOfLines?: number;
  textDecoration?: TTextDecoration;
  textColor?: TTextColor;
  casing?: TTextTransform;
  fontWeight?: TFontWeight;
  fontStyle?: TFontStyle;
  wordBreak?: TWordBreak;
  className?: string;
  whiteSpace?: TWhitespace;
  fontFamily?: TFontFamily;
};

const truncateClass = classNamesJoinder('truncate');
function TextComp<T extends ElementType = 'p'>(
  {
    className,
    children,
    fontSize,
    fontWeight,
    fontStyle,
    isTruncated,
    noOfLines,
    textDecoration,
    textColor,
    casing,
    asComp,
    wordBreak,
    whiteSpace,
    fontFamily,
    ...props
  }: ITextProps<T> & ComponentPropsWithoutRef<T>,
  ref: React.ForwardedRef<ITextProps<T> & ComponentPropsWithoutRef<T>>
) {
  const Component = asComp || ('p' as any); //paragraph as default
  const lineClampClass = noOfLines ? `line-clamp-${noOfLines}` : '';
  const wordBreakClass = wordBreak ? wordBreak : '';
  const whiteSpaceClass = whiteSpace ? whiteSpace : '';
  const baseClass = classNamesJoinder(
    textColor,
    casing,
    fontSize,
    fontWeight,
    textDecoration,
    fontStyle,
    fontFamily,
    {
      [truncateClass]: isTruncated,
      [lineClampClass]: !!noOfLines,
      [wordBreakClass]: !!wordBreak,
      [whiteSpaceClass]: !!whiteSpace,
    }
  );

  //added this logic so we can pass className alongside the Text component defined classes
  const componentClass = classNamesJoinder([baseClass, className]);

  return (
    <Component {...props} ref={ref} className={componentClass}>
      {children}
    </Component>
  );
}

//we could also use this, but its too long and a bit confusing
/*export const Text = forwardRef(TextComp) as <T extends ElementType = 'p'>(
  props: ITextProps<T> & ComponentPropsWithoutRef<T> & { ref?: React.ForwardedRef<ITextProps<T> & ComponentPropsWithoutRef<T>> }
) => ReturnType<typeof TextComp>;*/

export const Text = forwardRef(TextComp);
