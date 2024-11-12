'use server';
import { auth } from '@/auth';
import prisma from '@/db';
//TODO this file will contain the individual actions for deleting new groups, tasks etc

export async function deleteGroup(name: string) {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error('Unauthorized');
    }

    const userId = session.user.id;

    try {
        const group = await prisma.group.findFirst({
            where: {
                name,
                createdById: userId,
            },
        });

        if (!group) {
            throw new Error('Group not found');
        }

        await prisma.group.delete({
            where: { id: group.id },
        });

        await prisma.groupMember.deleteMany({
            where: {
                groupId: group.id,
                userId,
                role: 'ADMIN',
            },
        });

        return group;
    } catch (error) {
        console.error('Error deleting group:', error);
        throw new Error('Could not delete group');
    }
}

export async function deleteTask(
    name: string,
    groupId: string,
    description: string,
    value: number
) {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error('Unauthorized');
    }

    const userId = session.user.id;

    try {
        const task = await prisma.task.findFirst({
            where: {
                name,
                createdById: userId,
                groupId,
            },
        });

        if (!task) {
            throw new Error('Task not found');
        }

        await prisma.task.delete({
            where: { id: task.id },
        });

        return task;
    } catch (error) {
        console.error('Error deleting task:', error);
        throw new Error('Could not delete task');
    }
}
