import { SignIn } from '@/components/sign-in';
import { SignOut } from '@/components/sign-out';
import { auth } from '@/auth';

export default async function AccountPage() {
    const session = await auth();
    if (!session || !session.user)
        return (
            <main>
                <p>please log in </p>
                <SignIn />
            </main>
        );
    return (
        <main>
            <p>hello account page with controls for your profile</p>
            <SignOut />
        </main>
    );
}
