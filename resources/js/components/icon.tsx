import { cn } from '@/lib/utils';
import { IconProps } from '@/types/components/icon';

export function Icon({
    iconNode: IconComponent,
    className,
    ...props
}: IconProps) {
    return <IconComponent className={cn('h-4 w-4', className)} {...props} />;
}
