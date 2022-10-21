import React from "react";
import {BookItem} from './bookItem';
//Component imports book items to read
export class Books extends React.Component{
    render(){
        return this.props.books.map(
            (book)=>{
                return <BookItem book={book} key={book.isbn}></BookItem>
            }
        );
    }
}