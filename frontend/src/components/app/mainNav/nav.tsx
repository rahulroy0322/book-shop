'use client';

import { Menu, ShoppingBag, UserRound } from 'lucide-react';
import type { FC } from 'react';

import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import useMediaQuery from '@/hooks/app/mediaQuery';

const Nav: FC = () => {
  const isDeskTop = useMediaQuery('(min-width: 900px)');

  if (isDeskTop) {
    return (
      <>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link
                className="hover:text-primary hover:underline"
                href="/books"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary hover:underline"
                href="/books"
              >
                Books
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary hover:underline"
                href="/books"
              >
                MemberShip
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/cart">
            <ShoppingBag className="h-8 w-8" />
            <span className="sr-only">Cart</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>
                  <UserRound />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                asChild
              >
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="rounded-l-lg">
        <SheetTitle></SheetTitle>
        <nav className="dark:outline-none">
          <ul>
            <li>
              <Button
                asChild
                variant="ghost"
                className="w-full justify-start text-xl"
              >
                <Link href="/books">Shop</Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                variant="ghost"
                className="w-full justify-start text-xl"
              >
                <Link href="/books">Books</Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                variant="ghost"
                className="w-full justify-start text-xl"
              >
                <Link href="/books">MemberShip</Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                variant="ghost"
                className="w-full justify-start text-xl"
              >
                <Link href="/cart">Cart</Link>
              </Button>
            </li>
            <Separator />
            <li>
              <Button
                asChild
                variant="ghost"
                className="w-full justify-start text-xl"
              >
                <Link href="/profile">Profile</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default Nav;
