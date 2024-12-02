import type { FC } from 'react';

import Image from 'next/image';

import BookList from '@/components/app/bookList';
import RoundedButton from '@/components/app/roundedButton';
import { currencyFormate } from '@/lib/currency';

const src = 'https://github.com/shadcn.png';
const title = 'system design',
  price = 20;

const books = 12;

const BOOKS = new Array(books).fill(null).map((_, i) => ({
  _id: `${i}`,
  src,
  title,
  price,
})) satisfies BookType[];
const BookDetailsPage: FC = () => {
  return (
    <div className="space-y-10">
      <article className="space-y-2">
        <h1 className="text-3xl font-bold">{title}</h1>
        <picture className="relative block aspect-video w-full overflow-hidden rounded-md md:aspect-[7/2]">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover"
          />
        </picture>

        <time
          className="block text-sm italic text-muted-foreground"
          dateTime={new Date().toDateString()}
        >
          11/12/2024
        </time>

        <strong className="text-xl font-bold">{currencyFormate(price)}</strong>

        <div className="px-5">
          <p className="max-w-[85ch] text-balance text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            illo, aliquid consequatur itaque et qui nemo alias provident ullam
            doloribus placeat corrupti corporis. Quas ab enim facere harum
            voluptatibus saepe nobis ea accusantium autem cum explicabo
            voluptatem hic officia error totam, consequuntur laudantium
            similique eum illum voluptatum. Non, libero et!
          </p>
        </div>

        <div className="grid gap-2 md:grid-cols-3">
          <RoundedButton className="border-2 hover:border-primary hover:bg-transparent hover:text-foreground">
            Add To Cart
          </RoundedButton>
          <RoundedButton
            variant="outline"
            className="border-2 border-primary hover:bg-primary hover:text-background"
          >
            Buy Now
          </RoundedButton>
        </div>
      </article>

      <section className="space-y-2">
        <h2 className="text-lg font-medium capitalize">Similar books</h2>

        <BookList books={BOOKS} />
      </section>
    </div>
  );
};

export default BookDetailsPage;
