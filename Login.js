import React from 'react'
import"./Login.css"
import {Link,useHistory} from "react-router-dom";

import {useState} from 'react'
import {auth} from "./firebase"

function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();

        //firebase 
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth =>{
                history.push('/')
            })
            .catch(error => alert(error.message))

    }

    const register = e =>{
        e.preventDefault();
        //firebase register
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-amazon_logo.svg.png"/>
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e =>setPassword(e.target.value)}/>

                    <button className="login__signInButton" type="submit" onClick={signIn}>Sign-In</button>

                    <p>
                        By Signing in you agree to Amazon's(clone) Conditions of Use & Sale.Please see our Privacy Notice,or Cookies Notice and our Interest-Based Ads
                    </p>
                    <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
                </form>
            </div>

        </div>
    )
}
export default Login
