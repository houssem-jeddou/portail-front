import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export class PubCard extends Component {

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
                year: "2-digit",
                month: "2-digit",
                day: "2-digit"
            }).format(new Date(datetime));
        }
    }

    render() {
        const id = this.props.id
        return (

            <div className="card " >

                {/* <img className="card-img-top" src={this.props.imagesrc} alt="Card image cap" /> */}

                <div className="card-body"
                //style={{ height: 150 + 'px' }}
                >
                    <div className=" text-muted small">
                        Posted on {this.displayDate(this.props.date)} by {this.props.author}
                    </div>
                    <p className="card-text"> {this.props.texte} </p>
                </div>

                <div className="card-footer btn" style={{ width: 100 + "%" }}>
                    <Link
                        to={{
                            pathname: `/publication/${this.props.id}`,
                            state: id,
                        }}
                    >
                        view publication...
          </Link>
                </div>

            </div >

        )
    }
}

export default PubCard