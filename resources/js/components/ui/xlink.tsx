import { InertiaLinkProps, Link } from '@inertiajs/react';
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { AnchorHTMLAttributes, useCallback, useMemo } from 'react';
import { getValidUrl } from '@/lib/utils';
import { HrefValue } from '@/types';

function useHandleLink(href: HrefValue) {
    const url = useMemo(() => getValidUrl(href), [href]);
    const handleCopyLink = useCallback(() => {
        navigator.clipboard.writeText(url);
        console.log('href value:', url);
    }, [url]);

    const handleOpenInNewTab = useCallback(() => {
        window.open(url, '_blank');
    }, [url]);

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

interface XLinkProps extends InertiaLinkProps {
    removeContextMenu?: boolean
}

export function XLink({ children, href, removeContextMenu = false, ...props }: XLinkProps) {

    const { url, handleCopyLink, handleOpenInNewTab, handleOpenInNewWindow, handleSaveLinkAs } = useHandleLink(href);

    if (removeContextMenu) {
        return <Link href={url} {...props}>
            {children}</Link>

    }

    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <Link href={url} {...props}>
                    {children}
                </Link>
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem onClick={handleCopyLink}>Copy Link Address</ContextMenuItem>
                <ContextMenuItem onClick={handleOpenInNewTab}>Open Link in New Tab</ContextMenuItem>
                <ContextMenuItem onClick={handleOpenInNewWindow}>Open Link in New Window</ContextMenuItem>
                <ContextMenuItem onClick={handleSaveLinkAs}>Save Link As</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    );

}

interface XALinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    removeContextMenu?: boolean
}

export function XALink({ children, href, removeContextMenu = false, ...props }: XALinkProps) {

    const { url, handleCopyLink, handleOpenInNewTab, handleOpenInNewWindow, handleSaveLinkAs } = useHandleLink(href);

    if (removeContextMenu) {
        return <a href={url} {...props}>
            {children}</a>

    }

    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <a href={url} {...props}>
                    {children}
                </a>
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem onClick={handleCopyLink}>Copy Link Address</ContextMenuItem>
                <ContextMenuItem onClick={handleOpenInNewTab}>Open Link in New Tab</ContextMenuItem>
                <ContextMenuItem onClick={handleOpenInNewWindow}>Open Link in New Window</ContextMenuItem>
                <ContextMenuItem onClick={handleSaveLinkAs}>Save Link As</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    );
}
