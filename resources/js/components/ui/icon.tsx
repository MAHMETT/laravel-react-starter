import { cn } from "@/lib/utils";
import { IconProps } from "@/types/components/icon";
import { cva } from "class-variance-authority";

export const iconVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      color: {
        dynamic: 'text-foreground',
        reverseDynamic: 'text-background',
        dynamicMuted: 'text-foreground/70',
        reverseDynamicMuted: 'text-background/70',
        main: 'text-primary',
        'main-old': 'text-primary',
        'main-young': 'text-secondary',
        default: 'text-foreground',
        muted: 'text-muted-foreground',
        secondary: 'text-secondary-foreground',
        success: 'text-green-600 dark:text-green-400',
        warning: 'text-yellow-600 dark:text-yellow-400',
        error: 'text-destructive',
        'only-light': 'text-foreground dark:text-transparent',
        'only-dark': 'text-transparent dark:text-foreground',
      },
      size: {
        default: "size-4",
        sm: "size-2",
        lg: "size-6",
      },
    },
    defaultVariants: {
      color: "default",
      size: "default",
    },
  }
)
export function Icon({ iconNode: IconComponent,color,size, className,...props }: IconProps) {
    
    if (!IconComponent) {
        return null;
    }   

    return <IconComponent className={cn(iconVariants({ color, size, className }))} {...props} />;
}
