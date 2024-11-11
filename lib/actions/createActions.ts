'use server';
import { auth } from '@/auth';
import prisma from '@/db';
//TODO this file will contain the individual actions fro creating new groups, tasks etc

export async function createGroup(name: string) {
    const session = await auth();
    if (!session?.user?.id) {
      throw new Error('Unauthorized');
    }
  
    const userId = session.user.id;
  
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
  
  export async function createTask(name: string, groupId: string, description: string, value: number) {
    const session = await auth();
    if (!session?.user?.id) {
      throw new Error('Unauthorized');
    }
  
    const userId = session.user.id;
  
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
  
