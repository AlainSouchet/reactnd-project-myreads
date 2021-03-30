import React, {Component} from 'react';
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
                return {
                    books: books,
                }
            })
        });
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={this.props.backToShelves}>Close</a>
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
