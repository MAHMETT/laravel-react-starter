import { iconVariants } from '@/components/ui/icon';
import { VariantProps } from 'class-variance-authority';
import { LucideIcon, LucideProps } from 'lucide-react';

export interface IconProps
    extends Omit<LucideProps, 'ref' | 'color' | 'size'>,
        VariantProps<typeof iconVariants> {
    iconNode: LucideIcon;
    className?: string;
}
