import type { FC } from 'react';

import HeroImage from '@/assets/hero';
import CtoButton from '@/components/app/ctoButton';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const HeroSection: FC = () => (
  <section className="h-screen grid-cols-2 gap-2 md:grid">
    <div className="flex h-full w-full flex-col items-start justify-center rounded-3xl bg-primary/40 p-4 md:p-24">
      <h1 className="text-6xl font-bold">WhatBook Are You Looking For</h1>
      <h2 className="my-8 capitalize">
        not sure what to read next? explore our catalog of public Domain books
        With our editors
      </h2>

      <CtoButton>explore</CtoButton>

      <div className="mt-12 space-y-2">
        <p className="text-sm font-medium uppercase">Our Community</p>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3 *:ring *:ring-background">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </div>

          <div>
            <strong>40K+</strong>
            <p className="text-sm">Book lover joined</p>
          </div>
        </div>
      </div>
    </div>

    <div className="hidden h-full w-full flex-col items-start justify-center overflow-hidden rounded-3xl bg-orange-500/40 p-8 md:flex">
      <HeroImage />
    </div>
  </section>
);

export default HeroSection;
