export interface User {
    id: string;
    name?: string;
    email: string;
    emailVerified?: Date;
    image?: string;
    createdAt: Date;
    updatedAt: Date;
    accounts?: Account[];
    sessions?: Session[];
    Authenticators?: Authenticator[];
    groups?: Group[];
    groupMemberships?: GroupMember[];
    tasks?: Task[];
    taskAssignments?: TaskAssignment[];
}

export interface Account {
    id: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string;
    access_token?: string;
    expires_at?: number;
    token_type?: string;
    scope?: string;
    id_token?: string;
    session_state?: string;
    createdAt: Date;
    updatedAt: Date;
    user?: User;
}

export interface Session {
    id: string;
    sessionToken: string;
    userId: string;
    expires: Date;
    createdAt: Date;
    updatedAt: Date;
    user?: User;
}

export interface VerificationToken {
    identifier: string;
    token: string;
    expires: Date;
}

export interface Authenticator {
    credentialID: string;
    userId: string;
    providerAccountId: string;
    credentialPublicKey: string;
    counter: number;
    credentialDeviceType: string;
    credentialBackedUp: boolean;
    transports?: string;
    user?: User;
}

export interface Group {
    id: string;
    name: string;
    createdById: string;
    createdBy?: User;
    members?: GroupMember[];
    tasks?: Task[];
    createdAt: Date;
    updatedAt: Date;
}

export interface GroupMember {
    id: string;
    groupId: string;
    userId: string;
    role: GroupRole;
    points: number;
    group?: Group;
    user?: User;
    tasks?: TaskAssignment[] | null;
}

export type GroupRole = 'ADMIN' | 'MEMBER';

export interface Task {
    id: string;
    groupId: string;
    name: string;
    description: string;
    recurrence?: string | null;
    value: number;
    status: TaskStatus;
    createdById: string;
    createdBy?: User;
    assignments?: TaskAssignment[];
    group?: Group;
    createdAt: Date;
    updatedAt: Date;
}

export interface TaskAssignment {
    id: string;
    taskId: string;
    userId: string;
    status: TaskStatus;
    completedAt?: Date;
    task?: Task;
    user?: User;
    groupMemberId?: string;
    groupMember?: GroupMember;
}

export type TaskStatus = 'INCOMPLETE' | 'IN_PROGRESS' | 'FINISHED';
