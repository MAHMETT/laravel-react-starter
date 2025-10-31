import { useForm } from '@inertiajs/react';
import { login } from '@/routes';
import { store } from '@/routes/register';
import { Head } from '@inertiajs/react';
import { SignupForm } from '@/components/signup-form';
import AuthLayout from '@/layouts/auth-layout';

export default function Register() {
    const form = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        form.post(store.url() as string, {
            onSuccess: () => form.reset('password', 'password_confirmation'),
            onError: () => {},
        });
    };

    return (
        <AuthLayout
            title="Create an account"
            description="Enter your details below to create your account"
        >
            <Head title="Register" />
            
            <SignupForm
                data={form.data}
                setData={form.setData}
                errors={form.errors}
                processing={form.processing}
                onSubmit={onSubmit}
                loginUrl={login()}
            />
        </AuthLayout>
    );
}
