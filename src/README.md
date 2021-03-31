# MyReads Project

The MyReads project is a react app which allow the user to find books from a library and tag them into 3 differents categories : 
* Read
* Currently reading
* Want to read

The app contains two main parts. 
The first one displays the different shelves corresponding to the previous categories 
and the second one is a search page which displays books from a distant library corresponding to the given search term. 

## Installation

To make the app work, please type the following commands in your terminal.
* `npm install`
* `npm start`

## Routes

As we saw before, the app is divided in 2 sections. Here are the corresponding routes of the app to access to these features :  
* `/`: homepage. Show the 3 different bookshelves and all books put on them.
* `/search`: search page. Display a research bar and a list of up to 20 books corresponding to the given text

Not all words can be used to search books. The search terms available for the app are in the SEARCH_TERMS.md file of the project.
