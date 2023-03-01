import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigationbar from "./components/Navigation/Navigationbar";
import About from "./components/Navigation/About/About";
import Signin from "./components/Navigation/Signin/Signin";

function App() {
    return (
        <Router>
            
            <Switch>
                <Route path="/Navigationbar" component={Navigationbar} />
                <Route path="/About" component={About} />
                <Route path="/Signin" component={Signin} />
            </Switch>
        </Router>
    );
}

export default App;
