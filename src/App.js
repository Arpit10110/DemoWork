import React from 'react'
import {HashRouter as Router , Routes ,Route} from "react-router-dom"
import Home from "./components/Home.jsx"
import Fav from "./components/Fav.jsx"
const App = () => {
  return (
   <Router>
    <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/fav" element={<Fav/>}/>
    </Routes>
   </Router>
  )
}

export default App
