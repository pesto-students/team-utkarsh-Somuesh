import React, { useContext, useState } from 'react'
import './addBook.css'
import { ToastContainer, toast } from 'react-toastify';
import { BookContext } from '../../App';

export const AddBook = () => {
  const {bookDetails, setBookDetails} = useContext(BookContext);
  // console.log(book)

  const notify = () => toast("Empty Input Fields!");
  const exists = () => toast("id already exists!");
  const [bookInfo, setBookInfo] = useState({
    id: '',
    title: '',
    author: '',
    year: '',
  })

  const handleClick = (e) => {
    e.preventDefault()
    console.log("bookdetails",bookDetails)
    let dups = bookDetails.filter((dups)=>{
      return dups.id === bookInfo.id;
    })
    console.log("Dups",dups)
    
    if(!dups.length){
      if (bookInfo.id !== '' && bookInfo.title !== '' && bookInfo.author !== '' && bookInfo.year !== '') {
        setBookDetails(prev=> [...prev,(bookInfo)]);
        setBookInfo({
          id: '',
          title: '',
          author: '',
          year: '',
        })
        
      }
      else{
        notify()
      }
    }
    else{
      exists()
    }
    
  }
  

  return (
    <>
    <ToastContainer />
    <div className='addBook'>

      <form>
        <h2 className='gradient__text'>Add new Book to the List: </h2>
        <label htmlFor='id'>Unique ID: </label>
        <input type="text" id="id" value={bookInfo.id} onChange={(e) => setBookInfo(prev => {
          return ({ ...prev, id: e.target.value })
        })} />
        <label htmlFor='bookName'>Book title: </label>
        <input type="text" id="bookName" value={bookInfo.title} onChange={(e) => setBookInfo(prev => {
          return ({ ...prev, title: e.target.value })
        })} />
        <label htmlFor='author'>Author of the book: </label>
        <input type="text" id="author" value={bookInfo.author} onChange={(e) => setBookInfo(prev => {
          return ({ ...prev, author: e.target.value })
        })} />
        <label htmlFor='year'>Year : </label>
        <input type="number" id="year" value={bookInfo.year} onChange={(e) => setBookInfo(prev => {
          return ({ ...prev, year: e.target.value })
        })} />
        <button type='submit' className='form-btn' onClick={(e) => {
          handleClick(e)
        }}>
          Add
        </button>
      </form>
    </div>
    </>
  )
}
