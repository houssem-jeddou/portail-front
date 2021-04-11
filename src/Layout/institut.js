import React, { Component } from 'react'
import { MDBSpinner } from 'mdb-react-ui-kit';
  
export class Institut extends Component {  
    render() {  
        return (
            <div>
            <MDBSpinner grow>
      <span className='visually-hidden'>Loading...dddddddd</span>
    </MDBSpinner>
    <img className="img1" src="http://www.issatso.rnu.tn/fo/images/slide/clubs.jpg" height="340" alt ="logo" />
  <div className="carddd">
  <div className="card-1">
          <h5 className="card-header">About us</h5>
          <div className="card-body">
            <p>L'Institut supérieur des sciences appliquées et de technologie de Sousse ou ISSATS est un établissement scientifique relevant de l'Université de Sousse</p>
          </div>
        </div>
        <div className="card-1">
          <h5 className="card-header">les formations</h5>
          <div className="card-body">
<ul>
    <li>
        cycle préparatoire
    </li>
    
    <li>
        cycle ingénieur
    </li>
    
    <li>
        licenses
        </li>
        
    <li>
        génie civile
    </li>
    </ul>
              </div>
        </div>

        <div className="card-1">
          <h5 className="card-header">témoignages</h5>
          <div className="card-body">
         <p> Espace des témoignages.</p>
         <p>Chaque étudiant(e) peut partager sa propre expérience vécue à l'ISSAT de Sousse</p>
          </div>
        </div>
        </div>
        <div className="footer-content">
        <div className="container">
            <div className="row">
                <div className="footer-col col-md-3 col-sm-4 about">
                    <div className="footer-elem">
                        <h3>A propos</h3>
                        <ul>
                            <li><a href="http://www.issatso.rnu.tn/fo/presentation/historique.php"><i className="fa fa-caret-right"></i>A propos de l'ISSAT</a></li>
                            <li><a href="http://www.issatso.rnu.tn/fo/contact.php"><i className="fa fa-caret-right"></i>Contactez nous</a></li>
                        </ul>
                        <h3>Liens Utiles</h3>
                        <ul>
                            <li><a href="https://www4.inscription.tn/" target="_blank"><i className="fa fa-caret-right"></i>Inscription.tn</a></li>
                            <li><a href="http://www.orientation.tn/" target="_blank"><i className="fa fa-caret-right"></i>Orientation.tn</a></li>
                            <li><a href="http://www.oouc.rnu.tn/" target="_blank"><i className="fa fa-caret-right"></i>Office des oeuvres Univ. du Centre</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-col col-md-3 col-sm-4 about">
                    <div className="footer-elem">

                    <h3>Rejoignez notre mailing list</h3>
                    
                    <p>Abonnez-vous pour obtenir notre newsletter hebdomadaire livré directement à votre boîte de réception</p>
                    <form method="get" action="" className="subscribe-form">
                    <div className="form-group">
                    <input type="hidden" name="jeton" id="jeton" value="57f41d1bc5649b4cdf207efd342f5182"></input>
                    <input id="email" name="email" type="email" className="form-control" placeholder="Enter votre email" required=""></input>
                        </div>
                        <input classNameName="btn btn-theme btn-subscribe" type="submit" value="S'abonner"></input>
                    </form>
                    </div>  
                    </div> 
                </div> 
                </div>
                 </div> 
                
                
                
                
                
                
                
                
                
                
                
                
                </div>

    
    
        )  
    }  
}  
  
export default Institut 