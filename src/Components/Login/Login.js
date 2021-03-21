import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser)
            history.replace(from)

        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }

    const handleBlur = (e) => {
        let isFormValid = true
        if (e.target.name === "email") {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value)

        }

        if (e.target.name === "password") {
            const isPasswordValid = e.target.value.length > 6;
            const passwordNum = /\d{1}/.test(e.target.value)
            isFormValid = (isPasswordValid && passwordNum);
        }
        if (isFormValid) {
            const newUserInfo = { ...loggedInUser }
            newUserInfo[e.target.name] = [e.target.value]
            setLoggedInUser(newUserInfo)
        }
    }
    const handleSubmit = (e) => {
        
        if (loggedInUser.email && loggedInUser.password) {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        }
        e.preventDefault()
    }

    return (
        <div style={{ textAlign: "center" }}>

            <button style={{ borderRadius: "10px" }} className="btn-warning" onClick={handleGoogleSignIn}>Google Sign In</button>

            <br />
            <br />
            <form onsubmit={handleSubmit}>

                <input name="name" style={{ borderRadius: "5px", margin: "10px" }} onBlur={handleBlur} type="text" placeholder="name" />
                <br />
                <input name="email" style={{ borderRadius: "10px", margin: "10px" }} onBlur={handleBlur} type="text" placeholder="email" required />
                <br />
                <input style={{ borderRadius: "10px", margin: "10px" }} onBlur={handleBlur} type="password" name="password" placeholder="password" required />
                <br />
                <input style={{ borderRadius: "10px", margin: "10px" }} onClick={handleSubmit} type="submit" value="submit" />

            </form>
        </div>
    );
};

export default Login;

