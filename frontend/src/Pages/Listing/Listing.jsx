import React from 'react';
import './Listing.css';
import Listingcard from '../../Components/Listingcard/Listingcard';
import Data from '../../Data/Cars.json'
import { useNavigate, useParams } from 'react-router-dom';

function Listing() {

    const { category } = useParams();
    const navigate = useNavigate();
    const formData = JSON.parse(localStorage.getItem('form'));

    const categoryCars = Data[category];

  return (
    <div className='listingMain'>
        <div className="listingHeadWrap p-3 py-3 shadow-sm d-flex align-items-center w-100 position-fixed top-0 bg-white">
            <div className="mainLeft">
                <i className="fas fa-arrow-left me-3 mb-0" onClick={()=> navigate(-1)}></i>    
            </div>
            <div className="mainRight">
                <p className="mb-0 listingHead urbanist-bold text-capitalize">{category} Cars</p>
                <p className="headDate mb-0 text-muted">{formData.start} <span className="text-primary">{`->`}</span> {formData.end}</p>
            </div>
        </div>
        <div className="mainWrap container pt-5 mt-4">
        {
            categoryCars.map((car)=>(
                <Listingcard category={car.category} key={car.id} img={car.img} name={car.name} rating={car.rating} trips={car.trips} features={car.features} price={car.price}/>
            ))
        }
        </div>
    </div>
  );
};

export default Listing;