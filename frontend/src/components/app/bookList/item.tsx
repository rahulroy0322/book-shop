import type { FC } from 'react';

import Link from 'next/link';

import BookCard from '@/components/app/book';

type BookItemPropsType = {
  book: BookType;
};
const BookItem: FC<BookItemPropsType> = ({ book }) => (
  <li>
    <Link href={`/books/:id`}>
      <BookCard book={book} />
    </Link>
  </li>
);

export default BookItem;
