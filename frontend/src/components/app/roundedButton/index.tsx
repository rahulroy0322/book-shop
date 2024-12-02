import type { FC } from 'react';

import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type RoundedButtonPropsType = ButtonProps;

const RoundedButton: FC<RoundedButtonPropsType> = ({
  children,
  className,
  ...props
}) => (
  <Button
    className={cn('rounded-full', className)}
    {...props}
  >
    {children}
  </Button>
);

export default RoundedButton;
