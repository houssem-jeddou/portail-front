import React, { Component } from 'react' 
import axios from "axios"; 
//import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
  
export class Home extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      books: null
    };
  }
     // state = { publication: "" };

   async componentWillMount() {
    const response = await axios.get("http://localhost:3001/api/publication")
    this.setState({books: response.data})
        
    } 
    displayDate(datetime) {
      if (
        new Intl.DateTimeFormat("US-en").format(new Date()) ===
        new Intl.DateTimeFormat("US-en").format(new Date(datetime))
      ) {
        return new Intl.DateTimeFormat("US-en", {
          hour: "2-digit",
          minute: "2-digit"
        }).format(new Date(datetime));
      } else {
        return new Intl.DateTimeFormat("US-en", {
          year:"2-digit",
          month: "2-digit",
          day: "2-digit"
        }).format(new Date(datetime));
      }
    }
    render() {  
        return ( 
          <React.Fragment>
<div className="container">

    <div className="row">

      <div className="col-md-8">
        {this.state.books&&this.state.books.map((book , index)=> {
          return (
        <div className="card mb-4">
          <div className="book" key={book._id}>
          <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"/>
        <div className="card-body">
            <h2 className="card-title">Post {index + 1}</h2>
            <p className="card-text">{book.texte}</p>
          </div>
          <div className="card-footer text-muted">
            Posted on {this.displayDate(book.date)} by {book.userId}
          </div>
        </div>
        </div>
        
                );
              })}
        <ul className="pagination justify-content-center mb-4">
          <li className="page-item">
            <a className="page-link" href="#">&larr; Older</a>
          </li>
          <li className="page-item disabled">
            <a className="page-link" href="#">Newer &rarr;</a>
          </li>
        </ul>

      </div>

      <div className="col-md-4">


        <div className="card my-4">
          <h5 className="card-header">Categories</h5>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">HTML</a>
                  </li>
                  <li>
                    <a href="#">Freebies</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                  <li>
                    <a href="#">CSS</a>
                  </li>
                  <li>
                    <a href="#">Tutorials</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="card my-4">
          <h5 className="card-header">Side Widget</h5>
          <div className="card-body">
            You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
          </div>
        </div>

      </div>

    </div>


  </div>
  </React.Fragment>
  )  
    }  }
  
  
  export default Home 