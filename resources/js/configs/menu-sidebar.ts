import { dashboard, home } from "@/routes";
import { NavItem } from "@/types";
import { HomeIcon, LayoutGridIcon } from "lucide-react";

export const mainNavItems: NavItem[] = [
    {
        title: 'Home',
        href: home(),
        icon: HomeIcon,
    },
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGridIcon,
    },
];

export const footerNavItems: NavItem[] = [
    // {
    //     title: 'Repository',
    //     href: 'https://github.com/laravel/react-starter-kit',
    //     icon: FolderIcon,
    // },
    // {
    //     title: 'Documentation',
    //     href: 'https://laravel.com/docs/starter-kits#react',
    //     icon: BookOpenIcon,
    // },
];

