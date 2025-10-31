"use client";

import { Toaster, ToastBar } from "react-hot-toast";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

/**
 * Custom Toaster yang mengikuti tema shadcn/ui
 * - auto dark/light mode
 * - clean styling
 * - support motion
 */
export function CustomToaster() {
    const { theme, systemTheme } = useTheme();
    const activeTheme = theme === "system" ? systemTheme : theme;
    const isDark = activeTheme === "dark";

    return (
        <Toaster
            position="top-right"
            toastOptions={{
                duration: 3000,
                style: {
                    backgroundColor: isDark
                        ? "hsl(var(--background))"
                        : "hsl(var(--background))",
                    color: "hsl(var(--foreground))",
                    border: "1px solid hsl(var(--border))",
                },
                className: cn(
                    "rounded-lg px-4 py-3 shadow-lg border",
                    "bg-background text-foreground",
                    "transition-all duration-300 ease-in-out",
                    "text-sm font-medium"
                ),
            }}
        >
            {(t) => (
                <ToastBar
                    toast={t}
                    style={{
                        ...t.style,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                    }}
                >
                    {({ icon, message }) => (
                        <>
                            {icon && <span className="shrink-0">{icon}</span>}
                            <div className="flex-1">{message}</div>
                        </>
                    )}
                </ToastBar>
            )}
        </Toaster>
    );
}

