import type { FC } from 'react';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import BookCard from '../../book';
import LandScapBookCard from '../../book/landScap';

const GENRES = ['adventure', 'random', 'classic', 'biography', 'designing'];

const src = 'https://github.com/shadcn.png';
const title = 'system design',
  price = 20;

const book = {
  _id: 'asca',
  src,
  title,
  price,
};

const BrowseSection: FC = () => (
  <section>
    <h2 className="text-4xl font-bold tracking-tighter">Browse Genres</h2>
    <Carousel className="mb-7 mt-5">
      <CarouselContent className="pl-2 pr-10">
        {GENRES.map((genre) => (
          <CarouselItem
            className="flex basis-1/3 items-center justify-center py-1 md:basis-1/5 lg:basis-1/6"
            key={genre}
          >
            <Button
              variant="outline"
              className="rounded-full !bg-transparent capitalize"
            >
              {genre}
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>

    <div className="flex flex-col gap-2 md:flex-row">
      <div className="flex basis-2/3 flex-col gap-2">
        <div className="flex flex-col gap-2 md:flex-row">
          <BookCard
            className="basis-1/2"
            book={book}
          />
          <BookCard
            className="basis-1/2"
            book={book}
          />
        </div>
        <LandScapBookCard
          src={src}
          title={title}
          price={price}
        />
      </div>
      <div className="flex basis-1/3 flex-col gap-2">
        <BookCard book={book} />
        <BookCard book={book} />
      </div>
    </div>

    <div className="p-8 md:p-16">
      <p className="mx-auto max-w-[45ch] text-balance text-center text-xl font-medium leading-9">
        One of the thihgs I loved most about this website was the ability to
        easily search for and find books that interested me. The website&apos;s
        search function was intuitive and helped me to quickly find books in
        specific generes or by specific authors
      </p>
    </div>
  </section>
);

export default BrowseSection;
