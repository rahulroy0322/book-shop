import type { FC } from 'react';

import BookItem from './item';

type BookListPropsType = {
  books: BookType[];
};
const BookList: FC<BookListPropsType> = ({ books }) => (
  <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {books.map((book) => (
      <BookItem
        book={book}
        key={book._id}
      />
    ))}
  </ul>
);

export default BookList;
