import React, { useState, createContext } from 'react'
import { AddBook } from './components'
import { BookList } from './components'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

export const BookContext = createContext(null);

const App = () => {
  
  // console.log(BookContext)
  const [bookDetails, setBookDetails] = useState([])

  return (
    <BookContext.Provider value={{bookDetails, setBookDetails}}>
      <div className='App'>
        <AddBook />
        <BookList />
      </div>
    </BookContext.Provider>
  )
}

export default App;