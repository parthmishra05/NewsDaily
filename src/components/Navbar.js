import React, { Component } from 'react'
import  {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    
    
    return (
   
      <div>
      
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Technology">Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Politics">Politics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Entertainment">Entertainment</Link>
        </li>

        
      </ul>
      <button type="button" class="btn btn-light" >Light</button>
<button type="button" class="btn btn-dark" >Dark</button>
   
    </div>
  </div>
</nav>
      </div>
    )
  }
}
