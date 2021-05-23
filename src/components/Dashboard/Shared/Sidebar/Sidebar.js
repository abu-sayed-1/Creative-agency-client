// import React, { useEffect } from 'react';
// import "./Sidebar.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUsersCog, faShoppingCart, faCommentDots, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
// import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
// import { NavLink } from 'react-router-dom';
// import { useState } from 'react';

// const Sidebar = () => {
//     const [isAdmin, setAdmin] = useState(false);
//     const isItAdminOrCustomer = JSON.parse(sessionStorage.getItem("userInfo"));
//     useEffect(() => {
//         fetch(`http://localhost:4000/checkAdminEmailOrNot?email=${isItAdminOrCustomer.email}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 setAdmin(data.admin);
//                 // sessionStorage.setItem("checkoutAdmin", data.admin)
//             });
//     }, [isItAdminOrCustomer]);

//     // const checkoutAdmin = sessionStorage.getItem("checkoutAdmin");
//     return (
//         <div className="sidebar flex-column justify-content-between pt-5 px-4">
//             <ul className="list-unstyled">
//                 {isAdmin ? <div>
//                     <li>
//                         <NavLink exact activeClassName="active_class" to="/allServiceLists" >
//                             <FontAwesomeIcon icon={faFileAlt} /> <span>Service list</span>
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink exact activeClassName="active_class" to="/addService"  >
//                             <FontAwesomeIcon icon={faPlus} /><span>Add Service</span>
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink exact activeClassName="active_class" to="/makeAdmin"  >
//                             <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
//                         </NavLink>
//                     </li>
//                 </div>
//                     :
//                     <div>
//                         <li>
//                             <NavLink exact activeClassName="active_class" to="/order" >
//                                 <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink exact activeClassName="active_class" to="/serviceLists" >
//                                 <FontAwesomeIcon icon={faUsersCog} /> <span>Service list</span>
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink exact activeClassName="active_class" to="/feedback" >
//                                 <FontAwesomeIcon icon={faCommentDots} /> <span>Review..</span>
//                             </NavLink>
//                         </li>
//                     </div>
//                 }
//             </ul>
//         </div>
//     );
// };

// export default Sidebar;




import React from 'react';
import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersCog, faShoppingCart, faCommentDots, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { NavLink, useHistory, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const history =  useHistory();
    const isAdmin = sessionStorage.getItem("isAdmin");
    if (location.pathname === "/order" && isAdmin === "true") {
        console.log("status 200|||")
        history.push("/allServiceLists")
    }
    return (
        <div className="sidebar flex-column justify-content-between pt-5 px-4">
            <ul className="list-unstyled">
                {(isAdmin === "true") ? <div>
                    <li>
                        <NavLink exact activeClassName="active_class" to="/allServiceLists" >
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Service list</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active_class" to="/addService"  >
                            <FontAwesomeIcon icon={faPlus} /><span>Add Service</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active_class" to="/makeAdmin"  >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </NavLink>
                    </li>
                </div>
                    :
                    <div>
                        <li>
                            <NavLink exact activeClassName="active_class" to="/order" >
                                <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active_class" to="/serviceLists" >
                                <FontAwesomeIcon icon={faUsersCog} /> <span>Service list</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active_class" to="/feedback" >
                                <FontAwesomeIcon icon={faCommentDots} /> <span>Review..</span>
                            </NavLink>
                        </li>
                    </div>
                }
            </ul>
        </div>
    );
};

export default Sidebar;