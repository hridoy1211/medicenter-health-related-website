import React from 'react';
import { Link } from 'react-router-dom';
import './Expert.css'

const Expert = (props) => {
    const { name, designation, img, id } = props.expert
    return (
        <div>
            <div className="col">
                <div className="card card-design h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{designation}</p>

                        <div className='button-style'>
                            <Link to={`/details/${id}`}>
                                <div className="d-grid gap-2 ">
                                    <button className="btn btn-design" type="button">Visit Profile</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expert;