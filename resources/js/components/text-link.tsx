import { XLink } from '@/components/ui/xlink';
import { cn } from '@/lib/utils';
import { TextLinkProps } from '@/types/components/text-link';

export default function TextLink({
    className = '',
    children,
    ...props
}: TextLinkProps) {
    return (
        <XLink
            className={cn(
                'text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500',
                className,
            )}
            {...props}
        >
            {children}
        </XLink>
    );
}
