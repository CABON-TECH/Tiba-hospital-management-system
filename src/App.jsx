import React from 'react'
import { Navbar } from './views/Navbar'
function App() {

  return (
    <div className="hello">
      <Navbar />
      <contextProvider>
        <Router>
         <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          </Switch>

          
          
          
        </Router>
      </contextProvider>
     
    </div>
  )
}

export default App
