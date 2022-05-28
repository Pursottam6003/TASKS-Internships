import React from 'react'


import {
  Link 
} from "react-router-dom";

export default function header() {
  return (
    <header>
    
    
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>REBETECH_TASK_2</title>
  
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">REBERT</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/#">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tables
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/Table_1">SUMMARY OF VALUATIONS</Link></li>
                <li><Link className="dropdown-item" to="/Table_2">VALUATION REPORT OF INDUSTRIAL UNIT</Link></li>
                <li><Link className="dropdown-item" to="/Table_3">DESCRIPTION OF THE PROPERTY</Link></li>
                <li><Link className="dropdown-item" to="/Table_3b">B – LAND Description</Link></li>
                <li><Link className="dropdown-item" to="/Table_3c">PART – C BUILDING</Link></li>
                <li><Link className="dropdown-item" to="/Table_4">Driving appproval</Link></li>

                <li><Link className="dropdown-item" to="/Table_5">VALUATION OF BUILDING</Link></li>
                <li><Link className="dropdown-item" to="/Table_6">DETAILS OF VALUATION</Link></li>
                <li><Link className="dropdown-item" to="/Misc_Table">PART –D [ EXTRA ITEMS] BUILDING</Link></li>
                <li><Link className="dropdown-item" to="/Misc_Table">Factors favouring for an additional Value </Link></li>
              </ul>
            </li>
      
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <div className="info">
    <h2>Pursottam Sah</h2>
    <p>Creating table for task submission of 2nd round</p>
    {/* <img src="./img.jpg" alt="image"></img> */}
     
    </div>
    </header>
  )
}



<>



</>