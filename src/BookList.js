import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";

class BookList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    render() {
        const books = this.props.books;

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
                                return (
                                    <li key={book.id}>
                                        <Book book={book}
                                              onShelfChange={this.props.moveBookToShelf}
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
}

export default BookList;
