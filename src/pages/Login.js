import {Link , useNavigate} from "react-router-dom";
import { useRef } from "react";

// import { useSiteContext } from "../store/SiteProvider";
import {myAuth} from "../store/firebase";

import classes from "./Login.module.css";

const Login = () => {

    // const dispatch = useSiteContext()[1];
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();

    const signInHandler = (event) => {

        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        myAuth.signInWithEmailAndPassword(myAuth.auth,email,password)
            .then((auth) => {
                console.log(auth);
                navigate("/");
            })
            .catch((err) => {
                return alert(err.message)
            });

    }

    const registerHandler = (event) => {

        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        myAuth.createUserWithEmailAndPassword(myAuth.auth,email,password)
            .then((auth) => {
                console.log(auth);
                navigate("/");
            })
            .catch((err) => {
                return alert(err.message)
            });

    }

    return (
        <div className = {classes.body}>
            <Link to = "/" className = {classes.logo}>
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="😅" />
                <span>.in</span>
            </Link>
            <div className = {classes.card}>
                <h1 className = {classes.h1}>Sign-In</h1>
                <form>
                    <label className = {classes.label} htmlFor="email">Email</label>
                    <input ref={emailRef} className= {classes.input} type="email" name="email" id="email" />

                    <label className = {classes.label} htmlFor="password">Password</label>
                    <input ref = {passwordRef} className= {classes.input} type="password" name="password" id="password" />

                    <button className = {classes.button} onClick = {signInHandler}>Sign-In</button>

                    <p className = {classes.login_info}>By continuing, you agree to <span>Amazon's Conditions of Use</span> and <span>Privacy Notice.</span></p>

                </form>
                
            </div>
            <div className = {classes.newUser}>
                <div>
                    <p>New to Amazon ?</p>
                </div>
                <button onClick = {registerHandler}>Create Your Amazon account</button>
            </div>
        </div>
    );
}

export default Login;