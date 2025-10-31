"use client";

import { Toaster, ToasterProps } from "sonner";
import { useTheme } from "next-themes";
import {
    CircleCheckIcon,
    InfoIcon,
    Loader2Icon,
    OctagonXIcon,
    TriangleAlertIcon,
} from "lucide-react"

export function CustomToast() {
    const { resolvedTheme } = useTheme();

    return (
        <Toaster
            position="top-right"
            // richColors
            closeButton
            theme={resolvedTheme as ToasterProps["theme"]}
            icons={{
                success: <CircleCheckIcon className="size-4" />,
                info: <InfoIcon className="size-4" />,
                warning: <TriangleAlertIcon className="size-4" />,
                error: <OctagonXIcon className="size-4" />,
                loading: <Loader2Icon className="size-4 animate-spin" />,
            }}
        />
    );
}

