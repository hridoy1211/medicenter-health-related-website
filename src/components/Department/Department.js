import React from 'react';
import './Department.css'
import chemist from '../../images/operations/chemist.jpg'
import dental from '../../images/operations/denatl.jpg'
import dermatology from '../../images/operations/dermatology.jpg'
import ophthalmology from '../../images/operations/ophthalmological.jpg'
import p2 from '../../images/operations/p2.jpg'
import p3 from '../../images/operations/p3.jpg'
import p4 from '../../images/operations/p4.jpg'
import p5 from '../../images/operations/p5.jpg'
import p6 from '../../images/operations/p6.jpg'
import p7 from '../../images/operations/p7.jpg'
import p8 from '../../images/operations/p8.jpg'
import p9 from '../../images/operations/p9.jpg'


import './Department.css'


const Department = () => {
    return (
        <div style={{ marginTop: '100px' }}>
            <section className='container'>
                <h4 className='mt-5 mb-4 text-center'>Departments</h4>

                <div className="row g-4 d-flex justify-content-center align-items-center">
                    <div className="col-md-6 col-12 side-img">
                        <img className='img-fluid' src={chemist} alt="" />
                    </div>
                    <div className="col-md-6 col-12 side-text">
                        <div className='row'>
                            <div className="col-12">
                                <div className="row p-4">
                                    <div className="col-6">
                                        <img className='img-fluid frame' style={{ width: '150px', borderRadius: '100%' }} src={p2} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <img className='img-fluid frame' style={{ width: '150px', borderRadius: '100%' }} src={p3} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <h5 className='mt-4'>Pharmacy</h5>
                                <p>A pharmacist, also known as a chemist.The most common pharmacist positions are that of a community pharmacist (also referred to as a retail pharmacist, first-line pharmacist or dispensing chemist), or a hospital pharmacist, where they instruct and counsel on the proper use and adverse effects of medically prescribed drugs and medicines</p>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <br />

                <div className="row g-4 d-flex justify-content-center align-items-center">
                    <div className="col-md-6 col-12 side-text">
                        <div className='row'>
                            <div className="col-12">
                                <div className="row p-4">
                                    <div className="col-6">
                                        <img className='img-fluid frame' style={{ width: '150px', borderRadius: '100%' }} src={p4} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <img className='img-fluid frame' style={{ width: '150px', borderRadius: '100%' }} src={p5} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <h5 className='mt-4'>Dental</h5>
                                <p>Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral cavity (the mouth), commonly in the dentition (development and arrangement of teeth) as well as the oral mucosa, and of adjacent and related structures and tissues, particularly in associated maxillofacial (jaw and facial) area.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 side-img">
                        <img className='img-fluid' src={dental} alt="" />
                    </div>
                </div>

                <br />
                <br />
                <br />

                <div className="row g-4 d-flex justify-content-center align-items-center">
                    <div className="col-md-6 col-12 side-img">
                        <img className='img-fluid' src={dermatology} alt="" />
                    </div>
                    <div className="col-md-6 col-12 side-text">
                        <div className='row'>
                            <div className="col-12">
                                <div className="row p-4">
                                    <div className="col-6">
                                        <img className='img-fluid frame' style={{ width: '150px', borderRadius: '100%' }} src={p6} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <img className='img-fluid frame' style={{ width: '150px', borderRadius: '100%' }} src={p7} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <h5 className='mt-4'>Dermatology</h5>
                                <p>Dermatology is the branch of medicine dealing with the skin. It is a speciality with both medical and surgical aspects. A dermatologist is a specialist medical doctor who manages diseases related to skin, hair, nails, and some cosmetic problems.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <br />

                <div className="row g-4 d-flex justify-content-center align-items-center">
                    <div className="col-md-6 col-12 side-text">
                        <div className='row'>
                            <div className="col-12">
                                <div className="row p-4">
                                    <div className="col-6">
                                        <img className='img-fluid frame' style={{ width: '150px', borderRadius: '100%' }} src={p8} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <img className='img-fluid frame' style={{ width: '150px', borderRadius: '100%' }} src={p9} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <h5 className='mt-4'>Ophthalmology</h5>
                                <p>Ophthalmologists diagnose and treat injuries, infections, diseases, and disorders of the eye. Specialises in eye and vision care Treatments can include medication taken orally (by mouth) or topically (in the eye), surgery, cryotherapy (freeze treatment), and chemotherapy (chemical treatment).</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 side-img">
                        <img className='img-fluid' src={ophthalmology} alt="" />
                    </div>
                </div>

            </section>

        </div>
    );
};

export default Department;