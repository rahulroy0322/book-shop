import type { FC } from 'react';

import BookList from '@/components/app/bookList';

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

const BooksPage: FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Books</h2>
      <BookList books={BOOKS} />
    </div>
  );
};

export default BooksPage;
