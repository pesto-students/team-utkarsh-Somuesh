import React from 'react'
import './book.css'

export function Book(props) {
    const {title, author, year} = props
    return (
        <div className='book'>
            <div className='book-title'>
            <h3>{title}</h3>
            </div>
            <div className='book-section'>
            <p>Author: {author}</p>
            <p>Year: {year}</p>
            </div>
        </div>
    )
}