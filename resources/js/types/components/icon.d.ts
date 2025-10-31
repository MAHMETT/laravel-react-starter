import { LucideProps } from 'lucide-react';
import { ComponentType } from 'react';

export interface IconProps extends Omit<LucideProps, 'ref'> {
    iconNode: ComponentType<LucideProps>;
}
