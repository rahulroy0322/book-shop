import type { FC, PropsWithChildren } from 'react';

import type { Metadata } from 'next';

import MainFooter from '@/components/app/mainFooter';
import MainNav from '@/components/app/mainNav';
import ThemeProvider from '@/components/app/theme';
import { TITLE } from '@/config/app';

import './globals.css';

const title = TITLE;

export const metadata: Metadata = {
  title,
  description: `Discover a world of books at ${title}. Find your next favorite read from our vast collection of fiction, non-fiction, and more.`,
};

type RootLayoutPropsType = PropsWithChildren;

const RootLayout: FC<RootLayoutPropsType> = ({ children }) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <div className="container">
            <MainNav />
            <main>{children}</main>
            <MainFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
