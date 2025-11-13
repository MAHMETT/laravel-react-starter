import { Text } from '@/components/Text';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Icon } from '@/components/ui/icon';
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { analyzeUrl } from '@/lib/url';
import { resolveUrl } from '@/lib/utils';
import { type NavItem } from '@/types';
import { usePage } from '@inertiajs/react';
import { ChevronRightIcon } from 'lucide-react';
import { type ComponentPropsWithoutRef } from 'react';
import { XALink, XLink } from './ui/xlink';

export function NavFooter({
    items,
    className,
    ...props
}: ComponentPropsWithoutRef<typeof SidebarGroup> & {
    items: NavItem[];
}) {
    const page = usePage();
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
                            <Collapsible
                                key={item.title}
                                asChild
                                defaultOpen={item.isActive}
                            >
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={page.url.startsWith(
                                            resolveUrl(item.href),
                                        )}
                                        tooltip={{ children: item.title }}
                                    >
                                        <NavigateComponent
                                            href={resolveUrl(item.href)}
                                            target={
                                                urlInfo.isExternal
                                                    ? '_blank'
                                                    : undefined
                                            }
                                            rel={
                                                urlInfo.isExternal
                                                    ? 'noopener noreferrer'
                                                    : undefined
                                            }
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
                                    {item.items?.length ? (
                                        <>
                                            <CollapsibleTrigger asChild>
                                                <SidebarMenuAction className="data-[state=open]:rotate-90">
                                                    <Icon
                                                        iconNode={
                                                            ChevronRightIcon
                                                        }
                                                    />
                                                    <span className="sr-only">
                                                        Toggle {item.title}
                                                    </span>
                                                </SidebarMenuAction>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <SidebarMenuSub>
                                                    {item.items?.map(
                                                        (subItem) => (
                                                            <SidebarMenuSubItem
                                                                key={
                                                                    subItem.title
                                                                }
                                                            >
                                                                <SidebarMenuSubButton
                                                                    asChild
                                                                >
                                                                    <NavigateComponent
                                                                        href={resolveUrl(
                                                                            item.href,
                                                                        )}
                                                                        target={
                                                                            urlInfo.isExternal
                                                                                ? '_blank'
                                                                                : undefined
                                                                        }
                                                                        rel={
                                                                            urlInfo.isExternal
                                                                                ? 'noopener noreferrer'
                                                                                : undefined
                                                                        }
                                                                    >
                                                                        {item.icon && (
                                                                            <Icon
                                                                                iconNode={
                                                                                    item.icon
                                                                                }
                                                                                size={
                                                                                    'default'
                                                                                }
                                                                            />
                                                                        )}
                                                                        <Text>
                                                                            {
                                                                                item.title
                                                                            }
                                                                        </Text>
                                                                    </NavigateComponent>
                                                                </SidebarMenuSubButton>
                                                            </SidebarMenuSubItem>
                                                        ),
                                                    )}
                                                </SidebarMenuSub>
                                            </CollapsibleContent>
                                        </>
                                    ) : null}
                                </SidebarMenuItem>
                            </Collapsible>
                        );
                    })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
