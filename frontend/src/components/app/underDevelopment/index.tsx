import type { FC } from 'react';

import Link from 'next/link';

import RoundedButton from '../roundedButton';
import GoBackButton from './goBackButton';

type UnderDevelopmentPropsType = {
  feature?: boolean;
};

const UnderDevelopment: FC<UnderDevelopmentPropsType> = ({
  feature = false,
}) =>
  feature ? (
    <div className="p-5">
      <h2 className="text-balance text-center text-2xl font-bold capitalize">
        this feature in under development
      </h2>
    </div>
  ) : (
    <div className="flex h-[85vh] flex-col items-center justify-center gap-2 p-5">
      <h2 className="text-balance text-center text-2xl font-bold capitalize">
        this page in under development
      </h2>

      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="hover:underline"
        ></Link>
        <RoundedButton
          asChild
          variant="outline"
          className="!bg-primary !text-background"
        >
          <Link href="/">Go To Home</Link>
        </RoundedButton>
        <GoBackButton />
      </div>
    </div>
  );
export default UnderDevelopment;
