import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'

import Formation from './formation'
import Institut from './institut'
import Search from './Search'
import Renting from './rentingPub'
import Diploma from './diplomaPub'
import UniPage from './uniPage'
import UniOverview from '../component/uniOverview'
import { HashRouter, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PubPage from './pubPage';  
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
          <Route path="/formation">
            <Formation />
          </Route>
          <Route path="/institut">
            <Institut />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/renting">
            <Renting />
          </Route>
          <Route path="/diplomaandqualification">
            <Diploma />
          </Route>
          <Route path="/unis/:id"
                    component={(props) => <UniPage {...props} />}
                  />
                  <Route path="/unis">
                    <UniOverview />
                  </Route>
                  <Route path="/publication/:id"
                    component={(props) => <PubPage {...props} />}
                  />
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
