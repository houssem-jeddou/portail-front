import React, { Component } from 'react' 
import axios from "axios"; 
import { MDBSpinner ,MDBBtn, MDBIcon, MDBBadge} from 'mdb-react-ui-kit';
  
export class Home extends Component { 
  constructor(props) {
    super(props);
    this.onChangeTexte= this.onChangeTexte.bind(this)
    this.create= this.create.bind(this)
    this.state = {
      books: null,
      selectedFile: null,
      addbloc:''
    };
    this.image = React.createRef();
  }
  

//data fetch
   async componentWillMount() {
    const response = await axios.get("http://localhost:3001/api/publication")
    this.setState({books: response.data})   
    } 

// On file select (from the pop up)
    onFileChange = event => {
      // Update the state
      this.setState({ selectedFile: event.target.files[0], addbloc:<MDBBadge color='danger' className='ms-2'>1</MDBBadge> });

    };
    
    // On file upload (click the upload button)
    onFileUpload = () => {
      const node = this.image.current.click();
    };

    
    onChangeTexte(e) {
      this.setState({
        texte: e.target.value
      })
  }
   // add entity - POST
  create(e) {
    const formData = new FormData();
    if(this.state.selectedFile!=null){
      // Update the formData object
      formData.append("photo",this.state.selectedFile); 
      formData.append("texte",this.state.texte); 
      formData.append("userId","le");    
      formData.append("date",new Date());  
    }else{
      formData.append("texte",this.state.texte); 
      formData.append("userId","le");    
      formData.append("date",new Date()); 
  }
    e.preventDefault();
    axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    axios.post("http://localhost:3001/api/publication",formData)
    .then(response => {
        this.setState({
          _id: response.data._id,
          texte: response.data.texte,
          userId: response.data.userId,
          date: response.data.date,
          photo: response.data.photo,
          published: response.data.published,
          submitted: true
        });
        //console.log(response.headers);
        this.setState({
          _id: "",
          texte: "",
          userId: "",
          date:"",
          selectedFile: null,
          addbloc:''
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
  //change date format 
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
      if (this.state.books==null) {
        return (<div className="container">
          <div style={{ paddingTop: '24%',paddingBottom: '21%'}}>
      <MDBSpinner className='mx-2' color='info' style={{ width: '3rem', height: '3rem'}}>
        <span className='visually-hidden'>loading...</span>
      </MDBSpinner>
       </div></div> );
      }else  
        return ( 
          <React.Fragment>
<div className="container">
    <div className="row">
      <div className="col-md-8">
      <div className="card mb-4"  style={{ marginTop: '5%'}}>
        <div className="book" >
        <form encType="multipart/form-data">
        <div className="card-body" style={{ padding: '0%'}}> 
        <div className="card-textarea">
        <div className="md-form">
          
        <textarea id="form7" className="md-textarea form-control" rows="3"  placeholder="Write something here..." required value={this.state.texte}
        onChange={this.onChangeTexte}></textarea>
        </div>
        </div>
        </div>
        <div>
            <div>
                <input type="file" ref={this.image} onChange={this.onFileChange} accept="image/*" hidden />
            </div>
        </div>
        </form>
        <div className="card-footer text-muted">
        <MDBBtn rounded className='mx-2' color='info' onClick={this.onFileUpload}><MDBIcon icon='fas fa-camera'/>
        {this.state.addbloc}
        </MDBBtn>
        <MDBBtn rounded className='mx-2' color='info' onClick={this.create}> Post</MDBBtn>
        </div>
        </div>
        </div>

        {this.state.books&&this.state.books.map((book , index)=> {
          return (
        <div className="card mb-4">
          <div className="book" key={book._id}>
            {book.photo?
              <img className="card-img-top" src={`http://localhost:3001/${book.photo}`} alt={book.texte}/>
              
            :<span> </span>
            }
        <div className="card-body">
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