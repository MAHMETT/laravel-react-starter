import { TextColor, TextSize, TextWeight, TextAlign } from './text';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  color?: TextColor;
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  muted?: boolean;
}