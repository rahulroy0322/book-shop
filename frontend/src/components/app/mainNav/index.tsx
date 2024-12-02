import type { FC } from 'react';

import Link from 'next/link';

import { TITLE } from '@/config/app';

import Nav from './nav';
import Logo from '@/assets/logo';

const MainNav: FC = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-background py-3">
      <Link className='items-center flex gap-2' href="/">
        <Logo />
        {TITLE}
      </Link>

      <Nav />
    </header>
  );
};

export default MainNav;
