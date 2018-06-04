import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch,Link} from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss"
import PortfolioAppRouters from "./components/PortfolioAppRouters";

ReactDOM.render(<PortfolioAppRouters />, document.getElementById("app"));

/* 
const ExpenseDashboardPage=()=>(
        <div>
        this is homepage
        </div>
    );

const AddExpensePage=()=>(
        <div>
        this is create page
        </div>
    );

const EditExpensePage=()=>(
    <div>
        this is Edit page
        </div>
);

const HelpPage=()=>(
    <div>
        this is Help page
        </div>
);
const NotFoundPage=()=>(
    <div>
       404! <Link to="/">Go home</Link>.
        </div>
);
   
const layout=(
    <BrowserRouter>
    
    <Switch>
    
    <Route path="/" component={ExpenseDashboardPage} exact={true}/> 
    <Route path="/create" component={AddExpensePage}/>
    <Route path="/edit" component={EditExpensePage}/>
    <Route path="/help" component={HelpPage}/>
    <Route  component={NotFoundPage}/>
    </Switch>
    </BrowserRouter>
); */
    /* exact tell the router to hook for hompage  with the path "/" exactly */


