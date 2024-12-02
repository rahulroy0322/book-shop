import type { FC } from 'react';

import Image from 'next/image';

import CtoButton from '../../ctoButton';

const src = 'https://github.com/shadcn.png';
const title = 'system design';

const ShowCaseSection: FC = () => (
  <section className="flex flex-col gap-2 md:flex-row">
    <div className="grid basis-2/5 grid-rows-2 gap-2">
      <picture className="relative block aspect-video w-full overflow-hidden rounded-xl">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
        />
      </picture>
      <div className="aspect-video w-full space-y-3 rounded-xl bg-primary/40">
        <div className="p-8">
          <h3 className="text-4xl font-bold leading-8">Book Club Meetup</h3>
          <h4 className="text-lg text-muted-foreground">
            Gathering of Minds and Books
          </h4>
          <CtoButton className="text-md">Join Now</CtoButton>
        </div>
      </div>
    </div>
    <picture className="relative block aspect-video w-full basis-3/5 overflow-hidden rounded-xl md:aspect-auto">
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover"
      />
    </picture>
  </section>
);

export default ShowCaseSection;
