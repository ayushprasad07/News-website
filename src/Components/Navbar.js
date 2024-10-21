import React from 'react'
import { Link } from 'react-router-dom'

const Navbar =()=> {
    return ( 
      <div  style={{color: "black" }}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/general">NewsCart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav nav-tabs me-auto mb-2 mb-lg-0">
                  <li className="nav-item"><Link style={{color:"black"}} className="nav-link" aria-current="page" to="/general">Home</Link></li>
                  <li className="nav-item"><Link style={{color:"black"}} className="nav-link" to="/business">Business</Link></li>
                  <li className="nav-item"><Link style={{color:"black"}} className="nav-link" to="/entertainment">Entertainment</Link></li>
                  <li className="nav-item"><Link style={{color:"black"}} className="nav-link" to="/generalhealth">General health</Link></li>
                  <li className="nav-item"><Link style={{color:"black"}} className="nav-link" to="/science">Science</Link></li>
                  <li className="nav-item"><Link style={{color:"black"}} className="nav-link" to="/sports">Sports</Link></li>
                  <li className="nav-item"><Link style={{color:"black"}} className="nav-link" to="/technology">Technology</Link></li>           
                </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  
}

export default Navbar