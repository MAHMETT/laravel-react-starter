import AppLogoIcon from '@/components/app-logo-icon';
import { Heading } from '@/components/Heading';
import { Text } from '@/components/Text';
import { XLink } from '@/components/ui/xlink';
import { home } from '@/routes';
import { type PropsWithChildren } from 'react';
import { AuthSimpleLayoutProps } from '@/types/layouts/auth/auth-layout';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: PropsWithChildren<AuthSimpleLayoutProps>) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <XLink
                            href={home()}
                            className="flex flex-col items-center gap-2 font-medium"
                        >
                            <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-md">
                                <AppLogoIcon className="size-9 fill-current text-(--foreground) dark:text-white" />
                            </div>
                            <span className="sr-only">{title}</span>
                        </XLink>

                        <div className="space-y-2 text-center">
                            <Heading as="h1" size="xl" weight="medium">{title}</Heading>
                            <Text align="center" size="sm" color="muted">
                                {description}
                            </Text>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
