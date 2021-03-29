import React, {Component} from 'react';

class BookShelfChanger extends Component {

    handleSelectChange = (event) => {
        this.props.onShelfChange(event.target.value);
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={this.handleSelectChange} defaultValue={this.props.currentShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger;
