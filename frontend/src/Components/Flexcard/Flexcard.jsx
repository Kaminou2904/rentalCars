import React from 'react';
import './Flexcard.css';

function Flexcard() {
    return (
        <div className="whyCard d-flex justify-content-between align-items-center bg-white py-3 px-2 br1 me-2">
            <div className="whyIcon">
                <i className="fas fa-gas-pump fs-1 text-primary me-2 mb-0"></i>
            </div>
            <div className="whyTxt">
                <p className="whyTitle mb-0 fs-5 text-primary urbanist-bold">Flexible pricing plans</p>
                <p className="whyDesc mb-0 text-muted">Unlimited Kms or with fuel plans</p>
            </div>
        </div>
    )
}

export default Flexcard