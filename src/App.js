import React, { Component } from 'react'
// import News from './components/Navbar'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  
  Route,
  
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
      <div>
        <Router>
        <Navbar/>
        
        
        <Routes>
            <Route exact path="/sports" element={<News key="sports" pageSize={5} country="us" category="sports" />} />
            <Route exact path="/business" element={<News key="business" pageSize={5} country="us" category="business" />} />
            {/* <Route path="/about" element={<News pageSize={5} country="us" category="about" />} /> */}
            <Route exact path="/health" element={<News key="health" pageSize={5} country="us" category="health" />} />
            <Route exact path="/politics" element={<News key="politics" pageSize={5} country="us" category="politics" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={5} country="us" category="technology" />} />
            <Route exact path="/science" element={<News key="science" pageSize={5} country="us" category="science" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country="us" category="entertainment" />} />
            <Route exact path="/home" element={<News key="home" pageSize={5} country="us" category="general" />} />
        </Routes>
        </Router>
      </div>
      </>
    )
  }
}
