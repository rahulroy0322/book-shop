import { Github } from 'lucide-react';
import type { FC } from 'react';

import Link from 'next/link';

import { TITLE } from '@/config/app';
import Logo from '@/assets/logo';

const MainFooter: FC = () => {
  return (
    <footer className="flex items-center justify-between py-4">
      <div className="flex items-center gap-12">
        <Link className='items-center flex gap-2' href="/">
          <Logo />
          {TITLE}
        </Link>

        <ul className="hidden items-center gap-4 md:flex">
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
      </div>

      <div className="flex items-center gap-2">
        <a
          href="https://github.com/rahulroy0322"
          target="_github"
          rel="author"
          referrerPolicy="no-referrer"
        >
          <Github />
        </a>
      </div>
    </footer>
  );
};

export default MainFooter;
