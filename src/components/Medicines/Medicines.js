import React from 'react';
import './Medicines.css'

const Medicines = (props) => {
    const { name, price, rating, img } = props.medicine;
    return (
        <div>
            <div className="col">
                <div className="card card-design-2 h-100">
                    <img src={img} className="card-img-top p-5" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">Rating: <i class="fas fa-star text-warning"></i> {rating}</p>
                        <p className="card-text">Price: $ {price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Medicines;