import React from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";

/**
 * Render BookList component
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function BookList(props) {
    const books = props.books;

    return (
        <div className="search-books-results">
            {(books.length === 0) ? (
                <div className="no-book-found">
                    No book found
                </div>
            ) : (
                <ol className="books-grid">
                    {
                        books.map((book) => {
                            // The search function of BooksAPI retrieve books with no shelf
                            // For each books, we have to retrieve the corresponding shelf to have the
                            // correct option in the BookShelfChanger
                            const shelf = props.getShelf(book);

                            return (
                                <li key={book.id}>
                                    <Book book={{...book, shelf: shelf}}
                                          onShelfChange={props.moveBookToShelf}
                                    />
                                </li>
                            )
                        })
                    }
                </ol>
            )}
        </div>
    )
}

/**
 * Component's prop types
 * @type {{}}
 */
BookList.propTypes = {
    books: PropTypes.array.isRequired,
    getShelf: PropTypes.func.isRequired,
}

export default BookList;
