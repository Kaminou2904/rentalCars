import React from 'react';
import './Happycard.css';

function Happycard() {
    return (
        <div className="happyCard p-2 border border-light bg-white br1 me-2">
            <div className="customerName mb-0 ">
                <p className="customerNameP ebrima-bold m-0 px-0">Vikas Kanoo</p>
            </div>
            <div className="customerReview mt-1">
                <p className="review text-muted ebrima-regular mb-0 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ad quod eveniet quisquam neque corrupti quo cupiditate distinctio sunt aut.</p>
            </div>
        </div>
    )
}

export default Happycard;