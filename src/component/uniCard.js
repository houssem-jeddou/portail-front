import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class UniCard extends Component {
  render() {
    const id = this.props.id
    return (

      <div className="card m-1" >

        <img className="card-img-top" src={this.props.imagesrc} alt="Card image cap" />

        <div className="card-body" style={{ height: 150 + 'px' }}>
          <h5 className="card-title"> {this.props.name} </h5>
          <p className="card-text"> {this.props.description} </p>
          <p className="card-text"> {this.props.localistaion} </p>
        </div>

        <div>
          <Link
            to={{
              pathname: `/unis/${this.props.id}`,
              state: id,
            }}
          >
            Plus de details...
          </Link>
        </div>

      </div >

    )
  }
}

export default UniCard