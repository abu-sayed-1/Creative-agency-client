import React, { useContext, useEffect } from 'react';
import googleIcon from "../../../images/images/icons/google.png"
import * as firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from '../firebase.config'
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import brandLogo from "../../../images/images/logos/logo.png"
import "./Login.css"

const Login = () => {
    const {admin, setAdmin,loggedInUser,setLoggedInUser} = useContext(UserContext);
    console.log(admin,'admin')
    
    const history = useHistory();
    const location = useLocation()
    let {from} = location.state || {form:{pathname:"/"}}
    
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                const { displayName, email } = result.user;
                 const isSignedInUser = {
                    name: displayName,
                    email: email,
                }
                sessionStorage.setItem("userEmail", result.user.email);
                setLoggedInUser(isSignedInUser)
                storeAuthToken()

            }).catch(error => {
                console.log(error.message)
                let errorCode = error.code;
                let errorMessage = error.message;
                let email = error.email;
                let credential = error.credential;
            });
    }

            const storeAuthToken = () => {
                firebase.auth().currentUser.getIdToken(/* forceRefreh */ true)
                .then(function(idToken) {
                sessionStorage.setItem('token', idToken)
                history.replace(from)
                }).catch(function(error) {
                });
            }

     
    return (
    <div className="main_container ">
            <div>
             <a className="navbar-brand mb-5 brand_logo" href="/"><img src={brandLogo} alt="" width="170px"/></a>
                <div  className="login_container col-lg-12 col-md-12 col-sm-12">
                   <div>
                   <h4 className="text-center mb-3">Login With</h4>
                        <button onClick={handleGoogleSignIn}> 
                            <img className='googleIcon' src={googleIcon} alt="" /> 
                            <span>Continue with Google</span>
                        </button>
                   </div>
                </div>
            </div>

       </div>
    );
};

export default Login;