import { InertiaLinkProps } from '@inertiajs/react';
import { AnchorHTMLAttributes } from 'react';

export interface XLinkProps extends InertiaLinkProps {
    removeContextMenu?: boolean;
}

export interface XALinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    removeContextMenu?: boolean;
}
