import React, { Component } from 'react'
import { MDBSpinner } from 'mdb-react-ui-kit';
  
export class Institut extends Component {  
    render() {  
        return (  
            <MDBSpinner grow>
      <span className='visually-hidden'>Loading...</span>
    </MDBSpinner>
        )  
    }  
}  
  
export default Institut 