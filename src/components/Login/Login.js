import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from '../../images/login/login.jpg'
import './Login.css'

const Login = () => {
    const { signInUsingGoogle, handleRegistration, handleEmailChange, handlePasswordChange, error, toggle, isLogin } = useAuth();
    const history = useHistory();

    const location = useLocation();

    const redirect_url = location.state?.from || '/home';

    const googleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }

    return (
        <div>
            <div>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-6 col-lg-6 col-12 d-flex align-items-center'>
                            <div className='login-form'>
                                <h2>Please {isLogin ? 'Login' : 'Register'}</h2>
                                <br />
                                <form onSubmit={handleRegistration}>

                                    <input onBlur={handleEmailChange} className='input-field' type="email" placeholder='Email here' required />
                                    <br />

                                    <input onBlur={handlePasswordChange} className='input-field' type="password" placeholder='Password here' required />
                                    <br />

                                    <div className="d-grid gap-2 ">
                                        <input className='btn btn-design' type="submit" value={isLogin ? "Login" : "Registered"} />
                                    </div>

                                    {/* toggle */}
                                    <div className="form-check mt-4">
                                        <input onChange={toggle} className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            Already Registered?
                                        </label>
                                    </div>
                                    {/* toggle */}


                                </form>
                                <p className='text-danger'>{error}</p>
                                <br />Or

                                <div className="d-grid gap-2 ">
                                    <button onClick={googleLogin} className='btn btn-design2'>Google Sign in </button>
                                </div>
                                <br />

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