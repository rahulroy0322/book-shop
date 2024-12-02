import { ArrowUpRight } from 'lucide-react';
import type { FC } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { currencyFormate } from '@/lib/currency';
import { cn } from '@/lib/utils';

const bookVariants = cva('relative shadow-md', {
  variants: {
    variant: {
      default: 'bg-primary/40',
      secondary: 'bg-orange-500/40',
      tersiary: 'bg-teal-500/40',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type BookCardVariantsType = VariantProps<typeof bookVariants>;

type BookCardPropsType = BookCardVariantsType & {
  book: BookType;
  className?: string;
};

const BookCard: FC<BookCardPropsType> = ({
  book: { price, title, src },
  variant,
  className,
}) => (
  <Card
    className={cn(
      bookVariants({
        variant,
      }),
      className
    )}
  >
    <CardHeader>
      <CardTitle className="text-md font-normal uppercase tracking-wide">
        {title}
      </CardTitle>
      <CardDescription>
        <Badge className="text-2xl font-bold text-foreground">
          {currencyFormate(price)}
        </Badge>
      </CardDescription>
      <ArrowUpRight className="absolute right-6 top-4" />
    </CardHeader>
    <CardContent>
      <picture className="relative block aspect-[4/3] w-full overflow-hidden rounded-md">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
        />
      </picture>
    </CardContent>
  </Card>
);

export default BookCard;
