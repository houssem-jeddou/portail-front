import React, { Component} from 'react';  
import Header from './Header'  
import Footer from './Footer'  
import Home from './Home'
import Publier from './publier'
import Institut from './institut'
//import Tester from './Tester'
import { HashRouter, Route, Switch ,BrowserRouter as Router} from 'react-router-dom';  
export class Layout extends Component {  
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>  
    render() {  
        return (  
            <div> 
                 <Header />
                <div id="wrapper">  
                    <div id="content-wrapper" className="d-flex flex-column">  
                        <div id="content">  
                        <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Publier />
          </Route>
          <Route path="/institut">
            <Institut />
          </Route>
        </Switch>
    </Router> 
                           
                        </div>  
                        <Footer />  
                    </div>  
                </div>  
            </div>  
            
        )  
    }  
}  
  
export default Layout  