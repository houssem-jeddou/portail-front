import React, {useState} from 'react'
import { useCookies } from "react-cookie";
import {Form,FormControl,Button } from 'react-bootstrap' 
import raw from './Files/stopwords_fr.txt';
import search from './Layout/Search';
export default function Search() {
const [cookies, setCookie] = useCookies(['search']);
//const [cookies, setCookie] = useCookies(['region','type','prix','genre','caractere']);
const [SInput, setsearch] = useState('');
const [words, setword] = useState('');
let count = [];
let ac = [];
let inter = [];
 //enlever les stopwords
 fetch(raw)
 .then(r => r.text())
 .then(text => {
  var re = /\s*(,|$)\s*/;
  var stopwords = text.split(re).filter(it =>it!=",");
  count = SInput.split(' ').filter(word=> !stopwords.includes(word))
 });

 function create(e) {
  if(cookies.search){
    for (var j=0;j<cookies.search.length;j++) {
      ac.push(JSON.parse(cookies.search[j])[0])
     
    }
    var count1 = count.filter(word=> !ac.includes(word))
    var count2 = count.filter(word=> ac.includes(word))
    console.log((count1.length+cookies.search.length)>2)
    if((count1.length+cookies.search.length)>10){
      for (var j=0;j<cookies.search.length;j++) {
        var f=JSON.parse(cookies.search[j])
          if(f[1]==1&&!count2.includes(f[0])){  
            console.log(j)
            console.log(f)
            cookies.search.splice(j,1)
          }
      }
    }
    for (var i=0;i<count1.length;i++) {
        count1[i]=[count1[i],1]
        count1[i]=JSON.stringify(count1[i])
    }
    inter=cookies.search.concat(count1)
    for (var j=0;j<inter.length;j++) {
      var f=JSON.parse(inter[j])
      for (var i=0;i<count2.length;i++) {
        if(count2[i]==f[0]){   
          count2[i]=[count2[i],parseInt(f[1])+1]
          count2[i]=JSON.stringify(count2[i])
          inter.splice(j,1)
        }
      } 
    }
    inter=inter.concat(count2)
    inter=JSON.stringify(inter)
    let expires = new Date()
    expires.setTime(expires.getTime() + (60 * 1000 * 60 *24*30))
    setCookie('search',inter, { path: '/',  expires}) 
 }else{
  for (var i=0;i<count.length;i++) {
    count[i]=[count[i],1]
    count[i]=JSON.stringify(count[i])
  }
  count=JSON.stringify(count)
  let expires = new Date()
  expires.setTime(expires.getTime() + (60 * 1000 * 60 *24*30))
  setCookie('search',count, { path: '/',  expires}) 
 }
}
  return (
          <Form inline className="col-sm-4 offset-sm-0">
                  <FormControl type="text" placeholder="Search" className="mr-sm-2 " onChange={e => setsearch(e.target.value)}/>
                 <a href={`/search?search=${SInput}`}> <Button onClick={create} variant="outline-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </Button></a>
           </Form>
  );
}