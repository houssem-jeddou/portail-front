import React, {useState} from 'react'
import { useCookies } from "react-cookie";
import {Form,FormControl,Button } from 'react-bootstrap' 
export default function Search() {
    
const [cookies, setCookie] = useCookies(['search']);
const [SInput, setsearch] = useState('');

 function create(e) {
    let expires = new Date()
    expires.setTime(expires.getTime() + (60 * 1000))
    setCookie('search', SInput, { path: '/',  expires})
    console.log(cookies.search)
}
  return (
          <Form inline className="col-sm-4 offset-sm-0">
                  <FormControl type="text" placeholder="Search" className="mr-sm-2 " onChange={e => setsearch(e.target.value)}/>
                  <Button onClick={create} variant="outline-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </Button>
           </Form>
  );
}