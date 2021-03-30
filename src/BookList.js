import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";

class BookList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    render() {
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        this.props.books.map((book) => {
                            return (
                                <li>
                                    <Book book={book}
                                          onShelfChange={this.props.moveBookToShelf}
                                    />
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default BookList;
