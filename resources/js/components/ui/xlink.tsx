import { InertiaLinkProps, Link } from '@inertiajs/react';
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { AnchorHTMLAttributes, ReactNode, useCallback, useMemo } from 'react';
import { getValidUrl } from '@/lib/utils';
import { HrefValue } from '@/types';
import { toast } from 'sonner'

function useHandleLink(href: HrefValue) {
    const url = useMemo(() => getValidUrl(href), [href]);

    const handleCopyLink = useCallback(async () => {
        if (!navigator.clipboard) {
            toast.error('Clipboard API not supported by your browser.');
            return;
        }
        try {
            await navigator.clipboard.writeText(url);
            toast.success('Link copied to clipboard!');
        } catch (err) {
            toast.error('Failed to copy link.');
        }
    }, [url]);

    const handleOpenInNewTab = useCallback(() => {
        const newWindow = window.open(url, '_blank');
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
            toast.error('Popup blocked! Please allow popups for this site.');
        }
    }, [url]);

    // handleOpenInNewWindow sudah aman dengan 'noopener,noreferrer'
    const handleOpenInNewWindow = useCallback(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }, [url]);

    const handleSaveLinkAs = useCallback(() => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.split('/').pop() || 'download';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [url]);

    return { url, handleCopyLink, handleOpenInNewTab, handleOpenInNewWindow, handleSaveLinkAs };
}

const DefaultContextMenu = ({ children, href }: { children: ReactNode, href: HrefValue }) => {

    const { handleCopyLink, handleOpenInNewTab, handleOpenInNewWindow, handleSaveLinkAs } = useHandleLink(href);

    return (
        <ContextMenu>
            <ContextMenuTrigger>
                {children}
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem onClick={handleCopyLink}>Copy Link Address</ContextMenuItem>
                <ContextMenuItem onClick={handleOpenInNewTab}>Open Link in New Tab</ContextMenuItem>
                <ContextMenuItem onClick={handleOpenInNewWindow}>Open Link in New Window</ContextMenuItem>
                <ContextMenuItem onClick={handleSaveLinkAs}>Save Page</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    )
}

import { XLinkProps } from '@/types/components/ui/xlink';

export function XLink({ children, href, removeContextMenu = false, ...props }: XLinkProps) {

    const { url } = useHandleLink(href);

    if (removeContextMenu) {
        return <Link href={url} {...props}>
            {children}</Link>
    }

    return (
        <DefaultContextMenu href={href} >
            <Link href={url} {...props}>
                {children}
            </Link>
        </DefaultContextMenu>
    );

}

import { XALinkProps } from '@/types/components/ui/xlink';

export function XALink({ children, href, removeContextMenu = false, ...props }: XALinkProps) {

    const { url } = useHandleLink(href);

    if (removeContextMenu) {
        return (
            <a href={url} {...props}>
                {children}
            </a>
        )
    }

    return (
        <DefaultContextMenu href={href}>
            <a href={url} {...props}>
                {children}
            </a>
        </DefaultContextMenu>
    );
}
