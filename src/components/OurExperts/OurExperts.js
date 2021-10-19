import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const OurExperts = () => {
    const [experts, setExperts] = useState([])
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div className='container' style={{ marginTop: '70px' }}>
            <h1 className='my-5 text-center' style={{ color: '#242424' }}>Our Experts</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>

        </div>
    );
};

export default OurExperts;