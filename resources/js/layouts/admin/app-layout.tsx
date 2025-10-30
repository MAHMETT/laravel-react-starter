import AppLayoutTemplate from '@/layouts/admin/app/app-sidebar-layout';
import { AppLayoutProps } from '@/types/layouts/admin/app-layout';

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
    <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
        {children}
    </AppLayoutTemplate>
);
