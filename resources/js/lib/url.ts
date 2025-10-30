import { HrefValue } from "@/types";

export type UrlType = 'internal' | 'external' | 'mailto' | 'tel' | 'ftp' | 'unknown';

export interface UrlAnalysis {
    type: UrlType;
    isExternal: boolean;
    isInternal: boolean;
    isSpecial: boolean;
    href: string;
    protocol?: string;
    domain?: string;
}

export function analyzeUrl(input: HrefValue): UrlAnalysis {
    if (!input || typeof input !== 'string') {
        return {
            type: 'unknown',
            isExternal: false,
            isInternal: false,
            isSpecial: false,
            href: '',
        };
    }

    const href = input.trim();

    // 1️⃣ Cek mailto: dan tel:
    if (href.startsWith('mailto:')) {
        return {
            type: 'mailto',
            isExternal: true,
            isInternal: false,
            isSpecial: true,
            href,
            protocol: 'mailto',
        };
    }

    if (href.startsWith('tel:')) {
        return {
            type: 'tel',
            isExternal: true,
            isInternal: false,
            isSpecial: true,
            href,
            protocol: 'tel',
        };
    }

    // 2️⃣ Cek ftp
    if (href.startsWith('ftp://')) {
        return {
            type: 'ftp',
            isExternal: true,
            isInternal: false,
            isSpecial: true,
            href,
            protocol: 'ftp',
        };
    }

    // 3️⃣ Cek absolute external URL (http, https, protocol-relative)
    const externalRegex = /^(https?:)?\/\//i;
    if (externalRegex.test(href)) {
        let protocol: string | undefined;
        try {
            const urlObj = new URL(href, 'https://example.com'); // fallback untuk relative
            protocol = urlObj.protocol.replace(':', '');
        } catch {
            protocol = href.startsWith('https:') ? 'https' : 'http';
        }

        return {
            type: 'external',
            isExternal: true,
            isInternal: false,
            isSpecial: false,
            href,
            protocol,
            domain: href.split('/')[2],
        };
    }

    // 4️⃣ Cek internal URL (/home, dashboard, dll.)
    if (href.startsWith('/')) {
        return {
            type: 'internal',
            isExternal: false,
            isInternal: true,
            isSpecial: false,
            href,
        };
    }

    // 5️⃣ Default fallback
    return {
        type: 'unknown',
        isExternal: false,
        isInternal: false,
        isSpecial: false,
        href,
    };
}

