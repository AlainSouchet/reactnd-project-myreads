import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends Component {

    /**
     * Component's prop types
     * @type {{}}
     */
    static propTypes = {
        currentShelf: PropTypes.string.isRequired,
    }

    /**
     * Handle change of select menu
     * @param event
     */
    handleSelectChange = (event) => {
        this.props.onShelfChange(event.target.value);
    }

    /**
     * Render BookShelfChanger component
     * @returns {JSX.Element}
     */
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
