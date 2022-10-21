//Create a book button to sumit book 
//Need t bind objects together in the constructor
import React from "react";

export class Create extends React.Component{

    constructor()
    {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);

        this.state = {
            title:'',
            cover:'',
            author:''

        }
    }
    //hande sumit preventing defaults
    //onchange titles are updating information
    handleSubmit(e)
    {
        //Read from the console
        e.preventDefault();
        console.log(`${this.state.title}, ${this.state.author}, ${this.state.cover}`);

        //sets the new code
        this.setState({
            title:'',author:'',cover:''
        })
    }

    //Changes new titles cover author
    onChangeBookTitle(e)
    {
        this.setState({
            title:e.target.value})
    }

    onChangeBookAuthor(e)
    {
        this.setState({
            author:e.target.value})
    }

    onChangeBookCover(e)
    {
        this.setState({
            cover:e.target.value
        })
    }

    //html div and labels to unput title
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeBookTitle}
                    />
                </div>

                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                    className="form-control"
                    value={this.state.author}
                    onChange={this.onChangeBookAuthor}
                    />
                </div>

                <div className="form-group">
                    <label>Add Book Cover: </label>
                    <input type="text"
                    className="form-control"
                    value={this.state.cover}
                    onChange={this.onChangeBookCover}
                    />
                </div>

                <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}