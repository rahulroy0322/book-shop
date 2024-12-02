import { ArrowRight } from 'lucide-react';
import type { FC, ReactNode } from 'react';

import Link from 'next/link';

import RoundedButton from '@/components/app/roundedButton';
import { cn } from '@/lib/utils';

type CtoButtonPropsType = {
  children: ReactNode | string;
  className?: string;
};

const CtoButton: FC<CtoButtonPropsType> = ({ children, className }) => (
  <RoundedButton
    className={cn(
      'rounded-full border-black !bg-transparent text-lg font-semibold capitalize hover:!bg-transparent dark:border-white',
      className
    )}
    variant="outline"
    asChild
  >
    <Link
      href="/books"
      className="group"
    >
      {children}
      <ArrowRight className="duration-500 group-hover:ml-2" />
    </Link>
  </RoundedButton>
);

export default CtoButton;
