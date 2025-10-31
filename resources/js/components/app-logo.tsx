import { Text } from '@/components/Text';
import env from '@/configs/env';
import AppLogoIcon from './app-logo-icon';

const appName = env.APP_SECOND_NAME;

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                <AppLogoIcon className="size-5 fill-current text-white dark:text-white" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <Text
                    className="mb-0.5 truncate leading-tight"
                    weight="semibold"
                >
                    {appName}
                </Text>
            </div>
        </>
    );
}
