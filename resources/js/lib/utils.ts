import { HrefValue } from '@/types';
import { InertiaLinkProps } from '@inertiajs/react';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function isSameUrl(
    url1: NonNullable<InertiaLinkProps['href']>,
    url2: NonNullable<InertiaLinkProps['href']>,
) {
    return resolveUrl(url1) === resolveUrl(url2);
}

export function resolveUrl(url: NonNullable<InertiaLinkProps['href']>): string {
    return typeof url === 'string' ? url : url.url;
}

export function getValidUrl(href: HrefValue) {
    if (!href) return '/'; // fallback default

    // Jika langsung string → gunakan langsung
    if (typeof href === 'string') return href;

    // Type guard to safely access properties
    if (typeof href === 'object') {
        // Check for BasicUrl type { url, method? }
        if ('url' in href && typeof href.url === 'string') {
            return href.url;
        }

        // Check for ApiHref type { method, path }
        if ('method' in href && 'path' in href && typeof href.path === 'string') {
            return href.path;
        }

        // Check for InertiaHref type { component, props? }
        if ('component' in href && href.props && typeof href.props === 'object' && 'url' in href.props && typeof href.props.url === 'string') {
            return href.props.url;
        }
    }

    // Jika tidak dikenali, fallback aman
    try {
        return href.toString();
    } catch {
        return '/';
    }
}

