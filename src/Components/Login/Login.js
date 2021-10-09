import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';


const Login = () => {
    const { googleSignIn ,githubSignIn} = useAuth();
    return (
        <div className="login">
            <h2>Please login</h2>
            <button onClick={googleSignIn}>Google</button>
            <br />
            <button onClick={githubSignIn}>GitHub</button>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;