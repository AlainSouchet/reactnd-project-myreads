import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI';

import BookShelf from './BookShelf';

class BooksApp extends React.Component {

    state = {
        books: [],
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState(() => {
                return {
                    books: books
                }
            })
        })
    }

    /**
     * Get all books on the given shelf
     * @param shelf
     * @returns {*[]}
     */
    getBooksOnShelf = (shelf) => {
        return this.state.books.filter((book) => (book.shelf === shelf));
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf title="Read"
                                   id="read"
                                   books={this.getBooksOnShelf('read')}
                        />

                        <BookShelf title="Currently Reading"
                                   id="currentlyReading"
                                   books={this.getBooksOnShelf('currentlyReading')}
                        />

                        <BookShelf title="Want to read"
                                   id="wantToRead"
                                   books={this.getBooksOnShelf('wantToRead')}
                        />
                    </div>
                </div>

                <div className="open-search">
                    <button onClick={() => this.setState({showSearchPage: true})}>Add a book</button>
                </div>
            </div>
        )

    }
}

export default BooksApp
