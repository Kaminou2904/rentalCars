import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <div id='contact' className='mainFooter bg-white'>
        <div className="footerDiv">
            <div className="footerWrap pt-5">
            <div className="footerLogo container">
                <img src="./images/CARONRENT LOGO.png" alt="" className="img-fluid"/>
            </div>
            <div className="quickLinks justify-content-center align-items-center pt-4" style={{display: props.disp}}>
                <Link to="/" className="footerLink nav-link brandP outfit-black border-end px-2">Home</Link>
                <Link to="/terms-and-conditions" className="footerLink nav-link brandP outfit-black border-end px-2">Terms & Conditions</Link>
                <Link to="/privacy-policy" className="footerLink nav-link brandP outfit-black border-end px-2">Privacy Policy</Link>
                <Link to="https://wa.me/+918928060714" className="footerLink nav-link brandP outfit-black px-2">Contact Us</Link>
            </div>
            <p className="mb-0 mt-3 text-muted jakarta-extrabold text-center">&copy; 2023 Caronrent.co</p>
            <div className="footerInfo container p-0 d-flex justify-content-center flex-wrap mt-4">
                <div className="footerCard text-center  p-2">
                    <p className="cardHead mb-0 outfit-black"><a href="tel:+918928060714" className="nav-link"><i className="fas fa-phone-alt fs-1 mb-1 brand-color"></i></a></p>
                    <p className="mb-0 footerCardP"><a href="tel:+918928060714" className="nav-link brandP outfit-black text-nowrap">+91 89280 60714</a></p>
                </div>
                <div className="footerCard text-center  p-2">
                    <p className="cardHead mb-0 outfit-black"><span className="nav-link"><i className="fas fa-map-marker-alt fs-1 mb-1 brand-color"></i></span></p>
                    <p className="mb-0 footerCardP"><span className='nav-link outfit-black'>Jarimari, Kurla-Andheri Road, Mumbai 400072.</span></p>
                </div>
                <div className="footerCard text-center  p-2">
                    <p className="cardHead mb-0 outfit-black"><a href="mailto:caronrent.co@gmail.com" className="nav-link"><i className="fas fa-envelope fs-1 mb-1 brand-color"></i></a></p>
                    <p className="mb-0 footerCardP"><a href="mailto:caronrent.co@gmail.com" className="nav-link brandP outfit-black text-nowrap">caronrent.co@gmail.com</a></p>
                </div>
                <div className="footerAbout container">
                    <p className="footerAboutP text-muted text-center px-3 outfit-black pt-4">We're just a call or click away to help you hit the road smoothly.</p>
                </div>
            </div>
            </div>
        </div> 
    </div>
  )
}

export default Footer