import { cn } from '@/lib/utils';
import {
    getAlignClasses,
    getColorClasses,
    getSizeClasses,
    getWeightClasses
} from './Text';

import {
    HeadingProps
} from '@/types/components/heading.types';

export function Heading({
    as: Tag = 'h1',
    children,
    className,
    color = 'dynamic',
    size = '2xl',
    weight = 'bold',
    align = 'left',
    muted = false,
    ...props
}: HeadingProps) {
    const weightClasses = getWeightClasses(weight)
    const sizeClasses = getSizeClasses(size)
    const alignClasses = getAlignClasses(align)
    const colorClasses = getColorClasses(color, muted)

    const classes = cn(
        sizeClasses,
        colorClasses,
        weightClasses,
        alignClasses,
        className
    );

    return <Tag className={classes} {...props}>{children}</Tag>;
}
