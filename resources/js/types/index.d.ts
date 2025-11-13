import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItemBase {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface NavItem extends NavItemBase {
    items?: NavItemBase[];
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface BasicUrl {
    url: string;
    method?: string;
}

export interface InertiaHref {
    component: string;
    props?: {
        url?: string;
        [key: string]: unknown;
    };
}

export interface ApiHref {
    method: string;
    path: string;
}

export type HrefValue =
    | string
    | BasicUrl
    | InertiaHref
    | ApiHref
    | null
    | undefined;
