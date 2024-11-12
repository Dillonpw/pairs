'use server';
import { auth } from '@/auth';
import prisma from '@/db';
import { TaskStatus } from '@prisma/client';

export async function updateGroup(name: string, newName: string) {
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

        const updatedGroup = await prisma.group.update({
            where: { id: group.id },
            data: {
                name: newName,
            },
        });

        return updatedGroup;
    } catch (error) {
        console.error('Error updating group:', error);
        throw new Error('Could not update group');
    }
}

export async function updateTask(
    name: string,
    groupId: string,
    updates: { description?: string; value?: number; status?: TaskStatus } // Ensure `status` is of type `TaskStatus`
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
                groupId,
                createdById: userId,
            },
        });

        if (!task) {
            throw new Error('Task not found');
        }

        const updatedTask = await prisma.task.update({
            where: { id: task.id },
            data: {
                ...updates,
            },
        });

        return updatedTask;
    } catch (error) {
        console.error('Error updating task:', error);
        throw new Error('Could not update task');
    }
}

export async function markTaskComplete(taskId: string) {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error('Unauthorized');
    }

    const userId = session.user.id;

    try {
        const updatedTask = await prisma.task.update({
            where: { id: taskId },
            data: { status: 'FINISHED' },
        });

        return updatedTask;
    } catch (error) {
        console.error('Error marking task as complete:', error);
        throw new Error('Could not mark task as complete');
    }
}
