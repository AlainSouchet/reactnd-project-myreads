import React, {Component} from 'react';
import PropTypes from 'prop-types';

import BookShelfChanger from './BookShelfChanger';

class Book extends Component {

    /**
     * Component's prop types
     * @type {{}}
     */
    static propTypes = {
        book: PropTypes.object.isRequired,
        onShelfChange: PropTypes.func.isRequired,
    }

    /**
     * Change shelf of the current book
     * @param shelf
     */
    handleShelfChange = (shelf) => {
        this.props.onShelfChange(this.props.book, shelf)
    }

    /**
     * Checks if the given book has a thumbnail
     * @param book
     * @returns {boolean}
     */
    hasBookThumbnail = (book) => {
        return book.imageLinks !== undefined &&
            book.imageLinks.thumbnail !== undefined;
    }

    /**
     * Render Book component
     * @returns {JSX.Element}
     */
    render() {
        const book = this.props.book;
        const background = this.hasBookThumbnail(book) ? `url(${book.imageLinks.thumbnail})` : `#eee`

        return (
            <div>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            background: `${background}`,
                        }}>
                        </div>

                        <BookShelfChanger currentShelf={book.shelf}
                                          onShelfChange={this.handleShelfChange}
                        />
                    </div>
                    <div className="book-title">{book.title}</div>

                    {book.authors !== undefined && (
                        <div className="book-authors">{
                            book.authors.join(' - ')
                        }</div>
                    )}
                </div>
            </div>
        )
    }

}

export default Book;
