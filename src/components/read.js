import React from "react";
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component{
    //Downloaded AXIOS
    //method to make http request and Response using api
    // Called component lifecycyle hook
    //need something to use http
    componentDidMount() {
        //Axios has get method to retreat the url
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
        .then((response)=>{
            this.setState({
                //read data
                books:response.data
            })
        })
        //Catches Error
        .catch((error)=>{
            console.log(error);
        });
    }
    
    state = {
        books:[]
           
    }
    
    render(){
        return(
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}