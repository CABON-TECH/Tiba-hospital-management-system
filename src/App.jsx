import React from 'react'
import { Navbar } from './views/Navbar'
function App() {

  return (
    <div className="hello">
      <Navbar />
      <AuthProvider>
        <About />
        <Services />
        <Contact />
        
      </AuthProvider>
    </div>
  )
}

export default App
