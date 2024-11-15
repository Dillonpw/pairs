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

export default function SignIn() {
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
                    <form
                        action={async () => {
                            'use server';
                            await signIn('google', { redirectTo: '/pairs' });
                        }}
                        className="space-y-4"
                    >
                        <Button
                            type="submit"
                            className="w-full bg-[#4285F4] hover:bg-[#4285F4]/90 text-white transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            <Chrome className="mr-2 h-5 w-5" />
                            Sign in with Google
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
