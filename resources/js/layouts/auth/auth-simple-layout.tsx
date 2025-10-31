import AppLogoIcon from '@/components/app-logo-icon';
import { XALink, XLink } from '@/components/ui/xlink';
import { home } from '@/routes';
import { type PropsWithChildren } from 'react';
import { AuthSimpleLayoutProps } from '@/types/layouts/auth/auth-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FieldDescription } from '@/components/ui/field';
import { cn } from '@/lib/utils';
import { CustomToast } from '@/components/ui/custom-toast';
import { Heading } from '@/components/Heading';
import env from '@/configs/env';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: PropsWithChildren<AuthSimpleLayoutProps>) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-8">
                    <XLink
                        href={home()}
                        className="flex items-center gap-3 justify-center rounded-md"
                    >
                        <AppLogoIcon className="size-9 fill-current text-(--foreground) dark:text-white" />
                        {env.APP_SECOND_NAME && <Heading >{env.APP_SECOND_NAME}</Heading>}
                    </XLink>
                    <div className={cn("flex flex-col gap-6")} >
                        <Card>
                            <CardHeader className="text-center">
                                <CardTitle className="text-xl">{title}</CardTitle>
                                <CardDescription>
                                    {description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {children}
                            </CardContent>
                        </Card>
                        <FieldDescription className="px-6 text-center">
                            By clicking continue, you agree to our <XALink className='underline' href="#">Terms of Service</XALink>                            and <XALink className='underline' href="#">Privacy Policy</XALink>.
                        </FieldDescription>
                    </div>
                    <CustomToast />
                </div>
            </div>
        </div>
    );
}
