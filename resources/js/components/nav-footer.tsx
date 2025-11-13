import { Text } from '@/components/Text';
import { Icon } from '@/components/ui/icon';
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { analyzeUrl } from '@/lib/url';
import { resolveUrl } from '@/lib/utils';
import { type NavItem } from '@/types';
import { type ComponentPropsWithoutRef } from 'react';
import { XALink, XLink } from './ui/xlink';

export function NavFooter({
    items,
    className,
    ...props
}: ComponentPropsWithoutRef<typeof SidebarGroup> & {
    items: NavItem[];
}) {
    return (
        <SidebarGroup
            {...props}
            className={`group-data-[collapsible=icon]:p-0 ${className || ''}`}
        >
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => {
                        const urlInfo = analyzeUrl(item.href);
                        const NavigateComponent = urlInfo.isExternal
                            ? XALink
                            : XLink;
                        return (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    asChild
                                    className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100"
                                >
                                    <NavigateComponent
                                        href={resolveUrl(item.href)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.icon && (
                                            <Icon
                                                iconNode={item.icon}
                                                size={'default'}
                                            />
                                        )}
                                        <Text>{item.title}</Text>
                                    </NavigateComponent>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        );
                    })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
