import { signIn } from '@/auth';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Chrome } from 'lucide-react';

export function SignIn() {
    return (
        <main className="flex items-center justify-center min-h-screen p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">
                        Welcome Back
                    </CardTitle>
                    <CardDescription className="text-center">
                        Sign in to your account to continue
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className='flex flex-col gap-4'
                        action={async () => {
                            'use server';
                            await signIn('google', { redirectTo: '/' });
                        }}
                    >
                        <Button type="submit">
                            {' '}
                            <Chrome /> Signin with Google
                        </Button>
                    </form>
                    <p className="mt-4 text-sm text-center text-gray-500">
                        By signing in, you agree to our{' '}
                        <a href="#" className="text-[#4285F4] hover:underline">
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-[#4285F4] hover:underline">
                            Privacy Policy
                        </a>{' '}
                        of the authentication provider.
                    </p>
                </CardContent>
            </Card>
        </main>
    );
}
