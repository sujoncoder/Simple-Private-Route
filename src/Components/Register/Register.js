import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="register">
            <h2>Please Register</h2>
            <form>
                <input type="email" />
                <br />
                <input type="password" />
                <br />
               <input type="submit" value="submit" />
            </form>
            <Link to="/login">Already Registerd?</Link>
        </div>
    );
};

export default Register;