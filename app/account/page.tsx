import { SignIn } from '@/components/sign-in';
import { auth } from '@/auth';
import { readGroups } from '@/lib/actions/readActions';
import { Group } from '@/types';

export default async function AccountPage() {
    const session = await auth();
    if (!session || !session.user)
        return (
            <main>
                <p>Please log in</p>
                <SignIn />
            </main>
        );

    let groups: Group[] = [];
    try {
        groups = await readGroups();
    } catch (error) {
        console.error(error);
        groups = [];
    }

    return (
        <main>
            <p>Hello, {session.user.name}!</p>
            {/* make own component */}
            <div>
                <h2>Your Groups</h2>
                {groups.length === 0 ? (
                    <p>No groups found</p>
                ) : (
                    <ul className="space-y-2">
                        {groups.map((group) => (
                            <li
                                key={group.id}
                                className="border p-3 rounded-md"
                            >
                                <div className="font-bold">{group.name}</div>
                                <div className="text-sm text-gray-600">
                                    Members: {group.members.length}
                                    {' | '}
                                    Tasks: {group.tasks.length}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    );
}
