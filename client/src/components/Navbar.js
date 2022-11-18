import React from 'react'
import { Link } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light"  style={{direction:"rtl"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="./images/logoo.png"/>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link">
          <a >
          ہوم
         </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/books" className="nav-link">
          <a >
           بُک سٹور
          </a>
          </Link>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
          ہمارے متعلق
          </a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="#">
          رابطہ

          </a>
        </li>
      </ul>
      <form className="d-flex e" style={{direction:"ltr"}}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          <FaSistrix/>
        </button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar