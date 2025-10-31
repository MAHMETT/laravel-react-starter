import { useForm } from '@inertiajs/react';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { Text } from '@/components/Text';
import { request } from '@/routes/password';
import { Head } from '@inertiajs/react';
import { LoginForm } from '@/components/login-form';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: LoginProps) {
    const form = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        form.post(store.url() as string, {
            onSuccess: () => form.reset('password'),
            onError: () => { },
        });
    };

    return (
        <AuthLayout
            title="Log in to your account"
            description="Enter your email and password below to log in"
        >
            <Head title="Log in" />

            <LoginForm
                data={form.data}
                setData={form.setData}
                errors={form.errors}
                processing={form.processing}
                onSubmit={onSubmit}
                canResetPassword={canResetPassword}
                canRegister={canRegister}
                registerUrl={register()}
                forgotPasswordUrl={request()}
            />

            {status && (
                <Text
                    className="mb-4"
                    align="center"
                    size="sm"
                    weight="medium"
                    color="success"
                >
                    {status}
                </Text>
            )}
        </AuthLayout>
    );
}
