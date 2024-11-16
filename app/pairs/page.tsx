import CreateGroupForm from '@/components/createGroupForm';
import { auth } from '@/auth';

export default async function PairsPage() {
    const session = await auth();
    if (!session || !session.user)
        return (
            <main>
                <p>please log in </p>
            </main>
        );
    return (
        <main>
            <CreateGroupForm />
        </main>
    );
}
