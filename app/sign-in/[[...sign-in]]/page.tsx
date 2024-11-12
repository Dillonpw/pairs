import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
    return (
        <main className='flex justify-center mt-20'>
            <SignIn />
        </main>
    );
}
