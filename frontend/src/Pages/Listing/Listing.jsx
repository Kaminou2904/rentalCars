import React from 'react';
import './Listing.css';
import Data from '../../Data/Cars.json'
import { useNavigate, useParams } from 'react-router-dom';
import Basiccard from '../../Components/Basiccard/Basiccard';
import Footer from '../../Components/Footer/Footer';

function Listing() {

    const { category } = useParams();
    const navigate = useNavigate();
    // const formData = JSON.parse(localStorage.getItem('form'));

    const categoryCars = Data[category];

  return (
    <div className='listingMain'>
        <div className="listingHeadWrap p-3 py-3 shadow-sm d-flex align-items-center w-100 position-fixed top-0 bg-white">
            <div className="mainLeft">
                <i className="fas fa-arrow-left me-3 mb-0" onClick={()=> navigate(-1)}></i>    
            </div>
            <div className="mainRight">
                <p className="mb-0 listingHead outfit-bold text-capitalize">{category} Cars</p>
                {/* <p className="headDate mb-0 text-muted">{formData.start} <span className="brand-color">{`->`}</span> {formData.end}</p> */}
            </div>
        </div>
        <div className="mainWrap row p-2 container mx-auto pt-5 mt-4">
        {
            categoryCars.map((car)=>(
                <div className='col-sm-4 mb-3 p-0 px-2' key={car.id}>
                    <Basiccard category={car.category} img={car.mainimg} name={car.name} rating={car.rating} trips={car.trips} features={car.features} price={car.price}/>
                </div>
            ))
        }
        </div>
        <Footer disp='none'/>
    </div>
  );
};

export default Listing;