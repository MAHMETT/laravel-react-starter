import { cn } from '@/lib/utils';
import {
    TextAlign,
    TextColor,
    TextProps,
    TextSize,
    TextWeight,
} from '@/types/components/text';

export const getSizeClasses = (size: TextSize) => {
    const sizeClass = size
        ? {
              xs: 'text-xs',
              sm: 'text-sm',
              base: 'text-base',
              lg: 'text-lg',
              xl: 'text-xl',
              '2xl': 'text-2xl',
              '3xl': 'text-3xl',
              '4xl': 'text-4xl',
              '5xl': 'text-5xl',
          }[size]
        : undefined;
    return sizeClass;
};

export const getWeightClasses = (weight: TextWeight) => {
    const weightClass = {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
    }[weight];

    return weightClass;
};

export const getAlignClasses = (align: TextAlign) => {
    const alignClass = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
    }[align];

    return alignClass;
};

export const getColorClasses = (color: TextColor, muted: boolean) => {
    const currentColor = color;

    const colorMap: Record<TextColor, string> = {
        dynamic: 'text-foreground', // maps to project's foreground color
        reverseDynamic: 'text-background', // maps to project's background color
        dynamicMuted: 'text-foreground/70', // 70% opacity of foreground
        reverseDynamicMuted: 'text-background/70', // 70% opacity of background
        main: 'text-primary', // maps to project's primary color
        'main-old': 'text-primary', // maps to project's primary color
        'main-young': 'text-secondary', // maps to project's secondary color
        default: 'text-foreground', // default to project's foreground
        muted: 'text-muted-foreground', // maps to project's muted foreground
        secondary: 'text-secondary-foreground', // maps to project's secondary foreground
        success: 'text-green-600 dark:text-green-400', // standard success color
        warning: 'text-yellow-600 dark:text-yellow-400', // standard warning color
        error: 'text-destructive', // maps to project's destructive color
        'only-light': 'text-foreground dark:text-transparent', // light mode only
        'only-dark': 'text-transparent dark:text-foreground', // dark mode only
    };

    // Determine effective color, considering the muted property
    const baseColors = ['dynamic', 'main', 'primary', 'secondary', 'default'];
    let effectiveColor: TextColor;
    if (
        muted &&
        baseColors.includes(currentColor) &&
        currentColor !== 'muted'
    ) {
        effectiveColor = 'dynamicMuted';
    } else if (currentColor === 'muted') {
        effectiveColor = 'muted';
    } else {
        effectiveColor = currentColor;
    }

    const colorClass = colorMap[effectiveColor];

    return colorClass;
};

export function Text({
    as: Tag = 'p',
    children,
    className,
    color = 'dynamic',
    size = 'sm',
    weight = 'normal',
    align = 'left',
    muted = false,
    ...props
}: TextProps) {
    const weightClasses = getWeightClasses(weight);
    const sizeClasses = getSizeClasses(size);
    const alignClasses = getAlignClasses(align);
    const colorClasses = getColorClasses(color, muted);

    return (
        <Tag
            className={cn(
                sizeClasses,
                colorClasses,
                weightClasses,
                alignClasses,
                className,
            )}
            {...props}
        >
            {children}
        </Tag>
    );
}
