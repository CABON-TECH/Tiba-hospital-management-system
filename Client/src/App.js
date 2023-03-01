import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navigationbar from "./components/Navigation/Navigationbar";
import About from "./components/Navigation/About";
import Signin from "./components/Navigation/sign-in";

function App() {
    return (
        <Router>
            
            
                <Route path="/Navigationbar" component={Navigationbar} />
                <Route path="/About" component={About} />
                <Route path="/Signin" component={Signin} />
            
        </Router>
    );
}

export default App;
