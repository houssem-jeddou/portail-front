import React, { Component } from 'react'  
import axios from "axios";
  
export class Tester extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            books: null
          };
      }
      
    async componentWillMount() {
        const response = await axios.get("http://localhost:3001/api/publication")
        this.setState({books: response.data})
        } 
    
    render() { 
        return(
            <React.Fragment>
         <div className="books">
         {this.state.books&&this.state.books.map((book , index)=> {
             return (
             <div>
                <div className="book" key={index}>
                  <h3>Book {index + 1}</h3>
  
                  <div className="details">
                    <p>👨:{book.userId}</p>
                    <p>⏰: {book.date}</p>
                  </div>
                </div>
                </div>
                );
            })}
              </div>
              </React.Fragment> )  

        } 
 }
  
  export default Tester