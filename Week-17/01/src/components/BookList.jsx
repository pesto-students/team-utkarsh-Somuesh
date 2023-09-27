import React from 'react'
import { books } from '../bookData'
import { Book } from './Book'

export function BookList() {

    return (
        <>
        <h3>**BookList**</h3>
            {books.map((book) => {
                return (
                    <ul>
                        <Book title={book.title} author={book.author} year={book.year} />
                    </ul>)
            })}
        </>
    )
}
