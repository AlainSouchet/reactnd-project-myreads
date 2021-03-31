import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';

import BookList from './BookList';

class BookFinder extends Component {

    /**
     * Component's prop types
     * @type {{}}
     */
    static propTypes = {
        moveBookToShelf: PropTypes.func.isRequired,
        getShelf: PropTypes.func.isRequired,
    }

    /**
     * Component's states
     * @type {{books: []}}
     */
    state = {
        books: [],
    }

    /**
     * Handle change of the input field
     * @param event
     */
    handleInputChange = (event) => {
        this.findBook(event.target.value);
    }

    /**
     * Use the book API to find books corresponding to the given string
     * @param text
     */
    findBook = (text) => {
        BooksAPI.search(text).then((books) => {
            this.setState(() => {
                // If API call return an error or no books, books should be an empty array
                return {
                    books: (books === undefined || books.hasOwnProperty('error')) ? [] : books,
                }
            })
        });
    }

    /**
     * Render BookFinder component
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.handleInputChange}/>
                    </div>
                </div>

                <BookList books={this.state.books}
                          moveBookToShelf={this.props.moveBookToShelf}
                          getShelf={this.props.getShelf}
                />
            </div>
        )
    }
}

export default BookFinder;
