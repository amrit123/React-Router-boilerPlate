import React, { Component } from 'react'
import { BrowserRouter, Route, Switch,Link} from "react-router-dom";
import PortFolio from "./Portfolio";
import PortFolioListPage from "./PortFolioListPage";

import Header from "./Header";
import Home from "./Home";

import Contact from "./Contact";
import NotFoundPage from "./NotFoundPage";


export default class PortfolioAppRouters extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
          <Header />
        <Switch>
        
        <Route path="/" component={Home} exact={true}/> 
         <Route path="/portfolio/" component={PortFolio} exact={true}/>
         <Route path="/portfolio/:id" component={PortFolioListPage}/>
        <Route path="/contact" component={Contact}/>
        <Route  component={NotFoundPage}/>
        </Switch>
        </div>
        </BrowserRouter>
    )
  }
}

