import React, { useContext } from 'react';
import googleIcon from "../../../images/images/icons/google.png"
import * as firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from '../firebase.config'
import { UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';
import brandLogo from "../../../images/images/logos/logo.png"
import "./Login.css"

const Login = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const loginFirst = sessionStorage.getItem("loginFirst");
    const history = useHistory();
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    };
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                const { displayName, email } = result.user;
                const isSignedInUser = {
                    name: displayName,
                    email: email,
                }
                sessionStorage.setItem("userInfo", JSON.stringify(isSignedInUser));
                setLoggedInUser(isSignedInUser.email)
                storeAuthToken();
                fetch(`http://localhost:4000/checkAdminEmailOrNot?email=${isSignedInUser.email}`)
                    .then((res) => res.json())
                    .then((data) => {
                        sessionStorage.setItem("isAdmin", data.admin);
                        const admin = sessionStorage.getItem("isAdmin");
                        console.log(admin)
                        if (loginFirst === "true") {
                            history.goBack();
                        }
                        else if (admin === "true" || data.admin) {
                            history.push("/allServiceLists");
                        } else {
                            history.push("/order");
                        }
                    });

            }).catch(error => {

            });
    };

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefreh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken)
            }).catch(function (error) {
                console.log(error)
            });
    };



    return (
        <div className="main_container ">
            <div>
                <a className="navbar-brand mb-5 brand_logo" href="/"><img src={brandLogo} alt="" width="170px" /></a>
                <div className="login_container col-lg-12 col-md-12 col-sm-12">
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