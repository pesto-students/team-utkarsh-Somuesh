import React, {useContext} from 'react';
import './booklist.css'
import { Book } from '../book/Book';
import { BookContext } from '../../App';

export const BookList = () => {
  const {bookDetails} = useContext(BookContext);
  return (
    <div className='bookList'>
      {bookDetails.map((book) => {
        return book.title && <Book key={book.id} id={book.id} title={book.title} author={book.author} year={book.year} />
      })}
    </div>
  )
}
