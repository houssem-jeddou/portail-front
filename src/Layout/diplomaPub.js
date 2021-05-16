import React , {useState , useEffect} from 'react'
import axios from "axios"; 
import RightBar from './Rightbar'
function Renting () {
  const [data, setData] = useState( [] );


    useEffect(async () => {
      const result = await axios.get(
        `http://localhost:3000/api/publication/diploma`
      );
      setData(result.data);
    },[]); 
    
    if(data.length){
      return(
   <div className="container">
        <div className="row">
        <div className="col-md-8">
        <div className="card mb-4"  style={{ marginTop: '5%'}}>
      {data.map(item => (
            <div className="card mb-4">
            <div className="item" key={item._id}>
              {item.photo?
                <img className="card-img-top" src={`http://localhost:3000/${item.photo}`} alt={item.texte}/>
                
                 :<span> </span>
              }
          <div className="card-body">
              <p className="card-text">{item.texte}</p>
          </div>
          <div className="card-footer text-muted">
              Posted on {item.date} by {item.author.username}
          </div>
          </div>
          </div>
      ))}
      
          </div>
          </div>
          <RightBar />
          </div>
          </div>
          
    );
  }else{
    return(
      <div className="container">
           <div className="row">
           <div className="col-md-8">
           <div className="card mb-4"  style={{ marginTop: '5%'}}> 
              <div>No posts found</div>
             </div>
             </div>
             <RightBar />
             </div>
             </div>
             
       );
  }



}

export default Renting;