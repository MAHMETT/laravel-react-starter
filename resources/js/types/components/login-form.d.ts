export interface LoginFormProps {
    className?: string;
    data: {
        email: string;
        password: string;
        remember: boolean;
    };
    setData: (field: string, value: unknown) => void;
    errors: Record<string, string>;
    processing: boolean;
    onSubmit: (e: React.FormEvent) => void;
    canResetPassword?: boolean;
    canRegister?: boolean;
    registerUrl?: unknown; // RouteDefinition
    forgotPasswordUrl?: unknown; // RouteDefinition
    status?: string;
    [key: string]: unknown;
}