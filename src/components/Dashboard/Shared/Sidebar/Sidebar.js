import React, { useEffect } from 'react';
import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersCog,faShoppingCart,faCommentDots,  faPlus, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const Sidebar = () => {
     const [del, setDel] = useState(false);
     console.log(del,typeof del);
    const getEmail = sessionStorage.getItem("userEmail")
    useEffect(() => {
        fetch(`https://lit-hollows-73598.herokuapp.com/checkAdminEmailOrNot?email=${getEmail}`)
        .then((res) => res.json())
        .then((data) => {
            setDel(data.admin)

            });
        }, [getEmail])

    return (

// {/* <div className="sidebar flex-column justify-content-between pt-5 px-4" >
//         <ul className="list-unstyled">
//         {del === true ? <div>
//             <li>
//                     <NavLink exact activeClassName="active_class" to="/allServiceLists" >
//                         <FontAwesomeIcon icon={faFileAlt} /> <span>Service list</span>
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink exact activeClassName="active_class" to="/addService"  >
//                     <FontAwesomeIcon icon={faPlus} /><span>Add Service</span>
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink exact activeClassName="active_class" to="/makeAdmin"  >
//                     <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
//                     </NavLink>
//                 </li>
//            </div>:<div>
//            <li>
//                 <NavLink exact activeClassName="active_class" to="/order" >
//                     <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span> 
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink exact activeClassName="active_class" to="/serviceLists" >
//                     <FontAwesomeIcon icon={faUsersCog} /> <span>Service list</span> 
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink exact activeClassName="active_class" to="/feedback" >
//                     <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
//                 </NavLink>
//             </li>
//            </div> }
//         </ul>
//     </div> */}


    <div className="sidebar flex-column justify-content-between pt-5 px-4" >
        <ul className="list-unstyled">
          { del && <div>
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
           </div>}
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
                    <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                </NavLink>
            </li>
           </div> 
        </ul>
    </div>
    );
};

export default Sidebar;