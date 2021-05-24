import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';
import brandLogo from "../../../images/images/logos/logo.png"

const Navbar = () => {
  const{ loggedInUser, setLoggedInUser } = useContext(UserContext);
  const token = sessionStorage.getItem("token");
  const handleLogOut = () => {
    sessionStorage.removeItem("token");
    setLoggedInUser("");
    sessionStorage.removeItem("loginFirst")
    window.location.reload(false);  
    console.log("log out success")
  }
    return (
       <div className="container-fluid px-5">
            <div className="px-5">
               <nav className="navbar navbar-expand-lg navbar-light">
                  <a  href="/"><img className="navbar-brand mr-5" src={brandLogo} alt="" width="150px"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                     <span style={{outline: 'none'}} className="navbar-toggler-icon border-0"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5 home_btn_solid navbar_item" href="/">Home<span className="sr-only">(current)</span></a>
                        </li>
                          <li className="nav-item">
                             <a className="nav-link mr-5 navbar_item" href="/">Our Portfolio</a>
                             </li>
                               <li className="nav-item">
                                  <NavLink className="nav-link mr-5 navbar_item" to="/">Our Team</NavLink>
                                 </li>
                                  <li className="nav-item">
                                    <NavLink className="nav-link mr-5 navbar_item" to="/">Contact Us</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    { 
                                    (loggedInUser || token) ? 
                                        <button onClick={() => handleLogOut()} className="nav-link 
                                            text-center btn_brand 
                                            text-white"
                                          >
                                            Log Out
                                        </button>
                                      : 
                                        <NavLink className="nav-link text-center
                                          btn_brand text-white"
                                          onClick={ () => sessionStorage.setItem("loginFirst", true)}
                                          to="/login"
                                        >
                                              Login
                                        </NavLink>
                                    }
                                    </li>
                                </ul>
                            </div>
                         </nav>
                      </div>
                  </div> 
                  
    );
};

export default Navbar;