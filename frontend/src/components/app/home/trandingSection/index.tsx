import type { FC } from 'react';

import BookCard from '../../book';
import CtoButton from '../../ctoButton';

const src = 'https://github.com/shadcn.png';
const title = 'system design',
  price = 20;

const book = {
  _id: 'asca',
  src,
  title,
  price,
};

const TrandingSection: FC = () => (
  <section className="space-y-10 rounded-3xl bg-primary/40 p-8 md:p-24">
    <div className="space-y-2">
      <h2 className="text-3xl font-bold capitalize">Top Trending books</h2>
      <h3 className="text-md font-normal capitalize">
        most popular reads of the year
      </h3>
      <CtoButton className="!mt-6">view all</CtoButton>
    </div>

    <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
      <BookCard book={book} />
      <BookCard
        book={book}
        variant="secondary"
      />
      <BookCard
        book={book}
        variant="tersiary"
      />
    </div>
  </section>
);

export default TrandingSection;
