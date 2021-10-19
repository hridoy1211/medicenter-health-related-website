import React from 'react';
import './Footer.css';
import logo from '../../images/logo/header_logo.png'
import brand from '../../images/logo/brand.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-color'>
            <div className='container '>
                <div className='row g-3 mt-5 p-5'>
                    <div className='col-md-4'>
                        <div>
                            <Link className="navbar-brand" to="/home"> <img src={logo} alt="" /> <span style={{ textDecoration: 'none', color: '#42B3E5' }}> Medicenter </span></Link>
                        </div>
                        <br />
                        <div className='icon'>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-facebook-square"></i></a>
                        </div>
                        <div className='mt-5'>
                            <small>© All rights reserved.</small>
                            <br />
                            <img src={brand} alt="" />
                        </div>
                    </div>
                    <div className='col-md-3 footer-option'>
                        <p className='text-secondary' ><a href="/home">Home</a></p>
                        <p className='text-secondary' ><a href="/ourExperts">Experts</a></p>
                        <p className='text-secondary' ><a href="/pharmecy">Pharmacy</a></p>
                        <p className='text-secondary' ><a href="/departments">Departments</a></p>
                    </div>
                    <div className='col-md-5'>
                        <h3 className='text-secondary'>Sign up for the newsletter</h3>
                        <input type="text" />
                        <h3 className='mt-3'><i className="fas fa-phone-volume"></i> <small className='text-secondary'>+1 2 983 433 73 10</small></h3>
                        <h3>
                            <div>
                                <i className="fas fa-thumbtack"></i> &nbsp;
                                <small style={{ fontWeight: '100', fontSize: '15px' }}>36 Chicago, New York, NY 10038,
                                    102 1st Avenue, New York</small>
                            </div>
                        </h3>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;