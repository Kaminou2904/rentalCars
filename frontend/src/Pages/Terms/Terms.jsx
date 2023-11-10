import React from 'react';
import './Terms.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

function Terms() {
    return (
        <div className='mainTerms'>
            <Helmet>
                <title>Terms And Conditions | Caronrent</title>
            </Helmet>
            <div className="termsHeader container-fluid bg-light p-3">
                <div className="d-flex align-items-center">
                    <Link to='/' className="backBtnTerms d-block pe-3">
                        <i className="fas fa-chevron-left"></i>
                    </Link>
                    <h1 className="fs-5 outfit-semibold mb-0">Terms & <span className="brand-color outfit-semibold">Conditions</span></h1>
                </div>
            </div>
            <div className="container mt-3">
                <h1 className="fs-3 outfit-bold">Our Terms & <span className="outfit-bold brand-color">Conditions</span></h1>

                <div className="termsNconditions my-4">
                    <div className="row align-items-center mb-3">
                        <div className="term-one col-md-6">
                            <h2 className="outfit-bold fs-5">Acceptance of Terms</h2>
                            <p className="mb-0 outfit-medium">By accessing or using the <Link to='/' className='nav-link d-inline brand-color outfit-medium'>Caronrent</Link> website, you agree to comply with and be bound by these terms and conditions. If you do not agree with any part of these terms, you may not use our services.</p>
                        </div>
                        <div className="col-md-6 p-5">
                            <img src="./images/ok.svg" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row align-items-center flex-wrap-reverse mb-3">
                        <div className="col-md-6">
                            <img src="./images/responsibility.svg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="outfit-bold fs-5">User Responsibilities</h2>
                            <ol>
                                <li className="outfit-medium">You are responsible for maintaining the confidentiality of your account and password.</li>
                                <li className="outfit-medium">You agree to provide accurate and up-to-date information when using our services.</li>
                                <li className="outfit-medium">Unauthorized use of the Website is prohibited.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row align-items-center mb-3">
                        <div className="col-md-6">
                            <h2 className="outfit-bold fs-5">Booking and Rental</h2>
                            <ol>
                                <li className="outfit-medium">All bookings are subject to availability.</li>
                                <li className="outfit-medium">Rental terms and conditions apply. Users must adhere to the specified rental period, return the vehicle in the condition it was received, and comply with all relevant laws.</li>
                            </ol>
                        </div>
                        <div className="col-md-6">
                            <img src="./images/booking.svg" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row align-items-center flex-wrap-reverse mb-3">
                        <div className="col-md-6">
                            <img src="./images/privacy.svg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="outfit-bold fs-5">Privacy Policy</h2>
                            <ol>
                                <li className="outfit-medium">We respect your privacy. Our Privacy Policy outlines how we collect, use, and safeguard your personal information.</li>
                                <li className="outfit-medium">By using our services, you consent to the terms of our Privacy Policy.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row align-items-center mb-3">
                        <div className="col-md-6">
                            <h2 className="outfit-bold fs-5">Intellectual Property Rights</h2>
                            <ol>
                                <li className="outfit-medium">All content on the Website is the intellectual property of CarOnRent.</li>
                                <li className="outfit-medium">Users may not reproduce, distribute, or create derivative works without our express consent.</li>
                            </ol>
                        </div>
                        <div className="col-md-6">
                            <img src="./images/rights.svg" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row align-items-center flex-wrap-reverse mb-3">
                        <div className="col-md-6">
                            <img src="./images/userconduct.svg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="outfit-bold fs-5">User Conduct</h2>
                            <ol>
                                <li className="outfit-medium">Users agree to use our services for lawful purposes only.</li>
                                <li className="outfit-medium">Any form of harassment, abuse, or violation of our community guidelines is strictly prohibited.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row align-items-center mb-3">
                        <div className="col-md-6">
                            <h2 className="outfit-bold fs-5">Data Protection</h2>
                            <ol>
                                <li className="outfit-medium">We take measures to protect user data. Our Data Protection Policy explains how we handle and secure your information.</li>
                                <li className="outfit-medium">Users are encouraged to review our Data Protection Policy to understand how their data is managed.</li>
                            </ol>
                        </div>
                        <div className="col-md-6">
                            <img src="./images/dataprotection.svg" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row align-items-center flex-wrap-reverse mb-3">
                        <div className="col-md-6">
                            <img src="./images/limitation.svg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="outfit-bold fs-5">Limitation of Liability</h2>
                            <ol>
                                <li className="outfit-medium"><Link to="/" className='nav-link brand-color d-inline outfit-medium'>Caronrent</Link> is not liable for any direct, indirect, incidental, or consequential damages resulting from the use of our services.</li>
                                <li className="outfit-medium">We do not guarantee the availability, accuracy, or reliability of the Website.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row align-items-center mb-3">
                        <div className="col-md-6">
                            <h2 className="outfit-bold fs-5">Dispute Resolution</h2>
                                <p className="outfit-medium mb-0">Any disputes arising from the use of our services shall be resolved through arbitration in accordance with the laws of the jurisdiction governing these terms.</p>
                        </div>
                        <div className="col-md-6">
                            <img src="./images/dispute.svg" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row align-items-center flex-wrap-reverse mb-3">
                        <div className="col-md-6">
                            <img src="./images/update.svg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="outfit-bold fs-5">Updates to Terms and Conditions</h2>
                            <ol>
                                <li className="outfit-medium mb-0">We reserve the right to update these terms and conditions.</li>
                                <li className="outfit-medium mb-0">Users will be notified of changes, and continued use of our services constitutes acceptance of the modified terms.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <Footer disp='flex' />
        </div>
    )
}

export default Terms