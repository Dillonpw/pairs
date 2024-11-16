'use client';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import {
    HomeIcon,
    User,
    Users,
    Shield,
    PenIcon,
    ChevronUp,
    LogOut,
    LogIn,
} from 'lucide-react';

export function AppSidebar() {
    const { state } = useSidebar();

    const items = [
        { title: 'Home', url: '/', icon: HomeIcon },
        { title: 'Pairs', url: '/pairs', icon: Users },
        { title: 'Account', url: '/account', icon: PenIcon },
        { title: 'Privacy', url: '/privacy', icon: Shield },
    ];

    return (
        <Sidebar collapsible="icon" className="flex flex-col h-screen">
            <SidebarContent className="flex-grow overflow-y-auto">
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link
                                            href={item.url}
                                            className="flex items-center gap-2"
                                        >
                                            <item.icon className="h-5 w-5" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter
                className={`mt-auto transition-all duration-300 ease-in-out ${
                    state === 'collapsed' ? 'h-16 overflow-hidden' : 'h-auto'
                }`}
            >
                <SidebarMenu>
                    {/*  <SidebarMenuItem>
                       {session?.user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <SidebarMenuButton className="w-full justify-between">
                                        <div className="flex items-center gap-2">
                                            <Avatar className="h-6 w-6">
                                                <AvatarImage
                                                    src={
                                                        session.user?.image ||
                                                        undefined
                                                    }
                                                    alt={
                                                        session.user?.name ||
                                                        'User'
                                                    }
                                                />
                                                <AvatarFallback>
                                                    {session.user?.name?.[0] ||
                                                        'U'}
                                                </AvatarFallback>
                                            </Avatar>
                                            <span className="truncate">
                                                {session.user?.name || 'User'}
                                            </span>
                                        </div>
                                        <ChevronUp
                                            className={`ml-auto transition-transform duration-300 ${
                                                state === 'collapsed'
                                                    ? 'rotate-180'
                                                    : ''
                                            }`}
                                        />
                                    </SidebarMenuButton>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    side="right"
                                    align="start"
                                    className="w-56"
                                >
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href="/account"
                                            className="flex items-center"
                                        >
                                            <User className="mr-2 h-4 w-4" />
                                            <span>Account</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <form
                                            action="/api/auth/signout"
                                            method="post"
                                        >
                                            <button
                                                type="submit"
                                                className="w-full text-left flex items-center"
                                            >
                                                <LogOut className="mr-2 h-4 w-4" />
                                                <span>Log out</span>
                                            </button>
                                        </form>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : ( 
                            <SidebarMenuButton asChild>
                                <Link
                                    href="/sign-in"
                                    className="flex items-center gap-2"
                                >
                                    <LogIn className="h-5 w-5" />
                                    <span>Log in</span>
                                </Link>
                            </SidebarMenuButton>
                        )} 
                    </SidebarMenuItem>
                    */}
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
