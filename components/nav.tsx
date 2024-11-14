'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import {
    User,
    Shield,
    Menu,
    Users,
    PenIcon as UserPen,
    HomeIcon as House,
} from 'lucide-react';

export default function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="sticky left-0 top-0 z-50 flex w-full justify-center transition-all">
            <header
                className={`mx-4 flex items-center justify-between px-6 backdrop-blur-xl transition-all ${
                    isScrolled
                        ? 'mt-4 h-16 w-[90%] rounded-full  text-black shadow-md dark:bg-neutral-900 dark:text-white'
                        : 'h-16 w-full bg-transparent dark:text-white'
                }`}
            >
                <Link href="/" id="logo">
                    <div className="text-lg font-medium hover:scale-105">
                        LOGO
                    </div>
                </Link>

                <div className="flex items-center">
                    {/* Desktop navigation */}
                    <div className="hidden sm:flex items-center justify-between gap-2 sm:gap-6">
                        <Link
                            href="/sign-in"
                            className="text-md font-medium underline-offset-4 hover:underline"
                            prefetch={false}
                        >
                            Sign In / Sign Up
                        </Link>
                        <p className="text-xl font-medium">|</p>
                        <Link
                            href="/pairs"
                            className="text-md font-medium underline-offset-4 hover:underline"
                            prefetch={false}
                        >
                            Pairs
                        </Link>
                        <p className="text-xl font-medium">|</p>
                        <Link
                            href="/account"
                            className="text-md font-medium underline-offset-4 hover:underline"
                            prefetch={false}
                        >
                            Account
                        </Link>
                    </div>

                    {/* Mobile Dropdown */}
                    <div className="flex sm:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-56"
                                align="end"
                                sideOffset={8}
                            >
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="/"
                                        className="flex items-center"
                                    >
                                        <House className="mr-2 h-4 w-4" />
                                        <span>Home</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="/sign-in"
                                        className="flex items-center"
                                    >
                                        <User className="mr-2 h-4 w-4" />
                                        <span>Sign In / Sign Up</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="/pairs"
                                        className="flex items-center"
                                    >
                                        <Users className="mr-2 h-4 w-4" />
                                        <span>Pairs</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="/account"
                                        className="flex items-center"
                                    >
                                        <UserPen className="mr-2 h-4 w-4" />
                                        <span>Account</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="/privacy"
                                        className="flex items-center"
                                        data-testid="privacyLink"
                                    >
                                        <Shield className="mr-2 h-4 w-4" />
                                        <span>Privacy</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* Theme Toggle */}
            </header>
        </nav>
    );
}
