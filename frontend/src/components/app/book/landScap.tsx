import { ArrowUpRight } from 'lucide-react';
import type { FC } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { currencyFormate } from '@/lib/currency';

const bookVariants = cva(
  'rounded-lg border text-card-foreground relative shadow-md flex gap-2 aspect-video',
  {
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
  }
);

type LandScapBookCardVariantsType = VariantProps<typeof bookVariants>;

type LandScapBookCardPropsType = LandScapBookCardVariantsType & {
  src: StaticImport | string;
  title: string;
  price: number;
};

const LandScapBookCard: FC<LandScapBookCardPropsType> = ({
  title,
  src,
  price,
  variant,
}) => (
  <div
    className={bookVariants({
      variant,
    })}
  >
    <ArrowUpRight className="absolute right-2 top-2 z-10 h-10 w-10 rounded-full p-2 backdrop-blur-xl" />
    <div className="basis-1/2 space-y-2 p-6 text-2xl font-semibold uppercase leading-none tracking-tight">
      <h2>{title}</h2>
      <Badge className="text-xl font-bold text-foreground">
        {currencyFormate(price)}
      </Badge>
    </div>
    <picture className="relative block w-full basis-1/2 overflow-hidden rounded-md">
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover"
      />
    </picture>
  </div>
);

// <Card className={bookVariants({
//     variant
// })}>
//         <CardHeader>
//             <CardTitle className='text-md uppercase tracking-wide font-normal'>{title}</CardTitle>
//             <CardDescription>
//                 <Badge className='text-foreground font-bold text-2xl'>
//                     {format(price)}
//                 </Badge>
//             </CardDescription>
//             <ArrowUpRight className='absolute top-4 right-6' />
//         </CardHeader>
//         <CardContent>
// <picture className='relative aspect-[4/3] w-full block rounded-md overflow-hidden'>
//     <Image
//         src={src}
//         alt={title}
//         fill
//         className='object-cover'
//     />
// </picture>
//         </CardContent>
//     </Card>

export default LandScapBookCard;
