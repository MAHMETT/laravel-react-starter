export type TextColor =
    | 'dynamic'
    | 'reverseDynamic'
    | 'dynamicMuted'
    | 'reverseDynamicMuted'
    | 'main'
    | 'main-old'
    | 'main-young'
    | 'default'
    | 'muted'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'only-light'
    | 'only-dark';

export type TextSize =
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl';

export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';

export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
    as?:
        | 'p'
        | 'span'
        | 'div'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'label'
        | 'a';
    children: React.ReactNode;
    className?: string;
    color?: TextColor;
    size?: TextSize;
    weight?: TextWeight;
    align?: TextAlign;
    muted?: boolean;
}
