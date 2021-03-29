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
        this.loadBooks();
    }

    /**
     * Load all the books on the shelves
     */
    loadBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState(() => {
                return {
                    books: books
                }
            })
        });
    }

    /**
     * Get all books on the given shelf
     * @param shelf
     * @returns {*[]}
     */
    getBooksOnShelf = (shelf) => {
        return this.state.books.filter((book) => (book.shelf === shelf));
    }

    /**
     * Move the given book on the given shelf
     * @param book
     * @param shelf
     */
    moveBookToShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => this.loadBooks());
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
                                   moveBookToShelf={this.moveBookToShelf}
                        />

                        <BookShelf title="Currently Reading"
                                   id="currentlyReading"
                                   books={this.getBooksOnShelf('currentlyReading')}
                                   moveBookToShelf={this.moveBookToShelf}
                        />

                        <BookShelf title="Want to read"
                                   id="wantToRead"
                                   books={this.getBooksOnShelf('wantToRead')}
                                   moveBookToShelf={this.moveBookToShelf}
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
