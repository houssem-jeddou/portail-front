import React, { Component } from 'react'
import { MDBSpinner } from 'mdb-react-ui-kit';
import axios from 'axios';
import { PubCard } from './../component/pubCard';

export class PubPage
    extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pub: null,
            isLoading: true,
            errorMessage: '',
        };
    }

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

    componentWillMount() {
        const id = this.props.match.params.id
        axios.get(`http://localhost:3001/api/publication/${id}`)

            .then((response) => {
                this.setState({
                    pub: response.data,
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

        return (

            (this.state.isLoading) ?
                <div className="d-flex justify-content-center" style={{ height: 1800 + "px" }}>
                    <MDBSpinner grow style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <span className='visually-hidden'>Loading...</span>
                    </MDBSpinner>

                    <div>
                        {this.state.errorMessage}
                    </div>
                </div>
                :

                <div >

                    {/* <img className="img1 img-fluid" src="http://www.issatso.rnu.tn/fo/images/slide/clubs.jpg" height="340" alt="logo" /> */}


                    <div style={{ padding: 30 + "px" }}>

                        <div className="card w-75" style={{ margin: "auto" }}>
                            <div className="card-body text-left " >
                                <div style={{ margin: 30 + "px" }}>
                                    <h4 className="card-title"> {this.state.pub.author.firstname} {this.state.pub.author.lastname}</h4>
                                    <p className="card-text"> {this.displayDate(this.state.pub.date)}</p>
                                    <p className="card-text">{this.state.pub.texte}</p>


                                    {this.state.pub && this.state.pub.comments.map((c, index) => {
                                        return (
                                            <div
                                                //  style={{ margin: 30 + "px" }} 
                                                key={c._id}>

                                                <div className="card" style={{ margin: "auto" }}>
                                                    <div className="card-body">
                                                        <div className="text-left ">
                                                            <h5 className="card-title"> {c.author.firstname} {c.author.lastname}</h5>
                                                            <p className="card-text"> {this.displayDate(c.date)}</p>
                                                            <p className="card-text">{c.content} </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
        )
    }
}

export default PubPage
