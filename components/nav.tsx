import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuLabel,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { User, Shield, Menu, Users, UserPen, House } from 'lucide-react';

export default async function Nav() {
    return (
        <nav className="flex items-center justify-between px-4 py-2">
            {/* Desktop navigation */}
            <div className="hidden sm:flex items-center justify-between gap-2 sm:gap-6 w-full">
                <div>
                    <Link href="/" className="text-lg font-medium">
                        LOGO
                    </Link>
                </div>
                <div className="flex gap-4 items-center">
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
            </div>

            {/* Mobile Dropdown */}
            <div className="flex sm:hidden justify-between items-center w-full">
                <div>
                    <Link href="/" className="text-lg font-medium">
                        LOGO
                    </Link>
                </div>
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
                        <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href="/" className="flex items-center">
                                <House className="mr-2 h-4 w-4" />
                                <span>Home</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href="/sign-in" className="flex items-center">
                                <User className="mr-2 h-4 w-4" />
                                <span>Sign In / Sign Up</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/pairs" className="flex items-center">
                                <Users className="mr-2 h-4 w-4" />

                                <span>Pairs</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/account" className="flex items-center">
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
        </nav>
    );
}
