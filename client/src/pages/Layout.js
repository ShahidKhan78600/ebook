import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul ul className="navbar-nav  mb-2 mb-lg-0 container">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Free Call <span style={{color:"red"}}>04299200856</span> 
            </a>
          </li>
          
          
        </ul>
      </nav>

      <Navbar />
      {children}
    </>
  );
};

export default Layout;
