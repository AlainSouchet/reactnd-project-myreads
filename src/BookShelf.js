import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

class BookShelf extends Component {

    /**
     * Component's prop types
     * @type {{}}
     */
    static propTypes = {
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        moveBookToShelf: PropTypes.func.isRequired,
    }

    /**
     * Move the given book on the given shelf
     * @param book
     * @param shelf
     */
    onShelfChange = (book, shelf) => {
        this.props.moveBookToShelf(book, shelf);
    }

    /**
     * Render BookShelf component
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.books.map((book) => (
                                <li key={book.id}>
                                    <Book book={book}
                                          onShelfChange={this.onShelfChange}
                                    />
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }

}

export default BookShelf;
