import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from '../../images/login/login.jpg'
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth()

    return (
        <div>
            <div>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-6 col-lg-6 col-12 d-flex align-items-center'>
                            <div className='login-form'>
                                <h2>Please Login</h2>
                                <br />
                                <form action="">
                                    <input className='input-field' type="email" placeholder='Email here' />
                                    <br />
                                    <input className='input-field' type="password" placeholder='Password here' />
                                    <br />
                                    <div className="d-grid gap-2 ">
                                        <input className='btn btn-design' type="submit" value='Login' />
                                    </div>
                                    <br />
                                </form>
                                <br />Or<br />
                                <div className="d-grid gap-2 ">
                                    <button onClick={signInUsingGoogle} className='btn btn-design2'>Google Sign in </button>
                                </div>
                                <br />
                                <div className='d-flex'>
                                    <p>are you new?</p> &nbsp;<Link to='/'>Please Register</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12">
                            <img width='100%' src={login} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;