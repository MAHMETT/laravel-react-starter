export interface SignupFormProps {
    className?: string;
    data: {
        name: string;
        email: string;
        password: string;
        password_confirmation: string;
    };
    setData: (field: string, value: unknown) => void;
    errors: Record<string, string>;
    processing: boolean;
    onSubmit: (e: React.FormEvent) => void;
    loginUrl: unknown; // RouteDefinition
    [key: string]: unknown;
}
