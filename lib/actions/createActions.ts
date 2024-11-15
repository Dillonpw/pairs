'use server';
import prisma from '@/db';
import { auth } from '@/auth';

export interface Group {
    id: string;
    name: string;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export async function createGroup(name: string): Promise<Group> {
    const session = await auth();
    if (!session || !session.user) {
      console.error("Unauthorized access attempt");
      throw new Error("Unauthorized");
    }
  
    const userId = session.user.id as string;
  
    if (!name || name.trim() === "") {
      throw new Error("Group name is required");
    }
  
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
          role: "ADMIN",
        },
      });
  
      return group;
    } catch (error: any) {
      console.error("Error creating group:", error.message);
      throw new Error(error.message || "Could not create group");
    }
  }
  

export async function createTask(
    name: string,
    groupId: string,
    description: string,
    value: number
) {
    const session = await auth();
    if (!session || !session.user) {
        throw new Error('Unauthorized');
    }

    const userId = session.user.id as string;

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
