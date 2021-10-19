import React, { useEffect, useState } from 'react';
import Medicines from '../Medicines/Medicines';
import './Pharmecy.css'
import brand1 from '../../images/pharmacy/image 29.png'
import brand2 from '../../images/pharmacy/image 30.png'

const Pharmecy = () => {
    const [medicines, setMedicines] = useState([]);
    useEffect(() => {
        fetch('/pharmacy.json')
            .then(res => res.json())
            .then(data => setMedicines(data))

    }, [])

    return (
        <div>
            <section className='mt-5 pharmacy-banner1'>
                <div className='row g-5'>
                    <div className="col-md-6 col-12">

                    </div>
                    <div className="col-md-6 col-12">

                        <div className='mt-5 mx-5 d-none d-lg-block'>

                            <p className='discount-title'>Your Trusted</p>
                            <h1 className='pharmacy-title'>Medicenter Kit</h1>
                            <p className='sub-title'>Limitless possiblities medicines are available here.</p>

                        </div>

                    </div>
                </div>
            </section>

            <div className='container'>
                <h1 className='text-center my-4' style={{ color: '#242424' }}>Product By Medicenter</h1>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        medicines.map(medicine => <Medicines key={medicine.id} medicine={medicine}></Medicines>)
                    }
                </div>
            </div>


            <div>
                <div className="pharmacy-banner2 mt-5">
                    <div className="row">
                        <div className="col-md-6 col-12">

                        </div>
                        <div className="col-md-6 col-12 mt-5 d-none d-lg-block">
                            <p className='discount-title'>Get 10% Discount on every Medicine</p>
                            <h1 className='pharmacy-title'>Big Discount</h1>
                            <p className='sub-title'>You can get 10% discount for  buying any medicine. Limitless possiblities medicines are available here.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-5'>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <img className='img-fluid' src={brand1} alt="" />
                    </div>
                    <div className="col-md-6 col-12">
                        <img className='img-fluid' src={brand2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pharmecy;