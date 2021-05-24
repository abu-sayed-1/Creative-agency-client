import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../../App';
import brandLogo from "../../../../images/images/logos/logo.png"

const Header = (currentName) => {
    console.log()
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    const handleLogOut = () => {
        sessionStorage.removeItem("token");
        setLoggedInUser("");
        sessionStorage.removeItem("loginFirst");
        window.location.reload(false);
    };
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light p-0 m-0 py-3">
                <a className="navbar-brand mr-5 pr-3" href="/"><img src={brandLogo} alt="" width="140px" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <h5 className="mb-0 ml-5">
                        {currentName && currentName.currentName}
                    </h5>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <div className="btn-group dropleft">
                                <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    {userInfo.name}
                                </button>
                                <ul className="dropdown-menu">
                                    <div className="p-5 text-center">
                                        <NavLink to="/"><img src={brandLogo} alt="" width="140px" /></NavLink>
                                        <h6 className="pt-4 text-uppercase">{userInfo.name}</h6>
                                        <p>{userInfo.email}</p>
                                        <button onClick={() => handleLogOut()}>
                                            Log out <FontAwesomeIcon icon={faSignOutAlt} />
                                        </button>
                                    </div>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;