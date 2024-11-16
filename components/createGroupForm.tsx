'use client';

import { useState } from 'react';
import { createGroup } from '@/lib/actions/createActions';

export default function CreateGroupForm() {
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (formData: FormData) => {
        setError(null);
        setSuccessMessage(null);
        setIsSubmitting(true);

        const name = formData.get('name') as string;

        if (!name || name.trim() === '') {
            setError('Group name is required.');
            setIsSubmitting(false);
            return;
        }

        try {
            const group = await createGroup(name.trim());
            setSuccessMessage(`Group "${group.name}" created successfully!`);
        } catch (error: any) {
            setError(
                error.message ||
                    'An unexpected error occurred. Please try again.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form action={handleSubmit} className="space-y-4 m-4">
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Group Name"
                    className={`border rounded px-3 py-2 w-fit ${
                        error
                            ? 'border-red-600 focus:ring-red-600'
                            : 'border-gray-300'
                    }`}
                />
            </div>
            {error && (
                <p className="text-red-600 text-sm" role="alert">
                    {error}
                </p>
            )}
            {successMessage && (
                <p className="text-green-600 text-sm" role="status">
                    {successMessage}
                </p>
            )}
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Creating...' : 'Create Group'}
            </button>
        </form>
    );
}
