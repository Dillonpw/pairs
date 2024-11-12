'use server';
import { auth } from '@/auth';
import prisma from '@/db';

export async function readGroup(name: string) {
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
            include: {
                members: true, // Include members if needed
                tasks: true, // Include tasks if needed
            },
        });

        if (!group) {
            throw new Error('Group not found');
        }

        return group;
    } catch (error) {
        console.error('Error reading group:', error);
        throw new Error('Could not read group');
    }
}

export async function readTask(name: string, groupId: string) {
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

        return task;
    } catch (error) {
        console.error('Error reading task:', error);
        throw new Error('Could not read task');
    }
}

export async function listGroups() {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error('Unauthorized');
    }

    const userId = session.user.id;

    try {
        const groups = await prisma.group.findMany({
            where: {
                createdById: userId,
            },
            include: {
                members: true,
                tasks: true,
            },
        });

        return groups;
    } catch (error) {
        console.error('Error listing groups:', error);
        throw new Error('Could not list groups');
    }
}

export async function listTasks(groupId: string) {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error('Unauthorized');
    }

    try {
        const tasks = await prisma.task.findMany({
            where: {
                groupId,
            },
        });

        return tasks;
    } catch (error) {
        console.error('Error listing tasks:', error);
        throw new Error('Could not list tasks');
    }
}
