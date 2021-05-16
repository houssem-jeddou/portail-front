import React, { Component } from 'react'  
import axios from "axios";
  
export class Publier extends Component { 
    constructor(props) {
        super(props);  
        this.saveTutorial= this.saveTutorial.bind(this) 
        this.onChangeTexte= this.onChangeTexte.bind(this)
        this.onChangeuserId= this.onChangeuserId.bind(this)
        this.onChangeDate= this.onChangeDate.bind(this)
        this.onChangeID= this.onChangeID.bind(this)
        this.saveTutorial= this.saveTutorial.bind(this)
        this.create= this.create.bind(this)
        
        this.state = {
          _id: "",
          texte: "",
          date: "",
          userId: "", 
          published: "",
          submitted: ""
        };
      }
      
   
  onChangeTexte(e) {
      this.setState({
        texte: e.target.value
      })
  }
  onChangeuserId(e) {
    this.setState({
      userId: e.target.value
    });
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value
    });
  }
  onChangeID(e) {
    this.setState({
      _id: e.target.value
    })
}

  saveTutorial() {
    var data = {
      texte: this.state.texte,
      _id: this.state._id,
      userId: this.state.userId,
      date: this.state.date
    }
  };
    create(e) {
        // add entity - POST
        var data = {
          texte: this.state.texte,
          userId: this.state.userId,
          date: this.state.date
        };
        e.preventDefault();
        axios.post("http://localhost:3001/api/publication",[data])
        .then(response => {
            this.setState({
              _id: response.data._id,
              texte: response.data.texte,
              userId: response.data.userId,
              date: response.data.date,
              published: response.data.published,
              submitted: true
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
      
  

  newTutorial() {
    this.setState({
      _id: "",
      texte: "",
      userId: "",
      date:"",
      published: false,
      submitted: false
    });
  }

    
    render() { 
        return(
            <React.Fragment>
                   <div className="container">

<div className="row">

  <div className="col-md-8">
  <h1 className="my-4">Page Heading
          <small>Secondary Text</small>
        </h1>
        
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Texte</label>
              <input
                type="text"
                className="form-control"
                id="texte"
                required
                value={this.state.texte}
                onChange={this.onChangeTexte}
                name="texte"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">userid</label>
              <input
                type="text"
                className="form-control"
                id="userId"
                required
                value={this.state.userId}
                onChange={this.onChangeuserId}
                name="userId"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">id</label>
              <input
                type="text"
                className="form-control"
                id="_id"
                required
                value={this.state._id}
                onChange={this.onChangeID}
                name="_id"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                required
                value={this.state.date}
                onChange={this.onChangeDate}
                name="date"
              />
            </div>

            <button onClick={this.create} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
      
      </div>

    </div>


  </div>
              </React.Fragment> )  

        } 
 }
  
  export default Publier