import React, { Component } from 'react' 
import axios from "axios"; 
import { MDBSpinner ,MDBBtn, MDBIcon, MDBBadge} from 'mdb-react-ui-kit';
import RightBar from './Rightbar'
  
export class Home extends Component { 
  constructor(props) {
    super(props);
    this.onChangeTexte= this.onChangeTexte.bind(this)
    this.create= this.create.bind(this)
    this.state = {
      posts: null,
      selectedFile: null,
      addbloc:''
    };
    this.image = React.createRef();
  }
  

//data fetch
   async componentWillMount() {
    axios.defaults.withCredentials = true;
    const response = await axios.get(`http://localhost:3000/api/publication`)
    this.setState({posts: response.data})   
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
      formData.append("author","609495b265b4272914e4d63d");    
      formData.append("date",new Date());  
    }else{
      formData.append("texte",this.state.texte); 
      formData.append("author","609495b265b4272914e4d63d");    
      formData.append("date",new Date());
  }
    e.preventDefault();
    axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    axios.post("http://localhost:3000/api/publication",formData)
    .then(response => {
        this.setState({
          _id: response.data._id,
          texte: response.data.texte,
          author: response.data.userId,
          date: response.data.date,
          photo: response.data.photo,
          published: response.data.published,
          submitted: true
        });
        
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
      if (this.state.posts==null) {
        return (
        <div className="container">
          <div style={{ paddingTop: '24%',paddingBottom: '21%'}}>
            <MDBSpinner className='mx-2' color='info' style={{ width: '3rem', height: '3rem'}}>
              <span className='visually-hidden'>loading...</span>
            </MDBSpinner>
          </div>
        </div> );
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
            <textarea id="form7" className="md-textarea form-control" rows="3"  placeholder="Write something here..." required 
            value={this.state.texte} onChange={this.onChangeTexte}></textarea>
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

            {this.state.posts&&this.state.posts.map((post , index)=> {
              return (
            <div className="card mb-4">
              <div className="post" key={post._id}>
                {post.photo?
                  <img className="card-img-top" src={`http://localhost:3000/${post.photo}`} alt={post.texte}/>
                  
                   :<span> </span>
                }
            <div className="card-body">
                <p className="card-text">{post.texte}</p>
            </div>
            <div className="card-footer text-muted">
                Posted on {this.displayDate(post.date)} by {post.author.username}
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
          <RightBar />
          </div>
          </div>
          </React.Fragment>
        )  
    }  
  }
  
  
  export default Home 