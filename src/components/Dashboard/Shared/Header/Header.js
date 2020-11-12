import React from 'react';
import brandLogo from "../../../../images/images/logos/logo.png"


const Header = () => {
    return (
     <div className="container-fluid">
         <nav className="navbar navbar-expand-lg navbar-light p-0 m-0 py-3">
            <a className="navbar-brand mr-5 pr-3" href="/"><img src={brandLogo} alt="" width="140px"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5 home_btn_solid" href="/">Home<span className="sr-only">(current)</span></a>
                    </li>
                  </ul>
             </div>
         </nav>
     </div>
    );
};

export default Header;