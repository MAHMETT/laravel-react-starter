import { cn } from '@/lib/utils';
import { type LucideProps } from 'lucide-react';
import { type ComponentType } from 'react';
import { IconProps } from '@/types/components/icon';

export function Icon({
    iconNode: IconComponent,
    className,
    ...props
}: IconProps) {
    return <IconComponent className={cn('h-4 w-4', className)} {...props} />;
}
