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

function getHandleLink(href: HrefValue) {
    const Url = useMemo(() => getValidUrl(href), [href])
    const handleCopyLink = useCallback(() => {
        navigator.clipboard.writeText(Url);
        console.log('href value:', Url);
    }, [Url]);

    const handleOpenInNewTab = useCallback(() => {
        window.open(Url, '_blank');
    }, [Url]);

    const handleOpenInNewWindow = useCallback(() => {
        window.open(Url, '_blank', 'noopener,noreferrer');
    }, [Url]);

    const handleSaveLinkAs = useCallback(() => {
        const link = document.createElement('a');
        link.href = Url;
        link.download = Url.split('/').pop() || 'download';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [Url]);

    return { Url, handleCopyLink, handleOpenInNewTab, handleOpenInNewWindow, handleSaveLinkAs }
}

interface XLinkProps extends InertiaLinkProps {
    removeContextMenu?: boolean
}

export function XLink({ children, href, removeContextMenu = false, ...props }: XLinkProps) {

    const { Url, handleCopyLink, handleOpenInNewTab, handleOpenInNewWindow, handleSaveLinkAs } = getHandleLink(href)

    if (removeContextMenu) {
        return <Link href={Url} {...props}>
            {children}</Link>

    }

    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <Link href={Url} {...props}>
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

    const { Url, handleCopyLink, handleOpenInNewTab, handleOpenInNewWindow, handleSaveLinkAs } = getHandleLink(href);

    if (removeContextMenu) {
        return <a href={Url} {...props}>
            {children}</a>

    }

    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <a href={Url} {...props}>
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
