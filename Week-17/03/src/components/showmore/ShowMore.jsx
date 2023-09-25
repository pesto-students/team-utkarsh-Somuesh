import React, { useContext } from 'react'
import { BookContext } from '../../App'

export const ShowMore = () => {
    const {bookDetails} = useContext(BookContext);
  return (
    <div>
        <button onClick={(id)=>{
            handleFlip(id)
        }}>Flip</button>
    </div>
  )
}
