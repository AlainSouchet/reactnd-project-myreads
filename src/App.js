import React from 'react';
import {Link, Route} from "react-router-dom";
import './App.css';
import * as BooksAPI from './BooksAPI';


import BookShelf from './BookShelf';
import BookFinder from './BookFinder';

class BooksApp extends React.Component {

    /**
     * Component's states
     * @type {{books: []}}
     */
    state = {
        books: [],
    }

    /**
     * Actions to do when the component is loaded
     */
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
     * Get the shelf corresponding to the given book
     * @param book
     */
    getShelf = (book) => {
        const bookOnShelf = this.state.books.filter((b) => {
            return (b.id === book.id);
        });

        return (bookOnShelf.length === 0) ? 'none' : bookOnShelf[0].shelf;
    }

    /**
     * Move the given book on the given shelf
     * @param book
     * @param shelf
     */
    moveBookToShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => this.loadBooks());
    }

    /**
     * Render App component
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div className="app">
                <Route exact path="/search" render={() => (
                    <BookFinder moveBookToShelf={this.moveBookToShelf}
                                getShelf={this.getShelf}
                    />
                )}/>

                <Route exact path="/" render={() => (
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
                            <Link to="/search" className="button">
                                Add a book
                            </Link>
                        </div>
                    </div>
                )}/>
            </div>
        )
    }

}

export default BooksApp;
