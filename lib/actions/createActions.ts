'use server';
import { currentUser } from '@clerk/nextjs/server';
import prisma from '@/db';

export async function createGroup(name: string) {
    const user = await currentUser();
    if (!user) {
        throw new Error('Unauthorized');
    }

    const userId = user.id;

    try {
        const group = await prisma.group.create({
            data: {
                name: name,
                createdById: userId,
            },
        });

        await prisma.groupMember.create({
            data: {
                groupId: group.id,
                userId: userId,
                role: 'ADMIN',
            },
        });

        return group;
    } catch (error) {
        console.error('Error creating group:', error);
        throw new Error('Could not create group');
    }
}

export async function createTask(
    name: string,
    groupId: string,
    description: string,
    value: number
) {
    const user = await currentUser();
    if (!user) {
        throw new Error('Unauthorized');
    }

    const userId = user.id;

    try {
        const task = await prisma.task.create({
            data: {
                name,
                createdById: userId,
                groupId,
                description,
                value,
            },
        });

        return task;
    } catch (error) {
        console.error('Error creating task:', error);
        throw new Error('Could not create task');
    }
}
