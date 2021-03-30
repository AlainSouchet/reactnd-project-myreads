import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';

import BookList from './BookList';

class BookFinder extends Component {
    static propTypes = {
        moveBookToShelf: PropTypes.func.isRequired,
    }

    state = {
        books: [],
    }

    handleInputChange = (event) => {
        this.findBook(event.target.value);
    }

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
                />
            </div>
        )
    }
}

export default BookFinder;
