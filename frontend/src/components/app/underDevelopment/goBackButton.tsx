'use client';

import type { FC } from 'react';

import { useRouter } from 'next/navigation';

import RoundedButton from '@/components/app/roundedButton';

const GoBackButton: FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <RoundedButton
      onClick={handleBack}
      variant="outline"
    >
      Go Back
    </RoundedButton>
  );
};

export default GoBackButton;
