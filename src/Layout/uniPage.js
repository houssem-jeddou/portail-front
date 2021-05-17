import React, { Component } from 'react'
import { MDBSpinner } from 'mdb-react-ui-kit';
import axios from 'axios';
import { PubCard } from './../component/pubCard';
import RightBar from './Rightbar'


export class UniPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            uni: null,
            isLoadingUni: true,
            errorMessageUni: '',
            pubs: null,
            isLoadingPub: true,
            errorMessagePub: '',
        };
    }

    componentWillMount() {
        const id = this.props.match.params.id
        //fetch uni 
        axios.get(`http://localhost:3001/api/uni/${id}`)

            .then((response) => {
                this.setState({
                    uni: response.data,
                    isLoadingUni: false,
                    errorMessageUni: '',
                })
            })
            .catch((error) => {
                console.log(error)
                this.setState({
                    errorMessageUni: 'Something went wrong : ' + error.message
                })
            })
        //fetch pubs that are related to this Uni . ==> portail 
        //we pass the uni id in the url 
        axios.get(`http://localhost:3001/api/uniPub/${id}`)
            .then((response) => {
                this.setState({
                    pubs: response.data,
                    isLoadingPub: false,
                    errorMessagePub: '',
                })
            })
            .catch((error) => {
                console.log(error)
                this.setState({
                    errorMessagePub: 'Something went wrong : ' + error.message
                })
            })

    }

    render() {

        return (

            (this.state.isLoadingUni) ?
                <div className="d-flex justify-content-center">
                    <MDBSpinner grow style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <span className='visually-hidden'>Loading...</span>
                    </MDBSpinner>
                    {/* <h3 style={{ width: '80%' }}>
                fetching data from server
                </h3> */}
                    <div>
                        {this.state.errorMessageUni}
                    </div>
                </div>
                :

                <div >
                    <div >
                        <h1 className="p-10" >{this.state.uni.name}</h1>
                        <h2>{this.state.uni.description}</h2>
                    </div>
                    <img className="img1 img-fluid" src="http://www.issatso.rnu.tn/fo/images/slide/clubs.jpg" height="340" alt="logo" />


                    <div style={{ padding: 30 + "px" }}>

                        <div style={{ margin: 30 + "px" }}>
                            <div className="card w-75" style={{ margin: "auto" }}>
                                <div className="card-body">
                                    <h4 className="card-title">About {this.state.uni.name}</h4>
                                    <p className="card-text">{this.state.uni.description}</p>
                                    <p className="card-text">{this.state.uni.localisation}</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ margin: 30 + "px" }}>

                            <div className="card w-75" style={{ margin: "auto" }}>
                                <div className="card-body">
                                    <h4 className="card-title p-2">Formations</h4>
                                    <div className="text-left ">
                                        <p className="card-text">
                                            {this.state.uni.name} offre plusieurs types de formations dans des differents domaines:
                                        </p>
                                        <ul>
                                            {this.state.uni && this.state.uni.uniChoix.map((f, index) => {
                                                return (
                                                    <li key={f.uniFormation._id}>
                                                        <h5>{f.uniFormation.name}</h5>!§:
                                                        <p>{f.uniFormation.description}</p>

                                                        <dl className="row">
                                                            <dt className="col-sm-1">Score </dt>
                                                            <dd className="col-sm-1">
                                                                {f.uniScore}
                                                            </dd>
                                                        </dl>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div style={{ margin: 30 + "px" }}>

                            <div className="card w-75" style={{ margin: "auto" }}>
                                <div className="card-body">
                                    <h4 className="card-title">Related Topics</h4>

                                    {(this.state.isLoadingPub) ?
                                        <div className="d-flex justify-content-center" style={{ height: 1800 + "px" }}>
                                            <MDBSpinner grow style={{
                                                position: 'absolute', left: '50%', top: '50%',
                                                transform: 'translate(-50%, -50%)'
                                            }}>
                                                <span className='visually-hidden'>Loading...</span>
                                            </MDBSpinner>

                                            <div>
                                                {this.state.errorMessagePub}
                                            </div>
                                        </div>
                                        :
                                        <div className="card-columns  p-3" style={{ display: "inline-block" }} >
                                            {(this.state.pubs && this.state.pubs.length == 0)
                                                ? <h5> No pubs found</h5>
                                                :
                                                this.state.pubs && this.state.pubs.map((pub, index) => {
                                                    //console.log(pub)
                                                    return (

                                                        <PubCard
                                                            key={pub._id}
                                                            id={pub._id}
                                                            author={pub.author.username}
                                                            texte={pub.texte}
                                                            date={pub.date}
                                                            comments={pub.comments}
                                                        />
                                                    );
                                                })
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                
        )
    }
}

export default UniPage