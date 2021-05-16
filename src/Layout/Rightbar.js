import React, { Component } from 'react'
export class RightBar extends Component {  
    render() {  
        return ( 
            <div className="col-md-4">
            <div className="card my-4">
              <h5 className="card-header">Categories</h5>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="/">All</a>
                      </li>
                      <li>
                        <a href={`renting`}>Renting</a>
                      </li>
                      <li>
                        <a href={`diplomaandqualification`}>Diploma and Qualification</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
    
          </div>
        )  
    }  
}  
  
export default RightBar 