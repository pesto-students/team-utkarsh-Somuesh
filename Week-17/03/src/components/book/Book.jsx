import React, { useContext } from 'react'
import './book.css'
import { BookContext } from '../../App'

export const Book = ({ id, title, author, year }) => {
  const { bookDetails, setBookDetails } = useContext(BookContext);

  const handleDelete = (id) => {
    setBookDetails(prev => prev.filter((book) => (book.id !== id)))
  }

  console.log("Book component", bookDetails)
  return (
  <div className='book-card'><button onClick={() => {
    handleDelete(id)
  }}>🚮</button>
    <div className='book-title'>{id}:{title}</div>
    <div className='book-detail'>
      <p>{author}</p>
      <p>{year}</p>
    </div>
  </div>
  )
}
