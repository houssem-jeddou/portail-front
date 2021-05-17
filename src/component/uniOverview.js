import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import UniCard from './uniCard';
import { MDBSpinner } from 'mdb-react-ui-kit';
import axios from 'axios';

export class UniOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unis: null,
      isLoading: true,
      errorMessage: '',

    };
  }

  componentWillMount() {
    axios.get("http://localhost:3001/api/uni")

      .then((response) => {
        this.setState({
          unis: response.data,
          isLoading: false,
          errorMessage: '',

        })
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          errorMessage: 'Something went wrong : ' + error.message

        })
      })

  }

  render() {

    console.log(this.state.unis)
    return (
      (this.state.isLoading) ?
        <div className="d-flex justify-content-center" style={{ height: 1800 + "px" }}>
          <MDBSpinner grow style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            <span className='visually-hidden '>Loading...</span>
          </MDBSpinner>
          {/* <h3 style={{ width: '80%' }}>
            fetching data from server
            </h3> */}
          <div>
            {this.state.errorMessage}
          </div>
        </div> :
        <div className="card-columns  p-3" style={{ display: "inline-block" }} >
          {this.state.unis && this.state.unis.map((uni, index) => {
            return (

              <UniCard
                key={uni._id}
                name={uni.name}
                localistaion={uni.localisation}
                description={uni.description}
                imagesrc="http://placehold.it/750x300"
                id={uni._id}
              />
            );
          })}
        </div>

    )

  }


}

export default UniOverview