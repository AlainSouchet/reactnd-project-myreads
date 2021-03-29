import React, {Component} from 'react';
import PropTypes from 'prop-types';

import BookShelfChanger from './BookShelfChanger';

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        moveBookToShelf: PropTypes.func.isRequired,
    }

    handleShelfChange = (shelf) => {
        this.props.moveBookToShelf(this.props.book, shelf)
    }

    render() {
        const book = this.props.book;

        return (
            <div>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            background: "gray"
                            // TODO Display books' covers instead of a gray rectangles
                            // backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
                        }}>
                        </div>

                        <BookShelfChanger currentShelf={book.shelf}
                                          onShelfChange={this.handleShelfChange}
                        />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{
                        book.authors.join(' - ')
                    }</div>
                </div>
            </div>
        )
    }

}

export default Book;
