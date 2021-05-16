import React , {useState , useEffect} from 'react'
import axios from "axios"; 
import { useCookies } from "react-cookie";
import RightBar from './Rightbar'
import raw from '../Files/stopwords_fr.txt';
function search () {
  const [data, setData] = useState( [] );
  const [cookies, setCookie] = useCookies(['search']);
//enlever les stopwords
//fetch(raw)
//.then(r => r.text())
//.then(text => {
// var re = /\s*(,|$)\s*/;
// var stopwords = text.split(re).filter(it =>it!=",");
//var c =cookies.search.split(' ').filter(word=> !stopwords.includes(word))
//});
//const arr = Object.keys(cookies.search).map((key) => [cookies.search[key]]);
/*console.log(cookies.search)
for (var i=0;i<cookies.search.length;i++) {
  var f=JSON.parse(cookies.search[i])
  console.log(f[0]);
  console.log(f[1]);
  }*/
 /* let expires = new Date()
  expires.setTime(expires.getTime() + (60 * 1000 * 60 *24*30))
  setCookie('search',['["fr",1]'], { path: '/',  expires}) */
    useEffect(async () => {
      const result = await axios.get(
       `http://localhost:3000/api/publication/search/${cookies.search}`
      );
      setData(result.data);
    },[]); 
    
    if(data.length){
      return(
   <div className="container">
        <div className="row">
        <div className="col-md-8">
        <div className="card mb-4"  style={{ marginTop: '5%'}}>
         <p style={{paddingRight: '70%',fontSize:'25px'}} className="text-black-50"> Searching for : {cookies.search}</p>  
          <hr/>
          
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
            <p style={{paddingRight: '70%',fontSize:'25px'}} className="text-black-50"> Searching for : {cookies.search}</p>  
             <hr/>
              <div>No posts found</div>
             </div>
             </div>
             <RightBar />
             </div>
             </div>
             
       );
  }



}

export default search;