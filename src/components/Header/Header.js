import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import logo from '../../images/logo/header_logo.png'
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home"> <img src={logo} alt="" /> Medicenter</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home"><span>Home</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ourExperts"><span>Experts</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pharmecy"><span>Pharmacy</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/departments"><span>Departments</span></Link>
                            </li>
                        </ul>

                        <br />

                        <ul className='access-btn'>
                            {user?.email ? <li>
                                <span> <img style={{ width: '38px', borderRadius: '100%', boxShadow: '1px 1px 6px lightsteelblue' }} src={user?.photoURL} alt="" /> <strong style={{ color: '#42B3E5' }}>{user?.displayName}</strong> &nbsp;</span>
                                {user?.email && <button onClick={logout} className="btn btn-design">Logout</button>}</li> :
                                <li> <Link to='/login'><button className="btn btn-design" type="submit">Login</button></Link></li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;