import { InertiaLinkProps } from '@inertiajs/react';

export interface XLinkProps extends InertiaLinkProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  underline?: 'hover' | 'always' | 'never';
  active?: boolean;
  exact?: boolean;
  preserveScroll?: boolean;
  preserveState?: boolean | null;
}

export interface XALinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  underline?: 'hover' | 'always' | 'never';
  active?: boolean;
  exact?: boolean;
}