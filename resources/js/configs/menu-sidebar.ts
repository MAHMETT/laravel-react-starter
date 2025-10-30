import { dashboard, home } from "@/routes";
import { NavItem } from "@/types";
import { HomeIcon, LayoutGridIcon } from "lucide-react";

export const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGridIcon,
    },
];

export const footerNavItems: NavItem[] = [
    {
        title: 'Back to Home',
        href: home(),
        icon: HomeIcon,
    },
];

