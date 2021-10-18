import React from 'react';
import banner1 from '../../images/caro-banner/banner-1.jpg';
import banner2 from '../../images/caro-banner/banner-2.jpg';
import banner3 from '../../images/caro-banner/banner-3.jpg';

import sideImg1 from '../../images/side-img/side-img-1.jpg'
import sideImg2 from '../../images/side-img/side-img-2.jpg'

import './Home.css'

const Home = () => {
    return (
        <div>
            <section>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">

                            <img src={banner1} className="d-block w-100" alt="..." />

                            <div className="carousel-caption d-none d-md-block">
                                <h5 className=' title' style={{ animationDelay: '1s' }}><span className='lighter'>Modern Alegant</span> <br />
                                    Medicenter</h5>
                                <p className='sub-title'> For Health Care Professionals and Institution</p>
                            </div>
                        </div>
                        <div className="carousel-item">

                            <img src={banner2} className="d-block w-100" alt="..." />

                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='title'>The #1 Selling <span className='lighter'> <br /> Medical Shop </span>
                                </h5>
                                <p className='sub-title'> Limitless possiblities medicines here</p>
                            </div>
                        </div>
                        <div className="carousel-item">

                            <img src={banner3} className="d-block w-100" alt="..." />

                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='title'>Show Your <span className='lighter'>Schedule <br /> With </span>
                                    Timetable</h5>
                                <p className='sub-title'> Organize and visualize your week with buil-in timetable</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>


            <section className=' container my-5'>
                <div className="row">
                    <div className="col-md-5 col-12">
                        <h1><span className='fw-lighter'> We Value Your Family's Health and Your Time </span></h1>
                    </div>
                    <div className="col-md-7 col-12">
                        <p>Welcome to Medicenter a full-service diagnostic center and medical care clinic located on the north side of Chicago in the historic neighborhood. We provide fast effective and affordable treatment for non-life threatening illnesses and injuries that need attention right away by certified specialists.</p>
                    </div>
                </div>
            </section>

            <section className='container'>
                <h4 className='mt-5 mb-4 text-center'>Special Services</h4>
                <div className="row g-4 d-flex justify-content-center align-items-center">
                    <div className="col-md-6 col-12 side-img">
                        <img className='img-fluid' src={sideImg1} alt="" />
                    </div>
                    <div className="col-md-6 col-12 side-text">
                        <div>
                            <p>Family Birth Center</p>
                            <div>
                                <br />
                                <h3>Leading Edge Care for Mom and Baby</h3>
                                <p>The Family Birth Center at Medicenter is a unique, full-service facility offering moms-to-be leading edge care in a comfortable, nurturing setting. We offer care through delivery and post-natal treatment to ensure you a happy and the best possible birthing experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />

            <section className='container'>
                <div className="row g-4 d-flex justify-content-center align-items-center">

                    <div className="col-md-6 col-12">
                        <p>Learn why is it worth it</p>
                        <div>
                            <br />
                            <h3>Medicenter Immediate Care Facilities Provide Quick Care and Relief</h3>
                            <p>No appointment needed, most patients are seen, treated and released in about 60 minutes. Certified and experienced MD physicians not nurses and on site diagnostic tests with lab.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-12">
                        <img className='img-fluid' src={sideImg2} alt="" />
                    </div>
                </div>
            </section>

            <br />
            <section className='mt-5'>
                <div>
                    <div className="fixedImg">
                        <div className="overlay">
                            <div className='d-flex align-items-center'>
                                <h1 className='mx-5 text-white margin-text'>"I actually felt as if I was staying at a hotel of good reputation. Everyone was extremely friendly amd professional. This was the cleanest medical establishment I've ever been in."</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;